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

// function to create person's card
const createCards =() => {
    let newCards = '';
    for(let i = 0; i < famous.length; i++) {
        newCards += `<div class='person_cards' id='person_cards_${i}'> `;
        newCards += `<header id='person_header'>`;
        newCards += `<h3>${famous[i].name}</h3>`;
        newCards += `<h4>${famous[i].title}</h4>`;
        newCards += `</header>`;
        newCards += `<section id='person_bio'>`;
        newCards += `<p id="bio_${i}">${famous[i].bio}</p>`;
        newCards += `<img src="${famous[i].image}" width="200px" height="200px"></img>`;
        newCards += `</section>`;
        newCards += `<footer id="person_footer">`;
        newCards += `<p>${famous[i].lifespan.birth}</p>`;
        newCards += `<p>${famous[i].lifespan.death}</p>`;
        newCards +=`</footer>`;
        newCards += `</div>`;

    printToDom(newCards, 'person_container');
    }
}
createCards();

let bioId;

// function to add border on click and
const elemChange = () => {
    const personsContainer = document.getElementById('person_container');
    let childrens = personsContainer.children;
    for (let i = 0; i< childrens.length; i++) {
        const element = childrens[i];
        element.addEventListener('click', (e)=>{
            removeBorder();
            element.classList.toggle('border');
            document.getElementById('user_input').focus();
            bioId=e.currentTarget.id;
        })
    }
}

elemChange();

// function to change bio text
let userInput = document.getElementById("user_input");
    const changeText = ()=> {
        let bioCard= document.getElementById(bioId).getElementsByTagName('p')[0];
            bioCard.innerHTML= userInput.value;
        }

// function to remove border
const removeBorder = () => {
    let personCards= document.getElementsByClassName('person_cards');
    for(i = 0; i < personCards.length; i++) {
        personCards[i].classList.remove('border');
    }
};
