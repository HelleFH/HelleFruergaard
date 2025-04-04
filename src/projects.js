import { isStyledComponent } from "styled-components";

const projects = [

  {
    "id": 1,
    "name": "React Site",
    "technologies": "React",
    "images": ["/images/sentispec-screen.png"],
    "projectLink": "https://sentispec.ai/",
    "githubLink": "https://github.com/HelleFH/sentispec",
    "buttonText": "View Project",
    "githubButtonText": "GitHub",
    "descriptionHeader": "A Company Website",
    "description": "This is a React-based static website for a company. The website is designed to allow seamless interactions with HubSpot's marketing and CRM tools, embedded YouTube videos for content sharing, and Outlook for email management and scheduling. The site serves as a professional online presence with interactive elements that enhance user engagement and communication.",
    "technologiesMore": [
      "React",
      "HubSpot API",
      "YouTube API",
      "Outlook API"
    ]
  }
,  
  {
    "id": 2,
    "name": "React Store",
    "technologies": "Firebase, React",
    "images": ["/images/clothes-store-screen.png"],
    "projectLink": "https://react-clothes-store.onrender.com/",
    "githubLink": "https://github.com/HelleFH/react-clothes-store",
    "buttonText": "View Project",
    "githubButtonText": "GitHub",
    "descriptionHeader": "A React Shop with a Firebase Backend and Admin Panel",
    "description": "This is an e-commerce store built with React and integrated with Firebase for authentication and database management. The app features a user login system, shopping cart with persistent data, and profile creation. Users can view products, select sizes and colors, and complete checkout after signing up. The admin panel allows for full CRUD operations, including adding, editing, and removing products and users, as well as managing customer accounts.",
    "technologiesMore": [
      "Vite",
      "Formik",
      "Moment",
      "Yup",
      "Redux",
      "Enzyme"
    ],
    "username": "duser7707@gmail.com",
    "password": "Demopassword123",
    "adminUsername": "dmndmuser@gmail.com",
    "adminPassword": "Demopassword123"
  }
,  
  {
    id:3 ,
    name: "React Snippets",
    technologies: "React, JavaScript",
    images: ["/images/snippets-screen.png"],
    projectLink: "https://hellefh.github.io/react-snippets/",
    githubLink: "https://github.com/hellefh/react-snippets",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Various React components",
    description: "React snippets with a navbar, lightbox gallery, a download button and Tinder-like swipe cards. All elements are fully responsive.",
    technologiesMore: ["JavaScript"]
  },
  {
    id: 4,
    name: "A Product Portfolio",
    technologies: "React",
    images: ["/images/portfolio-screen.png"],
    projectLink: "https://product-page-b2ed.onrender.com/",
    githubLink: "https://github.com/HelleFH/Monty-Hall-Explained",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "React Product Grid with Modal",
    description: "A dynamic React portfolio page showcasing a visually appealing image grid with a sleek overlay. When an image is clicked, a modal window opens, providing detailed information about the corresponding project",
    technologiesMore: [
      "React",
      "Bootstrap",
      "Styled Components",
      "React Swipable"
    ]
  },
  {
    id: 5,
    name: "MERN Listings",
    technologies: "MongoDB, Express, React, Node.js",
    images: ["/images/listing-screen.png"],
    projectLink: "https://react-listings-1.onrender.com/",
    githubLink: "https://github.com/HelleFH/react-listings",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Holiday Home Listings using MERN Stack",
    description: "Users can upload property images, which are stored in MongoDB and managed using Cloudinary for image hosting. This application demonstrates CRUD operations, image uploading, and real-time data updates using frontend state management to ensure the UI reflects the latest changes.",
    technologiesMore: [
      "Vite",
      "Bootstrap",
      "Nodemon",
       "MongoDB",
       "Express",
       "React",
       "Node.js",
       "RESTful API"
    ]
  },
  {
    id: 6,
    name: "Cloudinary Upload/Delete",
    technologies: "MongoDB, Express, Vue, Node.js",
    images: ["/images/aiimages-screen.png"],
    projectLink: "https://cloudinary-upload-delete-1.onrender.com/",
    githubLink: "https://github.com/HelleFH/cloudinary-upload-delete",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Image management with Cloudinary API",
    description: "This project is a web application for uploading and deleting images using the Cloudinary API. It is built with MongoDB, Express, Vue, and Node.js.",
    technologiesMore: [
      "MongoDB",
      "Express",
      "Vue",
      "Node.js",
      "Cloudinary",
      "RESTful API"

    ]
  },
  
    {
      "id": 7,
      "name": "MEVN Cart",
      "technologies": "MongoDB, Express, Vue, Node.js",
      "images": ["/images/mevncart-screen.png"],
      "projectLink": "https://shopping-cart-master-1-5ylu.onrender.com/",
      "githubLink": "https://github.com/hellefh/shopping-cart",
      "buttonText": "View Project",
      "githubButtonText": "GitHub",
      "descriptionHeader": "MEVN Stack Shopping Cart with Cart Storage and User Authentication",
      "description": "This shopping cart application, built with the MEVN stack (MongoDB, Express, Vue, Node.js), allows users to securely log in and manage their shopping cart. The cart updates in real-time, with changes (add, remove, update items) immediately reflected in the MongoDB database, ensuring data is always synchronized across sessions.",
      "username": "hellefruergaard@mevn-shop.com",
      "password": "password123",
      "technologiesMore": [
        "MongoDB",
        "Express",
        "Vue",
        "Node.js",
        "RESTful API",
        "Multer",
        "Zustand",
        "Formik",
        "Yup",
        "Bcrypt",
        "Jsonwebtoken"
      ]
    }
,    
  {
    id: 8,
    name: "MERN Plant Calendar",
    technologies: "MongoDB, Express, React, Node.js",
    images: ["/images/calendar-screen.png"],
    projectLink: "https://plant-calendar-1-zhbz.onrender.com",
    githubLink: "https://github.com/HelleFH/Plant-calendar",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Plant Calendar and Reminder System with MERN Stack",
    description: "Work in progress! App made to track and manage plants. Users can add plants either manually or by searching a database using an external API. The calendar has a reminder function and users can add updates to existing plants to track progress over time. The project makes use of state management and component life cycles. User Data and Entries are uploaded to mongoDB.",
    username: "Hellefruergaard@plantcalendar.com",
    password: "fruergaard",
    technologiesMore: [
      "MongoDB",
      "Express",
      "React",
      " Node.js",
      "Axios",
      "RESTful API",
      "Bcryptjs",
      "Cloudinary",
      "Multer",
      "Vite",
      "Moment"
    ]
  },

 
  {
    id: 9,
    name: "React Dating App",
    technologies: "React, JavaScript",
    images: ["/images/datingapp-screen.png"],
    projectLink: "https://hellefh.github.io/react-app/#findmatches",
    githubLink: "https://github.com/hellefh/react-app",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Frontend for React-based Dating Application",
    description: "This project is a frontend for a tinder-like dating app developed using React and JavaScript. The application stores user data locally. The app has sections for sign up, user creation, favorites and more. User images are made with Midjourney.",
    technologiesMore: [
      "React",
      "JavaScript",
      "Axios",
      "Bootstrap",
      "Cloudinary",
      "Multer",
      "Babel"
    ]
  },
  
  {
    id: 10,
    name: "The Monty Hall Problem",
    technologies: "JQuery, Python, Chart.js",
    images: ["/images/montyhall-screen.png"],
    projectLink: "https://monty-hall-explained.onrender.com/",
    githubLink: "https://github.com/HelleFH/product-page",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "A site where users can read about and play the Monty Hall Game",
    description: `The Monty Hall Problem is a famous counterintuitive statistics problem. This site has a simulator where users can input an amount of games to simulate using Python with Flask, and a manual Monty Hall Game made with JQuery.`,
    technologiesMore: [
      "Flask",
      "JQuery",
      "Python",
      "Chart.js"
    ]
  },

  
  {
    id: 11,
    name: "News Site",
    technologies: "HTML, CSS, JS",
    images: ["/images/news-screen.png"],
    projectLink: "https://helle-avis-site.onrender.com/",
    githubLink: "https://github.com/HelleFH/Helle-avis-site/tree/main",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Made with Vanilla JS",
    description: "A news website for Copenhagen, built with vanilla JavaScript. The site features a front page, an individual news article with an image slider and Google Maps integration, and a subscription section with a sign-up form.",
    technologiesMore: ["JavaScript"]
  },
  {
    id: 12,
    name: "Netflix Clone",
    technologies: "JavaScript",
    images: ["/images/netflix-screen.png"],
    projectLink: "https://hellefh.github.io/Netflix-clone-main/",
    githubLink: "https://github.com/HelleFH/Netflix-clone-main",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Netflix-like streaming platform clone",
    description: "Netflix Clone is a web application that replicates the user interface and functionalities of the Netflix streaming platform using JavaScript. The site has hover cards like on Netflix, search and filter as well as favorites.",
    technologiesMore: ["JavaScript"]
  },
  {
    id: 13,
    name: "Lightbox Gallery",
    technologies: "JQuery",
    images: ["/images/dinosaurs-screen.png"],
    projectLink: "https://hellefh.github.io/Lightbox-gallery/",
    githubLink: "https://github.com/hellefh/Lightbox-gallery",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Interactive image gallery with JQuery",
    description: "A simple site that showcases an interactive image gallery using JQuery showing AI images of dinosaurs. Users can click on thumbnails to view full-size images in a lightbox.",
    technologiesMore: ["JQuery"]
  },
  {
    id: 14,
    name: "Front Page",
    technologies: "HTML, CSS",
    images: ["/images/legekrogen-screen.png"],
    projectLink: "https://hellefh.github.io/Legekrogen/",
    githubLink: "https://github.com/hellefh/legekrogen",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Simple front page for Web Shop using HTML and CSS",
    description: "CSS and HTML for a webshop. It showcases a basic online shop layout with product listings and details.",
    technologiesMore: ["HTML", "CSS"]
  }

];

export default projects;
