// ----- VARIABLES ----- //

const lineChart = document.getElementById('trafficChart').getContext('2d');
const barChart = document.getElementById('dailyTrafficChart').getContext('2d');
const doughnutChart = document.getElementById('mobileUsersChart').getContext('2d');
const chartOptions = document.querySelector('.chartOptions');
const optionsList = document.getElementsByTagName('li');



// ----- CHART DATA OBJECTS ----- //

const trafficChartData = {
  hourly: {
    labels: ['', '7a-8a', '8a-9a', '9a-10a', '10a-11a', '11a-12p', '12p-1p', '1p-2p', '2p-3p', '3p-4p', '4p-5p', '5p-6p', '6p-7p'],
    datasets: [{
      data: [25, 64, 34, 72, 134, 52, 122, 268, 47, 95, 124, 52, 234],
      borderColor: '#7479bd',
      backgroundColor: "rgba(116,121,189,0.3)",
      borderWidth: 2,
      tension: 0,
      pointRadius: 5,
      pointBackgroundColor: 'white',
    }],
  },
  daily: {
    labels: ['', '16-22', '23-29', '30-5', '6-12', '13-19', '20-16', '27-3', '4-10', '11-17', '18-24', '25-31', '1-6'],
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
  weekly: {
    labels: ['', '16-22', '23-29', '30-5', '6-12', '13-19', '20-16', '27-3', '4-10', '11-17', '18-24', '25-31', '1-6'],
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
  monthly: {
    labels: ['', '16-22', '23-29', '30-5', '6-12', '13-19', '20-16', '27-3', '4-10', '11-17', '18-24', '25-31', '1-6'],
    datasets: [{
      data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
      borderColor: '#7479bd',
      backgroundColor: "rgba(116,121,189,0.3)",
      borderWidth: 2,
      tension: 0,
      pointRadius: 5,
      pointBackgroundColor: 'white',
    }],
  }
}



// ----- CHART OPTION OBJECTS ----- //

const trafficChartOptions = {
  hourly: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 300,
          min: 0,
          stepSize: 50,
        }
      }]
    }
  },
  daily: {
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
  },
  weekly: {
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
  },
  monthly: {
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
}


// ----- FUNCTIONS ----- //

function toggleActive() {
  for (let i = 0; i < optionsList.length; i++) {
    optionsList[i].classList.remove('active');
  }
}

function changeChart(chosen) {
  let activeChart = chosen;
  if (chosen.textContent === 'Hourly') {
    console.log('Hourly');
  } else if (chosen.textContent === 'Daily') {
    console.log('Daily');
  } else if (chosen.textContent === 'Weekly') {
    trafficChart.data = trafficChartData.weekly;
  } else {
    console.log('Monthly');
  }
}

console.log(lineChart.type);


// ----- EVENT LISTENERS ----- //

chartOptions.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    toggleActive();
  }
  
  e.target.parentElement.className += 'active';
  changeChart(e.target);
});



Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.line.scales.spanGaps = true;

let trafficChart = new Chart(lineChart, {
  type: 'line',
  data: trafficChartData.hourly,
  options: trafficChartOptions.hourly,
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
});