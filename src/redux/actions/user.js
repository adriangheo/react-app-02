import { signInWithGoogle } from '../../apis/firebase'

export function startLoading(){
    return{
        type: 'START_LOADING' 
    }
}

export function updateUserDate(payload){
    return{
        type: 'UPDATE_USER_DATA',
        payload
    }
}

export function updateError(payload){
    return{
        type: 'UPDATE_ERROR',
        payload
    }
}

export function loginUser(){
    return (dispatch) => {
        dispatch(startLoading());

        signInWithGoogle().then((response)=>{
            const payload = response.user;
            
            dispatch(updateUserDate(payload));
        }).catch((error)=>{
            dispatch(updateError(error))
        })
    }
}
