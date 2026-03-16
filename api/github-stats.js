// api/github-stats.js
export default async function handler(req, res) {
  // এটি Vercel Dashboard-এর Environment Variables থেকে আসবে
  const TOKEN = process.env.VITE_GITHUB_TOKEN; 
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

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    
    if (data.errors) {
      return res.status(500).json({ error: data.errors[0].message });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch GitHub data" });
  }
}