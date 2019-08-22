import React from 'react';
import { shallow } from 'enzyme';
import ArtistList from '../src/components/stateless/search/ArtistList';

describe('ArtistList component', () => {
    it('renders ArtistList', () => {
        const wrapper = shallow(<ArtistList artists={[]} />);
        expect(wrapper).toMatchSnapshot();
    });
});
