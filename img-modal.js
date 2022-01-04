// ------------------------------- MODAL IMAGES -----------------------------------------

//INITIALIZATION OF THE VARIABLES 

const imgCliquable = document.querySelectorAll('.img');
const grandesImages = document.querySelectorAll('.imgbig');
const fenetres = document.querySelectorAll('.fmodal');
const allBody = document.body;
let toggle = false;

// OBJECT CONSTRUCTORS TO DISPLAY SMALL IMAGES IN BIGGER FORMAT WHEN WE CLIC--------------------------

class ImgModale {

    constructor(source, alt) {

        //I go search for my images key properties (source, alt);
        this.source = source;
        this.alt = alt;

        // Creation of the images in the DOM;
        let toggleImg = document.createElement('img');
        toggleImg.src = source;
        toggleImg.alt = alt;
        toggleImg.className = "img-modale";
        toggleImg.id = "imgmodale";

        //Adding the image to the DOM;
        document.body.appendChild(toggleImg);
        fenetres.forEach(fenetre => {
            fenetre.classList.add("blur");
        });
        //Adding a nice transition to my images when they appear and disappear;
        setTimeout(() => {
            toggleImg.style.opacity = 1; 
        }, 3);    
    };
};

// OBJECT CONSTRUCTORS TO DISPLAY BIG IMAGES IN ORIGINAL FORMAT WHEN WE CLIC--------------------------

class BigImgModale {

    constructor(source, alt) {

        //I go search for my images key properties (source, alt);
        this.source = source;
        this.alt = alt;

        // Creation of the images in the DOM;
        let toggleImg = document.createElement('img');
        
        toggleImg.src = source;
        toggleImg.alt = alt;
        toggleImg.className = "bigImg-Modale";
        toggleImg.id = "imgmodale";
        document.body.appendChild(toggleImg);
        fenetres.forEach(fenetre => {
            fenetre.classList.add("blur");
        });

        //Adding a nice transition to my images when they appear and disappear;
        setTimeout(() => {
            toggleImg.style.opacity = 1; 
        }, 3);    
    };
};

//ADDING AN EVENT LISTENER TO MY BIG IMAGES TO DISPLAY A MODAL OVERVIEW WHEN WE CLICK ON THEM

grandesImages.forEach(element => {

    toggle = !toggle;
    console.log(toggle);

    element.addEventListener('click',(e) => {
        event.stopPropagation();

        let source = element.getAttribute('src');
        const alt = element.alt;
        const newImg = new BigImgModale (source, alt);
        const apercuImg = document.querySelector('#imgmodale');
        console.log(apercuImg);

        //Activating an event listener to the body once (and once only) the image is open : 
        //When we click on the body, the overview/modal img will be closed;

        allBody.addEventListener('click', () => {
                            
            // setTimeout(() => {
                
                apercuImg.remove();  

                fenetres.forEach(fenetre => {
                    fenetre.classList.remove("blur");
                });                

            // }, 5);
        })

    });
});


let isSortieViaApercu = false;
let isApercuOpen = false;
console.log("toggle avant clic sur image:",toggle);

//ADDING AN EVENT LISTENER TO MY SMALL IMAGES TO DISPLAY A MODAL OVERVIEW WHEN WE CLICK ON THEM

imgCliquable.forEach(element => {
    
    element.addEventListener('click',(e) => {
        event.stopPropagation();
        isApercuOpen = !isApercuOpen;
        const masource = element.getAttribute('src');

        let source = `${masource}`;
        source = source.substring(2);
        const indexPoint = source.indexOf(".");
        source = source.substring(0,indexPoint);
        source = `./${source}original.jpg`;
        const alt = element.alt;
        const newImg = new ImgModale (source, alt);
        const apercuImg = document.querySelector('#imgmodale');
        
        console.log("toggle après clic sur image:", toggle);

        //Activating an event listener to the body once the image is open : 
        //When we click on the body, the overview/modal img will be closed;

        allBody.addEventListener('click', () => {
                            
            // setTimeout(() => {
                
                apercuImg.remove(); 

                isApercuOpen = false;
                toggle = true;
                console.log("isApercuOpen après clic body:", isApercuOpen);
                
                if (isApercuOpen === false && toggle === true) {
                    fenetres.forEach(fenetre => {

                        fenetre.classList.remove("blur");
                        isApercuOpen = !isApercuOpen;
                        toggle = !toggle;
                    })
                }     

            // }, 5);
        })

    });

});

// DO NOT DELEATE * ORIGINAL CODE + TESTINGS * DO NOT DELEATE * ORIGINAL CODE + TESTINGS ***************************

// imgCliquable.forEach(element => {

//     toggle = !toggle;
//     console.log(toggle);


//     element.addEventListener('click',() => {

//         const masource = element.getAttribute('src');

//         let source = `${masource}`;
//         source = source.substring(2);
//         console.log(source);
//         const indexPoint = source.indexOf(".");
//         source = source.substring(0,indexPoint);
//         console.log(source);
//         source = `./${source}original.jpg`;

//         console.log(source);
//         const alt = element.alt;
//         const newImg = new ImgModale (source, alt);
//         const apercuImg = document.querySelector('#imgmodale');
//         console.log(apercuImg);


//         apercuImg.addEventListener('click', () => {
            
//             setTimeout(() => {
//                 apercuImg.remove();
                
//                 fenetres.forEach(fenetre => {
//                     fenetre.classList.remove("blur");
//                 })
//             }, 5); 

//         });
 
//     });
// });







