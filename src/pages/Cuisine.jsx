import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([])
    let params = useParams();

    const getCuisine = async (name) => {
        console.log(name.type)
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&cuisine=${name.type}`)
        const recipes = await data.json();
        console.log(recipes)
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCuisine(params);
    }, [params, params.type])
  return (
    <Grid>
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Card>
            );
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display:grid;

    grid-template-columns: repeat(auto-fit, minMax(10rem, 1fr));
    grid-grap: 1rem
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
        padding: 1rem
    }
`
export default Cuisine