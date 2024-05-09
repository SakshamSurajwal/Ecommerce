import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%",marginTop:'5%',marginLeft:'10%' }}
          />
        </div>
        <div style={{marginTop:'10%',marginLeft:'10%'}} className="col-md-4">
          <p className="text-justify mt-2">
            Dekh bhai tujhe bohot jan na hai auro ke baaren. Saale tu dusro ki zindagi mein jhakta hi tha aur ab ek 
            website ko bhi nhi chod rha. 
          </p>
          <p>
            ChupChaap se samaan le aur nikal yhan se
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
