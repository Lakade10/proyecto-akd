import axios from "axios";

const webApi = axios.create({
    baseURL: 'https://proyecto-akd-default-rtdb.firebaseio.com'
})

export default webApi