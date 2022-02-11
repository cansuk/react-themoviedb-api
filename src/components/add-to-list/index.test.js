import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { shallow, configure } from 'enzyme';
import AddToList from '.';
import { CheckButton } from '../../styled-components/Button';
import { render, screen } from '@testing-library/react';

configure({ adapter: new Adapter() });

test('Add to favorites list button click', () => {

    // const mockCallBack = jest.fn();

    // const button = shallow(<AddToList onClick={mockCallBack} handleClick={mockCallBack} />);

    // button.find('button').simulate('click');

    // expect(mockCallBack.mock.calls.length).toEqual(1);
});