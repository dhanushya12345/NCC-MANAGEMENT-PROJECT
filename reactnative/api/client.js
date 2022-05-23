import {create} from 'apisauce'

const apiClient= create({baseURL:"http://192.168.147.174:5000/ncc"});

export default apiClient;