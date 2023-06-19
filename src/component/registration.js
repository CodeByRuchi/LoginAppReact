import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormRegistration = () => {
  const [userData, setUserData]=useState({});
  const logData=['ruchi','tiwari']
  const handleChnage=(event)=>{
    setUserData({...userData, [event.target.name]:[event.target.value]})
      }
      useEffect(()=>{
        // console.log(userData);
        const getUserdata = localStorage.getItem('userData');
        console.log(getUserdata)
        if (getUserdata) {
         
          setUserData(JSON.parse(getUserdata));
        }

      },[])
      const submitHandle =(event)=>{
        event.preventDefault();
          const storeUserdata = localStorage.setItem("user",JSON.stringify(userData));
          console.log(storeUserdata);
        //  setLogData(...logData, userData)

          
      }
     
     
  return(
    <>
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' name='fname' onChange={handleChnage}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' name='lname' onChange={handleChnage}/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='password' name='pwd'onChange={handleChnage}/>
    </Form.Field>
    <Form.Field>
      <label>Match Password</label>
      <input placeholder='match-password' name='mpwd'  onChange={handleChnage}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={handleChnage}/>
    </Form.Field>
    <Button type='submit' onClick={submitHandle}>Submit</Button>
  </Form>
  { logData.map((item)=>{
    return (
      <>
      <div>{item}</div>
        
      </>
    )
  })}
  </>
  
  )
 
  }



export default FormRegistration