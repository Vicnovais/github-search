import axios from "axios";

export default class GitHubaAPI {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.github.com',
            timeout: 2000
        });
    }

    async getRepos() {
        try {
            const response = await this.api.get("/users/vicnovais/repos");
            return Object.values(response.data);
        }
        catch(error) {
            console.log(error);
        }
    }
}