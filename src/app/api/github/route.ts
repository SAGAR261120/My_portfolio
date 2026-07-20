import { NextResponse } from "next/server";
import { fetchGitHubData } from "@/lib/github";
import { siteConfig } from "@/lib/data";

export async function GET() {
  try {
    const data = await fetchGitHubData(siteConfig.githubUsername);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 502 },
    );
  }
}
