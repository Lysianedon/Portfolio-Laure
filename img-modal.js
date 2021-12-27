// ------------------------------- IMAGE MODALE ---------------------------------------

const imgCliquable = document.querySelectorAll('.img');
const fenetres = document.querySelectorAll('.fmodal');
const allBody = document.body;
let toggle = false;

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

    toggle = !toggle;
    console.log(toggle);

    element.addEventListener('click',() => {

        const masource = element.getAttribute('src');

        let source = `${masource}`;
        source = source.substring(2);
        console.log(source);
        const indexPoint = source.indexOf(".");
        source = source.substring(0,indexPoint);
        console.log(source);
        source = `./${source}original.jpg`;


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

        });

        
        if (toggle=== false) {
            
            setTimeout(() => {
                apercuImg.remove();
                
                fenetres.forEach(fenetre => {
                    fenetre.classList.remove("blur");
                })
            }, 5); 

            toggle = !toggle;
        }

        // e.target.addEventListener('click', () => {
            
        //     setTimeout(() => {
        //         apercuImg.remove();
                
        //         fenetres.forEach(fenetre => {
        //             fenetre.classList.remove("blur");
        //         })
        //     }, 5);  
        // });
    
    });
});

