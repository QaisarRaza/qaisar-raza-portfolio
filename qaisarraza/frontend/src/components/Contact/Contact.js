import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Contact.css'
function Contact() {
  const [error, setError] = useState({});
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // onchange function on inputs
  const handleInput = (e) => {
    const {name , value} = e.target;
    setData({ ...data, [name]: value });
  }

  // submit form
  const SubmitHandler = (e) => {
    e.preventDefault();
    setError(validate(data));
    const register = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
    }
    axios.post('https://qaisarraza.herokuapp.com/contactus', register).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
    setData({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
}

const validate = (values)=>{
  const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name){ errors.name = "* Name is required!"; }
    else if(values.name.length < 3){ errors.name = "Name must be more than 2 characters!"; }
    else if(values.name.length > 20){ errors.name = "Name cannot exceed more than 20 characters!"; }
    if(!values.email){ errors.email = "* Email is required!"; } 
    else if(!regex.test(values.email)){ errors.email = "This is not a valid email format!" }
    if(!values.subject){ errors.subject = "* Subject is required!"; }
    else if(values.subject.length < 5){ errors.subject = "Subject must be more than 5 characters!"; }
    else if(values.subject.length > 20){ errors.subject = "Subject cannot exceed more than 20 characters!"; }
    if(!values.message){ errors.message = "Message is required!"; }
    else if(values.message.length < 5){ errors.message = "Message must be more than 30 characters!"; }
    else if(values.message.length > 300){ errors.message = "Message cannot exceed more than 300 characters!"; }
    return errors;
}

// show title
  useEffect(() => {
    document.title="Contact Us"
    }, [])


  return (
    <>
    <div className='contact'>
        <h1>Contact Us</h1>

        {/* contact us form */}
        <form className='form' onSubmit={SubmitHandler}>
            <div className='input1'>
                <input type="text" name="name" id=""  placeholder='Name:' value={data.name} onChange={ handleInput}/>
                <p>{error.name}</p>
                </div>
                <div className='input1'>
                <input type="text" name="email" id=""  placeholder='Email:'  value={data.email} onChange={ handleInput}/>
                <p>{error.email}</p>
                </div> 
                <div className='input1'>
                <input type="text" name="subject" id=""  placeholder='Subject:'  value={data.subject} onChange={ handleInput}/>
                <p>{error.subject}</p>
                </div> 
                <textarea name="message" id="" cols="30" rows="10" placeholder='Message:' value={data.message} onChange={ handleInput}></textarea>
                <button type='submit'>Submit</button>
        </form>

    </div>
    
    </>
  )
}

export default Contact