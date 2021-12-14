/* global Chart, axios */

// let stars = response.data["stargazers_count"];
// let watchers = response.data["subscribers_count"];
// let forksCount = response.data["forks"];

let vue = {};
let angular = {};
let ember = {};
let svelte = {};
let react = {};


axios.get("https://api.github.com/repos/vuejs/vue").then(function (response) {
  // console.log(response.data);
  let stars = response.data["stargazers_count"];
  let watchers = response.data["subscribers_count"];
  let forksCount = response.data["forks"];
  vue["stars"] = stars;
  vue["watchers"] = watchers;
  vue["forks"] = forksCount;
  console.log(vue);
});


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['VueJS Forks', 'VueJS Stars', 'Vue JS watchers', 'Orange'],
    datasets: [{
      label: '# of People',
      data: [2, 4, 6, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
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
