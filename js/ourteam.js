const teamMembers = [
    {
        id: 1,
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        id: 2,
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        id: 3,
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        id: 4,
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        id: 5,
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        id: 6,
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


//voglio una funzione per generare le immagini 



const teamContainer = document.querySelector('.team-container');
const form = getElementById('member-form');
const nameField = getElementById('form');
const roleField = getElementById('role');
const imageField = getElementById('image');


const createCard = member => {
    const { image, name, role } = member;
    const card = `
        <div class="team-card">
            <div class="card-image">
                <img src="image/${image}" alt="${name}">
            </div>
            <div class="card-text">
                <h3>${name}</h3>
                <p>${role}</p>
            </div>
        </div>
    `;

    return card;


}




// Recupero l'elemento dal DOM
//const teamContainer = document.querySelector('.team-container');

// Elaboro i dati
let cards = '';

for (const member of teamMembers) {

    cards += createCard(member)



}

// Inserisco le schede nel container
teamContainer.innerHTML = cards;




form.addEventListener('submit', e => {



    //il caricamento della pagina è una conseguenza dell'invio 
    e.preventDefault();

    const name = nameField.value.trim();
    const role = roleField.value.trim();
    const image = imageField.value.trim();


    //validazione 


    if (!name || !role || !image) {

        alert('tuttii i campi sono obligatori');
        return;
    }

    const newMember = {//creazione dinamica di un oggetto 
        id: teamMembers.length + 1,
        name: name,
        role: role,
        image: image,
    }

    teamMembers.push(newMember);
    teamContainer.innerHTML = cards;


})


