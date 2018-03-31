const lineChart = document.getElementById('trafficChart').getContext('2d');
const barChart = document.getElementById('dailyTrafficChart').getContext('2d');
const doughnutChart = document.getElementById('mobileUsersChart').getContext('2d');

Chart.defaults.scale.gridLines.offsetGridLines = true;
Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.line.scales.spanGaps = true;

let trafficChart = new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-16', '27-3', '4-10', '11-17', '18-24', '25-31',''],
    datasets: [{
      data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
      borderColor: '#7479bd',
      backgroundColor: "rgba(116,121,189,0.3)",
      borderWidth: 2,
      tension: 0,
      pointRadius: 5,
      pointBackgroundColor: 'white',
    }],
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 2500,
          min: 0,
          stepSize: 500,
        }
      }]
    }
  }
});

let dailyTrafficChart = new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      data: [50,75,150,100,200,175,75],
      backgroundColor: '#7479bd',
    }]
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 250,
          min: 0,
          stepSize: 50,
        }
      }]
    },
    cornerRadius: 5,
  }
});

let mobileUsersChart = new Chart(doughnutChart, {
  type: 'doughnut',
  data: {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [{
      data: [20,15,65],
      backgroundColor: [
        '#76b1be',
        '#83c891',
        '#7479bd'
      ]
    }]
  }
})



console.log(Chart.defaults);