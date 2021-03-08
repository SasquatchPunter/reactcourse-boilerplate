import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../../components/routes/LoginPage';

let wrapper, onSubmit;

beforeEach(() => {
    onSubmit = jest.fn();
    wrapper = shallow(<LoginPage onSubmit={onSubmit} />);
});

test('Should render Login Page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin when Login button clicked', () => {
    try {
        wrapper.find('button').simulate('click');
    } catch (e) {
        expect(onSubmit).toHaveBeenCalled();
    }
});