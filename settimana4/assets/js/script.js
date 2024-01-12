//funzione per lo scroll dell'header

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        let altezza = 150;
        let header = document.querySelector('header');
    
        if (window.scrollY > altezza) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
        });
    });

//devo aggiungere un ascoltatore una volta che la pagina DOM si è caricata. Nella finestra devo aggiungere una funzione allo scroll: seleziona l'header e una volta che l'altezza dello scroll supera Xnumero devo aggiungere una classe all'header. altrimenti devo rimuoverla
