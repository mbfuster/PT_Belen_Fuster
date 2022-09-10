import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";
import { useState, useEffect } from "react";


export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if ( !context ) throw new Error('There is no auth provider')
    return context
}

export function AuthProvider ({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser( currentUser );
            console.log(user, '...............', currentUser)
            setLoading(false);

            
        });
        return () => unsubuscribe();
      }, []);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };


  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

    return (
        <authContext.Provider value={{ signup, login, logout, loading, loginWithGoogle }}>
            {children}
        </authContext.Provider>
    )

}
