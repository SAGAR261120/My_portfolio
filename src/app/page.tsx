import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { StatsSection } from "@/components/sections/stats";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { EducationSection } from "@/components/sections/education";
import { ServicesSection } from "@/components/sections/services";
import { GitHubSection } from "@/components/sections/github";
import { ContactSection } from "@/components/sections/contact";
import { fetchGitHubData } from "@/lib/github";
import { siteConfig } from "@/lib/data";

export default async function HomePage() {
  let github = {
    repos: [] as Awaited<ReturnType<typeof fetchGitHubData>>["repos"],
    languages: [] as string[],
    stars: 0,
    publicRepos: 0,
  };

  try {
    const data = await fetchGitHubData(siteConfig.githubUsername);
    github = {
      repos: data.repos,
      languages: data.languages,
      stars: data.stars,
      publicRepos: data.profile.public_repos,
    };
  } catch {
    // Graceful fallback when GitHub API is unavailable
  }

  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ServicesSection />
      <GitHubSection
        repos={github.repos}
        languages={github.languages}
        stars={github.stars}
        publicRepos={github.publicRepos}
      />
      <ContactSection />
    </>
  );
}
