import styled from "styled-components"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Search() {
    const navigate = useNavigate();
    const [input, setInput] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <FaSearch />
            <input 
                onChange={(e) => setInput(e.target.value)} 
                type="text" 
                value={input} 
            />
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin:0 auto;
    position: relative;
    width: 100%;
    input{
        border: none;
        background-color: black;
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 15px;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 40%;
        left: 1rem;
        color: white;
    }
`

export default Search