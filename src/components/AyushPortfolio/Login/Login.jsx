import { useState,useEffect } from 'react';
import './Login.css';
export function Login(){
    const[title,setTitle]=useState("welcome");
    useEffect(()=>{
        setTitle("welcome in my class");
    })
    return(
        <>
       <h1>{title}</h1>
        </>
    )
}