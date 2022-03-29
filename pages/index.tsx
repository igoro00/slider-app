import type { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { useLocalStorage } from '../hooks'
import Header from '../components/Header'
import SliderModel from '../components/slidermodel'
import { Button, Container } from '@mui/material'

const Home: NextPage = () => {
  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(0);

  return (
    <div>
      <Header title="Move"/>
      <Container maxWidth="md">
        {/* convert to radians */}
        <SliderModel yaw={yaw*0.0174532925} pitch={pitch*0.0174532925}/>
        <Button onClick={()=>setYaw(yaw+15)}>Add 15 degrees</Button>
      </Container>
    </div>
  )
}

export default Home
