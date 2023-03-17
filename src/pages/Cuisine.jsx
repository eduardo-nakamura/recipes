import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([])
    const api = localStorage.getItem('apiKey');
    let params = useParams();

    const getCuisine = async (name) => {
     
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api}&number=12&cuisine=${name.type}`)
        // const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${name.type}`)
        const recipes = await data.json();        
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCuisine(params);
    }, [params, params.type])
  return (
    <Grid animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration:0.3}}>
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <Link to={`/recipe/${item.id}`}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    </Link>
                  
                </Card>
            );
        })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display:grid;
    grid-template-columns: repeat(auto-fit, minMax(200px, 1fr));
    grid-gap: 10px;
`

const Card = styled.div`
    padding: 0.5rem;
    img{
        width: 100%;
        border-radius:1rem
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align:center;
        padding: 5px;
        font-size: 13px;
    }
`
export default Cuisine