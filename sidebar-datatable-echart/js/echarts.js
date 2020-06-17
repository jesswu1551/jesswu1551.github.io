$(document).ready(function() {
  var da = [
    { word: "韓國瑜", cnt: 570 },
    { word: "台灣", cnt: 335 },
    { word: "罷免", cnt: 369 },
    { word: "罷韓", cnt: 413 },
    { word: "高雄市", cnt: 277 },
    { word: "投票", cnt: 354 },
    { word: "高雄", cnt: 612 },
    { word: "國民黨", cnt: 158 },
    { word: "認為", cnt: 128 },
    { word: "民進黨", cnt: 93 },
    { word: "總統", cnt: 169 },
    { word: "報導", cnt: 104 },
    { word: "中國", cnt: 124 },
    { word: "高雄人", cnt: 75 },
    { word: "新頭", cnt: 82 },
    { word: "民調", cnt: 143 },
    { word: "民眾", cnt: 111 },
    { word: "防疫", cnt: 89 },
    { word: "市長", cnt: 232 },
    { word: "蔡英文", cnt: 68 },
    { word: "選舉", cnt: 68 },
    { word: "新聞", cnt: 93 },
    { word: "表示", cnt: 188 },
    { word: "電子", cnt: 59 },
    { word: "立委", cnt: 47 },
    { word: "市府", cnt: 73 },
    { word: "政治", cnt: 129 },
    { word: "中時", cnt: 54 },
    { word: "一個", cnt: 62 },
    { word: "活動", cnt: 57 }
  ];


  function pieChart(da) {
    var mydata = [];
    for (var i = 0, len = da.length; i < len; i++) {
      if (da[i].cnt != 0) {
        mydata.push({
          value: da[i].cnt,
          name: da[i].word
        })
      }
    };

    var option1 = {
      color: ['#666a86', '#788aa3', '#92b6b1', '#b2c9ab', '#e8ddb5'], // 調色盤的顏色
      legend: { // 圖示
        type: 'plain',
        bottom: 0,
      },
      series: [
        {
          type: 'pie',  // 圖表種類
          data: mydata, // 資料來源，name為名稱，value為值
          center: ['50%', '45%'],
          radius: ['0%', '60%']
        }
      ],
      tooltip: {
        trigger: 'item' // 觸發資料時顯示提示框
      },
      emphasis: { // hover設定
        itemStyle: { // hover到項目
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        label: { // hover到項目的標籤文字
          show: true,
          fontSize: 18,
        }
      },

    };

    return option1;
  }

function barChart(da) {
  var worddata = [];
  for (var i = 0, len = da.length; i < len; i++) {
    if (da[i].cnt != 0) {
      worddata.push(da[i].word);
    }
  };

  var wordcount = [];
  for (var i = 0, len = da.length; i < len; i++) {
    if (da[i].cnt != 0) {
      wordcount.push({
        value: da[i].cnt,

      });
    }
  };

  var wordcountrandom = [];
  for (var i = 0, len = da.length; i < len; i++) {
    if (da[i].cnt != 0) {
      wordcountrandom.push({
        value: (da[i].cnt) * Math.random(),
      });
    }
  };

  var option2 = {
    color: ['#666a86', '#92b6b1', '#b2c9ab', '#e8ddb5'], // 調色盤的顏色
    xAxis: { // x軸設定
      type: 'category',
      data: worddata,
      axisLabel: { // x軸的標籤
        interval: 0, // x軸標籤的間隔
        rotate: -75 }, // 標籤旋轉的角度

    },
    yAxis: { // y軸設定
      type: 'value',
    },
    series: [
      {
        type: 'bar',
        data: wordcount,
        emphasis: {
          itemStyle: {
            color: '#b2c9ab'
          }
        }
      },
      {
        type: 'line',
        data: wordcountrandom,
        smooth: true,
        symbol: 'emptyCircle',
        symbolSize: 6
      }
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    dataZoom: [
      {
        type: 'slider',
        xAxisIndex: 0,
        start: 0,
        end: 100
      },
      {
        type: 'inside',
        xAxisIndex: 0,
        start: 0,
        end: 100
      },
      {
        type: 'slider',
        yAxisIndex: 0,
        start: 0,
        end: 100
      },
      {
        type: 'inside',
        yAxisIndex: 0,
        start: 0,
        end: 100
      }
    ],

  }
  return option2;
}

  var myPieChart = echarts.init(document.getElementById('mychart-pie'));
  var opt1 = pieChart(da);
  myPieChart.setOption(opt1);

  var myBarChart = echarts.init(document.getElementById('mychart-bar'))
  var opt2 = barChart(da);
  myBarChart.setOption(opt2);
});