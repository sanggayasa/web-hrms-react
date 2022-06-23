import React from 'react';
import { createRoot } from 'react-dom/client';
import Content from './route';
import "./style/sidebars.css";

class App extends React.Component {
    render() {
        return (
            <div className='conatiner'>
                <Content />
            </div>
        )
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<div><App/></div>);