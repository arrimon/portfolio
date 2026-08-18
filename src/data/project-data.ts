export interface Project {
  title: string;
  desc: string;
  tags: string[];
  category: string;
  color: string;
  image: string | null;
  liveLink: string;
  codeLink: string;
}

export const projectData: Project[] = [
  {
    title: "GitHub Issues Tracker",
    desc: "A clean, responsive dashboard to manage GitHub issues with live API integration, filtering, and detailed modals.",
    tags: ["JavaScript", "Tailwind", "Lucide Icons", "API"],
    category: "Frontend",
    color: "bg-purple-600",
    image: "/projects/github-issue.png",
    liveLink: "https://arrimon.github.io/github-issue-tracker/",
    codeLink: "https://github.com/arrimon/github-issue-tracker",
  },
  {
    title: "English \u099C\u09BE\u09A8\u09BE\u09B2\u09BE",
    desc: "\u0986\u099C \u09A5\u09C7\u0995\u0987 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AD\u09BE\u09B7\u09BE \u09B6\u09C7\u0996\u09BE\u09B0 \u09AF\u09BE\u09A4\u09CD\u09B0\u09BE \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8\u0964 \u0986\u09AA\u09A8\u09BF \u09AF\u09A6\u09BF \u09A8\u09A4\u09C1\u09A8 \u09B9\u09A8 \u0985\u09A5\u09AC\u09BE \u0986\u09AA\u09A8\u09BE\u09B0 \u09A6\u0995\u09CD\u09B7\u09A4\u09BE \u09AC\u09BE\u09A1\u09BC\u09BE\u09A4\u09C7 \u099A\u09BE\u09A8, \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 Interactive Lessons \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09A5\u09C7\u0995\u09C7 \u0985\u09A8\u09CD\u09AF \u098F\u0995\u099F\u09BF Level \u09A8",
    tags: ["Core JS", "Tailwind", "Daigy UI", "Fetch API"],
    category: "Frontend",
    color: "bg-green-600",
    image: "/projects/english-janala.png",
    liveLink: "https://webapp-english-janala.netlify.app/",
    codeLink: "https://github.com/arrimon/english-janala-with-js",
  },
  {
    title: "DigiTools",
    desc: "Access premium AI tools, design assets, templates, and productivity software\u2014all in one place. Start creating faster today.",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
    category: "Frontend",
    color: "bg-pink-600",
    image: "/projects/digitools.png",
    liveLink: "https://digitools-react-app.netlify.app/",
    codeLink: "https://github.com/arrimon/DigiTools-React-Assignment",
  },
  {
    title: "Dynamic Blog CMS",
    desc: "Dynamic Blog Application where we create post, page and full CRUD functionality. Make beautiful description write with a rich content editor.",
    tags: ["Next.js", "React", "Tailwind", "Shadcn", "Supabase", "Framer Motion"],
    category: "Full Stack",
    color: "bg-indigo-600",
    image: "/projects/dynamic-blog-cms.png",
    liveLink: "https://arrimon-blog-cms.netlify.app/",
    codeLink: "https://github.com/arrimon/dynamic-cms",
  },
  {
    title: "FIFA WorldCup Prediction By Orbitalk",
    desc: "A full-stack prediction platform where users verify their Orbitalk number and submit their favorite country flags to predict the FIFA WorldCup winner. Built with a robust Laravel backend and an interactive React frontend.",
    tags: ["Laravel", "MySQL", "React", "Tailwind"],
    category: "Full Stack",
    color: "bg-emerald-600",
    image: "/projects/fifa-prediction-by-orbitalk.png",
    liveLink: "https://fifa-predictions.vercel.app/",
    codeLink: "https://github.com/arrimon/fifa-predictions",
  },
];
