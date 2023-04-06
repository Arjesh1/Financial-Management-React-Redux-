import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { setTrans } from "./transactionSlice";

// pull data from firebase and add to the reduxt store for the specific user basd on the uid
export const getTransAction = (userId) => async (dispatch) => {
  try {
    const q = query(
      collection(db, "transaction"),
      where("userId", "==", userId)
    );

    const { docs } = await getDocs(q);

    const trans = [];
    docs.forEach((item) => {
      trans.push({ ...item.data(), id: item.id });
      console.log(trans);
    });

    dispatch(setTrans(trans));
  } catch (error) {}
};

// adding data to the firebase db
export const addTransactionAction = (data) => async (dispatch) => {
  try {
    const respPending = addDoc(collection(db, "transaction"), data);
    toast.promise(respPending, {
      pending: "Please wait...",
    });

    const result = await respPending;

    if (result?.id) {
      toast.success("New transaction has been added");
      //get all transaction
      dispatch(getTransAction(data.userId));
    }
  } catch (error) {
    toast.error(error.message);
  }
};

//delete transactions basedon given id

export const deletTranAction = (id, userId) => async (dispatch) => {
  try {
    const resultPending = deleteDoc(doc(db, "transaction", id));

    toast.promise(resultPending, {
      pending: "Please wait while deleting the data",
    });

    await resultPending;

    dispatch(getTransAction(userId));

    toast.success("Item has been deleted");
  } catch (error) {
    toast.error(error.message);
  }
};
