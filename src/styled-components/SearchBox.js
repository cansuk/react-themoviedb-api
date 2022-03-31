import styled from "styled-components";
import searchIcon from '../assets/searchicon.png';
import { colors } from "./Variables";

export const SearchBox = styled.input`
  background-image: url(${searchIcon});  
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 500px;
  font-size: 16px;
  font-family:inherit;  
  background-color: white;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  letter-spacing:inherit;
  &:focus{
    color:${colors.pink};
    border:0px;
  };
`;