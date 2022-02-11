import React from 'react';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';
//import { CheckButton } from '../../styled-components/Button';
import { colors } from '../../styled-components/Variables';
import { ListTypes } from '../shared/synthetic-enums';
import { getManagedArr, updateLocalStorage } from '../shared/utils';

const AddToList = (props) => {
    const { onClick } = props;
    // return <button onClick={() => {
    //     onClick();
    //     console.log("click");
    // }}>asd</button>
    const { id, ids, type, handleClick } = props;

    const CheckButton = styled.button`
        display: block;
        padding: 5px 5px;
        font-family: inherit;
        font-size: 0px;
        color: ${props => props.active ? (props.color || colors.primaryColor) : "white"};;
        background-color:black;
        /* background-color: ${props => props.active ? (props.color || colors.primaryColor) : "white"}; */
        border: 1px solid ${props => props.color || colors.primaryColor};
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
        opacity: 0.7;

        &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        transform: translate(0, -5px);
        opacity: 1;
        font-weight:800;
        font-size:12px;
        }
        `;

    // return <CheckButton color={colors.primaryColor} active={ids?.includes(id)}
    //     onClick={() => {
    //         onClick();
    //         let managedArr = getManagedArr(ids, id);
    //         handleClick(managedArr);
    //         updateLocalStorage(managedArr, type);
    //     }}> {type === ListTypes.watchLater ? <AiFillHeart size={18} /> : <AiFillStar size={18} />}  <br />
    //     {type}
    // </CheckButton>;

    return <button
        onClick={() => {
            onClick();
            let managedArr = getManagedArr(ids, id);
            handleClick(managedArr);
            updateLocalStorage(managedArr, type);
        }}
        style={{
            display: 'block',
            padding: '5px 5px',
            fontFamily: 'inherit',
            fontSize: '0px',
        }} ></button>
};

export default AddToList;
