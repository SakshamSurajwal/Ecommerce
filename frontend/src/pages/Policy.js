import React from 'react'
import Layout from '../components/Layout'

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6 ">
          <img src="/images/contactus.jpeg" alt="contactus" style={{ width: "100%",marginLeft:'10%',marginTop:'10%'}}/>
        </div>
        <div className="col-md-4">
          <h1 style={{marginLeft:'20%',marginTop:'20%'}}>Add privacy policy</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Policy
