// Import images
import techElevateImg from '../assets/projects/tech-elevate.png'; 
import githubTrackerImg from '../assets/projects/github-issue.png'; 
import digiToolsImg from '../assets/projects/digitools.png'; 
import englishJanalaImg from '../assets/projects/english-janala.png'; 

// Project data list with categories
export const projectData = [
    { 
        title: "Tech Elevate", 
        desc: "A premium technology platform designed for advanced learning and professional growth.", 
        tags: ["React", "Tailwind", "Daigy UI", "Vercel"], 
        category: "Full Stack",
        color: "bg-blue-600",
        image: techElevateImg,
        liveLink: "https://tech-elevate-phi.vercel.app/",
        codeLink: "https://github.com/arrimon/tech-elevate"
    },
    {
        title: "GitHub Issues Tracker",
        desc: "A clean, responsive dashboard to manage GitHub issues with live API integration, filtering, and detailed modals.",
        tags: ["JavaScript", "Tailwind", "Lucide Icons", "API"],
        category: "Frontend",
        color: "bg-purple-600",
        image: githubTrackerImg,
        liveLink: "https://arrimon.github.io/github-issue-tracker/",
        codeLink: "https://github.com/arrimon/github-issue-tracker"
    },
    {
        title: "English জানালা",
        desc: "আজ থেকেই আপনার ভাষা শেখার যাত্রা শুরু করুন। আপনি যদি নতুন হন অথবা আপনার দক্ষতা বাড়াতে চান, আমাদের Interactive Lessons আপনাকে নিয়ে যাবে অন্য একটি Level এ",
        tags: ["Core JS", "Tailwind", "Daigy UI", "Fetch API"],
        category: "Frontend",
        color: "bg-green-600",
        image: englishJanalaImg,
        liveLink: "https://webapp-english-janala.netlify.app/",
        codeLink: "https://github.com/arrimon/english-janala-with-js"
    },
    {
        title: "DigiTools",
        desc: "Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.",
        tags: ["React", "Vite", "Tailwind", "Framer Motion"],
        category: "Frontend",
        color: "bg-pink-600",
        image: digiToolsImg,
        liveLink: "https://digitools-react-app.netlify.app/",
        codeLink: "https://github.com/arrimon/DigiTools-React-Assignment"
    },
    {
        title: "Blog CMS",
        desc: "A WordPress-based content management system with custom themes and plugins for bloggers.",
        tags: ["WordPress", "PHP", "MySQL", "Custom Theme"],
        category: "Wordpress",
        color: "bg-indigo-600",
        image: null,
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Business Landing Page",
        desc: "A professional WordPress landing page designed for lead generation and business promotion.",
        tags: ["WordPress", "Elementor", "CSS", "SEO"],
        category: "Wordpress",
        color: "bg-yellow-600",
        image: null,
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Fitness Tracker App",
        desc: "A mobile application for tracking workouts, calories, and fitness goals with progress charts.",
        tags: ["React Native", "Firebase", "Redux", "Charts"],
        category: "APP",
        color: "bg-red-600",
        image: null,
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Food Delivery App",
        desc: "A mobile app for ordering food from local restaurants with real-time order tracking.",
        tags: ["Flutter", "Dart", "Firebase", "Google Maps"],
        category: "APP",
        color: "bg-orange-600",
        image: null,
        liveLink: "#",
        codeLink: "#"
    },
];
