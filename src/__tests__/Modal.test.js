import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import App from '../App';
import { store } from '../store';
import ConsumerHome from '../components/consumers/ConsumerHomeContainer';
import ConsumerList from '../components/consumers/ConsumerList';
import ModalDynamic from '../components/widgets/ModalDynamic';
import { Modal, Button } from 'react-bootstrap';

Enzyme.configure({ adapter: new Adapter() });

describe('<ModalDynamic/>', () => {
    it('renders without parent component', () => {
        const props = {
            show: true
        };
        const ModalWrapperComponent = shallow(<ModalDynamic {...props} />);
        expect(ModalWrapperComponent).toMatchSnapshot();
    });

    it('renders the modal component successfully', () => {
        const wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>);
        expect(wrapper.find(ConsumerHome).find(ConsumerList).find(ModalDynamic).length).toEqual(1);
    })

    it('should have input field', () => {
        const props = {
            show: true
        };
        const modalWrapper = shallow(<ModalDynamic {...props} />);
        expect(modalWrapper.find('input').length).toEqual(1);
    })

    it('should check format of number', () => {
        const props = {
            show:true
        },
        modalWrapper = shallow(<ConsumerList />);
        expect(modalWrapper.instance().getGermanFormat(451.3754)).toEqual('€451.38');
    })

    it('should check wrong format of number', () => {
        const modalWrapper = shallow(<ConsumerList />);
        expect(modalWrapper.instance().getGermanFormat('test123')).toEqual('€NaN');
    })

    it('should check wrong format of number', () => {
        const wrapper = shallow(<ConsumerList />);
        expect(wrapper.instance().validateInputForGermanFormat('111,00')).toEqual(true);
    })

    it('should check input format of modal text entry to be in German format', () => {
        const wrapper = shallow(<ConsumerList />);
        expect(wrapper.instance().validateInputForGermanFormat('111,00')).toEqual(true);
    })

    it('should check input format of modal text entry to be in German format', () => {
        const wrapper = shallow(<ConsumerList />);
        expect(wrapper.instance().validateInputForGermanFormat('111.111.111,00')).toEqual(true);
    })

    it('should check input format of modal text entry to be in German format', () => {
        const wrapper = shallow(<ConsumerList />);
        expect(wrapper.instance().validateInputForGermanFormat('111.11.111,00')).toEqual(false);
    })

    it('check show prop value and type', () => {
        const props = {
            show: true
        },
            ModalWrapperComponent = shallow(<ModalDynamic {...props} />);
        expect(ModalWrapperComponent.props().show).toEqual(true);
    });
    
    it('render correct onHide prop type', () => {
        const props = {
            onHide: () => { }
        },
            ModalWrapperComponent = shallow(<ModalDynamic {...props} />);
        expect(ModalWrapperComponent.props().onHide).toBeInstanceOf(Function)
    });

    it('render correct title', () => {
        const props = {
            title: 'Martian Firma'
        };
        let ModalWrapperComponent = shallow(<ModalDynamic {...props} />).find('#contained-modal-title-vcenter');
        expect(ModalWrapperComponent.text()).toEqual('Martian Firma');
    });

    it('render correct total budget', () => {
        const props = {
            currentBudget: '10.000,00',
            budget_spent: '4.500,60'
        };
        let ModalWrapperComponent = shallow(<ModalDynamic {...props} />);
        const input = ModalWrapperComponent.find('#total_budget');
        expect(input.props().value).toEqual("10.000,00");
    });

    it('opens the modal upon row click', () => {
        const props = {
            consumers: [{ "id": 1, "name": "Martian Firma" }, { "id": 2, "name": "Solar Firma" }]
        };
        const wrapper = mount(
            <Provider store={store}>
                <ConsumerList {...props} />
            </Provider>);
        const tr = wrapper.find('table tbody tr').first();
        tr.simulate('click');
        //check whether modal opens up
        expect(wrapper.find(Modal).prop('show')).toEqual(true);
    })

    it('Test button click event', () => {
        const mockCallBack = jest.fn();
        const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })

    it('closes the modal upon close button click', () => {
        const props = {
            consumers: [{ "id": 1, "name": "Martian Firma" }, { "id": 2, "name": "Solar Firma" }]
        };
        const wrapper = mount(
            <Provider store={store}>
                <ConsumerList {...props} />
            </Provider>);
        const tr = wrapper.find('table tbody tr').first();
        tr.simulate('click');
        //check whether modal closes up using property show
        const closebutton = wrapper.find('#closeBtn').at(0);
        closebutton.simulate('click');
        expect(wrapper.find(Modal).prop('show')).toEqual(false);
    })

})