export interface imgAtteribute {
    id: number;
    urls: {
        full: string;
    }
}

export interface RepoData {
    names: string[];
    description: string[];
    html_url: string[];
}

export interface UnsplashResponse {
    results: imgAtteribute[]
}