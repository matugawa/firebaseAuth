import React,{useState, useEffect} from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../FirebaseConfig.js';
import {Navigate, Link} from 'react-router-dom'

const Register=()=>{
    const [regEm, setRegEm]=useState("");
    const [regPass, setRegPass]=useState("");
    const [usr, setUsr]=useState("");
    useEffect( ()=>{
        onAuthStateChanged(
            auth,
            (currentUsr)=>{
                setUsr(currentUsr);
            }
        );
    }, []);
    const hdlSbmt=async(e)=>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(
                auth,
                regEm,
                regPass
            );
        }catch(error){
            alert("inpute correctly");
        }
    };
    return(
        <>
            {usr? ( <Navigate to={`/`}/>):(
            <>
                <h1 style={{color:"blue", textAlign: "center"}}>SIGN UP</h1>
                <form onSubmit={hdlSbmt}>
                    <div style={{color:"green", textAlign: "center"}}>
                        <label>MAIL ADDRESS</label>
                        <p>
                        <input
                        name="email"
                        type="email"
                        value={regEm}
                        onChange={(e)=>setRegEm(e.target.value)}
                        />
                        </p>
                    </div>
                    <div style={{color:"green", textAlign: "center"}}>
                        <label>PASSWORD</label>
                        <p>
                        <input
                        name="password"
                        type="password"
                        value={regPass}
                        onChange={(e)=>setRegPass(e.target.value)}
                        />
                        </p>
                    </div>
                    <div style={{textAlign: "center"}}>
                    <button>REGIT</button>
                    </div>
                    <p style={{textAlign: "center"}}><Link to={`/login/`}>LOGIN</Link></p>
 
                    
                    
                </form>
            </>)}
        </>
    );
};

export default Register;

/*
                    <div style={{textAlign: "center"}}>
                    <button>REGIT</button>
                    </div>
*/