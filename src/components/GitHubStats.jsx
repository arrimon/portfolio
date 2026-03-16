// // components/GitHubStats.jsx
// import React, { useEffect, useState } from "react";
// import {
//   Star,
//   GitCommit,
//   GitPullRequest,
//   CircleAlert,
//   BookOpen,
//   Flame,
// } from "lucide-react";
// import SectionHeader from "./SectionHeader";

// const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
// const USERNAME = "arrimon";

// const query = `
// query {
//   user(login: "${USERNAME}") {
//     contributionsCollection {
//       totalCommitContributions
//       totalPullRequestContributions
//       totalIssueContributions
//       totalRepositoriesWithContributedCommits
//       contributionCalendar {
//         totalContributions
//         weeks {
//           contributionDays {
//             contributionCount
//             date
//           }
//         }
//       }
//     }
//     repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
//       nodes {
//         name
//         stargazerCount
//         languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
//           edges {
//             size
//             node {
//               name
//               color
//             }
//           }
//         }
//       }
//     }
//     pullRequests(states: MERGED) {
//       totalCount
//     }
//     issues(states: OPEN) {
//       totalCount
//     }
//   }
// }
// `;

// const calculateGrade = (contributions) => {
//   if (contributions > 1000) return "A+";
//   if (contributions > 700) return "A";
//   if (contributions > 500) return "B+";
//   if (contributions > 300) return "B";
//   if (contributions > 100) return "C+";
//   return "C";
// };

// const calculateStreaks = (weeks) => {
//   const days = weeks
//     .flatMap((w) => w.contributionDays)
//     .sort((a, b) => new Date(a.date) - new Date(b.date));

//   let currentStreak = 0;
//   let longestStreak = 0;
//   let tempStreak = 0;

//   // Longest streak
//   for (const day of days) {
//     if (day.contributionCount > 0) {
//       tempStreak++;
//       longestStreak = Math.max(longestStreak, tempStreak);
//     } else {
//       tempStreak = 0;
//     }
//   }

//   // Current streak (backward from today)
//   const reversed = [...days].reverse();
//   for (const day of reversed) {
//     if (day.contributionCount > 0) currentStreak++;
//     else break;
//   }

//   return { currentStreak, longestStreak };
// };

// const GitHubStats = () => {
//   const [stats, setStats] = useState(null);
//   const [languages, setLanguages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://api.github.com/graphql", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `bearer ${TOKEN}`,
//           },
//           body: JSON.stringify({ query }),
//         });

//         const { data } = await res.json();
//         const user = data.user;
//         const contrib = user.contributionsCollection;
//         const repos = user.repositories.nodes;

//         // Stars
//         const stars = repos.reduce((sum, r) => sum + r.stargazerCount, 0);

//         // Languages
//         const langMap = {};
//         for (const repo of repos) {
//           for (const edge of repo.languages.edges) {
//             const name = edge.node.name;
//             const color = edge.node.color || "#999";
//             langMap[name] = {
//               bytes: (langMap[name]?.bytes || 0) + edge.size,
//               color,
//             };
//           }
//         }
//         const totalBytes = Object.values(langMap).reduce((s, v) => s + v.bytes, 0);
//         const langs = Object.entries(langMap)
//           .map(([name, { bytes, color }]) => ({
//             name,
//             percent: ((bytes / totalBytes) * 100).toFixed(1),
//             color,
//           }))
//           .sort((a, b) => b.percent - a.percent)
//           .slice(0, 5);

//         // Streaks
//         const { currentStreak, longestStreak } = calculateStreaks(
//           contrib.contributionCalendar.weeks
//         );

//         setStats({
//           stars,
//           commits: contrib.totalCommitContributions,
//           prs: user.pullRequests.totalCount,
//           issues: user.issues.totalCount,
//           contributed: contrib.totalRepositoriesWithContributedCommits,
//           totalContributions: contrib.contributionCalendar.totalContributions,
//           grade: calculateGrade(contrib.contributionCalendar.totalContributions),
//           currentStreak,
//           longestStreak,
//         });

