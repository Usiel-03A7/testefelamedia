import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCT1Eu9ze5ESCZtitc5Yc6NPPXCivt_3ao",
  authDomain: "testfelamedia.firebaseapp.com",
  projectId: "testfelamedia",
  storageBucket: "testfelamedia.appspot.com",
  messagingSenderId: "1043850052633",
  appId: "1:1043850052633:web:602941952b26568cf55688"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };