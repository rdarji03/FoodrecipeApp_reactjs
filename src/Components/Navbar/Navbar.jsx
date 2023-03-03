import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import close from "../../assets/navicon/close.png";
import menu from "../../assets/navicon/menu.png";


export default function Navbar() {
  function showmenu(){
    const close =document.querySelector(".closemenu")
    const open = document.querySelector(".openmenu")
    const menu =document.querySelector(".links")
    menu.style.right="0px"
    close.style.display="block"
    open.style.display="none"
  }
  function closemenu(){
    const close =document.querySelector(".closemenu")
    const open = document.querySelector(".openmenu")
    const menu =document.querySelector(".links")
    menu.style.right="-13rem"
    close.style.display="none"
    open.style.display="block"
  }



  return (
    
   <section className="navbar">
    <div className="nav">
      <div className="logo">
        <h1 className="bname"><Link to="/">Luscious Recipe</Link></h1>
      </div>
      <div className="navlinks">
        <ul className="links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </div>
      <div className="menuicon">
        <img src={close} alt="" srcset=""  className='closemenu'onClick={closemenu}/>
        <img src={menu} alt="" srcset="" className='openmenu' onClick={showmenu}/>
      </div>
    </div>
   </section>
  )
}
