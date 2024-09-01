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

// Recupero l'elemento dal DOM
const teamContainer = document.querySelector('.team-container');

// Elaboro i dati
let cards = '';

for (const member of teamMembers) {
    const { image, name, role } = member;

    cards += `
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
}

// Inserisco le schede nel container
teamContainer.innerHTML = cards;
