import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Shared from './Components/Shared'
import DashBoard from './Components/DashBoard'
import Request from './Components/Request'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
          <Route path ='/' element = {<Shared/>}>
             <Route index element = {<DashBoard/>}></Route>
             <Route path='/Request' element = {<Request/>}/>









          </Route>


       </Routes>
     
     
     
     
     
     </BrowserRouter>
    
    </div>
  );
}

export default App;