//         setLanguages(langs);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load GitHub stats.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex items-center justify-center py-20">
//         <div className="w-8 h-8 rounded-full border-2 border-[var(--accent)] border-t-transparent animate-spin" />
//       </div>
//     );

//   if (error)
//     return (
//       <p className="text-center text-red-400 py-10">{error}</p>
//     );

//   const circumference = 2 * Math.PI * 58;
//   const progress = Math.min(stats.totalContributions / 1500, 1);

//   return (
//     <div id="github" className="py-20 px-4 sm:px-6 lg:px-8">
//       <SectionHeader
//         number={2}
//         title="GitHub Stats"
//         description="Real-time data pulled directly from the GitHub GraphQL API."
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

//         {/* Stats Card */}
//         <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] p-6 md:p-8 flex justify-between items-start md:items-center hover:shadow-xl transition-shadow duration-500 gap-4">
//           <div className="space-y-4 flex-1">
//             <h2 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-4">
//               {USERNAME}'s GitHub Stats
//             </h2>
//             <StatItem icon={<Star size={18} />} label="Total Stars" value={stats.stars} />
//             <StatItem icon={<GitCommit size={18} />} label="Total Commits" value={stats.commits} />
//             <StatItem icon={<GitPullRequest size={18} />} label="Merged PRs" value={stats.prs} />
//             <StatItem icon={<CircleAlert size={18} />} label="Open Issues" value={stats.issues} />
//             <StatItem icon={<BookOpen size={18} />} label="Repos Contributed" value={stats.contributed} />
//           </div>

//           {/* Grade Circle */}
//           <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0 mt-4">
//             <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
//               <circle
//                 cx="64"
//                 cy="64"
//                 r="58"
//                 stroke="var(--border)"
//                 strokeWidth="8"
//                 fill="transparent"
//               />
//               <circle
//                 cx="64"
//                 cy="64"
//                 r="58"
//                 stroke="var(--accent)"
//                 strokeWidth="8"
//                 fill="transparent"
//                 strokeDasharray={circumference}
//                 strokeDashoffset={circumference - progress * circumference}
//                 strokeLinecap="round"
//                 style={{ transition: "stroke-dashoffset 1s ease-out" }}
//               />
//             </svg>
//             <span className="absolute text-2xl md:text-3xl font-black text-[var(--text-primary)]">{stats.grade}</span>
//           </div>
//         </div>

//         {/* Languages Card */}
//         <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] p-6 md:p-8 hover:shadow-xl transition-shadow duration-500">
//           <h2 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-4">Top Languages</h2>

