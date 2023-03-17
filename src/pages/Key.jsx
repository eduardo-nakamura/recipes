import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
// import { useNavigate } from "react-router-dom"

function Key() {
  // const navigate = useNavigate();

  const [acc, setAcc] = useState('')
  const [api, setApi] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();   
    localStorage.setItem('apiKey', api)
    window.location.reload();
    // navigate('/')
  }
  return (
    <ContainerWrapper>
      <h2 style={{margin: '1rem 0'}}>Do you have a spponacular account?</h2>
      <Button className={acc === "yes" ? 'active' : ''} onClick={() => setAcc("yes")}>Yes</Button>
      <Button className={acc === "no" ? 'active' : ''} onClick={() => setAcc("no")}>No</Button>

      {acc === 'yes' && (
        <Steps>
          <li>Login with your account and access "My Console"</li>
          <li>Click in "Profile"</li>
          <li>Copy the Api Key and paste in the input below</li>
        </Steps>
      )}
      {acc === 'no' && (
        <Steps>
          <li>
            Go to <a href="https://spoonacular.com/" target="_blank" rel="noopener noreferrer">https://spoonacular.com/</a> and create a new Account
          </li>
          <li>Login with your account and access "My Console"</li>
          <li>Click in "Profile"</li>
          <li>Copy the Api Key and paste in the input below</li>

        </Steps>
      )}
      {acc !== '' && (
         <FormStyle onSubmit={submitHandler}>

         <input
           onChange={(e) => setApi(e.target.value)}
           type="text"
           value={api}
         />
         <Button>Click</Button>
       </FormStyle>
      )}
     
   
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.div`
    color: #bfbfbf;
    width: 100%;
`
const Steps = styled.ol`
    padding: 20px;
    li{
      padding: 5px 0;
      font-size: large;
    }
`


const Button = styled.button`
  padding: 1rem 2rem;
  color: black;
  background: #bfbfbf;
  border: 2px solid black;
  font-weight: 600;  
  border-radius: 12px;  
  margin-right:10px;
  &.active{
    background: black;
    color: #bfbfbf;
  }
`
const FormStyle = styled.form`
    display: flex;    
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    input{
        border: none;
        background-color: black;
        font-size: 1.5rem;
        color: white;
        padding: 0.7rem 1rem;
        border: none;
        border-radius: 15px;
        outline: none;
        width: 100%;
        max-width: 400px;
        margin-right: 10px;
    }
`
export default Key