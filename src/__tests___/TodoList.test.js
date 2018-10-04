import TodoList from '../TodoList';
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

describe('<TodoList />', () => {
  
  describe('render', () => {
    let tree

    beforeEach( () => {
      let component = shallow(<TodoList/>)
      tree = toJson(component)
    })

    it ('matches a snapshot', () => {
      expect(tree).toMatchSnapshot()
    })

    it ('matches a snapshot with props', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  describe('functionality', () => {
    let component

    beforeEach( () => {
      component = shallow(<TodoList />)
      const name = 'hello world'
      const input = component.find('input')
      input.simulate('focus')
      input.simulate(
        'change',
        { target: {name: 'name', value: name }}
      )
    })

    it('updates state on change', () => {
      expect(component.state('name')).toEqual(name)
    })

    it('submits the form', () => {
      const e = { preventDefault: jest.fn()}
      component.find('form').simulate('submit', e)
      expect(component.state('items')).toEqual([name])
    })
  })

})
