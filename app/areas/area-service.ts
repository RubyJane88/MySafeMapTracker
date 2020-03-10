import {api} from "../api-config";


export async function getTest() {
    return await api.get('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries')
}
