
// 通过函数传params获取index..            formatter获取数据

// 立即执行函数()();
(function () {
    // 3.实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2.指定配置项
    var option = {
        color: ["#3398DB"],
        // 提示框
        tooltip: {
            trigger: 'axis',
            // 坐标指示器 指示效果
            axisPointer: {
                // 默认直线（line,shadow)
                type: 'shadow'
            }
        },
        // 网格大小位置  containLabel是否贴合y轴
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            // 包裹刻度文字
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
                // 刻度线
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签相关样式（x轴文字）
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontsize: "12",
                },
                // 修改（x）轴线
                axisLine: {
                    show: false
                }

            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontsize: "12",
                },
                axisLine: {
                    // 设置轴线样式
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }


                },
                // 设置分割线
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: 'bar',
                barWidth: '35%',
                // 数据叠加
                // stack: 'Total',
                data: [200, 300, 300, 900, 1500, 1200, 600],
                // 样式
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5
                }
            }
        ]
    };
    // 3.配置项给实例对象
    myChart.setOption(option);
    // 4.自适应大小
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// bar2
(function () {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

    var myChart = echarts.init(document.querySelector(".bar2 .chart"));

    var option = {
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },

        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: "category",
                // 是否为反向坐标（默认数据左下角开始）
                inverse: true,
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: "#fff"
                }
            },
            {
                data: [702, 350, 610, 793, 664],
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                }
            }
        ],
        series: [
            {
                name: "条",
                type: "bar",
                data: [70, 53, 60, 78, 32],
                // 定位 优先级（叠加）
                yAxisIndex: 0,
                itemStyle: {
                    barBorderRadius: 20,
                    // 此时的color 可以修改柱子的颜色
                    color: function (params) {
                        // params 传进来的是柱子对象
                        return myColor[params.dataIndex];
                    }
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                barWidth: 10,
                // 文字设置
                label: {
                    show: true,
                    //   柱子内
                    position: "inside",
                    //  formatter获取数据     {c} 会自动的解析为 data里面的数据
                    formatter: "{c}%"
                }
            },
            {
                name: "框",
                type: "bar",
                barCategoryGap: 50,
                barWidth: 15,
                yAxisIndex: 1,
                data: [100, 100, 100, 100, 100],
                itemStyle: {
                    color: "none",
                    //   边颜色
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                }
            }
        ]
    };


    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// line
(function () {
    var yearData = [
        {
            year: '2021',
            data: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2022',
            data: [
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];

    var myChart = echarts.init(document.querySelector(".line .chart"));

    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // legend的文本样式
            textStyle: {
                color: '#4c9bfd'
            },
            right: "10%"
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            // 显示边框
            show: true,
            borderColor: '#012f4a'
        },

        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: false
            },
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [{
            name: '新增粉丝',
            data: yearData[0].data[0],
            type: 'line',
            // 线圆滑
            smooth: true
        },
        {
            name: '新增游客',
            data: yearData[0].data[1],
            type: 'line',
            smooth: true
        }]
    };


    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();
    })

    // 点击事件
    $('.line h2').on('click', "a", function () {
        // console.log(yearData[$(this).index()])
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        // 需要重新渲染
        myChart.setOption(option);
    })
})();

// line2
(function () {
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: { show: false },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                }
            }
        ],
        series: [
            {
                smooth: true,
                name: '播放量',
                type: 'line',
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: "2"
                },
                // 必有面积  ，加配置
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    // 影子效果
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 拐点类型
                symbol: 'circle',
                symbolSize: 10,
                // 刚开始是否展示拐点
                showSymbol: false,
                // 设置拐点样式 （柱、点）
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                emphasis: {
                    focus: 'series'
                },
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
            },
            {
                name: "转发量",
                type: "line",
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
                symbol: "circle",
                symbolSize: 5,
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                showSymbol: false,
            }
        ]
    };


    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// pie
