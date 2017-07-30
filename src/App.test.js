import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import Shot from './Shot'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('renders shot', () => {
    let data = {
        id: 1,
        images: {
            normal: 'normal.png',
            hidpi: null
        }
    };
    const shot = renderer.create(
        <Shot key={data.id} data={data} img={data.images.normal} select={() => {}} />
    );

    let tree = shot.toJSON();
    expect(tree.children[0].children[0].props.src).toEqual('normal.png');
});
