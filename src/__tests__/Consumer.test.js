import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import App from '../App';
import { store } from '../store';
import ConsumerHome from '../components/consumers/ConsumerHomeContainer';
import ConsumerList from '../components/consumers/ConsumerList';

Enzyme.configure({ adapter: new Adapter() });

describe('<ConsumerList/> and <HomeContainer/>', () => {
    it('renders the consumer home container', () => {
        const wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>);
        expect(wrapper.find(ConsumerHome).length).toEqual(1);
    })

    it('renders the consumer list component', () => {
        const wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>);
        expect(wrapper.find(ConsumerHome).find(ConsumerList).length).toEqual(1);
    })

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ConsumerList />)
    });

    it('Should render the consumer list with 2 in number in table', () => {
        wrapper.setProps({ consumers: [{ "id": 1, "name": "Martian Firma" }, { "id": 2, "name": "Solar Firma" }] });
        expect(wrapper.find('table tbody tr').length).toEqual(2);
    })
})