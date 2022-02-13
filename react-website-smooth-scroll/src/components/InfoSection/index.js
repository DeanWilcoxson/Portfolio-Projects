import React from "react";
import { Button } from "../ButtonElements";
import img from "../../images/svg-1.svg";
import {
  BtnWrap,
  Img,
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TopLine,
  Heading,
  TextWrapper,
  Subtitle,
} from "./InfoElements";
const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  description,
  buttonLabel,
  alt,
  headline,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    duration={500}
                    smooth="true"
                    spy={true}
                    exact="true"
                    offest={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};
export default InfoSection;
