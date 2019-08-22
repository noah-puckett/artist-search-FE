import React from 'react';
import { shallow } from 'enzyme';
import Album from '../src/components/stateless/artistDetail/Album';

describe('Album component', () => {
    it('renders Album', () => {
        const wrapper = shallow(<Album title='hello' />);
        expect(wrapper).toMatchSnapshot();
    });
});
