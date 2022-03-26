import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiPython, SiStyledcomponents } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;
export const HeroTitle = styled.h1`
  text-align: left;
  text-shadow: 1.5px 1px 2px grey;
`;
export const HeroDesc = styled.p`
  color: grey;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 1.5px 1px 2px lightgrey;
`;
export const HeroListDesc = styled.h3`
  text-align: left;
`;
export const HeroList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  color: #0d0d0d;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* border-left: solid 3px lightgrey; */
  /* border-right: solid 3px lightgrey; */
`;
export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* cursor: pointer; */
`;
export const IconLink = styled.a`
  cursor: pointer;
  padding: 5px;
`;
export const IconLabel = styled.label`
  color: grey;
  text-shadow: 1.5px 1px 2px lightgrey;
`;
export const HtmlIcon = styled(FaHtml5)`
  color: #e34c26;
  font-size: 2rem;
  cursor: pointer;
`;
export const CssIcon = styled(FaCss3Alt)`
  color: #264de4;
  font-size: 2rem;
  cursor: pointer;
`;
export const JsIcon = styled(SiJavascript)`
  color: #f0db4f;
  font-size: 2rem;
  cursor: pointer;
`;
export const PyIcon = styled(SiPython)`
  color: #306998;
  font-size: 2rem;
  cursor: pointer;
`;
export const MySqlIcon = styled(GrMysql)`
  color: #00758f;
  font-size: 2rem;
  cursor: pointer;
`;
export const ReactIcon = styled(FaReact)`
  color: #61dbfb;
  font-size: 2rem;
  cursor: pointer;
`;
export const StyledCompIcon = styled(SiStyledcomponents)`
  color: purple;
  font-size: 3.5rem;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 100%;
`;