(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                // 圆形半径
                radius: '80%',
                center: ['50%', '50%'],
                data: [
                    { value: 200, name: '云南' },
                    { value: 260, name: '北京' },
                    { value: 240, name: '山东' },
                    { value: 350, name: '河北' },
                    { value: 300, name: '四川' },
                    { value: 420, name: '湖北' }
                ].sort(function (a, b) {
                    return a.value - b.value;
                }),

                roseType: 'radius',
                label: {
                    color: 'rgba(1, 132, 213, 1)'
                },
                // 连接线
                labelLine: {
                    lineStyle: {
                        color: 'rgba(1, 132, 213, 1)'
                    },
                    smooth: 0.2,
                    length: 15,
                    length2: 25
                },
                itemStyle: {
                    color: '#3398DB',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                // hover效果动画
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };


    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// 气泡图
(function () {
    var myChart = echarts.init(document.querySelector(".pie2 .chart"));
    const data = [
        [
            [28604, 77, 17096869, 'Australia', 2015],
            [31163, 77.4, 27662440, 'Canada', 2015],
            [1516, 68, 1154605773, 'China', 2015],
            [13670, 74.7, 10582082, 'Cuba', 2015],
            [28599, 75, 4986705, 'Finland', 2015],
            [29476, 77.1, 56943299, 'France', 2015],
            [31476, 75.4, 78958237, 'Germany', 2015],
            [28666, 78.1, 254830, 'Iceland', 2015],
            [1777, 57.7, 870601776, 'India', 2015],
            [29550, 79.1, 122249285, 'Japan', 2015],
            [2076, 67.9, 20194354, 'North Korea', 2015],
            [12087, 72, 42972254, 'South Korea', 2015],
            [24021, 75.4, 3397534, 'New Zealand', 2015],
            [43296, 76.8, 4240375, 'Norway', 2015],
            [10088, 70.8, 38195258, 'Poland', 2015],
            [19349, 69.6, 147568552, 'Russia', 2015],
            [10670, 67.3, 53994605, 'Turkey', 2015],
            [26424, 75.7, 57110117, 'United Kingdom', 2015],
            [37062, 75.4, 252847810, 'United States', 2015]
        ],
        [
            [44056, 81.8, 23968973, 'Australia', 2020],
            [43294, 81.7, 35939927, 'Canada', 2020],
            [13334, 76.9, 1376048943, 'China', 2020],
            [21291, 78.5, 11389562, 'Cuba', 2020],
            [38923, 80.8, 5503457, 'Finland', 2020],
            [37599, 81.9, 64395345, 'France', 2020],
            [44053, 81.1, 80688545, 'Germany', 2020],
            [42182, 82.8, 329425, 'Iceland', 2020],
            [5903, 66.8, 1311050527, 'India', 2020],
            [36162, 83.5, 126573481, 'Japan', 2020],
            [1390, 71.4, 25155317, 'North Korea', 2020],
            [34644, 80.7, 50293439, 'South Korea', 2020],
            [34186, 80.6, 4528526, 'New Zealand', 2020],
            [64304, 81.6, 5210967, 'Norway', 2020],
            [24787, 77.3, 38611794, 'Poland', 2020],
            [23038, 73.13, 143456918, 'Russia', 2020],
            [19360, 76.5, 78665830, 'Turkey', 2020],
            [38225, 81.4, 64715810, 'United Kingdom', 2020],
            [53354, 79.1, 321773631, 'United States', 2020]
        ]
    ];
    option = {
        legend: {
            right: '10%',
            top: '3%',
            data: ['2015', '2020'],
            textStyle: {
                color: '#4c9bfd',
            }
        },
        grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            // 显示边框
            show: true,
            borderColor: '#012f4a'
        },
        xAxis: {
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#012f4a'
                }
            },
            boundaryGap: false

        },
        yAxis: {
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#012f4a'
                }
            },
            axisLine: {
                show: false
            },
            boundaryGap: false,
            scale: true
        },
        series: [
            {
                name: '2015',
                data: data[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                emphasis: {
                    focus: 'series',
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top',
                        color:'#00d887'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            color: 'rgb(251, 118, 123)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(204, 46, 72)'
                        }
                    ])
                }
            },
            {
                name: '2020',
                data: data[1],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                emphasis: {
                    focus: 'series',
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top',
                        color:'#00d887'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            color: 'rgb(129, 227, 238)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(25, 183, 207)'
                        }
                    ])
                }
            }
        ]
    };


    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// 飞行地图
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".map .chart"));
    // 2. 指定配置和数据
    // 2. 指定配置和数据
    var geoCoordMap = {
      上海: [121.4648, 31.2891],
      东莞: [113.8953, 22.901],
      东营: [118.7073, 37.5513],
      中山: [113.4229, 22.478],
      临汾: [111.4783, 36.1615],
      临沂: [118.3118, 35.2936],
      丹东: [124.541, 40.4242],
      丽水: [119.5642, 28.1854],
      乌鲁木齐: [87.9236, 43.5883],
      佛山: [112.8955, 23.1097],
      保定: [115.0488, 39.0948],
      兰州: [103.5901, 36.3043],
      包头: [110.3467, 41.4899],
      北京: [116.4551, 40.2539],
      北海: [109.314, 21.6211],
      南京: [118.8062, 31.9208],
      南宁: [108.479, 23.1152],
      南昌: [116.0046, 28.6633],
      南通: [121.1023, 32.1625],
      厦门: [118.1689, 24.6478],
      台州: [121.1353, 28.6688],
      合肥: [117.29, 32.0581],
      呼和浩特: [111.4124, 40.4901],
      咸阳: [108.4131, 34.8706],
      哈尔滨: [127.9688, 45.368],
      唐山: [118.4766, 39.6826],
      嘉兴: [120.9155, 30.6354],
      大同: [113.7854, 39.8035],
      大连: [122.2229, 39.4409],
      天津: [117.4219, 39.4189],
      太原: [112.3352, 37.9413],
      威海: [121.9482, 37.1393],
      宁波: [121.5967, 29.6466],
      宝鸡: [107.1826, 34.3433],
      宿迁: [118.5535, 33.7775],
      常州: [119.4543, 31.5582],
      广州: [113.5107, 23.2196],
      廊坊: [116.521, 39.0509],
      延安: [109.1052, 36.4252],
      张家口: [115.1477, 40.8527],
      徐州: [117.5208, 34.3268],
      德州: [116.6858, 37.2107],
      惠州: [114.6204, 23.1647],
      成都: [103.9526, 30.7617],
      扬州: [119.4653, 32.8162],
      承德: [117.5757, 41.4075],
      拉萨: [91.1865, 30.1465],
      无锡: [120.3442, 31.5527],
      日照: [119.2786, 35.5023],
      昆明: [102.9199, 25.4663],
      杭州: [119.5313, 29.8773],
      枣庄: [117.323, 34.8926],
      柳州: [109.3799, 24.9774],
      株洲: [113.5327, 27.0319],
      武汉: [114.3896, 30.6628],
      汕头: [117.1692, 23.3405],
      江门: [112.6318, 22.1484],
      沈阳: [123.1238, 42.1216],
      沧州: [116.8286, 38.2104],
      河源: [114.917, 23.9722],
      泉州: [118.3228, 25.1147],
      泰安: [117.0264, 36.0516],
      泰州: [120.0586, 32.5525],
      济南: [117.1582, 36.8701],
      济宁: [116.8286, 35.3375],
      海口: [110.3893, 19.8516],
      淄博: [118.0371, 36.6064],
      淮安: [118.927, 33.4039],
      深圳: [114.5435, 22.5439],
      清远: [112.9175, 24.3292],
      温州: [120.498, 27.8119],
      渭南: [109.7864, 35.0299],
      湖州: [119.8608, 30.7782],
      湘潭: [112.5439, 27.7075],
      滨州: [117.8174, 37.4963],
      潍坊: [119.0918, 36.524],
      烟台: [120.7397, 37.5128],
      玉溪: [101.9312, 23.8898],
      珠海: [113.7305, 22.1155],
      盐城: [120.2234, 33.5577],
      盘锦: [121.9482, 41.0449],
      石家庄: [114.4995, 38.1006],
      福州: [119.4543, 25.9222],
      秦皇岛: [119.2126, 40.0232],
      绍兴: [120.564, 29.7565],
      聊城: [115.9167, 36.4032],
      肇庆: [112.1265, 23.5822],
      舟山: [122.2559, 30.2234],
      苏州: [120.6519, 31.3989],
      莱芜: [117.6526, 36.2714],
      菏泽: [115.6201, 35.2057],
      营口: [122.4316, 40.4297],
      葫芦岛: [120.1575, 40.578],
      衡水: [115.8838, 37.7161],
      衢州: [118.6853, 28.8666],
      西宁: [101.4038, 36.8207],
      西安: [109.1162, 34.2004],
      贵阳: [106.6992, 26.7682],
      连云港: [119.1248, 34.552],
      邢台: [114.8071, 37.2821],
      邯郸: [114.4775, 36.535],
      郑州: [113.4668, 34.6234],
      鄂尔多斯: [108.9734, 39.2487],
      重庆: [107.7539, 30.1904],
      金华: [120.0037, 29.1028],
      铜川: [109.0393, 35.1947],
      银川: [106.3586, 38.1775],
      镇江: [119.4763, 31.9702],
      长春: [125.8154, 44.2584],
      长沙: [113.0823, 28.2568],
      长治: [112.8625, 36.4746],
      阳泉: [113.4778, 38.0951],
      青岛: [120.4651, 36.3373],
      韶关: [113.7964, 24.7028]
    };
  
    var XAData = [
      [{ name: "西安" }, { name: "北京", value: 100 }],
      [{ name: "西安" }, { name: "上海", value: 100 }],
      [{ name: "西安" }, { name: "广州", value: 100 }],
      [{ name: "西安" }, { name: "西宁", value: 100 }],
      [{ name: "西安" }, { name: "拉萨", value: 100 }]
    ];
  
    var XNData = [
      [{ name: "西宁" }, { name: "北京", value: 100 }],
      [{ name: "西宁" }, { name: "上海", value: 100 }],
      [{ name: "西宁" }, { name: "广州", value: 100 }],
      [{ name: "西宁" }, { name: "西安", value: 100 }],
      [{ name: "西宁" }, { name: "银川", value: 100 }]
    ];
  
    var YCData = [
      [{ name: "拉萨" }, { name: "北京", value: 100 }],
      [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
      [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }]
    ];
  
    var planePath =
      "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
    //var planePath = 'arrow';
    var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
  
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord],
            value: dataItem[1].value
          });
        }
      }
      return res;
    };
  
    var color = ["#fff", "#fff", "#fff"]; //航线的颜色
    var series = [];
    [
      ["西安", XAData],
      ["西宁", XNData],
      ["银川", YCData]
    ].forEach(function(item, i) {
      series.push(
        {
          name: item[0] + " Top3",
          type: "lines",
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: "red", //arrow箭头的颜色
            symbolSize: 3
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 0,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + " Top3",
          type: "lines",
          zlevel: 2,
          symbol: ["none", "arrow"],
          symbolSize: 10,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + " Top3",
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            brushType: "stroke"
          },
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{b}"
            }
          },
          symbolSize: function(val) {
            return val[2] / 8;
          },
          itemStyle: {
            normal: {
              color: color[i]
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        }
      );
    });
    var option = {
      tooltip: {
        trigger: "item",
        formatter: function(params, ticket, callback) {
          if (params.seriesType == "effectScatter") {
            return "线路：" + params.data.name + "" + params.data.value[2];
          } else if (params.seriesType == "lines") {
            return (
              params.data.fromName +
              ">" +
              params.data.toName +
              "<br />" +
              params.data.value
            );
          } else {
            return params.name;
          }
        }
      },
  
      geo: {
        map: "china",
        label: {
          emphasis: {
            show: true,
            color: "#fff"
          }
        },
        roam: false,
        //   放大我们的地图
        zoom: 1,
        itemStyle: {
          normal: {
            areaColor: "rgba(43, 196, 243, 0.42)",
            borderColor: "rgba(43, 196, 243, 1)",
            borderWidth: 1
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        }
      },
      series: series
    };

    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  
  
