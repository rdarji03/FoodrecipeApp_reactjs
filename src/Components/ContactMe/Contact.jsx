import React from 'react';
import  { useRef } from 'react';
import emailjs from "emailjs-com" 
import {MdOutlineMarkEmailUnread} from "react-icons/md"
import {GiSmartphone} from "react-icons/gi"
import {IoLocationSharp} from "react-icons/io5"
import close from "../../assets/navicon/close.png";

import "./Contact.css"


const Contact = () => {
    function showalert(){
        const alertbox=document.querySelector(".alertbox")
        alertbox.style.display="flex"
    }
    function disappear(){
    const alertbox=document.querySelector(".alertbox")
    alertbox.style.display="none"
    }
    
       
    const form = useRef();
    const sendEmail = (e) => {
        const alertmsg=document.querySelector(".alertmsg")
        const u_name=document.querySelector("#u_name").value
        const u_mail=document.querySelector("#u_email").value
        const u_review=document.querySelector("#u_review").value        
        

    if (u_name==="" || u_mail==="" || u_review==="") {    
        showalert()
        alertmsg.innerText="Fill up all the fields"
        e.preventDefault();    

    }
    else{
        e.preventDefault();    
        emailjs.sendForm('service_kv2uqgs', 'template_r2xtt9d', form.current, 'X2fwc2ZX4M7aog2jA')
        e.target.reset()
        showalert()
        alertmsg.innerText="Review sent succesfully"
    }
       
      };
    return (
        <>
            <section id='contact' className='contact_sec'>
               
                <div className="c_detail">
                    <div className="contactform">
                        <form ref={form} onSubmit={sendEmail}>
                            <input name="name" type="text" className="feedback-input" placeholder="Name"  id='u_name'/>
                            <input name="email" type="text" className="feedback-input" placeholder="Email" id='u_email'/>
                            <textarea name="text" className="feedback-input" placeholder="Review" id='u_review'></textarea>
                            <input className='btn-grad' type="submit" value="SUBMIT" />
                        </form>
                    </div>
                    <div className="other_details">
                        <div className="email detailbox">
                            <MdOutlineMarkEmailUnread/>
                            <p>rahuld030206@gmail.com</p>
                        </div>
                        <div className="number detailbox">
                            <GiSmartphone/>
                            <p>+91 8238327825</p>
                        </div>
                        <div className="email detailbox" id='u_email'>
                            <IoLocationSharp/>
                            <p>Vadodara,Gujarat</p>
                        </div>
                    </div>
                </div>
                    <div className="alertbox">
                        <p className="alertmsg"></p>
                        <img src={close} alt="" srcset="" className='close' onClick={disappear}/>
                    </div>
            </section>
        </>
    );
}

export default Contact;
