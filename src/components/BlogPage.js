import React from "react";
import styled from "styled-components";
import img from "../assets/Images/robert-anasch-McX3XuJRsUM-unsplash.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: 100vh;
  position: relative;
  padding-top: 5rem;
`;

const BlogPage = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
