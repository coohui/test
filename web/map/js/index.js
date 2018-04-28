const Config={
	slANDhu:{
	   divisionHuCount:[],
       divisionAmount:[//水量数据
        {NAME: "深圳市", LTTD: 22.5531, LGTD: 114.110899, DAYW: 289519.06, CODE: "440300", ROWNUM: 1},
        {NAME: "广州市", LTTD: 23.121162, LGTD: 113.251487, DAYW: 233376.06, CODE: "440100", ROWNUM: 2},
		{NAME: "江门市", LTTD: 22.58942, LGTD: 113.08614, DAYW: 120388.06, CODE: "440700", ROWNUM: 3},
		{NAME: "东莞市", LTTD: 23.046623, LGTD: 113.749819, DAYW: 98683.06, CODE: "441900", ROWNUM: 4},
		{NAME: "广东省", LTTD: null, LGTD: null, DAYW: 53315.06, CODE: "440000", ROWNUM: 5},
		{NAME: "佛山市", LTTD: 22.9762, LGTD: 113.005344, DAYW: 41635.06, CODE: "440600", ROWNUM: 6},
		{NAME: "中山市", LTTD: 22.52581, LGTD: 113.3736, DAYW: 39489.06, CODE: "442000", ROWNUM: 7},
		{NAME: "揭阳市", LTTD: 23.542975, LGTD: 116.34977, DAYW: 32689.06, CODE: "445200", ROWNUM: 8},
		{NAME: "梅州市", LTTD: 24.31578, LGTD: 116.1105, DAYW: 31449.06, CODE: "441400", ROWNUM: 9},
		{NAME: "阳江市", LTTD: 21.845419, LGTD: 111.958949, DAYW: 16363.06, CODE: "441700", ROWNUM: 10},
		{NAME: "云浮市", LTTD: 22.933193, LGTD: 112.039989, DAYW: 15655.06, CODE: "445300", ROWNUM: 11},
		{NAME: "惠州市", LTTD: 23.09031, LGTD: 114.38943, DAYW: 15317.06, CODE: "441300", ROWNUM: 12},
		{NAME: "潮州市", LTTD: 23.667705, LGTD: 116.636659, DAYW: 14598.06, CODE: "445100", ROWNUM: 13},
		{NAME: "汕头市", LTTD: 23.363955, LGTD: 116.682879, DAYW: 12311.06, CODE: "440500", ROWNUM: 14},
		{NAME: "清远市", LTTD: 23.720727, LGTD: 113.022129, DAYW: 11865.06, CODE: "441800", ROWNUM: 15},
		{NAME: "珠海市", LTTD: 22.272696, LGTD: 113.571399, DAYW: 11831.06, CODE: "440400", ROWNUM: 16},
		{NAME: "湛江市", LTTD: 21.194911, LGTD: 110.40264, DAYW: 11428.06, CODE: "440800", ROWNUM: 17},
		{NAME: "肇庆市", LTTD: 23.058234, LGTD: 112.45168, DAYW: 10979.06, CODE: "441200", ROWNUM: 18},
		{NAME: "韶关市", LTTD: 24.810209, LGTD: 113.60342, DAYW: 7483.06, CODE: "440200", ROWNUM: 19},
		{NAME: "茂名市", LTTD: 21.673069, LGTD: 110.892989, DAYW: 7463.06, CODE: "440900", ROWNUM: 20},
		{NAME: "河源市", LTTD: 23.736834, LGTD: 114.69146, DAYW: 6523.06, CODE: "441600", ROWNUM: 21},
		{NAME: "汕尾市", LTTD: 22.771485, LGTD: 115.35948, DAYW: 2730.06, CODE: "441500", ROWNUM: 22}
        ],
        waterAmount:[],
        waterHuCount:[]
	},//水量与户数
	divData:[//长方体数据
		{
			x:450,
			y:280,
			height:96,
			sl:121236,
			icode:'sg',
			code:'440200',
			name:'韶关市'
		},
		{
			x:366,
			y:280,
			sl:221236,
			icode:'qy',
			code:'441800',
			name:'清远市',
			height:96
		},
		{
			x:500,
			y:380,
			sl:211236,
			icode:'gz',
			code:'440100',
			name:'广州市',
			height:226
		},
		{
			x:660,
			y:320,
			sl:21236,
			icode:'hy',
			code:'441600',
			name:'河源市',
			height:126
		},
		{
			x:330,
			y:360,
			sl:454566,
			icode:'zq',
			code:'441200',
			name:'肇庆市',
			height:116
		},
		{
			x:280,
			y:430,
			sl:154566,
			icode:'yf',
			code:'445300',
			name:'云浮市',
			height:176
		},
		{
			x:430,
			y:414,
			sl:354566,
			icode:'fs',
			code:'440600',
			name:'佛山市',
			height:76
		},
		{
			x:476,
			y:444,   
			sl:1236,
			icode:'zs',
			code:'442000',
			name:'中山市',
			height:6
		},
		{
			x:462,
			y:484,
			sl:54566,
			icode:'zh',
			code:'440400',
			name:'珠海市',
			height:76
		},
		{
			x:380,
			y:484,
			sl:12314,
			icode:'jm',
			code:'440700',
			name:'江门市',
			height:176
		},
		{
			x:260,
			y:494,
			sl:123146,
			icode:'yj',
			code:'441700',
			name:'阳江市',
			height:76
		},
		{
			x:160,
			y:504,
			sl:223146,
			icode:'mm',
			code:'440900',
			name:'茂名市',
			height:86
		},
		{
			x:50,
			y:564,
			sl:5678,
			icode:'zj',
			code:'440800',
			name:'湛江市',
			height:86
		},
		{
			x:600,
			y:400,
			sl:15676,
			icode:'hz',
			code:'441300',
			name:'惠州市',
			height:136
		},
		{
			x:570,
			y:435,
			sl:25676,
			icode:'sz',
			code:'440300',
			name:'深圳市',
			height:6
		},
		{
			x:536,
			y:414,
			sl:9865,
			icode:'dg',
			code:'441900',
			name:'东莞市',
			height:126
		},
		{
			x:740,
			y:414,
			sl:19866,
			icode:'sw',
			code:'441500',
			name:'汕尾市',
			height:156
		},
		{
			x:890,
			y:344,
			sl:23466,
			icode:'cs',
			height:206,
			code:'445100',
			name:'潮州市'
		},
		{
			x:830,
			y:324,
			sl:13466,
			icode:'mz',
			code:'441400',
			name:'梅州市',
			height:146
		},
		{
			x:800,
			y:384,
			sl:435346,
			icode:'jy',
			code:'445200',
			name:'揭阳市',
			height:106
		},
		{
			x:850,
			y:394,
			sl:9766,
			icode:'st',
			code:'440500',
			name:'汕头市',
			height:16
		}
	],
	lyData:[
		{
			x:450,
			y:420,
			height:96,
			sl:121236,
			code:'H070000',
			name:'珠江三角洲'
		},
		{
			x:650,
			y:390,
			height:96,
			sl:121236,
			code:'H060000',
			name:'东江'
		},
		{
			x:100,
			y:540,
			height:96,
			sl:121236,
			code:'H090000',
			name:'粤西桂南沿海诸河'
		},
		{
			x:810,
			y:340,
			height:96,
			sl:121236,
			code:'H080000',
			name:'韩江及粤东诸河'
		},
		{
			x:400,
			y:330,
			height:96,
			sl:121236,
			code:'H050000',
			name:'北江'
		},
		{
			x:300,
			y:420,
			height:96,
			sl:121236,
			code:'H040000',
			name:'西江'
		}
	]
}
/**
 * 处理行政区划地图数据
 */
