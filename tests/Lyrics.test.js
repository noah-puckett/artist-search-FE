import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from '../src/components/stateless/songsDetail/Lyrics';

describe('Lyrics component', () => {
    it('renders Lyrics', () => {
        const wrapper = shallow(<Lyrics lyrics='hello' artist='hello' title='hello' />);
        expect(wrapper).toMatchSnapshot();
    });
});
