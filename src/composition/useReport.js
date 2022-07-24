
import axios from 'axios'
import {ref} from "vue"

export function useReport() {
    const reports = ref()
    const getReport = () => {
        return axios.get(`http://10.1.1.158:8000/reports/`)
        .then((r) => {
            reports.value = r.data
            console.log(r)
        })
    }
    return{
        getReport,
        reports,
    }
}