//           <div className="w-full h-3 flex rounded-full overflow-hidden mb-4">
//             {languages.map((lang) => (
//               <div
//                 key={lang.name}
//                 style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
//                 className="h-full transition-all duration-700"
//               />
//             ))}
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             {languages.map((lang) => (
//               <div key={lang.name} className="flex items-center gap-2">
//                 <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: lang.color }} />
//                 <span className="text-sm text-[var(--text-muted)]">{lang.name}</span>
//                 <span className="text-sm font-bold text-[var(--text-primary)] ml-auto">{lang.percent}%</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Streak Card */}
//       <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center hover:shadow-xl transition-shadow duration-500">
//         <div className="border-b sm:border-b-0 sm:border-r border-[var(--border)] pb-6 sm:pb-0">
//           <p className="text-3xl md:text-4xl font-black text-[var(--accent)]">{stats.totalContributions}</p>
//           <p className="text-sm font-bold text-[var(--text-primary)] mt-2">Total Contributions</p>
//           <p className="text-xs text-[var(--text-muted)] mt-1 uppercase tracking-wide">This Year</p>
//         </div>

//         <div className="flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-[var(--border)] pb-6 sm:pb-0">
//           <div className="relative w-16 h-16 rounded-full border-4 border-[var(--accent)] flex items-center justify-center mb-3">
//             <Flame className="absolute -top-3 text-[var(--accent)]" size={18} fill="currentColor" />
//             <span className="text-2xl font-black text-[var(--text-primary)]">{stats.currentStreak}</span>
//           </div>
//           <p className="text-sm font-bold text-[var(--text-primary)]">Current Streak</p>
//           <p className="text-xs text-[var(--text-muted)] mt-1 uppercase tracking-wide">Days</p>
//         </div>

//         <div>
//           <p className="text-3xl md:text-4xl font-black text-[var(--accent)]">{stats.longestStreak}</p>
//           <p className="text-sm font-bold text-[var(--text-primary)] mt-2">Longest Streak</p>
//           <p className="text-xs text-[var(--text-muted)] mt-1 uppercase tracking-wide">Days</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const StatItem = ({ icon, label, value }) => (
//   <div className="flex items-center gap-3">
//     <div className="text-[var(--accent)]">{icon}</div>
//     <span className="text-sm text-[var(--text-muted)] flex-1">{label}</span>
//     <span className="text-sm font-bold text-[var(--text-primary)]">{value}</span>
//   </div>
// );

// export default GitHubStats;


import React, { useEffect, useState } from "react";
import { Star, GitCommit, GitPullRequest, CircleAlert, BookOpen, Flame } from "lucide-react";
import SectionHeader from "./SectionHeader";

const USERNAME = "arrimon";

const calculateGrade = (contributions) => {
  if (contributions > 1000) return "A+";
  if (contributions > 700) return "A";
  if (contributions > 500) return "B+";
  if (contributions > 300) return "B";
  if (contributions > 100) return "C+";
  return "C";
};

const calculateStreaks = (weeks) => {
  if (!weeks) return { currentStreak: 0, longestStreak: 0 };
  const days = weeks
    .flatMap((w) => w.contributionDays)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  for (const day of days) {
    if (day.contributionCount > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  }

  const reversed = [...days].reverse();
  for (const day of reversed) {
    if (day.contributionCount > 0) currentStreak++;
    else break;
  }
  return { currentStreak, longestStreak };
};

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // সরাসরি GitHub-এ না গিয়ে নিজের Serverless API-কে কল করছি
        const res = await fetch("/api/github-stats");
        const json = await res.json();
        
        if (json.error) throw new Error(json.error);

        const user = json.data.user;
        const contrib = user.contributionsCollection;
        const repos = user.repositories.nodes;

        const stars = repos.reduce((sum, r) => sum + r.stargazerCount, 0);

        const langMap = {};
        for (const repo of repos) {
          for (const edge of repo.languages.edges) {
            const name = edge.node.name;
            const color = edge.node.color || "#999";
            langMap[name] = {
              bytes: (langMap[name]?.bytes || 0) + edge.size,
              color,
            };
          }
        }
        const totalBytes = Object.values(langMap).reduce((s, v) => s + v.bytes, 0);
        const langs = Object.entries(langMap)
          .map(([name, { bytes, color }]) => ({
            name,
            percent: ((bytes / totalBytes) * 100).toFixed(1),
            color,
          }))
          .sort((a, b) => b.percent - a.percent)
          .slice(0, 5);

        const { currentStreak, longestStreak } = calculateStreaks(contrib.contributionCalendar.weeks);

        setStats({
          stars,
          commits: contrib.totalCommitContributions,
          prs: user.pullRequests.totalCount,
          issues: user.issues.totalCount,
          contributed: contrib.totalRepositoriesWithContributedCommits,
          totalContributions: contrib.contributionCalendar.totalContributions,
          grade: calculateGrade(contrib.contributionCalendar.totalContributions),
          currentStreak,
          longestStreak,
        });
        setLanguages(langs);
      } catch (err) {
        console.error(err);
        setError("Failed to load GitHub stats.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 rounded-full border-2 border-[var(--accent)] border-t-transparent animate-spin" />
    </div>
  );

  if (error) return <p className="text-center text-red-400 py-10">{error}</p>;

  const circumference = 2 * Math.PI * 58;
  const progress = Math.min(stats.totalContributions / 1500, 1);

  return (
    <div id="github" className="py-20 px-4 sm:px-6 lg:px-8">
      <SectionHeader number={2} title="GitHub Stats" description="Real-time data secured via Serverless Function." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Stats Card */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] p-6 md:p-8 flex justify-between items-start md:items-center hover:shadow-xl transition-shadow duration-500 gap-4">
          <div className="space-y-4 flex-1">
            <h2 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-4">{USERNAME}'s GitHub Stats</h2>
            <StatItem icon={<Star size={18} />} label="Total Stars" value={stats.stars} />
            <StatItem icon={<GitCommit size={18} />} label="Total Commits" value={stats.commits} />
            <StatItem icon={<GitPullRequest size={18} />} label="Merged PRs" value={stats.prs} />
            <StatItem icon={<CircleAlert size={18} />} label="Open Issues" value={stats.issues} />
            <StatItem icon={<BookOpen size={18} />} label="Repos Contributed" value={stats.contributed} />
          </div>
          <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0 mt-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="58" stroke="var(--border)" strokeWidth="8" fill="transparent" />
              <circle cx="64" cy="64" r="58" stroke="var(--accent)" strokeWidth="8" fill="transparent" strokeDasharray={circumference} strokeDashoffset={circumference - progress * circumference} strokeLinecap="round" style={{ transition: "stroke-dashoffset 1s ease-out" }} />
            </svg>
            <span className="absolute text-2xl md:text-3xl font-black text-[var(--text-primary)]">{stats.grade}</span>
          </div>
        </div>

        {/* Languages Card */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] p-6 md:p-8 hover:shadow-xl transition-shadow duration-500">
          <h2 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-4">Top Languages</h2>
          <div className="w-full h-3 flex rounded-full overflow-hidden mb-4">
            {languages.map((lang) => (
              <div key={lang.name} style={{ width: `${lang.percent}%`, backgroundColor: lang.color }} className="h-full transition-all duration-700" />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: lang.color }} />
                <span className="text-sm text-[var(--text-muted)]">{lang.name}</span>
                <span className="text-sm font-bold text-[var(--text-primary)] ml-auto">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Streak Stats */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center hover:shadow-xl transition-shadow duration-500">
        <div className="border-b sm:border-b-0 sm:border-r border-[var(--border)] pb-6 sm:pb-0">
          <p className="text-3xl md:text-4xl font-black text-[var(--accent)]">{stats.totalContributions}</p>
          <p className="text-sm font-bold text-[var(--text-primary)] mt-2">Total Contributions</p>
        </div>
        <div className="flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-[var(--border)] pb-6 sm:pb-0">
          <div className="relative w-16 h-16 rounded-full border-4 border-[var(--accent)] flex items-center justify-center mb-3">
            <Flame className="absolute -top-3 text-[var(--accent)]" size={18} fill="currentColor" />
            <span className="text-2xl font-black text-[var(--text-primary)]">{stats.currentStreak}</span>
          </div>
          <p className="text-sm font-bold text-[var(--text-primary)]">Current Streak</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-black text-[var(--accent)]">{stats.longestStreak}</p>
          <p className="text-sm font-bold text-[var(--text-primary)] mt-2">Longest Streak</p>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="text-[var(--accent)]">{icon}</div>
    <span className="text-sm text-[var(--text-muted)] flex-1">{label}</span>
    <span className="text-sm font-bold text-[var(--text-primary)]">{value}</span>
  </div>
);

export default GitHubStats;