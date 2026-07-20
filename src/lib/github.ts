export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
};

export type GitHubProfile = {
  login: string;
  html_url: string;
  public_repos: number;
  followers: number;
  avatar_url: string;
};

export async function fetchGitHubData(username: string) {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "sagar-sengar-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`, {
      headers,
      cache: "force-cache",
    }),
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,
      { headers, cache: "force-cache" },
    ),
  ]);

  if (!userRes.ok || !reposRes.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  const profile = (await userRes.json()) as GitHubProfile;
  const repos = ((await reposRes.json()) as GitHubRepo[]).filter(
    (repo) => !repo.fork,
  );

  const languages = Array.from(
    new Set(repos.map((r) => r.language).filter(Boolean)),
  ) as string[];

  const stars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  return { profile, repos, languages, stars };
}
