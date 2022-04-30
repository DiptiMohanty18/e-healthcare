import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import {Table} from 'react-bootstrap';

export class Footerpage extends Component {

  render() {

    return (
      <footer className="footer text-center">
        <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
        <a href="https://twitter.com/" className="fa fa-twitter"></a>
        <a href="https://www.google.com/" className="fa fa-google"></a>
        <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
        <a href="https://www.Youtube.com/" className="fa fa-youtube"></a>
        <a href="https://www.instagram.com/" className="fa fa-instagram"></a>



        <div className="py-4">
          <section className='mb-4 text-white'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
              voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
              sequi voluptate quas.
            </p>
          </section>
       </div>

        <div className="divfooter text-center">
        <Table className="mr-9 table table-borderless text-white" responsive>
          <thead>
            <tr>
              <th scope="col">PRODUCT</th>
              <th scope="col">GET TO KNOW US</th>
              <th scope="col">LET US HELP YOU</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td><NavLink to="/" className="nav-link px-2 text-white">Terms</NavLink></td>
              <td><NavLink to="/About" className="nav-link px-2 text-white">About</NavLink></td>
              <td><NavLink to="/" className="nav-link px-2 text-white">Help</NavLink></td>

            </tr>
            <tr>
             
              <td><NavLink to="/" className="nav-link px-2 text-white">Advertising</NavLink></td>
              <td><NavLink to="/" className="nav-link px-2 text-white">Privacy Policy</NavLink></td>
              <td><NavLink to="/Contact" className="nav-link px-2 text-white">Contact Us</NavLink></td>

            </tr>
            <tr>
             
              <td></td>
              <td><NavLink to="/" className="nav-link px-2 text-white">Terms and Conditions</NavLink></td>

            </tr>
            <tr>
             
             <td></td>
             <td><NavLink to="/Contact" className="nav-link px-2 text-white">Work Here</NavLink></td>

           </tr>
          
           
          </tbody>
        </Table>
        </div>
       

        <div className='text-center p-2' style={{ backgroundColor: 'rgb(77, 77, 255)' }}>
         
          <p className='text-white'>
          © 2022 Copyright: Dipti Mohanty
          </p>
          </div>
          </footer>
          
      //
        
    )
  }
}