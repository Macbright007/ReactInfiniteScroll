import styled from "styled-components";

export const Navigation = styled.div`
  border: 2px solid #00474b;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  height: 50px;
  padding: 20px;
  /* margin: auto; */
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: #032e34; 
  /* #014e58 */

  h1 {
    color: #fff;
    margin-top: 2px;
    font-weight: 800;
    font-size: 25px;
    font-family: "Water Brush", cursive;
    letter-spacing: 1px;
  }
  span {
    font-family: "Water Brush", cursive;
    font-size: 3rem;
  }

  label {
    display: none;
    color: #fff;
    font-size: 3rem;
  }
  input {
    display: none;
  }
  .navContent {
    margin-top: 20px;
  }
  .navContent a {
    color: #fff;
    font-family: cursive;
    font-size: 20px;
    font-weight: 800;
    margin-left: 60px;
  }

  @media (max-width: 850px) {
    /* justify-content: space-between; */
    .navContent {
      width: 100%;
      padding: 20px;
      position: absolute;
      top: 0;
      right: -53px;
      margin: 70px;
      z-index: 1;
    }
    .navContent:hover {
      background-color: white;
      color: #00474b;
      cursor: pointer;
    }

    label {
      display: block;
      cursor: pointer;
      /* margin-left: 30px; */
    }
    .navContent a {
      display: none;
      text-align: center;
      padding: 20px;
      background-color: #00474b;
      color: white;
      border-bottom: 2px solid white;
    }

    #toggle:checked + .navContent a {
      display: block;
    }
  }

  @media (max-width: 650px) {
    /* justify-content: space-between; */
    .navContent {
      width: 100%;
      padding: 20px;
      position: absolute;
      top: 0;
      right: -53px;
      margin: 70px;
      z-index: 1;
    }
    .navContent:hover {
      background-color: white;
      color: #00474b;
      cursor: pointer;
    }

    label {
      display: block;
      cursor: pointer;
      /* margin-left: 30px; */
    }
    .navContent a {
      display: none;
      text-align: center;
      padding: 20px;
      background-color: #00474b;
      color: white;
      border-bottom: 2px solid white;
    }

    #toggle:checked + .navContent a {
      display: block;
    }
  }
`;

export const NavItems = styled.div`
  margin-top: 20px;
  width: 10%;

  button {
    padding: 10px;
    width: 100%;
    border-radius: 20px;
    border: none;
    font-weight: 600;
    font-family: cursive;
    /* margin-bottom: 200px; */
  }
  button:hover {
    cursor: pointer;
    background-color: #ffffff42;
    color: #00474b;
    border: 2px solid #00474b;
  }
  @media (max-width: 650px) {
    button {
      display: none;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 60px auto;
  padding: 80px;

  &:nth-child(even) img {
    order: 2;
  }
  
`;

export const InnerCard = styled.div`
  border-radius: 25px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 800px;
  background-color: #fff;

  &:hover {
    cursor: pointer;
    transition: box-shadow 200ms ease 0s, transform 200ms ease 0s;
  }

  img {
    width: 100%;
    height: 50vh;
    border-radius: 30px;
    border-bottom-right-radius: 0px;
    /* border-top-right-radius: 0px; */
  }

  .rightContent {
    background-color: #00474bb5;
    border-radius: 30px;
    height: 50vh;
    object-fit: cover;
    border-top-left-radius: 0px;
    /* border-bottom-left-radius: 0px; */
  }

  .rightContent p {
    font-size: 3rem;
    font-family: "Water Brush", cursive;
    color: #fff;
  }
  .rightContent h3 {
    font-family: cursive;
    font-size: 1.2rem;
    margin-top: -30px;
    color: white;
    line-height: 10px;
  }

  .rightContent button {
    padding: 13px;
    width: 30%;
    background-color: #f9d56a;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    font-family: cursive;
  }

  .rightContent button:hover {
    background-color: #be7c36;
    cursor: pointer;
    color: #fff;
    margin: auto;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    width: 60%;
    margin: auto;
}
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    width: 80%;
    margin: auto;
  }
`;

export const PhotoContainer = styled.div`
  border: 7px solid red;
  margin: 30px;

  .innerPhoto {
    background-color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
