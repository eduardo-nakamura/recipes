import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled, { isStyledComponent } from 'styled-components'

function Recipe() {
  let params = useParams()
  const api = localStorage.getItem('apiKey');
  const [detail, setDetail] = useState({})
  const [activeTab, setActiveTab] = useState("instructions")
  const fetchRecipe = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${api}`)
    // const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json();
    setDetail(detailData)
  }
  useEffect(() => {
    fetchRecipe()
  }, [params.id])

  return (
    <DetailWrapper>
      <TitleImage>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt={detail.title} />
      </TitleImage>
      <Info>
        <Button className={activeTab === "instructions" ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === "ingredients" ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: detail.instructions }}></p>

          </div>
        )}
        {activeTab === "ingredients" && (       
          <ul>
            {detail.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}


      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  .active{
    background-color: black;
    color: #bfbfbf;
  }
  p{
    margin-bottom: 2rem;
    color: #bfbfbf;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
    color: #bfbfbf;
  }
  ul{
    margin-top: 2rem;
  }
  @media only screen and (max-width: 640px){
    flex-direction: column;
  }
`
const TitleImage = styled.div`
  width: 50%;
  color: #bfbfbf;
  img{
    width: 100%;
    margin: 10px 0;
  }
  @media only screen and (max-width: 640px){
    width: 100%;
  }
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: black;
  background: #bfbfbf;
  border: 2px solid black;
  margin-right: 10px;
  font-weight: 600;  
  margin-bottom: 10px;
`

const Info = styled.div`
  margin-left: 5rem;
  width: 50%;
  @media only screen and (max-width: 640px){
    width: 100%;
    margin-left: 0;
  }
`
export default Recipe