import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiPython, SiChai, SiMocha } from "react-icons/si";
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
  width: 100%;
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
  text-shadow: 1.5px 1px 2px grey;
`;
export const HeroList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
`;
export const HeroItem = styled.li`
  color: grey;
  text-shadow: 1.5px 1px 2px lightgrey;
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
  &:hover {
    color: green;
  }
`;
export const CssIcon = styled(FaCss3Alt)`
  color: #264de4;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
export const JsIcon = styled(SiJavascript)`
  color: #f0db4f;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
export const PyIcon = styled(SiPython)`
  color: #306998;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
export const MySqlIcon = styled(GrMysql)`
  color: #00758f;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
export const ReactIcon = styled(FaReact)`
  color: #61dbfb;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
export const NodeIcon = styled(FaNodeJs)`
  color: #3c873a;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
export const MochaIcon = styled(SiMocha)`
  color: #6f372d;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
export const ChaiIcon = styled(SiChai)`
  color: #b1832f;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
