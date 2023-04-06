import { toast } from "react-toastify"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { db, auth } from "../../firebase/firebase-config"
import { setUser } from "./userSlice"

export const autoLogin = (uid) => async (dispatch) =>{
    try {

        

            const userResp = await getDoc(doc (db, "users" , uid ))

            const userInfo = {...userResp.data(), uid: uid}
            

            dispatch(setUser(userInfo)
            )

    } catch(error){
        toast.error(error.message)
    }
}


export const loginUser =  ({email, password})=> async (dispatch) =>{
    try{
        const {user} = await signInWithEmailAndPassword(
            auth, 
            email, 
            password
            )
            user?.uid && dispatch(autoLogin(user.uid))
            if (user?.uid){

                const userResp = await getDoc(doc (db, "users" , user?.uid ))

                const userInfo = {...userResp.data(), uid:user?.uid}
                

                dispatch(setUser(userInfo)
                )


            }

    } catch (error){
        toast.error(error.message)

    }
}