import axios from "axios";

class ApiService {
    static defaultIp = "http://localhost:5247"

    static async Get(apiLink) {
        try {
            const response = await axios.get(apiLink);
            return response.data;
        } catch (error) {
            console.error("Erro GET:", error);
            throw error;
        }
    }

    static async Post(url, body) {
        try {
            const response = await axios.post(this.defaultIp + url, body, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.data;
        } catch (err) {
            console.error("Erro POST:", err);
            throw err;
        }
    }

    static async InternalGet(apiLink) {
        try {
            const response = await axios.get(this.defaultIp + apiLink);
            return response.data;
        } catch (error) {
            console.error("Erro GET:", error);
            throw error;
        }
    }
}

export default ApiService;