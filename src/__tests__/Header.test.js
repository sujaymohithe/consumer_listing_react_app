import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import App from '../App';
import {store} from '../store';
import Header from '../components/headers/Header';

Enzyme.configure({ adapter: new Adapter() });

it('renders Header Component', () => {
    const component = shallow(<Header />)
      
    const logo = component.find(`[data-test='Logo']`);
    expect(wrapper.text() == "My MISSION");
})