import { getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

class FirebaseService {
  constructor() {}

  getItemsByQuery = async (query) => {
    const snapshot = await getDocs(query);
    let newArr = [];
    snapshot.forEach((doc) => {
      const a = doc.data();
      const b = { ...a, id: doc.id };
      newArr.push(b);
    });
    return newArr;
  };

  getItemByID = async (id) => {
    const ref = doc(db, "items", id);
    const docSnap = await getDoc(ref);
    const res = docSnap.data();
    return res;
  };
}
export default FirebaseService;
