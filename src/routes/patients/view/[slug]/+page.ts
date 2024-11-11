export async function load({ params }){
    const patientNo: string = params.slug;
    return {
        patientNo
    };
}