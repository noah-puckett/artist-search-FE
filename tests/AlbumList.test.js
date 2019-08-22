import React from 'react';
import { shallow } from 'enzyme';
import AlbumList from '../src/components/stateless/artistDetail/AlbumList';

describe('AlbumList component', () => {
    it('renders AlbumList', () => {
        const wrapper = shallow(<AlbumList albums={[]} />);
        expect(wrapper).toMatchSnapshot();
    });
});
