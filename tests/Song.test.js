import React from 'react';
import { shallow } from 'enzyme';
import Song from '../src/components/stateless/songsDetail/Song';

describe('Lyrics component', () => {
    it('renders Song', () => {
        const wrapper = shallow(<Song title='hello' />);
        expect(wrapper).toMatchSnapshot();
    });
});
