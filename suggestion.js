const persons = [
    "Alexandre Pré",
    "Alexandre Sarrazin",
    "Amandine Leporace",
    "Anita Darecka",
    "Anthony Labadie",
    "Cédric Mounier",
    "Gregory Ledez",
    "Julie Dussart",
    "Luc Jaubert",
    "Maxime Dupin",
    "Mehdy Guettache",
    "Michael Birepinte",
    "Nicolas Baudet",
    "Nicolas Delisée",
    "Olga Yasnolskaya",
    "Ophélie Beausse",
    "Paul Battault",
    "Paul Castaings",
    "Peter Flandin",
    "Robin Michel",
    "Ryan Tama",
    "Sophie Dussillol",
    "Théo Anache",
    "Valentin Carbonell",
    "Victoire Michel",
    "Yann Stefanutti",
];

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keypress', function () {

    const input = searchInput.value;

    const result = persons.filter(item => {
        if (!item.search(`${input}`)) {
            return item;
        }

    })
    console.log(result);
})
