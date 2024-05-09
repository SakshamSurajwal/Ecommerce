import React from 'react'
import Layout from '../components/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title='Contact Us'>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="/images/contactus.jpeg" alt="contactus" style={{ width: "100%",marginTop:'6%',marginLeft:'5%' }}/>
        </div>
        <div style={{marginTop:'6%',marginLeft:'7%'}} className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Dekho koi dikkat ho tohi phone krna, zabardasti phone kiya n to yaad rakhna tumhare ghar samaan dene aa skte
            hai to pelne bhi aa skte hai
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
