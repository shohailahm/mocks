import React from 'react';

import { findByTestAttr } from '../test/testUtils';
import TabsComponent from './Tabs';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()});

const setUp=(state=null)=>{
    
    const wrapper=shallow(<TabsComponent />);
    if(state)wrapper.setState(state);
    return wrapper;
}

describe('render',()=>{
    describe('word has not been guessed',()=>{
        let wrapper;
        beforeEach(()=>{
            const initalState={showForm:false}
            wrapper=setUp(initalState);
            
        });
       test('renders component without error',()=>{
         const component= findByTestAttr(wrapper,'component-tabs');
         console.log(component.debug())
         expect(component.length).toBe(1);
       });
       test('renders input box',()=>{
        const component= findByTestAttr(wrapper,'form');
        expect(component.length).toBe(0);
       });
  
    });
    describe('word has been guessed',()=>{

    });
});

describe('change in state',()=>{
    let wrapper;
    beforeEach(()=>{
        const initalState={showForm:true}
        wrapper=setUp(initalState);
        
    });
    test('renders component without error',()=>{
        const component= findByTestAttr(wrapper,'component-tabs');
        console.log(component.debug())
        expect(component.length).toBe(1);
    });
    test('doesnt renders input box',()=>{
        const component= findByTestAttr(wrapper,'form');
        expect(component.length).toBe(1);
    });
    

});