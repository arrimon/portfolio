// import React, { useEffect, useState } from "react";
// import {
//   Star,
//   GitCommit,
//   GitPullRequest,
//   CircleAlert,
//   BookOpen,
//   Flame,
// } from "lucide-react";

// const GitHubStats = ({ username = "arrimon" }) => {
//   const [stats, setStats] = useState({
//     stars: 0,
//     commits: 0,
//     prs: 0,
//     issues: 0,
//     contributed: 0,
//     grade: "C+",
//     totalContributions: 0,
//     currentStreak: 0,
//     longestStreak: 0,
//   });

//   const [languages, setLanguages] = useState([]);

//   // Fetch GitHub stats dynamically
//   useEffect(() => {
//     const fetchGitHubData = async () => {
//       try {
//         // Get user repos
//         const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
//         const repos = await repoRes.json();

//         let stars = 0;
//         let commits = 0;
//         let prs = 0;
//         let issues = 0;
//         let langCount = {};

//         for (const repo of repos) {
//           stars += repo.stargazers_count;
//           issues += repo.open_issues_count;

//           // Get languages
//           const langRes = await fetch(repo.languages_url);
//           const repoLangs = await langRes.json();
//           for (const [lang, bytes] of Object.entries(repoLangs)) {
//             if (langCount[lang]) langCount[lang] += bytes;
//             else langCount[lang] = bytes;
//           }

//           // Get commits count (simplified)
//           const commitRes = await fetch(
//             `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`
//           );
//           const linkHeader = commitRes.headers.get("Link");
//           if (linkHeader) {
//             const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
//             if (lastPageMatch) commits += parseInt(lastPageMatch[1], 10);
//           } else {
//             const commitsData = await commitRes.json();
//             commits += commitsData.length;
//           }

//           // Get PRs (simplified)
//           const prRes = await fetch(
//             `https://api.github.com/repos/${username}/${repo.name}/pulls?state=all&per_page=1`
//           );
//           const prLinkHeader = prRes.headers.get("Link");
//           if (prLinkHeader) {
//             const lastPRPageMatch = prLinkHeader.match(/&page=(\d+)>; rel="last"/);
//             if (lastPRPageMatch) prs += parseInt(lastPRPageMatch[1], 10);
//           } else {
//             const prsData = await prRes.json();
//             prs += prsData.length;
//           }
//         }

//         // Convert languages to percentages
//         const totalBytes = Object.values(langCount).reduce((a, b) => a + b, 0);
//         const langs = Object.entries(langCount)
//           .map(([name, bytes]) => ({
//             name,
//             percent: ((bytes / totalBytes) * 100).toFixed(2),
//             color: getLanguageColor(name),
//           }))
//           .sort((a, b) => b.percent - a.percent)
//           .slice(0, 5);

//         setStats({
//           stars,
//           commits,
//           prs,
//           issues,
//           contributed: repos.length,
//           grade: calculateGrade(commits),
//           totalContributions: commits + prs + stars,
//           currentStreak: Math.floor(Math.random() * 10), // Placeholder
//           longestStreak: Math.floor(Math.random() * 20), // Placeholder
//         });

//         setLanguages(langs);
//       } catch (err) {
//         console.error("Error fetching GitHub data:", err);
//       }
//     };

//     fetchGitHubData();
//   }, [username]);

//   const getLanguageColor = (lang) => {
//     const colors = {
//       JavaScript: "#f1e05a",
//       TypeScript: "#3178c6",
//       HTML: "#e34c26",
//       CSS: "#563d7c",
//       EJS: "#a91e44",
//     };
//     return colors[lang] || "#999";
//   };

