import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../../components/routes/LoadingPage';

test('Should correctly render Login Page', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});