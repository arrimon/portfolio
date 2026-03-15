// Import image (this is the correct way in Vite)
import techElevateImg from '../assets/projects/tech-elevate.png'; 


// Project data list
export const projectData = [
    { 
        title: "Tech Elevate", 
        desc: "A premium technology platform designed for advanced learning and professional growth.", 
        tags: ["React", "Tailwind", "Vite", "Web Design"], 
        color: "bg-blue-600", // Used as background when image is not available
        image: techElevateImg, // Imported image used here
        liveLink: "#",
        codeLink: "#"
    },

    { 
        title: "E-Commerce Platform", 
        desc: "Full-stack e-commerce solution with user authentication, shopping cart, and Stripe integration.", 
        tags: ["React", "Node.js", "MongoDB", "Stripe"], 
        color: "bg-gradient-to-br from-[var(--accent)] to-indigo-600",
        image: null, // Placeholder will be shown
        liveLink: "#",
        codeLink: "#"
    },

    // { 
    //     title: "Task Management App", 
    //     desc: "Real-time collaborative task management application with drag-and-drop functionality.", 
    //     tags: ["React", "Vercel", "Daisy UI", "Tailwind CSS"], 
    //     color: "bg-gradient-to-br from-purple-500 to-pink-500",
    //     image: null, 
    //     liveLink: "#",
    //     codeLink: "#"
    // }
];