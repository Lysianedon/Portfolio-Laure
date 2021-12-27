// ------------------------------- IMAGE MODALE ---------------------------------------

const imgCliquable = document.querySelectorAll('.img');
const fenetres = document.querySelectorAll('.fmodal');
const allBody = document.body;

class ImgModale {

    constructor(source, alt) {

        this.source = source;
        this.alt = alt;

        let toggleImg = document.createElement('img');
        
        toggleImg.src = source;
        toggleImg.alt = alt;
        toggleImg.className = "img-modale";
        toggleImg.id = "imgmodale"
        document.body.appendChild(toggleImg);
        // fenetres.classList.add("blur");
        fenetres.forEach(fenetre => {
            fenetre.classList.add("blur");
        });

        setTimeout(() => {
            toggleImg.style.opacity = 1; 
        }, 3);    
        // console.log(toggleImg);
    }
}

imgCliquable.forEach(element => {

    element.addEventListener('click',() => {

        const source = element.getAttribute('src');
        console.log(source);
        const alt = element.alt;
        const newImg = new ImgModale (source, alt);
        const apercuImg = document.querySelector('#imgmodale');
        console.log(apercuImg);
    
        apercuImg.addEventListener('click', () => {
            
            setTimeout(() => {
                apercuImg.remove();
                
                fenetres.forEach(fenetre => {
                    fenetre.classList.remove("blur");
                })
            }, 5);  
        })
    
    });
});

// imgCliquable.addEventListener('click',() => {

//     let source = imgCliquable.getAttribute('src');
//     console.log(source);
//     let alt = imgCliquable.alt;
//     let newImg = new ImgModale (source, alt);
//     const apercuImg = document.querySelector('#imgmodale');
//     console.log(apercuImg);
//     const everywhere = apercuImg.parentElement;

//     apercuImg.addEventListener('click', () => {
        
//         setTimeout(() => {
//             apercuImg.remove();
//             fenetre.classList.remove("blur");
//         }, 3);
        
//     })


// });