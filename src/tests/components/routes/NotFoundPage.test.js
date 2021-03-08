import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../../components/routes/NotFoundPage';

test('Should render the 404 - Not Found Page correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});