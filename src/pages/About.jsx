import React from 'react'
import styled from 'styled-components'

function About() {
    return (
        <ContainerWrapper>
            <h1>About</h1>
            <p>A Recipe App Tutorial. It list 10 recipes separated by 4 categories, and you can search for recipes.</p>
            <p>
                App made based on the tutorial <a href="https://www.youtube.com/watch?v=xc4uOzlndAk" target="_blank" rel="noopener noreferrer">React Crash Course - Build A Full Recipe App Tutorial</a> by <a href="https://www.youtube.com/@developedbyed" target="_blank" rel="noopener noreferrer">developedbyed</a>  
            </p>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xc4uOzlndAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <p>This app uses: </p>
            <List>
                <li>spoonacular API (API for the Recipes)</li>
                <li>framer-motion (Animations)</li>
                <li>react-icons (Icons)</li>
                <li>react-router-dom (Router)</li>
                <li>styled-components (Styling)</li>
                <li>react-splide (Carrousel)</li>
            </List>
        </ContainerWrapper>
    )
}
const ContainerWrapper = styled.div`
    color: #bfbfbf;
    width: 100%;
    p{
        font-size: 1rem;
        line-height: 2rem;
    }
    iframe{
        margin: 20px 0;
    }
`
const List = styled.ul`
    padding: 0 20px;

    li{
      padding: 3px 0;
      margin: 0;
      font-size: large;
    }
`
export default About