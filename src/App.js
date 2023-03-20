import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { FaQuestionCircle } from "react-icons/fa";
function App() {
  const check = localStorage.getItem('apiKey');

  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Recipes</Logo>
          <Link to={'/about'}><FaQuestionCircle style={{position: 'absolute', right: 0}} /></Link>
        </Nav>
        {check !== null && (
          <div>
            <Search />
            <Category />
          </div>
        )}
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`

const Nav = styled.div`
  padding:4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  svg{
    font-size: 2rem;
    color:white;
    margin-right: 10px;
  }
`

export default App;
