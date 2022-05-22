import axios from "axios";

export const ApiAddresses = () => {
    return 'https://6283f9ca6b6c317d5ba763ab.endapi.io/usersList';
}

// export let AxiosGet = async()=> {
export let AxiosGet = ()=> {
    let responseAxios = {
        isData: false,
        loading: true,
        data: [],
        error: [],
    }
    axios.get(ApiAddresses()).then((response) => {
        if (response.data.data.length > 0) {
            responseAxios.isData = true;
            responseAxios.data = response.data.data;
            responseAxios.loading = false;
        }
    }).catch(error => {
        responseAxios.error = error;
    })
    return responseAxios;
}