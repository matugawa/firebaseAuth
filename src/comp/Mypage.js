import React, {useState, useEffect} from 'react'
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../FirebaseConfig.js';
import {useNavigate, Navigate} from 'react-router-dom';

const Mypage=()=>{
    const [usr, setUsr]=useState("");
    const [loading, setLoading]=useState(true);
    const navigate=useNavigate();
    const logout=async()=>{
        await signOut(auth);
        navigate("/login/");
    }
    useEffect( ()=>{
        onAuthStateChanged(
            auth,
            (currentUsr)=>{
                setUsr(currentUsr);
                setLoading(false);
            }
        );
    }, []);
    return(
        <>
        {!loading &&(
        <>
        {!usr?(
            <Navigate to={`/login/`}/>
        ):(
        <>
            <h1 style={{color:"blue", textAlign: "center"}}>HOME</h1>
            <p style={{color:"green", textAlign: "center"}}> {usr &&usr.email}</p>
            <div style={{textAlign: "center"}}>
            <button onClick={logout}>LOG OUT</button>
            </div>

        </>
        )}
        </>
        )}
        </>
    );
}

export default Mypage;