const famous = [
    {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
        birth: 1747,
        death: 1797
        }
    },
    {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
        birth: 1747,
        death: 1797
        }
    },
    {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
        birth: 1747,
        death: 1797
        }
    },
    {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
        birth: 1747,
        death: 1797
        }
    }
]

// function to print to DOM
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const createCards =() => {
    let newCards = '';
    for(let i = 0; i < famous.length; i++) {
        newCards += `<div class='person_cards' id='person_cards_${i}' `;
        newCards += `<header class='person_header'>`;
        newCards += `<h3>${famous[i].name}</h3>`;
        newCards += `<h4>${famous[i].title}</h4>`;
        newCards += `</header>`;
        newCards += `<section class='person_bio'>`;
        newCards += `<p>${famous[i].bio}</p>`;
        newCards += `<img src="${famous[i].image}" width="200px" height="200px"></img>`;
        newCards += `</section>`;
        newCards += `<footer class="person_footer">`;
        newCards += `<p>${famous[i].lifespan.birth}</p>`;
        newCards += `<p>${famous[i].lifespan.death}</p>`;
        newCards +=`</footer>`;
        newCards += `</div>`;

    printToDom(newCards, 'person_container');
    }
}
createCards();

const personsContainer = document.getElementById('person_container');
    // collection of children of Person Container Div
    let childrens = personsContainer.children;
    let element = childrens.item(0);
    let element1 = childrens.item(1); 
    let element2 = childrens.item(2);
    let element3 = childrens.item(3);
        if(element){
            element.addEventListener('click',()=>{
            element.style.border="1px dotted black";});
        } if (element1){
            element1.addEventListener('click',()=>{
            element1.style.border="1px dotted red";});
        } if (element2){
            element2.addEventListener('click',()=>{
            element2.style.border="1px dotted blue";});
        } if (element3){
            element3.addEventListener('click',()=>{
            element3.style.border="1px dotted brown";});
        }
            