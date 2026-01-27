import axios from "axios";
// https://api.ipify.org?format=json


class ApiService {
    static Get(apiLink = "https://api.ipify.org?format=json") {

        axios.get(apiLink)
            .then(response => {
                console.log("IP:", response.data.ip);
            })
            .catch(error => {
                console.error("Erro no GET:", error);
            });
    }

    static Post(postLink = "https://api.ipify.org?format=json") {

        axios.post(response => {
            console.log("Envio:" + response);

        })
    }
}

export default ApiService;
