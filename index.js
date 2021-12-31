

/* global Chart, axios */
let forks = {};
let stars = {};
let watchers = {};
let labels = [];

let react = "https://api.github.com/repos/facebook/react";
let vue = "https://api.github.com/repos/vuejs/vue";
let angular = "https://api.github.com/repos/angular/angular.js";
let svelte = "https://api.github.com/repos/sveltejs/svelte";
let ember = "https://api.github.com/repos/emberjs/ember.js";

let reactRequest = axios.get(react);
let vueRequest = axios.get(vue);
let angularRequest = axios.get(angular);
let svelteRequest = axios.get(svelte);
let emberRequest = axios.get(ember);

// function fetchGithub(url, framework) {
//   axios.get(url).then(function (response) {
//     forks[framework] = response.data["forks"];
//     stars[framework] = response.data["stargazers_count"];
//     watchers[framework] = response.data["subscribers_count"];
//   });
// }

axios
  .all([reactRequest, vueRequest, angularRequest, svelteRequest, emberRequest])
  .then(
    axios.spread((...responses) => {
      let vueResponse = responses[0];
      let reactResponse = responses[1];
      let angularResponse = responses[1];
      let svelteResponse = responses[1];
      let emberResponse = responses[1];

      vueResponse = responses[0].data;
      reactResponse = responses[1].data;
      angularResponse = responses[2].data;
      svelteResponse = responses[3].data;
      emberResponse = responses[4].data;

      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Stars', 'Watchers', 'Forks'],
          datasets: [
            {
              label: 'Vue.js',
              data: [vueResponse.stargazers_count, vueResponse.subscribers_count, vueResponse.forks],
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
            },
            {
              label: 'React',
              data: [reactResponse.stargazers_count, reactResponse.subscribers_count, reactResponse.forks],
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
            },
            {
              label: 'Angular',
              data: [angularResponse.stargazers_count, angularResponse.subscribers_count, angularResponse.forks],
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
            },
            {
              label: 'Svelte',
              data: [svelteResponse.stargazers_count, svelteResponse.subscribers_count, svelteResponse.forks],
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
            },
            {
              label: 'EmberJS',
              data: [emberResponse.stargazers_count, emberResponse.subscribers_count, emberResponse.forks],
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
            },
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
  );


// fetchGithub(react, "React");
// fetchGithub(vue, "Vue");
// fetchGithub(angular, "Angular");
// fetchGithub(svelte, "Svelte");
// fetchGithub(ember, "Ember");


// axios.get("https://api.github.com/repos/facebook/react").then(function (response) {
//   console.log(response.data);



// });








