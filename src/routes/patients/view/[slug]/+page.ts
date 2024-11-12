import axios from "axios";

export async function load({ params }){
    const patientNo = params.slug;
    const patient_info = await axios.get('http://localhost:8000/api/v1/patient/' + patientNo).then(response => response.data);
    console.log(patient_info);
    return {
        patient_info
    };
}