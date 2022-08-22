import React from 'react'
import styled from 'styled-components'
import { mobile} from "../responsive"
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height: "30vh"})};
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: White;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  color: gray;
  background-color: white;
  cursor: pointer;
  font-weight: 600;

`;

const CategoryItem = (props) => {
  return (
    <Container>
      <Link to={`/products/${props.item.cat}`}>
        <Image src={props.item.img} />
        <Info>
            <Title>{props.item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem