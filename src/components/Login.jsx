import { useState } from 'react'
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCddP5UNKIT_2wwQDWw4zR1EvWJjYutkoc",
    authDomain: "first-login-mtm.firebaseapp.com",
    projectId: "first-login-mtm",
    storageBucket: "first-login-mtm.appspot.com",
    messagingSenderId: "493384876135",
    appId: "1:493384876135:web:a209581f61b75f34fbd4c2"
};




function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState('')
    const [password, setPasssword] = useState('')
    const handleSignUp = async () => {
        
        const app = initializeApp(firebaseConfig);

        const auth = getAuth(app);

        const user = await createUserWithEmailAndPassword(auth, email, password) 
              .catch(err => alert(err.message))
       if(user) {
           console.log(user)
           setIsLoggedIn(true)    
    } 
    }
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">
                Email:
                <input
                    value={email} onChange={e => setEmail(e.target.value)}
                    name="email" type="email" placeholder="you@there.com" />
            </label><br />
            <label htmlFor="password">
                Password:
                <input
                    value={password} onChange={e => setPasssword(e.target.value)}
                    name="password" type="password" />
            </label><br />
            <button onClick={handleSignUp}>Sign up</button>
        </form>
    )
}

export default Login;







