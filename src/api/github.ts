import { Octokit } from "octokit";
import { RepoData } from "@/api/interfaces/img";

const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_API_TOKEN 
});

export async function getData(): Promise<RepoData> {
    try {
        const repositories = (await octokit.request("GET https://api.github.com/user/repos", {})).data;

        const names = repositories.map((repo: any) => repo.name);  
        const description = repositories.map((repo: any) => repo.description);  
        const html_url = repositories.map((repo: any) => repo.html_url);  
        
        return {names , description, html_url};

    } catch (error: any) {
        console.error(`Error! Status: ${error.status}.`);
        return {names: [], description: [], html_url: []};
    }
}
