const projects = [
    {
        id: 1,
        name: "React eCommerce",
        technologies: "React, Firebase",
        images: ["/images/ecommerce-screen.png"],
        projectLink: "https://react-ecommerce-5s23.onrender.com",
        githubLink: "https://github.com/HelleFH/React-store",
        buttonText: "View Project",
        githubButtonText: "GitHub",
        descriptionHeader: "An ecommerce platform built with React and Firebase",
        description: "This is a simple ecommerce application developed using React and Firebase. It includes admin CRUD operations, Firebase authentication, account creation and editing, and integration with Firebase Auth Provider.",
        username: "duser7707@gmail.com",
        password: "Demopassword123",
        adminUsername: "dmndmuser@gmail.com",
        adminPassword: "Demopassword123"
    },
    {
        id: 2,
        name: "MERN Plant Calendar",
        technologies: "MongoDB, Express, React, Node.js",
        images: ["/images/calendar-screen.png"],
        projectLink: "https://plant-calendar-1.onrender.com",
        githubLink: "https://github.com/HelleFH/Plant-calendar",
        buttonText: "View Project",
        githubButtonText: "GitHub",
        descriptionHeader: "Plant Calendar and Reminder System with MERN Stack",
        description: "App made to track and manage plants. Users can add plants either manually or by searching a database using an external API. The calendar has a reminder function and users can add updates to existing plants to track progress over time.",
        username: "Hellefruergaard@plantcalendar.com",
        password: "fruergaard"
    },
    {
        id: 3,
        name: "MERN Listings",
        technologies: "MongoDB, Express, React, Node.js",
        images: ["/images/listing-screen.png"],
        projectLink: "https://react-listings-1.onrender.com/",
        githubLink: "https://github.com/HelleFH/react-listings",
        buttonText: "View Project",
        githubButtonText: "GitHub",
        descriptionHeader: "Holiday Home Listings using MERN Stack",
        description: "Users can upload property images which are stored in MongoDB and managed using Cloudinary for image hosting. This application demonstrates CRUD operations, image uploading, and real-time data updates using the MERN stack."
    },
    {
        id: 4,
        name: "Cloudinary Upload/Delete",
        technologies: "MongoDB, Express, Vue, Node.js",
        images: ["/images/aiimages-screen.png"],
        projectLink: "https://cloudinary-upload-delete-1.onrender.com/",
        githubLink: "https://github.com/HelleFH/cloudinary-upload-delete",
        buttonText: "View Project",
        githubButtonText: "GitHub",
        descriptionHeader: "Image management with Cloudinary API",
        description: "This project is a web application for uploading and deleting images using the Cloudinary API. It is built with MongoDB, Express, Vue, and Node.js."
    },
    {
        id: 5,
        name: "The Monty Hall Problem",
        technologies: "JQuery, Python, Chart.js",
        images: ["/images/montyhall-screen.png"],
        projectLink: "https://monty-hall-explained.onrender.com/",
        githubLink: "https://github.com/HelleFH/product-page",
        buttonText: "View Project",
        githubButtonText: "GitHub",
        descriptionHeader: "A site where users can read about and play the Monty Hall Game",
        description: `The Monty Hall Problem is a famous counter intuitive statistics problem.
            This site has a simulator where users can input an amount of games to simulate using python with Flask, and a manual Monty Hall Game made with JQuery.`
    },
    {
        id: 6,
        name: "A Product Portfolio",
        technologies: "React",
        images: ["/images/portfolio-screen.png"],
        projectLink: "https://product-page-b2ed.onrender.com/",
        githubLink: "https://github.com/HelleFH/Monty-Hall-Explained",
        buttonText: "View Project",
        githubButtonText: "GitHub",
        descriptionHeader: "A site where users can read about and play the Monty Hall Game",
        description: `The Monty Hall Problem is a famous counter intuitive statistics problem.
            This site has a simulator where users can input an amount of games to simulate using python with Flask, and a manual Monty Hall Game made with JQuery.`
    },
    {
        id: 7,
        name: "PHP Shopping Cart",
        technologies: "PHP, PostgreSQL, Tailwind",
        images: ["/images/phpcart-screen.png"],
        projectLink: "https://whispering-lake-58821-4ba82832fa64.herokuapp.com/",
        githubLink: "https://github.com/HelleFH/PHP-shopping-cart",
        buttonText: "View Project",
        githubButtonText: "GitHub",
        descriptionHeader: "PHP-based shopping cart application",
        description: "PHP Shopping Cart is an online shopping application developed with PHP, PostgreSQL for the database, and styled with Tailwind CSS."
    },
    {
        id: 8,
        name: "React Dating App",
        technologies: "React, JavaScript",
        images: ["/images/datingapp-screen.png"],
        projectLink: "https://hellefh.github.io/react-app/#findmatches",
        githubLink: "https://github.com/hellefh/react-app",
        buttonText: "View Project",
        githubButtonText: "GitHub",
        descriptionHeader: "Frontend for React-based Dating Application",
        description: "This project is a frontend for a tinder-like dating app developed using React and JavaScript. The application stores user data locally."
    },
    {
        id: 9,
        name: "Netflix Clone",
        technologies: "JavaScript",
        images: ["/images/netflix-screen.png"],
        projectLink: "https://hellefh.github.io/Netflix-clone-main/",
        githubLink: "https://github.com/HelleFH/Netflix-clone-main",
        buttonText: "View Project",
        githubButtonText: "GitHub",
        descriptionHeader: "Netflix-like streaming platform clone",
        description: "Netflix Clone is a web application that replicates the user interface and functionalities of the Netflix streaming platform using JavaScript."
    },
    {
        id: 10,
        name: "MEVN Cart",
        technologies: "MongoDB, Express, Vue, Node.js",
        images: ["/images/mevncart-screen.png"],
        projectLink: "https://shopping-cart-master-1-5ylu.onrender.com/",
        githubLink: "https://github.com/hellefh/shopping-cart",
        buttonText: "View Project",
        githubButtonText: "GitHub",
        descriptionHeader: "MEVN Stack Shopping Cart with User Authentication",
        description: "This cart includes user authentication functionality to secure user accounts and ensure that shopping carts are saved between sessions.",
        username: "hellefruergaard@mevn-shop.com",
        password: "password123"
    },
    {
        id: 11,
        name: "Lightbox Gallery",
        technologies: "JQuery",
        images: ["/images/dinosaurs-screen.png"],
        projectLink: "https://hellefh.github.io/Lightbox-gallery/",
        githubLink: "https://github.com/hellefh/Lightbox-gallery",
        buttonText: "View Project",
        githubButtonText: "GitHub",
        descriptionHeader: "Interactive image gallery with JQuery",
        description: "A simple site that showcases an interactive image gallery using JQuery. Users can click on thumbnails to view full-size images in a lightbox."
    },
    {
        id: 12,
        name: "Webshop",
        technologies: "HTML, CSS",
        images: ["/images/legekrogen-screen.png"],
        projectLink: "https://hellefh.github.io/Legekrogen/",
        githubLink: "https://github.com/hellefh/legekrogen",
        buttonText: "View Project",
        githubButtonText: "GitHub",
        descriptionHeader: "Simple webshop using HTML and CSS",
        description: "CSS and HTML for a webshop. It showcases a basic online shop layout with product listings and details."
    }
];

export default projects;
