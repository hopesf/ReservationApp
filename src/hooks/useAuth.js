import {useEffect,useState} from "react";
import {getAuth, onAuthStateChanged, User } from 'firebase/auth'
import app from "../config/firebase";

const auth = getAuth(app); 

export function useAuth() {
    const [User, setUser] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }else{
                setUser(undefined);
            }
        });

        return unsubscribe;
    }, []);

    return User;
}