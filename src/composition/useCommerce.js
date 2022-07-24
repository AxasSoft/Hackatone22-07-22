
import axios from 'axios'
import {ref} from "vue"

export function useCommerce() {
    const commerces = ref()
    const commercesFree = ref()
    const getCommerce = () => {
        return axios.get(`http://10.1.1.158:8000/commercial-premises/`)
        .then((r) => {
            commerces.value = r.data
            console.log(commerces.value)
        })
    }

    const getCommerceFree = () => {
        return axios.get(`http://10.1.1.158:8000/commercial-premises/free/`)
        .then((r) => {
            commercesFree.value = r.data
        })
    }
    return{
        getCommerce,
        getCommerceFree,
        commerces,
        commercesFree,
    }
}