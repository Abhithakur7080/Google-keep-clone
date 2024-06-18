import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyD7gYUSYsfwIXxLwtlajwwctZowsd1C36A",
  authDomain: "test-7610c.firebaseapp.com",
  projectId: "test-7610c",
  storageBucket: "test-7610c.appspot.com",
  messagingSenderId: "840567987405",
  appId: "1:840567987405:web:1fe1cac1c289d702849d84",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  //setdoc using ref
  const setDataToFirestoreRef = async (collectionName, reference, data) => {
    try {
      await setDoc(doc(db, collectionName, reference), data);
    } catch (error) {
      console.log(error);
    }
  };
  const logoutUser = () => {
    return new Promise((resolve, reject) => {
      signOut(firebaseAuth)
        .then(() => resolve())
        .catch((error) => reject(error));
    });
  };

  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null);
  };
  //google login
  const signInWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };
  const getDataFromFirestoreRef = async (collectionName, reference) => {
    try {
      const docRef = doc(db, collectionName, reference);
      const docSnap = await getDoc(docRef);
      return docSnap.exists() ? docSnap.data() : null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const updateDataFromFirestore = async (collectionName, reference, data) => {
    try {
      await updateDoc(doc(db, collectionName, reference), data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
        const userDoc = await getDataFromFirestoreRef("users", currentUser.uid);
        if (!userDoc) {
          await setDataToFirestoreRef("users", currentUser.uid, {
            email: currentUser.email,
            notes: [],
            archives: [],
            deleted: [],
          });
        }
        navigate("/");
      } else {
        setCurrentUser(null);
        navigate("/login");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  //get a doc using ref
  return (
    <AuthContext.Provider
      value={{
        logout,
        currentUser,
        signInWithGoogle,
        updateDataFromFirestore,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useFirebase = () => useContext(AuthContext);
export default AuthProvider;
