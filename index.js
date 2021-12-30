/* global Chart, axios */

// let stars = response.data["stargazers_count"];
// let watchers = response.data["subscribers_count"];
// let forksCount = response.data["forks"];

let forks = {};
let stars = {};
let watchers = {};
let labels = [];


fetchGithub("https://api.github.com/repos/facebook/react", "React");
fetchGithub("https://api.github.com/repos/angular/angular.js", "Angular");
fetchGithub("https://api.github.com/repos/sveltejs/svelte", "Svelte");
fetchGithub("https://api.github.com/repos/emberjs/ember.js", "Ember");
fetchGithub("https://api.github.com/repos/vuejs/vue", "Vue");

function fetchGithub(url, framework) {
  axios.get(url).then(function (response) {
    forks[framework] = response.data["forks"];
    stars[framework] = response.data["stargazers_count"];
    watchers[framework] = response.data["subscribers_count"];

  });
}



console.log(forks);
console.log(stars);
console.log(watchers);



axios.get("https://api.github.com/repos/facebook/react").then(function (response) {
  console.log(response.data);
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Forks', 'Stars', 'Watchers', 'Forks', 'Stars', 'Watchers'],
      datasets: [{
        label: '# of People',
        data: [forks.Vue, stars.Vue, watchers.Vue, forks.React, stars.React, watchers.React],
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


});








