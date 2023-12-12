const url= "https://striveschool-api.herokuapp.com/api/product/"
const token= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0N2ZhODJjNmEwZDAwMTg0OTVmNmIiLCJpYXQiOjE3MDIzNzM0NzIsImV4cCI6MTcwMzU4MzA3Mn0.GNRVyRZO8sOoKcWkzoz7kYIcGr2pV16SChAmfealR14"

document.addEventListener('DOMContentLoaded', function () {
    // Recupera l'ID del prodotto
    const urlParams = new URLSearchParams(window.location.search);
    const el_Id = urlParams.get('id');

    // Richiesta API per ottenere i dettagli del prodotto
    fetch(`https://striveschool-api.herokuapp.com/api/product/${el_Id}`, {
        headers: {
            "Authorization": token,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Errore: ${response.status}!!`);
        }
        return response.json();
    })
    .then(el => {
        // Visualizza i dettagli del prodotto nella pagina
        const scheda = document.getElementById('product-details');
        scheda.innerHTML = `
        <img src="${el.imageUrl}" alt="${el.name}">
        <h3>${el.name}</h3>
        <h5>${el.brand}</h5>
        <p>${el.description}</p>
        `;
    })
    .catch(error => console.error('Errore durante la richiesta Fetch:', error));
    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', goToHomePage);
});

function goToHomePage() {
    window.location.href = "homepage.html";
}