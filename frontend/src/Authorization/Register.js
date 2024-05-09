import React, { useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");
    const navigate=useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const info={name,email,password,phone,address};

            const res=await axios.post(`http://localhost:8000/api/user/register`,info);

            if(res&&res.data.success){
                alert('Ao ji swagat hai aapka')
                navigate('/login');
            }
        }
        catch(err){
            toast.error('Something went wrong');
        }
    }

  return (
    <Layout title='Sign up'>
        <div style={{border:'3px solid black',color:'yellow',width:'40%',height:'50%',marginTop:'0.8%',marginLeft:'30%',
        backgroundColor:'rgba(0,0,0,0.4)',borderRadius:'30px'}} className='register'>
            <h1>Sign up</h1>
            <div style={{height:'67vh',width:'30vw'}}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">User Name : </label>
                    <input value={name} required
                    onChange={(e)=> setName(e.target.value)} placeholder='Enter your name' type="text" className="form-control"id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Email : </label>
                    <input value={email} required
                    onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email' type="email" className="form-control"id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Phone Number : </label>
                    <input value={phone} required
                    onChange={(e)=> setPhone(e.target.value)} placeholder='Enter your phone number' type="text" className="form-control"id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Address : </label>
                    <input value={address} required
                    onChange={(e)=> setAddress(e.target.value)} placeholder='Enter your address' type="text" className="form-control"id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password : </label>
                    <input value={password} required
                    onChange={(e)=> setPassword(e.target.value)} placeholder='Enter your password' type="password" className="form-control"id="exampleInputPassword1"/>
                </div>
                <button style={{width:'100%',backgroundColor:'yellow',color:'black'}} type="submit" className="btn btn-primary">Sign up</button>
            </form>
            </div>
        </div>
    </Layout>
  )
}

export default Register
