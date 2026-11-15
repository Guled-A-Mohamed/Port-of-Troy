
const restaurantData = [
    {
        id: 1,
        naam: 'Brasserie De Gouden Kiel',
        locatie: {
            straat: 'Jachthavenweg',
            huisnummer: '12',
            plaats: 'Kamperland',
            park: 'Port of Troy – Duin en Tij',
            park_afstand: '0 km (op het park)',
        },
    },
    {
        id: 2,
        naam: 'De Oude Vuurtoren',
        locatie: {
            straat: 'Oosterscheldedijk',
            huisnummer: '88',
            plaats: 'Burgh-Haamstede',
            park: 'Port of Troy – Duin en Tij',
            park_afstand: '3,2 km',
        },
    },
    {
        id: 3,
        naam: 'Het Kraaiennest',
        locatie: {
            straat: 'Polderdreef',
            huisnummer: '4',
            plaats: 'De Haan',
            park: 'Port of Troy – De Vlaamse Boeg',
            park_afstand: '0 km (op het park)',
        },
    },
    {
        id: 4,
        naam: 'Kade 12',
        locatie: {
            straat: 'Vismijnkaai',
            huisnummer: '12',
            plaats: 'Zeebrugge',
            park: 'Port of Troy – De Vlaamse Boeg',
            park_afstand: '4,5 km',
        },
    },
    {
        id: 5,
        naam: 'Bistro Das Logbuch',
        locatie: {
            straat: 'Kreidefelsenweg',
            huisnummer: '7',
            plaats: 'Putgarten',
            park: 'Port of Troy – Kap Arkona',
            park_afstand: '0 km (op het park)',
        },
    },
    {
        id: 6,
        naam: 'Der Alte Kompass',
        locatie: {
            straat: 'Seebrückenpromenade',
            huisnummer: '21',
            plaats: 'Altenkirchen',
            park: 'Port of Troy – Kap Arkona',
            park_afstand: '1,8 km',
        },
    },
    {
        id: 7,
        naam: 'Bistro L’Ancre Bleue',
        locatie: {
            straat: 'Allée des Corsaires',
            huisnummer: '3',
            plaats: 'Saint-Malo',
            park: 'Port of Troy – Côte d’Émeraude',
            park_afstand: '0 km (op het park)',
        },
    },
    {
        id: 8,
        naam: 'Le Phare d’Or',
        locatie: {
            straat: 'Route de la Pointe',
            huisnummer: '45',
            plaats: 'Cancale',
            park: 'Port of Troy – Côte d’Émeraude',
            park_afstand: '1,5 km',
        },
    },
    {
        id: 9,
        naam: 'La Cabane du Pin',
        locatie: {
            straat: 'Chemin de la Forêt',
            huisnummer: '10',
            plaats: 'Hossegor',
            park: 'Port of Troy – Les Pins Dorés',
            park_afstand: '0 km (op het park)',
        },
    },
    {
        id: 10,
        naam: 'Beachclub Calypso',
        locatie: {
            straat: 'Boulevard de l’Océan',
            huisnummer: '102',
            plaats: 'Capbreton',
            park: 'Port of Troy – Les Pins Dorés',
            park_afstand: '0,6 km',
        },
    },
    {
        id: 11,
        naam: 'Restaurante El Puerto',
        locatie: {
            straat: 'Plaza de Troya',
            huisnummer: '1',
            plaats: 'Conil de la Frontera',
            park: 'Port of Troy – Costa de la Luz',
            park_afstand: '0 km (op het park)',
        },
    },
    {
        id: 12,
        naam: 'Chiringuito El Faro',
        locatie: {
            straat: 'Playa de los Bateles',
            huisnummer: 's/n',
            plaats: 'Conil de la Frontera',
            park: 'Port of Troy – Costa de la Luz',
            park_afstand: '0,5 km',
        },
    },
    {
        id: 13,
        naam: 'Café Atlântico',
        locatie: {
            straat: 'Avenida dos Descobrimentos',
            huisnummer: '15',
            plaats: 'Colares',
            park: 'Port of Troy – Cabo da Roca',
            park_afstand: '0 km (op het park)',
        },
    },
    {
        id: 14,
        naam: 'Taberna O Navegador',
        locatie: {
            straat: 'Estrada do Cabo',
            huisnummer: '74',
            plaats: 'Sintra',
            park: 'Port of Troy – Cabo da Roca',
            park_afstand: '1,2 km',
        },
    },
    {
        id: 15,
        naam: 'La Taverna di Ettore',
        locatie: {
            straat: 'Via dei Limoni',
            huisnummer: '8',
            plaats: 'Maiori',
            park: 'Port of Troy – Baia di Ulisse',
            park_afstand: '0 km (op het park)',
        },
    },
    {
        id: 16,
        naam: 'Osteria del Porto Vecchio',
        locatie: {
            straat: 'Vicolo del Mare',
            huisnummer: '19',
            plaats: 'Amalfi',
            park: 'Port of Troy – Baia di Ulisse',
            park_afstand: '2,4 km',
        },
    },
    {
        id: 17,
        naam: 'Bar & Grill Maestrale',
        locatie: {
            straat: 'Via della Vela',
            huisnummer: '2',
            plaats: 'Palau',
            park: 'Port of Troy – Isola del Vento',
            park_afstand: '0 km (op het park)',
        },
    },
    {
        id: 18,
        naam: 'Ristorante Scoglio Bianco',
        locatie: {
            straat: 'Località Cala Granito',
            huisnummer: '33',
            plaats: 'Santa Teresa Gallura',
            park: 'Port of Troy – Isola del Vento',
            park_afstand: '2,9 km',
        },
    },
    {
        id: 19,
        naam: 'Seaside Grill Poseidon',
        locatie: {
            straat: 'Obala Troja',
            huisnummer: '5',
            plaats: 'Rovinj',
            park: 'Port of Troy – Dalmatia Cove',
            park_afstand: '0 km (op het park)',
        },
    },
    {
        id: 20,
        naam: 'Konoba Troja',
        locatie: {
            straat: 'Maslinova Ulica',
            huisnummer: '14',
            plaats: 'Bale',
            park: 'Port of Troy – Dalmatia Cove',
            park_afstand: '1,6 km',
        },
    }
];

export default restaurantData;
