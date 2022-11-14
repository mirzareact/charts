const lineChart = document.getElementById("lineChart")

const labels = [
    "23 May",
    "24 May",
    "25 May",
    "26 May",
    "27 May",
    "28 May",
    "29 May",
    "30 May",
    "31 May",
    "01 June",
    "02 June",
    "03 June",
    "04 June",
    "05 June",
    "06 June",
    "07 June",
    "08 June",
    "09 June",
]

new Chart(lineChart, {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Returning views",   
                data: [1844, 1554, 1273, 1284, 1126, 946, 964, 1793, 1432, 1130, 1074, 954, 856, 833, 1536, 1416, 1248, 1226],
                borderColor: "rgba(66, 138, 254, 1)",
            },
            {
                label: "New views",
                data: [1199, 1314, 1147, 1403, 1217, 1015, 1138, 1272, 957, 862, 716, 712, 610, 585, 847, 744, 756, 781],
                borderColor: "rgba(235, 134, 52, 1)",
            }
        ]
    }
})

const pieChart = document.getElementById("pieChart")

new Chart(pieChart, {
    type: "pie",
    data: {
        labels: ["Serbia", "BiH", "Croatia", "North Macedonia", "Montenegro", "Other"],
        datasets:[
            {
                label: "Countries",
                data: [20.3, 49.6, 9.5, 3.6, 2.6, 14.4],
                backgroundColor: [
                    "rgba(52, 235, 143, 1)",
                    "rgba(235, 201, 52, 1)",
                    "rgba(52, 153, 235, 1)",
                    "rgba(235, 52, 119, 1)",
                    "rgba(186, 52, 235, 1)",
                    "rgba(52, 135, 170, 1)"
                ]
            }
        ]
    }
})

const barChart = document.getElementById("barChart")

new Chart(barChart, {
    type: "bar",
    data: {
        labels: ["13 - 17", "18 - 24", "25 - 34", "35 - 44", "45 - 54", "55 - 64", "65+"],
        datasets: [
            {
                label: "Viewer age",
                data: [1.7, 43.3, 34.4, 13.6, 5.6, 1.2, 0.3],
                backgroundColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(155, 159, 64, 1)"
                ]
            }
        ]
    }
})