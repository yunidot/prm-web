import axios from "axios";

export async function load({ params }){
    const patients  = await axios.get('http://localhost:8000/api/v1/patients').then(response => response.data);
    console.log(patients)
    return {
        patients
    }

}