import axios from 'axios';


// Creating instance of axios
const instance = axios.create({baseURL:"http://localhost:3000"});

export default instance;
