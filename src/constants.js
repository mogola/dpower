const path = './../images/';

const ressources = {
    "home1": {
        "title": "Créez des expériences digitales mobiles et web adaptatives avec firstdigital",
        "content": "De la strategie de haut niveau et la pensée creative à l\'éxecution et aux performances parfaites en pixels nous nous effondrons pour ajouter de la valeur à votre marque.Nous pensons grand, donnons vie à des idées, concevons des expériences et racontons des histoires qui rendent les utlisateurs heureux.",
    },
    "home2": {
        "title": "Conseil, agence, entièrement numérique",
        "content": "Nous résolvons les défis numériques et créons des expériences client mémorables grâce à la conception, l\'ingénierie et l\'optimisation de produits"
    },
    "home3": {
        "title": "Nous croyons à la collaboration et à la co-création",
        "content": "Optimiser l\'expérience client grâce au digital"
    },
    "home4": {
        "title": "Partagez des émotions",
        "content": "Nous sommes tout aussi enthousiastes à l\'idée de voir grand que de transformer des idées en lignes de codes, de beaux designs, des flux dynamiques et des histoires sociales"
    },
    "contact": {
        "title": "Contact",
        "content": "Nous serons à votre disposition"
    }
}

const ressourcesSecurity = {
    "home1": {
        "title": "Sécurisez votre trafic web",
        "content": "Assurer votre sécurité web aujourd\'hui et pour l'avenir, nous vous accompagnons et nous vous aidons à assurer la protection web de votre société",
    },
    "home2": {
        "title": "Protection avant, pendant et àprés une attaque",
        "content": "Les sites web sont par nature des éléments très exposés du système d\'information. Leur sécurisation revêt une grand importance et ceux à plusieurs titres"
    },
    "home3": {
        "title": "Audit et sécurisation de site web",
        "content": ""
    },
    "home4": {
        "title": "Audit sécurité site web",
        "content": "Des cyberattaques se produisent tous les jours, car en cas de problème de sécurité, toute personne ayant une connexion Internet peut trouver les faiblesses de votre plate-forme"
    },
    "contact": {
        "title": "Contact",
        "content": "Comment pouvons-nous vous aider ?"
    }
}

const ICON = [
    {
        'text': 'Travailler dur',
        'nameicon': 'brain'
    },
    {
        'text': 'Être cool',
        'nameicon': 'grin'
    },
    {
        'text': 'Voir Grand',
        'nameicon': 'trophy'
    },
    {
        'text': 'Aimer le digital',
        'nameicon': 'heart'
    },
    {
        'text': 'S\'amuser',
        'nameicon': 'grin-stars'
    }

]

const ICONBRAND = [
    {
        'text': 'Wordpress',
        'nameicon': 'wordpress'
    },
    {
        'text': 'Shopify',
        'nameicon': 'shopify'
    },
    {
        'text': 'Salesforce',
        'nameicon': 'salesforce'
    },
    {
        'text': 'Wix',
        'nameicon': 'wix'
    },
    {
        'text': 'Php',
        'nameicon': 'php'
    }

]

const LOGO = [
    path + "rapelite.png",
    path + "dewalgo-logo.png",
    path + "lionsport.png"
]

const CONSTANT = {
    "logoSVG": path + "first-digital-black.svg",
    "logo": path + "first-digital-white.png",
    "web0": path + "application_block_2.png",
    "web1": path + "application_block_1.png",
    "web2": path + "application_block_3.png",
    "web5": path + "application_block_5.png"
}

const NAV = [
    {
        "text": "Développement Web",
        "link": "/"
    },
    {
        "text": "Sécurité Web",
        "link": "/security"
    },
    {
        "text": "Contact",
        "link": "/contact"
    }
]
export {
    CONSTANT,
    LOGO,
    ressources,
    ICON,
    ICONBRAND,
    NAV,
    ressourcesSecurity
}