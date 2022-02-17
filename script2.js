var data = {
  labels: ["Malte", "Chypre", "Luxembourg", "Slovénie", "Estonie", "Lettonie", "Croatie", "Irlande", "Lituanie", "Bulgarie", "Pays-Bas", "Slovaquie", "Hongrie", "Tchéquie", "Autriche", "Finlande", "Portugual", "Danemark", "Grèce", "Belgique", "Roumanie", "Suède", "Pologne", "Espagne", "Italie", "France", "Allemagne"],
  datasets: [{
    label: "Dépenses militaire en Milliards",
    backgroundColor: [
      'rgba(100,149,217,0.8)'
    ],
    borderColor: "rgba(255,255,255)",
    borderWidth: 2,
    hoverBackgroundColor: "rgba( 9, 69, 142 ,0.5)",
    hoverBorderColor: "rgba( 9, 69, 142 ,1)",
    data: [0.1, 0.4, 0.5, 0.5, 0.7, 0.8, 1, 1.1, 1.2, 1.3, 1.3, 1.8, 2.4, 3.2, 3.6, 4, 4.6, 4.9, 5.3, 5.5, 5.7, 6.4, 13, 17.4, 28.9, 52.7, 52.8],
  }]
};

var options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      stacked: true,
      grid: {
        display: true,
        color: "rgba(100,149,217,0.3)"
      }
    },
    x: {
      grid: {
        display: false,
        color: "rgba(255,255,255)"
      }
    }
  }
};

new Chart('chart', {
  type: 'bar',
  options: options,
  data: data
});