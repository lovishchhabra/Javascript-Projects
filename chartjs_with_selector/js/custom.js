var ctx = document.getElementById("myChart").getContext("2d");
// Creating Chart Class Object
var data = {
    // Data Labels
    labels: ["Python", "JavaScript", "PHP", "Java", "C#", "C++"],
  
    datasets: [
      // Data Set 1
      {
        //  Chart Label
        label: "Programming Languages",
  
        // Actual Data
        data: [13, 15, 5, 10, 9, 10],
  
        // Background Color
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
  
        // Border Color
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
  
        // Border Width
        borderWidth: 1,
      },
  
      ],
  };
var config = {
  // Type of Chart - bar, line, pie, doughnut, radar, polarArea
  type: "line",
  
  // The data for our dataset
  data,
  // Configuration options go here
  options: {
    // Set Responsiveness By Default Its True
    // When Its True Canvas Width Height won't work
    responsive: true,

    // Set Padding
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    // Configure ToolTips
    tooltips: {
      enabled: true, // Enable/Disable ToolTip By Default Its True
      backgroundColor: "red", // Set Tooltip Background Color
      titleFontFamily: "Comic Sans MS", // Set Tooltip Title Font Family
      titleFontSize: 30, // Set Tooltip Font Size
      titleFontStyle: "bold italic",
      titleFontColor: "yellow",
      titleAlign: "center",
      titleSpacing: 3,
      titleMarginBottom: 20,
      bodyFontFamily: "Comic Sans MS",
      bodyFontSize: 20,
      bodyFontStyle: "italic",
      bodyFontColor: "black",
      bodyAlign: "center",
      bodySpacing: 3,
    },
    
    // Custom Chart Title
    title: {
      display: true,
      text: "Popular Programming Languages ",
      position: "top",
      fontSize: 25,
      fontFamily: "Comic Sans MS",
      fontColor: "red",
      fontStyle: "bold italic",
      padding: 2,
      lineHeight: 5,
    },

    // Legends Configuration
    legend: {
      display: true,
      position: "bottom", // top left bottom right
      align: "end", // start end center
      labels: {
        fontColor: "red",
        fontSize: 16,
        boxWidth: 20,
      },
    },

    animation: {
      duration: 5000,
      easing: "easeInOutElastic",
    },
  },
};
//init the chart
var myChart = new Chart(ctx,config);

//function to change chart type
function charttype(type){
  myChart.destroy();
  if(type==='line'){
    config.type = type;
    myChart = new Chart(ctx,config);
  }
  if(type==='doughnut'){
    config.type = type;
    myChart = new Chart(ctx,config);
  }
  if(type==='bubble'){
    config.type = type;
    myChart = new Chart(ctx,config);
  }
  if(type==='radar'){
    config.type = type;
    myChart = new Chart(ctx,config);
  }
  if(type==='polarArea'){
    config.type = type;
    myChart = new Chart(ctx,config);
  }  
}