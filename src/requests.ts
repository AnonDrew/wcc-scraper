import axios, { AxiosInstance, AxiosResponse } from "axios";

export default (query: string): Promise<AxiosResponse<any, any>> => requestor.get(query);

const requestor: AxiosInstance = axios.create({
    baseURL: "https://catalog.sunywcc.edu/search_advanced.php?",
});