import styled from "styled-components";

export const HeroContainer = styled.div`
  margin: 2rem;
  padding: 0 5rem;
  width: 80%;
  box-shadow: grey 8px 8px 16px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 60%;
    text-align: center;
  }
  @media screen and (max-width: 370px) {
    width: 40%;
  }
`;
export const HeroBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;
export const ClickText = styled.p`
  margin: 0;
  padding: 0;
`;
export const HeroTitle = styled.h1`
  text-shadow: 1.5px 1px 2px grey;
`;
export const HeroDesc = styled.p`
  width:90%;
  color: grey;
  text-align: justify;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 1.5px 1px 2px lightgrey;
  text-indent: 2.5rem;
`;
export const HeroListDesc = styled.h3`
  text-align: left;
  text-shadow: 1.5px 1px 2px grey;
`;
export const HeroList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  text-decoration: none;
  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    place-items: center;
    paddding: 1rem 0;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }
  @media screen and (max-width: 407px) {
    display: flex;
    flex-direction: column;
  }
`;
export const BadgeList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  place-items: center;
  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    place-items: center;
    paddding: 1rem 0;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }
  @media screen and (max-width: 400px) {
  }
`;
export const HeroItem = styled.a`
  text-decoration: none;
  color: grey;
  padding: 0 1rem;
  text-shadow: 1.5px 1px 2px lightgrey;
  /* box-shadow: grey 3px 3px 6px; */
  /* border-radius: 5px; */
  &:hover {
    color: green;
  }
`;
// export const BadgeItem = styled.a`
//   text-decoration: none;
//   color: grey;
//   padding: 0 1rem;
//   text-shadow: 1.5px 1px 2px lightgrey;
//   border-radius: 5px;
//   &:hover {
//     background-color: green;
//   }
// `;
export const HeroImage = styled.img`
  background-color: white;
  width: 60%;
  padding: 0.5rem 1.75rem;
  /* box-shadow: grey 4px 4px 8px; */
  /* border-radius: 5px; */
`;
export const IconBox = styled.div`
  display: flex;
  padding: 0 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box-shadow: grey 3px 3px 6px; */
  /* border-radius: 5px; */
`;
export const IconLink = styled.a`
  cursor: pointer;
  padding: 5px;
`;
export const IconLabel = styled.label`
  color: grey;
  text-shadow: 1.5px 1px 2px lightgrey;
`;
