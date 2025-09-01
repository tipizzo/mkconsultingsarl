import logo from './mklogo1.png'
import mklogoimg from './mklogo_image.jpg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import tooth from './tooth.jpg'
import doug from './doug.jpg'
import mers from './mers.jpg'
import mugunga from './mugunga.jpg'
import coming_soon from './coming_soon.png'
import coming_soon_color from './coming_soon_color.png'
import worker from './worker.jpg'
import linkedin from './linkedin.png'
import workers from './workers.png'
import gazon_synth from "./gazon_synth.png"
import residence from './residence.png'
import bodega from './bodega.png'
import maintenance from './maintenance.png'
import kalambo from './kalambo.png'
import adduction from './adduction.png'
import mur from './mur.png'
import mur2 from './mur2.png'

export const assets = {
    logo,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    left_arrow,
    right_arrow,
    worker,
    mklogoimg,
    linkedin,
    mugunga,
    workers,
    gazon_synth,
    residence,
    bodega,
    maintenance,
    kalambo,
    mur,
    mur2
}

export const projectsData = [
    {
      id: 1,
      title: "Gazon synthétique au stade MUGUNGA",
      price: "2021 - 2023",
      location: "Goma",
      category: "Projets réalisés",
      image: gazon_synth
    },
    {
      id: 2,
      title: "Rénovation de l'HOTEL RESIDENCE",
      price: "2021 - A présent",
      location: "Bukavu",
      category: "Projets en cours",
      image: residence
    },
    {
      id: 3,
      title: "Nouvelle salle BODEGA",
      price: "2024",
      location: "Bukavu",
      category: "Projets réalisés",
      image: bodega
    },
    {
      id: 4,
      title: "Maintenance route GOMA-RUTSHURU",
      price: "2019 - A présent",
      location: "Nord-Kivu",
      category: "Projets réalisés",
      image: maintenance
    },
    {
      id: 5,
      title: "Road Survey à KALAMB0 (23KM)",
      price: "2020",
      location: "Sud-Kivu",
      category: "Etudes réalisées",
      image: kalambo
    },
    {
      id: 6,
      title: "Adduction d'eau pour la REGIDESO",
      price: "2020",
      location: "Ituri",
      category: "Projets réalisés",
      image: adduction
    },
    
    {
      id: 7,
      title: "Construction d'un mur de soutenement à BAGIRA",
      price: "2016",
      location: "Sud-Kivu",
      category: "Projets réalisés",
      image: mur
    },
    {
      id: 8,
      title: "Mur de soutenement à l'HOTEL RESIDENCE",
      price: "2021",
      location: "Sud-Kivu",
      category: "Projets réalisés",
      image: mur2
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Ir. KAHASHA M. Yves",
        title: "Co-Founder & Directeur Gérant",
        image: doug,
        alt: "Portrait of Yves",
        rating: 5,
        linkdin: "https://www.linkedin.com/in/muhigirwa-kahasha-yves-32903aa4/",
        text: "Ingénieur civil avec plus de 10 ans d’expérience dans la conception et la gestion de projets d’infrastructures. Expert en supervision de chantiers et optimisation des processus de construction."
    },
    {
        name: "Ir. KABANGA Y. Venant",
        title: "Co-Founder & Directeur Gérant Adjoint",
        image: tooth,
        alt: "Portrait of Venant",
        rating: 4,
        linkdin: "https://www.linkedin.com/in/kabanga-venant-171222116/",
        text: "Spécialiste en ingénierie civile, fort de plus d’une décennie d’expérience dans les projets résidentiels, commerciaux et publics. Reconnu pour son savoir-faire en planification et exécution durable."
    },
    {
        name: "Ir. YEMBA Axel",
        title: "Directeur Technique",
        image: mers,
        alt: "Portrait of Axel",
        rating: 5,
        linkdin: "https://www.linkedin.com/in/axel-yemba-84a0b983/",
        text: "Ingénieur civil senior avec plus de 10 ans d’expertise. Passionné par l’innovation dans le domaine de la construction et la réalisation de projets complexes alliant qualité et efficacité."
    }
];