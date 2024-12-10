export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#project',
    },
    {
      id: 4,
      name: 'Work',
      href: '#work',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'MovieHub - Your Ultimate Movie Companion',
      desc: 'MovieHub is an innovative React-based application designed to bring the magic of cinema to your fingertips. Whether you’re a casual viewer or a dedicated cinephile, MovieHub offers an immersive experience for exploring and discovering movies like never before.',
      subdesc:
        'With features like detailed movie descriptions, cast and crew information, trailers, and recommendations for related films, MovieHub ensures that you’re always in the loop about the movies you love.Built with React and enhanced with powerful APIs, MovieHub combines seamless design with dynamic functionality.',
      href: 'https://moviehub-bice.vercel.app',
      texture: '/textures/project/mov1.mp4',
      logo: '/assets/tmovie.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
      ],
    },
    {
      title: 'BUZZCHAT - Real-Time Chat App',
      desc: 'BUZZCHAT is a modern, real-time chat application that allows users to communicate instantly with friends, family, or colleagues.',
      subdesc:
        'Built with the MERN (MongoDB, Express, React, Node.js) stack, BUZZCHAT integrates Firebase Authentication for secure user login and Socket.io for seamless, real-time messaging. Experience the buzz of instant communication!',
      href: 'https://github.com/sneh1604/BuzzChat--Chatapp',
      texture: '/textures/project/movie2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'MongoDb',
          path: 'assets/mongo.png',
        },
        {
          id: 3,
          name: 'NodeJs',
          path: '/assets/node.png',
        },
        {
          id: 4,
          name: 'Socketio',
          path: '/assets/socketio.png',
        },
      ],
    },
    {
      title: 'MyLabVerse - Laboratory Information Management System',
      desc: 'MyLabVerse is a cutting-edge Laboratory Information Management System (LIMS) developed using the MERN stack, Chart.js, ML Gemini, and PDF libraries. It is designed to modernize laboratory workflows and improve patient engagement through an intuitive and feature-rich platform. With role-specific functionalities for patients and administrators, MyLabVerse ensures seamless report management, advanced data visualization, and insightful analytics powered by machine learning.',
      subdesc:
        'Patients can track their health with dynamic data visualizations and download professional PDF reports, while administrators benefit from efficient report management and advanced analytics powered by machine learning',
      href: 'https://github.com/sneh1604/MyLabVerse--MERN-Version-',
      texture: '/textures/project/movie5.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'NodeJs',
          path: '/assets/node.png',
        },
      ],
    },
    {
      title: 'Drag & Drop Notes App',
      desc: 'Welcome to the Drag & Drop Sticky Notes App, a full-stack application that brings digital sticky notes to life! Create, edit, drag, drop, and color-code your notes effortlessly, all while seamlessly integrating with Appwrite for a powerful and reliable backend.',
      subdesc:
        'StickyNotes blends simplicity with power, offering a fluid user experience paired with reliable backend functionality. Built with cutting-edge tools, it’s your one-stop solution for keeping your ideas and tasks beautifully organized.Unleash your creativity and productivity with StickyNotes—where your ideas find a home.',
      href: 'https://github.com/sneh1604/Sticky-notes',
      texture: '/textures/project/movie3.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Appwrite',
          path: '/assets/appwrite.png',
        },
      ],
    },
    {
      title: 'AI Image Generation App',
      desc: 'Unleash your creativity with the AI Image Creator App, a mobile application designed to transform your ideas into stunning visuals. From generating AI-powered artwork to managing and sharing your creations, this app makes the process intuitive and delightful.',
      subdesc:
        "Built with React Native and Expo for seamless mobile development, along with Hugging Face's API for Stable Diffusion-based image generation, this app delivers a powerful and intuitive experience. With File System and Media Library integration for efficient image management, it offers a perfect blend of creativity and functionality. Turn your ideas into stunning visuals, and this app into a side hustle or a thriving business.",
      href: 'https://github.com/sneh1604/AI-ImageGen',
      texture: '/textures/project/movie4.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Hugging Face',
          path: '/assets/face.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      jsLogoPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 3, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 13, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
      rocketPosition: isSmall
      ? [-5, -7, -10] // Moved Y from -10 to -9
      : isMobile
      ? [-9, -2, -10] // Moved Y from -10 to -9
      : isTablet
      ? [-11, -4, -10] // Moved Y from -7 to -6
      : [-13, -10, -10], // Moved Y from -13 to -12
  };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Data Science Club , Charusat',
      pos: 'Lead Web Developer',
      duration: '2023 - Present',
      title: "I am working in the Data Science Club to maintain its website and build new features, ensuring a seamless user experience and continuous improvements.",
      icon: '/assets/data.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Vinculum Group',
      pos: 'React Developer - Internship',
      duration: 'May 2024 - July 2024',
      title: "During my internship at Vinculum Group, I worked as a React Developer, contributing to building and optimizing user interfaces, ensuring responsive design, and collaborating with the team to deliver efficient and scalable web applications.",
      icon: '/assets/vin.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Cosmos-Geo',
      pos: 'Freelance Web Developer',
      duration: 'July 2024 - October 2024',
      title: "As a freelance Web Developer, I built a scalable and dynamic website for Cosmos using Next.js. This project involved creating responsive designs, optimizing performance, and ensuring seamless user experiences tailored to their needs.",
      icon: '/assets/figma.svg',
      animation: 'salute',
    }    
  ];