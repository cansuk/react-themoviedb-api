import React from 'react';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';
import { CheckButton } from '../../styled-components/Button';
import { colors } from '../../styled-components/Variables';
import { ListTypes } from '../shared/synthetic-enums';
import { getManagedArr, updateLocalStorage } from '../shared/utils';

const AddToList = (props) => {
    const { onClick } = props;
    const { id, ids, type, handleClick } = props;

    return <CheckButton color={colors.primaryColor} active={ids?.includes(id)}
        onClick={() => {
            onClick();
            let managedArr = getManagedArr(ids, id);
            handleClick(managedArr);
            updateLocalStorage(managedArr, type);
        }}> {type === ListTypes.watchLater ? <AiFillHeart size={18} /> : <AiFillStar size={18} />}  <br />
        {type}
    </CheckButton>;
};

export default AddToList;
