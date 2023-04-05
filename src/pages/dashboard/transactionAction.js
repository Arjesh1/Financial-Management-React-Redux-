import { toast } from "react-toastify"
import {addDoc, collection} from "firebase/firestore"
import {db} from "firebase/firebase-config"

export const addTransactionAction = data => dispatch => {
    try{
        const respPending =addDoc(collection(db, "transactions"))
        toast.promise(respPending, {
            pending: "Please wait..."
        })

} catch (error) {
    toast.error(error.message)

}
}