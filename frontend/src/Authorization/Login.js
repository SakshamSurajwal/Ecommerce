import React, { useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const info={email,password};

            const res=await axios.post(`http://localhost:8000/api/user/login`,info);

            if(res&&res.data.success){
                alert('Succesfully logged in');
                navigate('/home');
            }
            else{
                alert('tussi sign in krlo pehle')
            }
        }
        catch(err){
            toast.error('Something went wrong');
        }
    }

  return (
    <Layout title='Login'>
        <div style={{border:'3px solid black',color:'yellow',width:'40%',height:'30%',marginTop:'3%',marginLeft:'30%',
        backgroundColor:'rgba(0,0,0,0.4)',borderRadius:'30px'}} className='register'>
            <h1>Login</h1>
            <div style={{height:'45vh',width:'30vw'}}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Email : </label>
                    <input value={email} required
                    onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email' type="email" className="form-control"id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password : </label>
                    <input value={password} required
                    onChange={(e)=> setPassword(e.target.value)} placeholder='Enter your password' type="password" className="form-control"id="exampleInputPassword1"/>
                </div>
                <button style={{marginTop:'10%',width:'100%',backgroundColor:'yellow',color:'black'}} type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
        </div>
    </Layout>
  )
}

export default Login
