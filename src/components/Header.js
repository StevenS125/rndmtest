import React, { Component } from 'react';
import './Header.css'


export default class Header extends Component {
    constructor(props) {
        super(props);
        // change code below this line
        this.state = {
          userInput: '',
          names: []
        }
        // change code above this line
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      handleSubmit(event) {
          let newArr = this.state.names.slice()
          newArr.push({name: this.state.userInput})
        this.setState({
          names: newArr
        });
        event.preventDefault()
      }
      handleChange(e) {
        this.setState({
          userInput: e.target.value
        });
        e.preventDefault()
      }


    render() {
       const clientelle = this.state.names.map((i, index) => <ul key={index}>{i.name}</ul>)
        return (
          <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
            <h1>Clients:</h1>
              {clientelle}
          </div>
      );
    }
  };