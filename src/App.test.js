import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Showone from './showone';
import App from './App';
<<<<<<< HEAD
import search from './search.js';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';


import login from './login';

=======
import App2 from './App2';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
 
// test if the app component is exsiting or not
>>>>>>> a3d723316a17f360af5fe6bd097de512c6c499c3
it('renders my app component', () => {
  shallow(<App />);
  
});

// it('renders my app component', () => {
//   shallow(<search />);
//   const wrapper = shallow(<search />);
//       const logoutBtn = wrapper.find('button');
//       logoutBtn.simulate('click');
// });




describe('App component', () => {

  it('we found the search component' , () => {
    const wrapper = shallow(<search />);
    

    // const logoutBtn = component.find('button#my-button');
    // expect(logoutBtn.length).toBe("1")
    
//       logoutBtn.simulate('click');

    // const wrapper = component.find('.zer');
    // expect(wrapper.length).toBe(1)
    // Btn.simulate('click');
   
  });
});

<<<<<<< HEAD
describe('App component', () => {

  it('we found the logout component' , () => {
    const wrapper = shallow(<search />);
    expect(wrapper.contains(<logout/>))


   
  });
});

const clickFn = jest.fn();
describe('logout function', () => {
  it('button click should logout', () => {
    const component = shallow(<search onClick={clickFn} />);
    component
      .find('button#my-button')
      .simulate('click');
    expect({clickFn}).toHaveBeenCalled();
  });
});


// it('renders welcome message', () => {
//   const wrapper = shallow(<App />);
//   const welcome =  <div className='app'></div> ;
//   // expect(wrapper.contains(welcome)).toBe(true);
//   expect(wrapper.contains(welcome)).toEqual(true);
// });

=======
// test if the app component render registration component or not
it('renders registration', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<registration/>))
});

// test if the app component render login component or not
it('renders login', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<login/>))
});

// test if the app component render app2 component or not
it('renders app2', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<app2/>))
});

// test if the App2 component is exsiting or not
it('renders my App2 component', () => {
  shallow(<App2 />);
});

// test if the app2 component render favare component or not
it('renders favare', () => {
  const wrapper = shallow(<App2 />);
  expect(wrapper.contains(<favare/>))
});

// test if the app2 component render readlater component or not
it('renders readlater', () => {
  const wrapper = shallow(<App2 />);
  expect(wrapper.contains(<readlater/>))
});

// test if the favare component is exsiting or not
it('renders my favare component', () => {
  shallow(<favare />);
});

// test if the login component is exsiting or not
it('renders my login component', () => {
  shallow(<login />);
});

// test if the readlater component is exsiting or not
it('renders my readlater component', () => {
  shallow(<readlater />);
});

// test if the registration component is exsiting or not
it('renders my registration component', () => {
  shallow(<registration />);
});

// test if the search component is exsiting or not
it('renders my search component', () => {
  shallow(<search />);
});

// test if the showone component is exsiting or not
it('renders my showone component', () => {
  shallow(<showone />);
});

// test tags in components App
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing', () => {
  const Router = document.createElement('Router');
  ReactDOM.render(<App />, Router);
});

it('renders without crashing', () => {
  const Switch = document.createElement('Switch');
  ReactDOM.render(<App />, Switch);
});

it('renders without crashing', () => {
  const Route = document.createElement('Route');
  ReactDOM.render(<App />, Route);
});

// test tags in components App2
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App2 />, div);
});

it('renders without crashing', () => {
  const Router = document.createElement('Router');
  ReactDOM.render(<App2 />, Router);
});

it('renders without crashing', () => {
  const Switch = document.createElement('Switch');
  ReactDOM.render(<App2 />, Switch);
});

it('renders without crashing', () => {
  const Route = document.createElement('Route');
  ReactDOM.render(<App2 />, Route);
});

//snapshot test
>>>>>>> a3d723316a17f360af5fe6bd097de512c6c499c3
test('snapshot renders', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('fetches async data', () => {
  const promise = new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve({
          data: [
            {
              _id: '5f11a35b317b4246bc260ea9',
              title: '100 Poems by Faiz Ahmed Faiz, 1911-1984',
              dateOfPublication: '2002-01-01',
              img:
                'http://books.google.com/books/content?id=taSGbCRIW5cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              __v: 0,
            },
            {
              _id: '5f11a373317b4246bc260eab',
              title: 'Memorials of the Hilles Family',
              dateOfPublication: '1928',
              img:
                'http://books.google.com/books/content?id=rfNUAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              __v: 0,
            },
            {
              _id: '5f11a375317b4246bc260eac',
              title:
                "Investigation of Real Estate Bondholders' Reorganizations, Public Hearings Before a Subcommittee of ... 73:2-74:2",
              dateOfPublication: '1934',
              img:
                'http://books.google.com/books/content?id=cRoVAAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              __v: 0,
            },
          ],
        }),
      100
    )
  );
  const wrapper = mount(<Showone />);

  expect(wrapper.find('.big-div-item').length).toEqual(0);

  promise.then(() => {
    expect(wrapper.find('.big-div-item').length).toEqual(3);
  });
<<<<<<< HEAD
});

=======
});
>>>>>>> a3d723316a17f360af5fe6bd097de512c6c499c3
