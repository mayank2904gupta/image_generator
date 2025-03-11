import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Desc from '../components/Desc'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/GenerateBtn'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Desc/>
      <Testimonials/>
      <GenerateBtn/>
      <Footer/>
    </div>
  )
}

export default Home