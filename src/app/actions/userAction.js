import { FETCH_LOGIN_ACTION } from './actionTypes'
import { fetchData } from '../api/apiService'

export const query = ()=> {
    return dispatch => {
        fetchData(data=>{
            dispatch({
                type:FETCH_LOGIN_ACTION, 
                data:data
            })
            console.log(data)
        })
    }
}