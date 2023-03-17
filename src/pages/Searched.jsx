import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
function Searched() {
    const [searchedRecipe, setSearchedRecipe] = useState([])
    const api = localStorage.getItem('apiKey');
    let params = useParams()
    const getSearched = async (name) => {          
        // const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api}&query=${name}`)
        const recipes = await data.json();      
        setSearchedRecipe(recipes.results)
    }

    useEffect(() => {       
        getSearched(params.search)
    }, [params.search])


    return (
        <Grid>
            {searchedRecipe.map((item) => {
                return (
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


const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minMax(200px, 1fr));
    grid-gap: 1rem;
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

export default Searched