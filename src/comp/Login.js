import React,{useState, useEffect} from 'react';
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../FirebaseConfig.js';
import {Navigate, Link} from 'react-router-dom';

const Login=()=>{
  const [loginEm, setLoginEm]=useState();
  const [loginPass, setLoginPass]=useState();
  const [usr, setUsr]=useState();
  useEffect( ()=>{
    onAuthStateChanged(
      auth,
      (currentUsr)=>{
        setUsr(currentUsr);
      }
    );
  });
  const hdlSbmt=async(e)=>{
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(
        auth,
        loginEm,
        loginPass
      );
    }catch(error){
      alert("invalid email and pass");
    }
  };

  return(
    <>
  {usr? (
    <Navigate to={`/`}/>
  ):(
    <>
      <h1 style={{color:"blue", textAlign: "center"}}>LOG IN</h1>
      <form onSubmit={hdlSbmt}>
        <div style={{color:"blue", textAlign: "center"}}>
          <label>MAIL ADDRESS</label>
          <input
            name="email"
            type="email"
            value={loginEm}
            onChange={(e)=>setLoginEm(e.target.value)}
          />
        </div>
        <div style={{color:"blue", textAlign: "center"}}>
          <label>PASSWORD</label>
          <input
            name="password"
            type="password"
            value={loginPass}
            onChange={(e)=>setLoginPass(e.target.value)}
          />
        </div>
        <div style={{textAlign: "center"}}>
            <button>LOGIN</button>
        </div>
        <p style={{textAlign: "center"}}><Link to={`/register`}>REGISTER</Link></p>
      </form>
    </>
  )}
    </>
  );
};

export default Login;