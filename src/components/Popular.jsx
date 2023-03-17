import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular()
  }, [])

  // Get Random Recipes
  const getPopular = async () => {
    const check = localStorage.getItem('popular');
    const apiKey = localStorage.getItem('apiKey');
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`)
      // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
      const data = await api.json();
      setPopular(data.recipes)
      localStorage.setItem('popular', JSON.stringify(data.recipes))
    }
   
  }

  return (
    <div>
      <Wrapper>
        <h3>Popular Recipe</h3>
        <Splide options={{
          perPage: 4,
          pagination: false,
          arrows: false,
          drag:'free',
          gap: '2rem',
          breakpoints: {
            640: {
              perPage: 2,
            },
          }
        }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={`/recipe/${recipe.id}`}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  </Link>
            
                </Card>
              </SplideSlide>

            );
          })}
        </Splide>

      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`
const Card = styled.div`
  min-height: 10rem;
  border-radius: 2rem;
  overflow:hidden;
  position: relative;
  img{
    border-radius: 2rem;
    position: absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit: cover;
  }
  p{
    position: absolute;
    z-index:10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,0%);
    color: white;
    width: 101%;
    text-align: center;
    padding    : 0;
    margin: 0;
    font-size:0.8rem;
    height: 40%;
    display:flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.8);
  }
`
export default Popular