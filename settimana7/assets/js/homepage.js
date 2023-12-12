const url= "https://striveschool-api.herokuapp.com/api/product/"
const token= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0N2ZhODJjNmEwZDAwMTg0OTVmNmIiLCJpYXQiOjE3MDIzNzM0NzIsImV4cCI6MTcwMzU4MzA3Mn0.GNRVyRZO8sOoKcWkzoz7kYIcGr2pV16SChAmfealR14"
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

document.addEventListener('DOMContentLoaded', function () {
    fetch(url, {
        headers: headers,
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(el => {
            let card = document.createElement('div');
            card.classList.add('card', 'mb-4');
            card.classList.add('carta');
            
            let img = document.createElement('img');
            img.src = el.imageUrl;
            img.classList.add('card-img-top', 'cover');

            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            let cardTitle = document.createElement('h5');
            cardTitle.innerText  = el.name;

            let cardBrand = document.createElement('h6');
            cardBrand.innerText  = el.brand;

            let cardText = document.createElement('p');
            cardText.innerText  = el.description;

            let detailBtnDiv = document.createElement('div');
            detailBtnDiv.classList.add('detailBtnDiv');


            let detailBtn = document.createElement('button');
            detailBtn.classList.add('btn', 'btn-info');
            detailBtn.classList.add('detailBtn');
            detailBtn.innerText  = 'Dettagli';
            detailBtn.setAttribute('id','./detailpage.html')
            detailBtn.setAttribute('id', el._id)

            detailBtn.addEventListener('click', function () {
                // Reindirizzamento a 'detailpage.html'
                window.location.href = `detailpage.html?id=${el._id}`;
            });

            card.appendChild(img);
            card.appendChild(cardBody);
        
            detailBtnDiv.appendChild(detailBtn);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardBrand);
            cardBody.appendChild(cardText);
            card.appendChild(detailBtnDiv);
        
            document.querySelector('.mieiProdotti').appendChild(card);
        });
    })
    .catch(error => console.error('Errore durante la richiesta Fetch:', error));

    const homeButton = document.getElementById('goToEditPage');
    homeButton.addEventListener('click', goToEditPage);
});

function goToEditPage() {
    window.location.href = "editpage.html";
}