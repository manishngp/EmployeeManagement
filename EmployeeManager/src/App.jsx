
import {ChakraProvider} from '@chakra-ui/react'

import { Button, Box } from '@chakra-ui/react'
import Dashbord from './components/Dashbord'
// import Reducer from './reducer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddData from './components/addData'
import DeteteData from './components/deleteData'
import DisplayData from './components/displayData'
import UpdateData from './components/updateData'
import { Link } from 'react-router-dom'
import UpdateEmployee from './components/updateEmp'
function App() {
 

  return (
    <>

    {/* <Reducer/> */}
   

    {/* <nav>
      <Link to="/">Home</Link>
      <Link to="/update">update</Link>
    </nav> */}
    
     <Router>
     <Dashbord>
     <Routes>
        {/* <Route path='/' element={<Dashbord/>}/> */}
      <Route path="/add" element={<AddData />} />
      <Route path="/" element={<DisplayData />} />
      <Route path="/update" element={<UpdateData />} />
      <Route path='/:id' element={<UpdateEmployee/>}/>
      <Route path="/delete" element={<DeteteData />} />
      </Routes>
       </Dashbord>
     
     </Router>
     
  
    </>
  )
}

export default App
