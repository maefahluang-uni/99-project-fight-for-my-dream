<template>
  <div class="home-page">
    <h1>Welcome to the Dashboard Page</h1>
    <div class="graphs">
      <div class="graph">
        <h2>Employee Monthly Performance</h2>
        <canvas ref="employeePerformanceChart"></canvas>
      </div>
      <div class="graph">
        <h2>Daily Chemical Report</h2>
        <canvas ref="dailyChemicalChart"></canvas>
      </div>
      <div class="graph">
        <h2>Daily Accident Report</h2>
        <canvas ref="dailyAccidentChart"></canvas>
      </div>
      <div class="graph">
        <h2>Monthly Severity Report</h2>
        <canvas ref="monthlySeverityChart"></canvas>
      </div>
      <div class="graph">
        <h2>Daily Maintenance Report</h2>
        <canvas ref="dailyMaintenanceChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // Assuming Vue 3
import Chart from 'chart.js/auto'; // Import Chart.js

const employeePerformanceChart = ref(null);
const dailyChemicalChart = ref(null);
const dailyAccidentChart = ref(null);
const monthlySeverityChart = ref(null);
const dailyMaintenanceChart = ref(null);

onMounted(() => {
  createCharts();
});

function createCharts() {
  // Employee Monthly Performance Chart
  employeePerformanceChart.value = new Chart(employeePerformanceChart.value.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Performance',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 70, 61, 40, 55],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Daily Chemical Report Chart
  dailyChemicalChart.value = new Chart(dailyChemicalChart.value.getContext('2d'), {
    type: 'line',
    data: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      datasets: [{
        label: 'Chemical Usage',
        data: [30, 25, 35, 40, 28, 32, 38],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Daily Accident Report Chart
  dailyAccidentChart.value = new Chart(dailyAccidentChart.value.getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Minor', 'Major', 'Fatal'],
      datasets: [{
        label: 'Accidents',
        data: [20, 10, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 205, 86, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      
    }
  });

  // Monthly Severity Report Chart
  monthlySeverityChart.value = new Chart(monthlySeverityChart.value.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Severity',
        data: [5, 3, 7, 2, 6, 4, 8, 5, 7, 3, 6, 4],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Daily Maintenance Report Chart
  dailyMaintenanceChart.value = new Chart(dailyMaintenanceChart.value.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Machine 5'],
      datasets: [{
        label: 'Downtime (hours)',
        data: [8, 6, 9, 7, 5],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
</script>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 60px;
}

h1, h2 {
  color: #000;
}

.graphs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.graph {
  border: 1px solid #ccc;
  padding: 20px;
}

.graph h2 {
  margin-top: 0;
}
</style>

