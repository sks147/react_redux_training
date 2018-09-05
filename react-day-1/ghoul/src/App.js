import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Second from './SecondComponent';
import User from './User';


class App extends Component {

  state = {
    counter : 1,
    users : [
      {name: "nishank", email: "nishank@whynishank.com", Id: 0},
      {name: "sreekar", email: "sreekar@whysreekar.com", Id: 1},
      {name: "venkat", email: "venkat@whyvenkat.com", Id: 2}
    ]
  }
  render() {

    setTimeout(()=>{
      this.setState({
        counter: 15
      })
    }, 3000);

    return (
      <div className="App">
          Counter Value : {this.state.counter};
          <Second ctrval = {this.state.counter}/>
          
          {
            this.state.users.map(eachuser=>
              <User Id={eachuser.Id}
                name={eachuser.name}
                email={eachuser.email}/>
              )
          }

          {
            this.state.users.map(eachuser=>
              <User {...eachuser}>
              //conditional injection
               {eachuser.Id == 0 ?<i>--"Instructor FTW" </i> : ""}
              </User>
              )
          }
      </div>
    );
  }
}

export default App;
