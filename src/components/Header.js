import React, { component } from 'react';

export default class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      }
    }
    render() {
      const usersOnline = null; // change code here
      const renderOnline = null; // change code here
      return (
         <div>
           <h1>Current Online Users:</h1>
           <ul>
             {renderOnline}
           </ul>
         </div>
      );
    }
  };