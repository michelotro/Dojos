let maDiv = document.querySelector('div');
// console.log(maDiv);
maDiv.addEventListener('mouseover', function () {
    maDiv.style.borderRadius = "10%";
})
maDiv.addEventListener('mouseleave', function () {
    maDiv.style.borderRadius = "50%";
})

let fleche = document.querySelectorAll('section header');
// console.log(fleche);
let imageCachee = document.querySelectorAll('section article div');
// console.log(imageCachee);


fleche.forEach(element => {
    let afficheImage = element.nextElementSibling;
    element.addEventListener('click', function () {
        // console.log(afficheImage);

        if (afficheImage.style.visibility == "visible") {
            afficheImage.style.visibility = "hidden";
            afficheImage.style.height = "0px";
        }
        else {
            afficheImage.style.visibility = "visible";
            afficheImage.style.height = "auto";
        }

    })
});





let nav = document.querySelector('nav');
// console.log(nav);

let foot = document.querySelector('footer');
// console.log(foot);


// let menu = document.createElement('ul');
// document.querySelector('nav').appendChild(menu);

let xhr = new XMLHttpRequest();
// console.log(xhr);


xhr.open('GET', './data/menu.json');


xhr.addEventListener('load', function () {
    // console.log(xhr.response);


    let maReponse = JSON.parse(xhr.response);
    // console.log(maReponse);

    maReponse.principal.forEach(element => {
        let li = document.createElement('a');
        li.textContent = element.nom;
        nav.appendChild(li);
        li.setAttribute('href', element.lien);
    });

    maReponse.pied.forEach(element => {
        let li = document.createElement('a');
        li.textContent = element.nom;
        foot.appendChild(li);
        li.setAttribute('href', element.lien);
    });
});

xhr.send();

