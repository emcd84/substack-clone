import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbNTWpwi2_0ULFwspqawk0uaqL9xd-i8M",
  authDomain: "substack-clone-add8a.firebaseapp.com",
  projectId: "substack-clone-add8a",
  storageBucket: "substack-clone-add8a.appspot.com",
  messagingSenderId: "660762715068",
  appId: "1:660762715068:web:ee9d56094ae031a37d01b9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
