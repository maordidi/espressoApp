import axios from 'axios';


export default axios.create({
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
    baseURL:'https://10.0.0.11:3001'
 
   
});