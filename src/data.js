export const data = {
    // Projects: Add or remove project objects here.
    // Each project should have title, description, technologies (array), link, githublink, and image.
    projects: [
        {
          title: "Caption Generator(OpenAI Whisper and AWS)",
          description: "A serverless video captioning application that automatically transcribes uploaded videos using OpenAI's Whisper API, leveraging AWS Lambda and S3 for processing and storage. Built with Next.js for a seamless frontend with video preview and user can download transcription.",
          technologies: ["Next.js","AWS(S3, Lambda)","OpenAI API Whisper","Python"],      
          link:"",
          githublink:"https://github.com/Gokulkiran418/caption-generator.git",
          video:"/images/caption.mp4" 

        },
        {
          title: "E-Shop Platform For Shoes (Website link available below) ",
          description: "A full-stack SPA e-commerce app for shoes with cart and checkout functionality, it supports dynamic routing, async operations, and responsive UI. Deployed on Vercel ",
          technologies: ["React","React Router(SPAs)","Vite","Tailwind CSS","Node.js","Express","Neon PostgreSQL","Vercel"],      
          link:"https://eshopplatform.vercel.app/",
          githublink:"https://github.com/Gokulkiran418/E-Commerce-Vite",
          image:"/images/eshopshoe.png" 

        },
         {
          title: "Heart Disease Predictor",
          description: "A Django-based web app using a RandomForestClassifier to predict heart disease risk from 13 health metrics. Features a responsive Bootstrap 5 interface. Showcases my full-stack and machine learning expertise.",
          technologies: ["Python","Django","scikit-learn","pandas","Bootstrap 5", "HTML/CSS"],
          link:"",
          githublink:"https://github.com/Gokulkiran418/Heart-Disease-Predictor.git",
          image:"",
          video:"/images/hdpredict1.mp4"
        },
         {
          title: "Chatbot about me (Website link available below)",
          description: "Built with Next.js and Dialogflow and google cloud, it features a responsive UI styled with Tailwind CSS. Deployed on Vercel, it showcases full-stack development and NLP integration.",
          technologies: ["React","Next.js", "Dialogflow", "Tailwind CSS", "Node.js"],
          link:"https://aboutmechatbot.vercel.app",
          githublink:"https://github.com/Gokulkiran418/my-chatbot-app.git",
          image:"/images/aboutmebot.png"
        },
       
         {
          title: "Image Recognition Webapp",
          description: "A full-stack image recognition web app that lets users detect objects in images using either a client-side TensorFlow.js model or a server-side Flask API with TensorFlow and MobileNet.",
          technologies: ["React","Vite", "Tensorflow.js","Flask", "Tailwind CSS", "MobileNet"],
          link:"",
          githublink:"https://github.com/Gokulkiran418/image-recognition-app.git",
          image:"",
          video:"/images/imagepredict.mp4"
        },
         {
          title: "Serverless Blog",
          description: "A serverless blog platform built with Next.js and Tailwind CSS. Utilizes React's useEffect and useState hooks to dynamically update posts without page reloads.",
          technologies: ["Next.js", "React","Tailwind CSS"],
          link:"",
          githublink:"https://github.com/Gokulkiran418/serverless-blog.git",
          image:"",
          video:"/images/blog.mp4"
        },
         {
          title: "Weather Web App (Website link available below)",
          description: "A web app displaying real-time weather data using the OpenWeatherMap API, with responsive UI and search history. Background is a gradient color animation that changes with temperature.",
          technologies: ["Bootstrap", "OpenWeatherMap API", "JavaScript"],
          link:"https://weatherwebapp21.vercel.app",
          githublink:"https://github.com/Gokulkiran418/WeatherApp.git",
          image:"/images/Weatherapp.png"       
        },

        {
          title: "Task Manager",
          description: "A simple task manager that is a to-do list web application that allows users to add, toggle, and delete tasks with a responsive design. Built with JavaScript, it features task persistence using localStorage.",
          technologies: ["JavaScript", "HTML", "CSS", "Flexbox","Grid Layout"],
          image:"/images/taskmanager.png",
          link:"",
          githublink:"https://github.com/Gokulkiran418/TaskManagerApp.git" 
        }
      // To add a new project, copy an object above and update the fields.
      // To remove a project, delete the corresponding object.
    ],
    // Links: Update your personal links here.
    links: {
      github: "https://github.com/Gokulkiran418",
       chatbot: "https://aboutmechatbot.vercel.app/",
       weatherapp: "https://weatherwebapp21.vercel.app/",
       ecommerce:"https://eshopplatform.vercel.app/"
    },
    // Skills: Add or remove skill categories and items.
    // Each category has a name and an array of skills.
    skills: [
      { category: "Programming Languages", items: ["Python", "JavaScript"] },
      { category: "Database", items: ["MySQL", "PostgreSQL"] },
      { category: "Front-end", items: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"] },
      { category: "Back-end", items: ["Node.js", "Express.js", "GraphQL", "Flask"] },
      { category: "Machine Learning", items: ["Tensorflow", "PyTorch", "Pandas", "NumPy", "Matplotlib", "Seaborn"] },
      { category: "Tools", items: ["Git", "GitHub Copilot", "ChatGPT","Vercel","Neon PostgreSQL","Postman"] }
      // To add a new category, copy an object above and update category and items.
      // To remove a category, delete the corresponding object.
      // To add/remove skills, edit the items array.
    ],
    // Certificates: Add or remove certificate objects.
    certificates: [
      { name: "Full Stack Web Development Bootcamp; Author: Angela Yu", issuer: "Udemy", date: "2025" },
      { name: "100 Days of Code: Complete Python Bootcamp", issuer: "Udemy", date: "2024" },
      { name: "OpenAI GPTs: Creating Custom AI Assistants", issuer: "Coursera", date: "2024" }
      // To add a new certificate, copy an object above and update the fields.
      // To remove a certificate, delete the corresponding object.
    ],
    // Education: Add or remove education objects.
    education: [
      { degree: "B.E. in Computer Science", institution: "Misrimal Navajee Munoth Jain Engineering College (Anna University)", date: "2020-2024", CGPA: "CGPA - 8.2" }
      // To add new education, copy the object above and update the fields.
      // To remove education, delete the corresponding object.
    ],
    // Contact: Update your contact information.
    contact: {
       email: "umgokulkiran@gmail.com",
        linkedin: "https://linkedin.com/in/gokul-kiran21",
    }
  };