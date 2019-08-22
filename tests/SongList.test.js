import React from 'react';
import { shallow } from 'enzyme';
import SongList from '../src/components/stateless/songsDetail/SongList';

describe('SongList component', () => {
    it('renders SongList', () => {
        const wrapper = shallow(<SongList songs={[]} />);
        expect(wrapper).toMatchSnapshot();
    });
});
