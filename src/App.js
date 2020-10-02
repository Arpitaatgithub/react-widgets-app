import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items =[
    {
        title: 'What is React?',
        content: 'React is a frontend javaScript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is best amonf users'
    },
    {
        title: 'How do you use React?',
        content: 'We use React by creating components'
    }
]

const options = [
    {
        label: 'the color red',
        value: 'red'
    },
    {
        label: 'the color green',
        value: 'green'
    },
    {
        label: 'the shade of blue',
        value: 'blue'
    }
];

// const showAccordion = () => {
//     if(window.location.pathname === '/'){
//         return <Accordion items={items}/>
//     }
// }

// const showList = () => {
//     if(window.location.pathname === '/list'){
//         return  <Search />
//     }
// }

// const showDropdown = () => {
    
//     if(window.location.pathname === '/dropdown'){
//         return <Dropdown />//<Dropdown selected={selected} onSelectedChange={setSelected} options={options}/>
//     }
// }

// const showTranslate =() => {
//     if(window.location.pathname === '/translate'){
//         return <Translate />
//     }
// }

export default () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items}/> 
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown selected={selected} onSelectedChange={setSelected} options={options}/>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}