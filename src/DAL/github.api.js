import axios from "axios";

export default class GitHubaAPI {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.github.com',
            timeout: 2000
        });
    }

    async getRepos(username) {
        try {
            const response = await this.api.get(`/users/${ username }/repos`);
            return Object.values(response.data);
        }
        catch(error) {
            console.log(error);
        }
    }
}