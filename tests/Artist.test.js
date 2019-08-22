import React from 'react';
import { shallow } from 'enzyme';
import Artist from '../src/components/stateless/search/Artist';

describe('Artist component', () => {
    it('renders Artist', () => {
        const wrapper = shallow(<Artist artists={[]} name='hello' />);
        expect(wrapper).toMatchSnapshot();
    });
});
