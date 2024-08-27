import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    const[password,setPassword]= React.useState('');
    const [email,setEmail]= React.useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }

    })


    const handleLogin= async ()=>{
        console.warn(email,password);
        let result =await fetch('http://localhost:3006/login',{
            method: 'post',
            body: JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/')

        }else{
            alert("Please enter correct detail")
        }

     
    }

    return(
        <div className='login'>
            <h1 className='head'>Login</h1>
            <input className='inputBox' type='text' value={email}
             onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter Email Address' />


            <input className='inputBox' type='text' value={password}
             onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' />

            <button onClick={handleLogin} type="button" className="button" >Login In</button>
    
        </div>
    )
}

export default Login;