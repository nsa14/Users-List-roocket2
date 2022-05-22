import axios from "axios";

export const ApiAddresses = () => {
  return "https://6283f9ca6b6c317d5ba763ab.endapi.io/usersList";
};

// export let AxiosGet = async()=> {
export let AxiosGet = async () => {
  let responseAxios = {
    isData: false,
    loading: true,
    data: [],
    error: [],
  };
  try {
    const response = await axios.get(ApiAddresses());
    if (response.data.data.length > 0) {
      responseAxios.isData = true;
      responseAxios.data = response.data.data;
      responseAxios.loading = false;
    }
  } catch (error) {
    responseAxios.error = error;
  }

  return responseAxios;
};
