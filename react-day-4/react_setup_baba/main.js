import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import AddDefect from './AddDefect';
import { BrowserRouter, Route,Link} from 'react-router-dom';

const DEFECTS=[
    {category:"UI",description:"Button not working",priority:3, status: "Open"},
    {category:"cat2",description:"desc2",priority:1, status: "Open"},
    {category:"cat3",description:"desc3",priority:3, status: "Open"},
]
localStorage.setItem('defects',JSON.stringify(DEFECTS));
ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <ul>
                <li><Link to="/">AddDefect</Link></li>
                <li><Link to="/view-defects">View Defects</Link></li>
            </ul>
        <Route exact path="/" component={AddDefect}/>
        <Route path="/view-defects/:count" component={App}/>
        </React.Fragment>    
  </BrowserRouter>,   
    document.getElementById('app')
        
);
