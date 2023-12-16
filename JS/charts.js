const data = {
    // labels: ['Categoria 1', 'Categoria 2'], // Rótulos para cada dado no gráfico
    datasets: [{
        label: 'Comparativo',
        data: [70, 30], // Valores correspondentes a cada rótulo
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)', // Cor de fundo do primeiro item
            'rgba(54, 162, 235, 0.5)' // Cor de fundo do segundo item
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)', // Cor da borda do primeiro item
            'rgba(54, 162, 235, 1)' // Cor da borda do segundo item
        ],
        borderWidth: 2
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {}
};

document.addEventListener('DOMContentLoaded', () => {
    var myDoughnutChart = new Chart(
        document.getElementById('myDoughnutChart'),
        config
    );
});


document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myBarChart').getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Receita Mensal',
                data: [100, 150, 120, 200, 180, 210, 250, 300, 280, 320, 290, 350], // Valores mensais aqui
                backgroundColor: 'rgba(54, 162, 235, 0.5)', // Cor de fundo das barras
                borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda das barras
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false // Oculta a legenda
                }
            },
            scales: {
                y: {
                    display: false // Oculta o eixo Y (coluna esquerda)
                }
            }
        }
    });
});
