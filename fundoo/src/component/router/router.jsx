import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin from '../../pages/sign_in/signin'
import Signupp from '../../pages/sign_up/Signupp'
import Dashboard from '../dashboard/dashboard'

function RouterOne() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Signin />}/>
                <Route  path='/signup' element={<Signupp />}/>
                <Route  path='/dashboard' element={<Dashboard />}/>

            </Routes>
        </Router>
      
    </div>
  )
}

export default RouterOne
