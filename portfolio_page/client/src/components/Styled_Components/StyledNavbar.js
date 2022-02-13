import styled from "styled-components";
export const StyledNavbar = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  background-color: E0D3DE;
  margin: 0;
  padding: 0;
  top: 50px;
  width: 200px;
  text-align: center;
  position: fixed;
  a {
    color: #083D77;
    text-shadow: 2px .75px 2px grey;
    font-size:28px;
    display: block;
    padding: 28px 46px;
    text-decoration: none;
  }
  a:hover {
    background-color: #555;
    color: white;
  }

`;