//   const calculateGrade = (commits) => {
//     if (commits > 1000) return "A+";
//     if (commits > 700) return "A";
//     if (commits > 500) return "B";
//     if (commits > 300) return "C+";
//     return "C";
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-4 sm:p-6 font-sans text-[#333]">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//         {/* Left Card: GitHub Stats */}
//         <div className="card flex justify-between items-start p-6 sm:p-8">
//           <div className="space-y-4 flex-1">
//             <h2 className="text-xl sm:text-2xl font-bold text-[#0070f3] mb-4 sm:mb-6">
//               {username}'s GitHub Stats
//             </h2>
//             <StatItem icon={<Star size={20} />} label="Total Stars:" value={stats.stars} />
//             <StatItem icon={<GitCommit size={20} />} label="Commits (last year):" value={stats.commits} />
//             <StatItem icon={<GitPullRequest size={20} />} label="PRs:" value={stats.prs} />
//             <StatItem icon={<CircleAlert size={20} />} label="Issues:" value={stats.issues} />
//             <StatItem icon={<BookOpen size={20} />} label="Contributed Repos:" value={stats.contributed} />
//           </div>

//           {/* Circular Grade */}
//           <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center mt-6 sm:mt-12">
//             <svg className="w-full h-full transform -rotate-90">
//               <circle cx="64" cy="64" r="58" stroke="#e6f2ff" strokeWidth="8" fill="transparent" />
//               <circle
//                 cx="64"
//                 cy="64"
//                 r="58"
//                 stroke="#0070f3"
//                 strokeWidth="8"
//                 fill="transparent"
//                 strokeDasharray="364.4"
//                 strokeDashoffset={364.4 - (stats.totalContributions / 1000) * 364.4}
//                 strokeLinecap="round"
//               />
//             </svg>
//             <span className="absolute text-xl sm:text-4xl font-bold text-gray-600">{stats.grade}</span>
//           </div>
//         </div>

//         {/* Right Card: Languages */}
//         <div className="card p-6 sm:p-8">
//           <h2 className="text-xl sm:text-2xl font-bold text-[#0070f3] mb-4 sm:mb-8">Top Languages</h2>

//           <div className="w-full h-3 flex rounded-full overflow-hidden mb-4 sm:mb-8">
//             {languages.map((lang) => (
//               <div
//                 key={lang.name}
//                 style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
//                 className="h-full"
//               />
//             ))}
//           </div>

//           <div className="grid grid-cols-2 gap-y-2 sm:gap-y-4">
//             {languages.map((lang) => (
//               <div key={lang.name} className="flex items-center gap-2 sm:gap-3">
//                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
//                 <span className="text-sm sm:text-base font-medium text-gray-700">
//                   {lang.name} {lang.percent}%
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Card: Streak */}
//       <div className="card max-w-3xl mx-auto flex flex-col sm:flex-row justify-around text-center p-4 sm:p-8 gap-4 sm:gap-0">
//         <div className="flex-1 border-b sm:border-b-0 sm:border-r border-gray-100 pb-4 sm:pb-0">
//           <p className="text-2xl sm:text-4xl font-bold text-[#0070f3]">{stats.totalContributions}</p>
//           <p className="text-sm sm:text-base font-semibold text-[#0070f3] mt-1 sm:mt-2">Total Contributions</p>
//           <p className="text-[10px] sm:text-xs text-gray-400 mt-1 uppercase">Dec 18, 2024 - Present</p>
//         </div>

//         <div className="flex-1 flex flex-col items-center justify-center px-0 sm:px-4">
//           <div className="relative inline-block">
//             <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#0070f3] border-t-transparent flex items-center justify-center mx-auto">
//               <Flame className="absolute -top-2 text-[#0070f3]" size={20} fill="currentColor" />
//               <span className="text-xl sm:text-3xl font-bold text-gray-800">{stats.currentStreak}</span>
//             </div>
//           </div>
//           <p className="text-sm sm:text-base font-bold text-[#0070f3] mt-2 sm:mt-4">Current Streak</p>
//           <p className="text-[10px] sm:text-xs text-gray-400 mt-1 uppercase">Mar 15</p>
//         </div>

//         <div className="flex-1 border-t sm:border-t-0 sm:border-l border-gray-100 pt-4 sm:pt-0">
//           <p className="text-2xl sm:text-4xl font-bold text-[#0070f3]">{stats.longestStreak}</p>
//           <p className="text-sm sm:text-base font-semibold text-[#0070f3] mt-1 sm:mt-2">Longest Streak</p>
//           <p className="text-[10px] sm:text-xs text-gray-400 mt-1 uppercase">Feb 13 - Feb 28</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const StatItem = ({ icon, label, value }) => (
//   <div className="flex items-center gap-2 sm:gap-4 group">
//     <div className="text-[#0070f3]">{icon}</div>
//     <span className="text-sm sm:text-base font-semibold text-gray-600 flex-1">{label}</span>
//     <span className="text-sm sm:text-base font-bold text-gray-700 w-12 text-right">{value}</span>
//   </div>
// );

// export default GitHubStats;

