var ctx = document.getElementById('trafficChartWeekly').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["", "19-25", "26-1", "2-8", "9-25", "26-22", "23-29", "30-6", "7-15", "16-24", "25-1", "2-8",],
        datasets: [{
//            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Custom Title'
      },
      elements: {
        line: {
          tension: 0
        }
      }
    }
});