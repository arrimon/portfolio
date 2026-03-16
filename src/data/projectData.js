// Import image (this is the correct way in Vite)
import techElevateImg from '../assets/projects/tech-elevate.png'; 
import githubTrackerImg from '../assets/projects/github-issue.png'; 


// Project data list
export const projectData = [
    { 
        title: "Tech Elevate", 
        desc: "A premium technology platform designed for advanced learning and professional growth.", 
        tags: ["React", "Tailwind", "Daigy UI", "Vercel"], 
        color: "bg-blue-600", // Used as background when image is not available
        image: techElevateImg, // Imported image used here
        liveLink: "https://tech-elevate-phi.vercel.app/",
        codeLink: "https://github.com/arrimon/tech-elevate"
    },

    {
        title: "GitHub Issues Tracker",
        desc: "A clean, responsive dashboard to manage GitHub issues with live API integration, filtering, and detailed modals.",
        tags: ["JavaScript", "Tailwind", "Lucide Icons", "API"],
        color: "bg-purple-600", // Background color when image is not available
        image: githubTrackerImg, // Make sure to import your image
        liveLink: "https://arrimon.github.io/github-issue-tracker/",
        codeLink: "https://github.com/arrimon/github-issue-tracker"
    },

];