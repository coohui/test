var fun={
		waveCanva:function(canvas,options){//水波纹
			var canvas=document.querySelector(canvas);
			var defaults = {
				count: 30,
				velocity: 2,
				fps: 30,
				url: 'img/wave.png'
			};
			options = options || {};
			// 参数合并
			var params = {};
			for (var key in defaults) {
			  params[key] = options[key] || defaults[key];
			}
			// 创建存储粒子的数组
			var particles = [];
			// 渲染的粒子数目
			var particleCount = params.count;
			// 每个方向的最大速度
			var maxVelocity = params.velocity;
			// 每秒多少帧
			var targetFPS = params.fps;
			// canvas元素
			var eleCanvas = canvas;
			if (!eleCanvas) {
			   return this;
			}
			// 画布的尺寸
			var canvasWidth = eleCanvas.clientWidth;
			var canvasHeight = eleCanvas.clientHeight;
			eleCanvas.width = canvasWidth;
			eleCanvas.height = canvasHeight;
			// 创建图片对象
			var imageObj = new Image();
			// 一旦图像被下载，然后在所有的颗粒上设置图像
			imageObj.onload = function() {
				particles.forEach(function(particle) {
				    particle.setImage(imageObj);
				});
			};
			// 波纹图片地址
			imageObj.src = params.url;
			// 粒子实例方法
			function Particle(context) {
				// 设置初始位置
				this.x = 0;
				this.y = 0;
				// 纵横速度
				this.xVelocity = 0;
				this.yVelocity = 0;
				// 圆角大小
				this.radius = 2;
				// 存储上下文，绘制的时候需要
				this.context = context;
				// 绘制粒子的具体方法
				this.draw = function() {
				    // 如果图片，则绘制
					if(this.image){
					    this.context.globalAlpha = this.alpha;
					    // 波纹荡漾就看这里了
					    // 这是宽度，是动态的
					    var fillWidth = canvasWidth/2, fillHeight = fillWidth - fillWidth * (this.x/canvasWidth * this.y/canvasHeight);
                       /*					    
	                        规定要使用的图像、画布或视频。
							sx可选。开始剪切的 x 坐标位置。
							sy可选。开始剪切的 y 坐标位置。
							swidth	可选。被剪切图像的宽度。
							sheight	可选。被剪切图像的高度。
							x在画布上放置图像的 x 坐标位置。
							y在画布上放置图像的 y 坐标位置。
							width可选。要使用的图像的宽度。（伸展或缩小图像）
							height可选。要使用的图像的高度。（伸展或缩小图像）
						*/
					    this.context.drawImage(this.image, 0, 0, this.imageWidth, this.imageHeight, this.x, this.y, fillWidth, fillHeight); 
					}
			    };
				// 刷新粒子
				this.update = function() {
					// 改变粒子的
					this.x += this.xVelocity;
					this.y += this.yVelocity;
					// 如果到了右边缘
					if (this.x >= canvasWidth) {
						this.xVelocity = -this.xVelocity;
						this.x = canvasWidth;
					}else if (this.x <= 0) {// 检测是否到了左边缘
						this.xVelocity = -this.xVelocity;
						this.x = 0;
					}
					// 底边缘
					if (this.y >= canvasHeight) {
						this.yVelocity = -this.yVelocity;
						this.y = canvasHeight;
					}else if (this.y <= 0) {// 是否上边缘
						this.yVelocity = -this.yVelocity;
						this.y = 0;
					}
					// 越靠近边缘，透明度越低
					// 纵向透明度变化要比横向的明显
					this.alpha = (1 - Math.abs(canvasWidth*0.5 - this.x) / canvasWidth) * (0.7 - Math.abs(canvasHeight*0.5 - this.y) / canvasHeight);
				};

				// 设置粒子位置方法
				this.setPosition = function(x, y) {
					this.x = x;
					this.y = y;
				};

				// 设置速度方法
				this.setVelocity = function(x, y) {
					this.xVelocity = x;
					this.yVelocity = y;
				};

				this.setImage = function(image){
					this.imageWidth = image.width;
					this.imageHeight = image.height;
					this.image = image;
				}
			}
			// 生成一个min,max大小之间的随机数
			function generateRandom(min, max){
			  return Math.random() * (max - min) + min;
			}
			// canvas上下文
			var context;

			// 初始化常见
			function init() {
				var canvas = eleCanvas;
				if (canvas.getContext) {
					// 绘图都需要这条语句
					context = canvas.getContext('2d');
					// 创建粒子，并设置他们的位置什么的，当然都是随机的
					for(var i=0; i < particleCount; ++i){
						var particle = new Particle(context);
						// 随机位置
						particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight));
						// 设置随机速度
						particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));
						particles.push(particle);            
					}
				}
			}
			// 初始化
			init();
			// 绘制方法
			function draw() {
				// 清除绘制
				//context.fillStyle = "rgba(0, 0, 0, 0)";
				context.clearRect(0, 0, canvasWidth, canvasHeight);
				// 绘制所有粒子
				particles.forEach(function(particle) {
				    particle.draw();
				});
			}
			// 刷新
			function update() {
				particles.forEach(function(particle) {
				   particle.update();
				});
			}
			// 开始绘制
			if (context) {
				setInterval(function() {
				  // 绘制前先更新位置什么的
				  update();
				  // 绘制
				  draw();
				}, 1000 / targetFPS);
			} 
		},
		tabInit:function(id,config){//滚动动画
		    var defaultOption={time:3000,autoRun:true};
		    var settings= $.extend({},defaultOption,config);
			var timer=null;
			var iNow = 0;
			var bBtn = true;
			var runCont=$(id+' .runCont');
			var aLiUl=$(id+' .runCont li');
			var aLiOl=$(id+' .runNav li');
			var oneWidth=$(id+' .runCont li').eq(0).width();

			if(aLiUl.length<2){//只有一个则不执行
               return;
			}

			for(var i=1;i<aLiUl.length;i++){
				aLiUl.eq(i).css({'left':oneWidth + 'px'});
			}

			aLiOl.unbind('click').on('click',function(){//切换
				var index=$(this).attr('index');
				if(bBtn){
				    bBtn = false;
				    aLiOl.removeClass('on');
				    $(this).addClass('on');
					if(iNow < index){
						aLiUl.eq(index).css({'left':oneWidth});
						aLiUl.eq(iNow).stop().animate({'left':-oneWidth},1000);
					}else if(iNow > index){
						aLiUl.eq(index).css({'left':-oneWidth});
						aLiUl.eq(iNow).stop().animate({'left':oneWidth},1000);
					}
						
					aLiUl.eq(index).stop().animate({'left':0},1000,function(){
						bBtn = true;
					});
					iNow = index;
				}
			});
            /*鼠标移入停止滚动*/	
            runCont.unbind('mouseenter').on('mouseenter',function(){
            	clearInterval(timer);
            });
            /*鼠标移出开始滚动*/
            runCont.unbind('mouseleave').on('mouseleave',function(){
            	_autoRun();
            });

            /*鼠标移入切换按钮停止滚动*/	
            aLiOl.unbind('mouseenter').on('mouseenter',function(){
            	clearInterval(timer);
            });
            /*鼠标移出切换按钮开始滚动*/
            aLiOl.unbind('mouseleave').on('mouseleave',function(){
            	_autoRun();
            });

			/*自动滚*/	
		     function _autoRun(){
				clearInterval(timer);
				timer=setInterval(function(){
				    _Tab();
				},settings.time)
			}
			if(settings.autoRun){
                _autoRun();
			}
			/*向后滚*/
			function _Tab()
			{
				if(bBtn){
				   bBtn = false;
				   if(iNow<aLiUl.length-1){
						aLiUl.eq(iNow++).stop().animate({'left':-oneWidth},1000);
						aLiUl.eq(iNow).css({'left':oneWidth + 'px'});
						aLiUl.eq(iNow).stop().animate({'left':0},1000,function(){
							bBtn = true;
							if(settings.autoRun){
				                _autoRun();
							}
						});
					}else{
						aLiUl.eq(iNow).stop().animate({'left':-oneWidth},1000);
						iNow=0;
						aLiUl.eq(iNow).css({'left':oneWidth + 'px'});
						aLiUl.eq(iNow).stop().animate({'left':0},1000,function(){
							bBtn = true;
							if(settings.autoRun){
				                _autoRun();
							}
						}); 
					}
				    aLiOl.removeClass('on');
				    aLiOl.eq(iNow).addClass('on');
				}
			}
		},
		svgShape:function(id,config){//3D长方体
		    var defaultOption={
		    	svgId:'svg',
		    	className:'svg',
		    	svgbg:'img/map_bg.png',
		    	svgbgwidth:'1000px',
		    	svgbgheight:'700px',
		    	shape:[],
		    	update:false,
		    	width:'1000px',
		    	height:'700px',
		    	mapFill:false,
		    	mapStroke:'#37a8db',
		    	mapStrokewidth:'1px',	
		    	svgTranslate:[0,0],//整体位移
		    	svgScale:[1,1],//整体大小
		    	rectScale:[1,1],//长方体
        		tipsScale:[1,1],//提示
        		mapScale:[1,1],//地图
        		mapRotate:[0,0,0]//地图旋转
            };
		    var settings= $.extend({},defaultOption,config);
		    var svgWrap = document.getElementById(id);
            var shape=settings.shape;
            var svgScaleX=settings.svgScale[0];
            var svgScaleY=settings.svgScale[1];
            var translateX=settings.svgTranslate[0];
            var translateY=settings.svgTranslate[1];
            var basicPoint=20;//基点

            var oSvg=_createTag('svg',{
            	'width':settings.width,
            	'height':settings.height,
            	'id':settings.svgId,
            	'class':settings.className
            });
            svgWrap.appendChild(oSvg);

            var svgId = document.getElementById(settings.svgId);
	        var id  =_createTag('g',{//最外层组
	        	'class':'svgId',
            	'transform':'scale('+svgScaleX+','+svgScaleY+') '
            }); 

            for(var i=0,len=shape.length;i<len;i++){
                _createShape(shape[i]);
            }
		    function _createShape(shape){
		    	if(shape=='rect'){//创建长方形
		    		_create3dRect();
		    	}else if(shape=='map'){//创建地图
                    _createMap();
		    	}
		    }

		    function _createMap(){
	    		var data=settings.data.map;
	            var oImage =_createTag('image',{
	               'x':0,
	               'y':0,
	               'href':settings.svgbg,
	               'class':'mapbg',
	               'width':settings.svgbgwidth,
	               'height':settings.svgbgheight
	            });
	            id.appendChild(oImage); 
	    		for(var i=0,len=data.length;i<len;i++){
		    		var x=data[i].x||0;
		    		var y=data[i].y||0;
		    		var scale=data[i].scale||settings.mapScale;
		    		var rotate=data[i].rotate||settings.mapRotate;
		            var oG =_createTag('g',{
		            	'transform':'rotate('+rotate[0]+','+(x+rotate[1])+' '+(y+rotate[2])+') '+
		            	'translate('+x+' '+y+') '+
		            	'scale('+scale[0]+','+scale[1]+')'});   
	                var oMap =_createTag('path',{
	                   'stroke':settings.mapStroke,
	                   'stroke-width':settings.mapStrokewidth, 	
		               'fill':settings.mapFill||data[i].fill,
		               'class':data[i].code,
		               'data':data[i].name,
		               'd':data[i].path
		            });
		            oG.appendChild(oMap);
		            id.appendChild(oG);
		        }
		    }

		    function _create3dRect(){
                var point={
	               	sRectTLX:20,
	               	sRectTLY:14,
	               	sRectBLX:20,
	               	sRectBLY:14,
	               	sRectBRX:30,
	               	sRectBRY:4,
	               	sRectTRX:31,
	               	sRectTRY:5,
	               	fRectBLY:6,//B:下 L：左 Y：Y轴
	               	fRectBRX:20,
	               	fRectBRY:14,
	               	fRectTRY:14,
	               	tRectTLX:12,
	               	tRectTLY:-7,
	               	tRectBLX:30,
	               	tRectBLY:5,
	               	tRectBRX:20,
	               	tRectBRY:14
                };
                var data=settings.data.rect;
		    	var scale=settings.rectScale;
		    	var scaleTips=settings.tipsScale;
	    		var scaleX=scale[0]||1;
	    		var scaleY=scale[1]||1;
	    		var scaleTipsX=scaleTips[0]||1;
	    		var scaleTipsY=scaleTips[1]||1;
	    		var arrTips=[]; 
	    		for(var i=0,len=data.length;i<len;i++){
		    		var x=data[i].x||0;
		    		var y=data[i].y||0;
		    		if(data[i].height>=5){
		    			var height=data[i].height;
		    		}else if(data[i].height>=0&&data[i].height<10){
                        var height=10*0.5+4;
		    		}else{
                        continue;
		    		}
		            var oG =_createTag('g',{
		            	'class':'Rect',
		            	'target':'tips'+i,
		            	'name':data[i].name,
		            	'transform':'translate('+(x+point.sRectBRX*scaleX-basicPoint)+' '+(y-point.tRectBLY-point.fRectBRY-height*scaleY)+')'+
		            	' scale('+scaleX+','+scaleY+')'
		            });   
	                var oRect =_createTag('path',{
		               'd':'M'+(basicPoint+point.sRectTLX)+' '+(basicPoint+point.sRectTLY)+
		               ' L'+(basicPoint+point.sRectTLX)+' '+(basicPoint+height+point.sRectBLY)+
		               ' L'+(basicPoint+point.sRectBRX)+' '+(basicPoint+height+point.sRectBRY)+
		               ' L'+(basicPoint+point.sRectTRX)+' '+(basicPoint+point.sRectTRY)+' Z',
		               'class':'sRect','data':11});
		            var oRect1 =_createTag('path',{
		               'd':'M'+basicPoint+' '+basicPoint+' L'+basicPoint+' '+(basicPoint+height)+
		               ' L'+(basicPoint+point.fRectBRX)+' '+(basicPoint+height+point.fRectBRY)+
		               ' L'+(basicPoint+point.fRectBRX)+' '+(basicPoint+point.fRectTRY)+' Z',
		               'class':'fRect','data':11});
		            var oRect2 =_createTag('path',{
		               'd':'M'+basicPoint+' '+basicPoint+
		               ' L'+(basicPoint+point.tRectTLX)+' '+(basicPoint+point.tRectTLY)+
		               ' L'+(basicPoint+point.tRectBLX)+' '+(basicPoint+point.tRectBLY)+
		               ' L'+(basicPoint+point.tRectBRX)+' '+(basicPoint+point.tRectBRY)+' Z',
		               'class':'tRect','data':11});
		            oG.appendChild(oRect);
		            oG.appendChild(oRect1);
		            oG.appendChild(oRect2);
		            id.appendChild(oG);
		            /*创建提示*/
		            var twidth=210;
		            var theigth=122;
		            var tipsTranslateX=data[i].tipsTranslate&&data[i].tipsTranslate[0];
		            var tipsTranslateY=data[i].tipsTranslate&&data[i].tipsTranslate[1];
		            var tx=x-twidth/2+basicPoint+20+(tipsTranslateX||0);
		            var ty=y-height*scaleY-theigth-basicPoint+(tipsTranslateY||0);
		            var oGtips =_createTag('g',{
		            	'class':'tips tips'+i,
		            	'data':tx+','+ty,
		            	'height':data[i].height,
		            	'scale':scaleTipsX+','+scaleTipsY,
		            	'transform':'translate('+tx+' '+ty+')'+
		            	'scale('+scaleTipsX+','+scaleTipsY+')'
		            });   
		            var oText =_createTag('text',{
			               'x':basicPoint+14,
			               'y':basicPoint+26,
			               'class':'addTxt'
		               });

		            var oText2 =_createTag('text',{
		               'x':basicPoint+14,
		               'y':basicPoint+60,
		               'class':'tipsItem'});

		            var oText3 =_createTag('text',{
		               'x':basicPoint+14,
		               'y':basicPoint+88,
		               'class':'tipsItem'});

		            var oText4 =_createTag('text',{
		               'x':basicPoint+110,
		               'y':basicPoint+60,
		               'class':'tipsVal'});

		            var oText5 =_createTag('text',{
		               'x':basicPoint+62,
		               'y':basicPoint+88,
		               'class':'tipsVal'});

		            var oImage =_createTag('image',{
		               'x':basicPoint,
		               'y':basicPoint,
		               'href':'img/map_tips.png',
		               'width':twidth,'height':theigth,'class':'imgTips'});
		            oText.textContent = data[i].name;
		            oText2.textContent ='监控取水户：';
		            oText3.textContent ='水量：';
		            oText4.textContent = data[i].height+'户';
		            oText5.textContent = (data[i].sl||0)+'万m³';
		            oGtips.appendChild(oImage);
		            oGtips.appendChild(oText);
		            oGtips.appendChild(oText2);
		            oGtips.appendChild(oText3);
		            oGtips.appendChild(oText4);
		            oGtips.appendChild(oText5);
		            arrTips.push(oGtips);
	    		}
                //一次性增加提示信息
	    		for(var i=0,len=arrTips.length;i<len;i++){
                    id.appendChild(arrTips[i]);
	    		}
		    }
            //把画好的所有图放进去
		    svgId.appendChild(id);
		    var btn={};
		    var tips='';

            $('.Rect').unbind('mouseenter').on('mouseenter',function(){
            	tips=$(this).attr('target');
            	btn.tips=true;
            	setTimeout(function(){
	            	if(btn.tips){
                       $('.'+tips).fadeIn();
	            	}
            	},500);
            });

            $('.Rect').unbind('mouseleave').on('mouseleave',function(){
            	var tips=$(this).attr('target');
            	$('.'+tips).fadeOut(); 
            	btn.tips=false;            	        	
            });

            function _animate(id){
            	var id=$('.'+id);
                var arr=id.attr('data').split(',');
                var height=Number(id.attr('height'))/2;
                var x=Number(arr[0]);
                var y=Number(arr[1]);
                var twidth=80;
                var theight=60;
                var scale=0;
                id.show();
                var timer=setInterval(function(){
                	if(scale<1||twidth>0||theight>0||height>0){
                        scale+=0.1;
                        twidth-=8;
                        theight-=6;
                        height-=height*0.2;
                        scale=scale>1?1:scale;
                        twidth=twidth<0?0:twidth;
                        theight=theight<0?0:theight;
                        height=height<0?0:height;
                        id.attr('transform','translate('+(x+twidth)+' '+(y+theight+height)+') scale('+scale+','+scale+')').css('opacity',scale);
                	}else{
                		onOff[id]=false;
                		id.attr('transform','translate('+x+' '+y+') scale(1,1)');
                		clearInterval(timer);
                	}
                },30);
            }

		    function _createTag(tag,objAttr){//创建图形标签
	           var svgNS = 'http://www.w3.org/2000/svg';
	           var oTag = document.createElementNS(svgNS,tag);  
	           for(var attr in objAttr){
	               oTag.setAttribute(attr,objAttr[attr]);
	           }  
	           return oTag;   
	        }
		},
		canvasDraw:function(id,settings){
		    drawBall(id,settings);
		    function drawBall(id,settings){
		        var canvas = document.getElementById(id);
		        var ctx = canvas.getContext('2d');
		        var width=settings.canvWidth||canvas.parentNode.offsetWidth;
		        var height=settings.canvHeight||canvas.parentNode.offsetHeight;
		        var W = canvas.width = width;
		        var H = canvas.height = height; 
		        var x=settings.x||(W/2);
		        var y=settings.y||(H/2);
		        var R=settings.R||(width/2);
		        var Range=[0,0.8];

		        if(settings.Range&&settings.Range.length>1){
		            Range=settings.Range;
		        };

		        Ball(ctx,{//最底层园
		           x:x,
		           y:y, 
		           Gradient:settings.Gradient,
		           fillStyle:settings.fillStyle,
		           R:R,
		           start:0,
		           end:2 * Math.PI
		        });
                
		        Ball(ctx,{//第二层百分比扇形
		           x:x,
		           y:y, 
		           fillStyle:'#fff',
		           R:R+2,
		           start:-(0.25+Range[0])*2*Math.PI,//-0.25是为了从正午12点方向开始
		           end:2*Math.PI*(1-0.25-Range[1])
		        });

		        Ball(ctx,{//第三层百分比扇形
		           x:x,
		           y:y, 
		           fillStyle:'rgba(215,230,236,1)',
		           R:R*54/62,
		           start:-(0.25+Range[0])*2*Math.PI,
		           end:2*Math.PI*(1-0.25-Range[1])
		        });

		        Ball(ctx,{//第四层百分比扇形
		           x:x,
		           y:y, 
		           fillStyle:'#fff',
		           R:R*44/62,
		           start:-(0.25+Range[0])*2*Math.PI,
		           end:2*Math.PI*(1-0.25-Range[1])
		        });

		        if(R>60){//大圆
                  var font="20px Microsoft YaHei";
                  var space=16;
		        }else if(R<=60&&R>50){//中圆
                  var font="16px Microsoft YaHei";
                  var space=15;
		        }else{//小圆
                  var font="15px Microsoft YaHei";
                  var space=14;
		        }

		        Ball(ctx,{//最上层白色小园
		           x:x,
		           y:y, 
		           fillStyle:'#fff',
		           R:R*30/62,
		           start:0,
		           end:2*Math.PI,
		           text:settings.text,
		           font:font,
		           space:space
		        });
		    }

		    function Ball(ctx,settings){
		        var start=settings.start||0;
		        var end=settings.end||2*Math.PI;
		        var x=settings.x;
		        var y=settings.y;
		        var R=settings.R;
		        if(settings.lineWidth){
		          x+=settings.lineWidth/2;
		          y+=settings.lineWidth/2;
		        }
		        ctx.save();
		        ctx.beginPath();
		        ctx.strokeStyle = settings.strokeStyle||'rgba(255,255,255,0)';
		        if(settings.Gradient&&settings.Gradient.length>0){//画渐变
		          var arrG=settings.Gradient;
		          var linear = ctx.createLinearGradient(x-(R/2),y-(R/2),x+(R/2),y+(R/2));
		          for(var i=0,len=arrG.length;i<len;i++){
		            linear.addColorStop(arrG[i].point,arrG[i].color);
		            linear.addColorStop(arrG[i].point,arrG[i].color);
		          }
		          settings.fillStyle=linear;
		        }
		        ctx.fillStyle =settings.fillStyle;
		        ctx.lineWidth=settings.lineWidth;
		        ctx.moveTo(x,y);
		        ctx.arc(x,y,settings.R,start,end);
		        !settings.lineWidth||ctx.stroke();
		        ctx.fill();
		        if(settings.text){//绘制文字
		          var offsetX=settings.text.length/2*settings.space-8;
		          ctx.font = settings.font;
		          ctx.fillStyle = "#333333";
		          ctx.fillText(settings.text,x-offsetX,y+parseInt(settings.font)/2);
		        }
		        ctx.closePath();
		        ctx.restore();
		    }
		}
};
