import axios from "axios";

export const ApiAddresses = () => {
    return 'https://6283f9ca6b6c317d5ba763ab.endapi.io/usersList';
}

// export let AxiosGet = async()=> {
export let AxiosGet = async()=> {
// export async function AxiosGet(){
    let responseAxios = {
        isData: false,
        loading: true,
        data: [],
        error: [],
    }
    await axios.get(ApiAddresses()).then((response) => {
        if (response.data.data.length > 0) {
            responseAxios.isData = true;
            responseAxios.data = response.data.data;
            responseAxios.loading = false;
        }
    }).catch(error => {
        // console.log(error.response.data)
        responseAxios.error = error.response.data;
    })

    return responseAxios;
}

export let AxiosPost = async(data)=> {
// export async function AxiosGet(){
    let responseAxios = {
        isData: false,
        loading: true,
        data: [],
        error: [],
    }

    await axios.post(ApiAddresses(), data).then((response) => {
        if (response.status === 200) {
            responseAxios.isData = true;
            responseAxios.data = response.data;
            responseAxios.loading = false;
        }
    }).catch(error => {
        responseAxios.error = error.response.data;
    })

    return responseAxios;
}

export let AxiosUpdate = async(id, data)=> {
    let responseAxios = {
        isData: false,
        loading: true,
        data: [],
        error: [],
    }

    await axios.put(ApiAddresses()+'/'+id, data).then((response) => {
        if (response.status === 200) {
            responseAxios.isData = true;
            responseAxios.data = response.data;
            responseAxios.loading = false;
        }
    }).catch(error => {
        responseAxios.error = error.response.data;
    })

    return responseAxios;
}

export let AxiosDelete = async(id)=> {

    let responseAxios = {
        isData: false,
        loading: true,
        data: [],
        error: [],
    }

    await axios.delete(ApiAddresses()+'/'+id).then((response) => {
        if (response.status === 200) {
            responseAxios.isData = true;
            responseAxios.data = GetPromiseAxios();
            responseAxios.loading = false;
        }
    }).catch(error => {
        responseAxios.error = error.response.data;
    })
    console.log('AxiosDelete ')
    console.log(responseAxios)
    return responseAxios;
}

export const GetPromiseAxios =()=>{
    let responseAxios = {
        isData: false,
        loading: true,
        data: [],
        error: [],
    }
    AxiosGet()
        .then(response => {
            if (response.isData) {
                responseAxios.data = response.data;
                responseAxios.isData = true;
            }else{
                responseAxios.error = response.error;
            }
        })
        .catch(err => responseAxios.error = err)

    return responseAxios;
}