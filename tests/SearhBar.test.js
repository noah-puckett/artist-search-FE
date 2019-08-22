import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../src/components/stateless/search/SearchBar';

describe('SearchBar component', () => {
    it('renders SearchBar', () => {
        const wrapper = shallow(<SearchBar searchBoxInput={'hello'} onChange={() => {}}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
