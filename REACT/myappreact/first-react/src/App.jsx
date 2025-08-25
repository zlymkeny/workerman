import { useEffect, useState } from 'react'

import './App.css'
import Bodynav from './bodynav/Bodynav'
import Leftnav from './leftnav/Leftnav'
import Topnav from './topnav/Topnav'    

function App() {
  
  const [count, setcount] = useState(10)
  

  return (
  <>
  <Bodynav />
  <Leftnav />
  <Topnav />
  </>
  )
}

export default App
