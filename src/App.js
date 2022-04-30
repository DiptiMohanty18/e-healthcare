import React from 'react';
import './App.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import {NotFound} from './Components/NotFound';
import { Medicine } from './Components/Medicine';
import Login from './Components/Login';
import AddMedicine from './Components/AddMedicine';
import EditMedicine from './Components/EditMedicine';
import ViewMedicine from './Components/ViewMedicine';
import Signup from './Components/Signup';
import { Cart } from './Components/Cart';
import {Footerpage} from './Components/Footerpage';
import { Contact } from './Components/Contact';
import  Testgrid  from './Components/Testgrid';
import AdminLogin from './Components/AdminLogin';
import ViewUser from './Components/ViewUser';
import EditUser from './Components/EditUser';
import { UserList } from './Components/UserList';
import AddFunds from './Components/AddFunds';
import ScrollToTop from './Components/ScrolltoTop';
import { Checkout } from './Components/Checkout';
import { Orders } from './Components/Orders';
import {Reports} from './Components/Reports';
import { OrderPLaced } from './Components/OrderPlaced';



function App() {
  var userid=localStorage.getItem("userid");
  var admin = localStorage.getItem('Admin');
  return (
      <BrowserRouter>
      <div className="App">
        <ScrollToTop/>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          { !(userid === null)?(
          <Route exact path="/Medicine" element={<Medicine />} />
          ):(
            <Route path="*" element={<NotFound />}/>
          )
          }
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          { (admin === "true") ? (
          <><Route exact path="/addmedicines" element={<AddMedicine />} />
          <Route exact path="/EditMedicine/:id" element={<EditMedicine/>}/>
          <Route exact path="/ViewMedicine/:id" element={<ViewMedicine/>}/>
          <Route exact path="/userlist" element={<UserList/>}/>
          <Route exact path="/Reports" element={<Reports/>}/>
          </>
          ):(<>
            
            <Route path="*" element={<NotFound />}/></>
          )
          }
          
          <Route exact path="/viewuser" element={<ViewUser/>}/>
          { (admin === "false") ? (
          <><Route exact path="/edituser" element={<EditUser/>}/>
          <Route exact path="/Cart" element={<Cart/>}/>
          <Route exact path="/addfunds" element={<AddFunds/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path="/Orders" element={<Orders/>}/>
          <Route exact path="/OrderPLaced" element={<OrderPLaced/>}/>
          </>
          ):(
            <Route path="*" element={<NotFound />}/>
          )
          }
          
          <Route path="*" element={<NotFound />}/>
        </Routes>
       
        <Footerpage />

      </div>
    </BrowserRouter>
 
  );
}

export default App;