import React, { useEffect, useState } from "react";
import {
  Star,
  GitCommit,
  GitPullRequest,
  CircleAlert,
  BookOpen,
  Flame,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const USERNAME = "arrimon";

const query = `
query {
  user(login: "${USERNAME}") {
    contributionsCollection {
      totalCommitContributions
      totalPullRequestContributions
      totalIssueContributions
      totalRepositoriesWithContributedCommits
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
    repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
      nodes {
        name
        stargazerCount
        languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
          edges {
            size
            node {
              name
              color
            }
          }
        }
      }
    }
    pullRequests(states: MERGED) {
      totalCount
    }
    issues(states: OPEN) {
      totalCount
    }
  }
}
`;

const calculateGrade = (contributions) => {
  if (contributions > 1000) return "A+";
  if (contributions > 700) return "A";
  if (contributions > 500) return "B+";
  if (contributions > 300) return "B";
  if (contributions > 100) return "C+";
  return "C";
};

const calculateStreaks = (weeks) => {
  const days = weeks
    .flatMap((w) => w.contributionDays)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  // Longest streak
  for (const day of days) {
    if (day.contributionCount > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  }

  // Current streak (backward from today)
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
        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });

        const { data } = await res.json();
        const user = data.user;
        const contrib = user.contributionsCollection;
        const repos = user.repositories.nodes;

        // Stars
        const stars = repos.reduce((sum, r) => sum + r.stargazerCount, 0);

        // Languages
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

        // Streaks
        const { currentStreak, longestStreak } = calculateStreaks(
          contrib.contributionCalendar.weeks
        );

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

  if (loading)
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 rounded-full border-2 border-[var(--accent)] border-t-transparent animate-spin" />
      </div>
    );

  if (error)
    return (
      <p className="text-center text-red-400 py-10">{error}</p>
    );

  const circumference = 2 * Math.PI * 58;
  const progress = Math.min(stats.totalContributions / 1500, 1);

  return (
    <div id="github" className="py-20 px-4 sm:px-6 lg:px-8">
      <SectionHeader
        number={2}
        title="GitHub Stats"
        description="Real-time data pulled directly from the GitHub GraphQL API."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* Stats Card */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] p-6 md:p-8 flex justify-between items-start md:items-center hover:shadow-xl transition-shadow duration-500 gap-4">
          <div className="space-y-4 flex-1">
            <h2 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-4">
              {USERNAME}'s GitHub Stats
            </h2>
            <StatItem icon={<Star size={18} />} label="Total Stars" value={stats.stars} />
            <StatItem icon={<GitCommit size={18} />} label="Total Commits" value={stats.commits} />
            <StatItem icon={<GitPullRequest size={18} />} label="Merged PRs" value={stats.prs} />
            <StatItem icon={<CircleAlert size={18} />} label="Open Issues" value={stats.issues} />
            <StatItem icon={<BookOpen size={18} />} label="Repos Contributed" value={stats.contributed} />
          </div>

          {/* Grade Circle */}
          <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0 mt-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="var(--border)"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="var(--accent)"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress * circumference}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 1s ease-out" }}
              />
            </svg>
            <span className="absolute text-2xl md:text-3xl font-black text-[var(--text-primary)]">{stats.grade}</span>
          </div>
        </div>

        {/* Languages Card */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] p-6 md:p-8 hover:shadow-xl transition-shadow duration-500">
          <h2 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-4">Top Languages</h2>

          <div className="w-full h-3 flex rounded-full overflow-hidden mb-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                className="h-full transition-all duration-700"
              />
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

      {/* Streak Card */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center hover:shadow-xl transition-shadow duration-500">
        <div className="border-b sm:border-b-0 sm:border-r border-[var(--border)] pb-6 sm:pb-0">
          <p className="text-3xl md:text-4xl font-black text-[var(--accent)]">{stats.totalContributions}</p>
          <p className="text-sm font-bold text-[var(--text-primary)] mt-2">Total Contributions</p>
          <p className="text-xs text-[var(--text-muted)] mt-1 uppercase tracking-wide">This Year</p>
        </div>

        <div className="flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-[var(--border)] pb-6 sm:pb-0">
          <div className="relative w-16 h-16 rounded-full border-4 border-[var(--accent)] flex items-center justify-center mb-3">
            <Flame className="absolute -top-3 text-[var(--accent)]" size={18} fill="currentColor" />
            <span className="text-2xl font-black text-[var(--text-primary)]">{stats.currentStreak}</span>
          </div>
          <p className="text-sm font-bold text-[var(--text-primary)]">Current Streak</p>
          <p className="text-xs text-[var(--text-muted)] mt-1 uppercase tracking-wide">Days</p>
        </div>

        <div>
          <p className="text-3xl md:text-4xl font-black text-[var(--accent)]">{stats.longestStreak}</p>
          <p className="text-sm font-bold text-[var(--text-primary)] mt-2">Longest Streak</p>
          <p className="text-xs text-[var(--text-muted)] mt-1 uppercase tracking-wide">Days</p>
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