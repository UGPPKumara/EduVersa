import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyC_i7tf3YUipCVKN-GPGZExsPSo08LaCLc",
  authDomain: "eduversa-f2b8a.firebaseapp.com",
  databaseURL: "https://eduversa-f2b8a-default-rtdb.firebaseio.com",
  projectId: "eduversa-f2b8a",
  storageBucket: "eduversa-f2b8a.appspot.com",
  messagingSenderId: "337229396700",
  appId: "1:337229396700:web:e273b5e8a9472fb3ef1219",
  measurementId: "G-T4K38LBVNR"
};

const app = initializeApp(firebaseConfig); 


export const auth=getAuth(app);
export const db=getFirestore(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const put = getStorage(app);

export default db;