function adjustDivmapdata(){
	var divmapdata=mapData.divmap;//地图坐标
	var divData=Config.divData;//长方体户数
	var lyData=Config.lyData;//流域
    var slANDhu=Config.slANDhu;//行政区户数坐标及户数
    var divisionHuCount=slANDhu.divisionHuCount;//行政区户数
    var divisionAmount=slANDhu.divisionAmount;//行政区水量
    var waterAmount=slANDhu.waterAmount;//水资源分区水量
    var waterHuCount=slANDhu.waterHuCount;//水资源分区户数

    var Scale=3;
    var totalArr=[];
    //行政区水量与户数
    for(var i=0,len=divData.length;i<len;i++){
    	var code1=divData[i].code;
    	for(var j=0,len2=divisionHuCount.length;j<len2;j++){
            var code2=divisionHuCount[j].CODE;
            if(code1==code2){
               divData[i].height=divisionHuCount[j].COUNT*Scale;
               break;
            }
    	}
    	for(var j=0,len2=divisionAmount.length;j<len2;j++){
            var code2=divisionAmount[j].CODE;
            if(code1==code2){
               divData[i].sl=divisionAmount[j].DAYW;
               totalArr.push(divisionAmount[j].DAYW);
               break;
            }
    	}
    }
    //流域水量与户数
    for(var i=0,len=lyData.length;i<len;i++){
    	var code1=lyData[i].code;
    	for(var j=0,len2=waterHuCount.length;j<len2;j++){
            var code2=waterHuCount[j].CODE;
            if(code1==code2){
               lyData[i].height=waterHuCount[j].COUNT;
               break;
            }
    	}
    	for(var j=0,len2=waterAmount.length;j<len2;j++){
            var code2=waterAmount[j].CODE;
            if(code1==code2){
               lyData[i].sl=waterAmount[j].DAYW;
               break;
            }
    	}
    }
    var colorArr=['0069a4','0888d0','29acf6','70cbff','a8dfff','d2eeff'];
    var divisionAmountArr=divisionAmount.sort(function(a,b){
    	return b.DAYW-a.DAYW;
    }); 
	//根据水量排序改变地图颜色
    for(var i=0,len=divmapdata.length;i<len;i++){
        for(var j=0,len2=divisionAmountArr.length;j<len2;j++){
           if(divmapdata[i].code==divisionAmountArr[j].CODE){
           	   if(j<=2){
                  var rgba='#'+colorArr[0];
           	   }else if(j>2&&j<=5){
                  var rgba='#'+colorArr[1];
           	   }else if(j>5&&j<=9){
                  var rgba='#'+colorArr[2];
           	   }else if(j>9&&j<=13){
                  var rgba='#'+colorArr[3];
           	   }else if(j>13&&j<=17){
                  var rgba='#'+colorArr[4];
           	   }else if(j>17&&j<=21){
                  var rgba='#'+colorArr[5];
           	   }
               divmapdata[i].fill=rgba;
               break;
           }
        }
    }
    return {divmapData:divmapdata,divData:divData};
}
/**
 * 创建地图
 */
function createMap(){
	$('#svgMap').empty();
	var scale=[1,1];

	var data=adjustDivmapdata();

    fun.svgShape('svgMap',{
    	svgId:'oSvg',
    	className:'oSvg',
    	svgbg:'img/map_bg.png',
    	shape:['map','rect'],
    	svgScale:scale,
    	data:{
    		rect:Config.divData,
    		map:data.divmapData
    	}
    });
}
createMap();