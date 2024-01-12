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
        const detailForm = document.getElementById('product-details');
        detailForm.classList.add('detailForm');

        let formImg = document.createElement('img');
        formImg.src = el.imageUrl;
        formImg.classList.add('formImg');
        
        let infoForm = document.createElement('div');
        infoForm.classList.add('infoForm');

        let titleForm = document.createElement('h3');
        titleForm.classList.add('titleForm');
        titleForm.innerText = el.name;

        let brandForm = document.createElement('h5');
        brandForm.classList.add('brandForm');
        brandForm.innerText = el.brand;

        let descriptionForm = document.createElement('p');
        descriptionForm.classList.add('descriptionForm');
        descriptionForm.innerText = el.description;

        let priceForm = document.createElement('p');
        priceForm.classList.add('price');
        priceForm.innerText = `$ ${el.price}`;


        detailForm.appendChild(formImg)
        detailForm.appendChild(infoForm)
        
        infoForm.appendChild(titleForm)
        infoForm.appendChild(brandForm)
        infoForm.appendChild(descriptionForm)
        infoForm.appendChild(priceForm)


        document.querySelector('detailForm').appendChild(detailForm);


    })
    .catch(error => console.error('Errore durante la richiesta Fetch:', error));
    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', goToHomePage);
});

function goToHomePage() {
    window.location.href = "homepage.html";
}