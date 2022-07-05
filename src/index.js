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

    afterRender(){
        const select = new Selection();
        select.selectionClient();

    }

}

const root = createRoot(document.getElementById('root'));
root.render(<div><App/></div>);