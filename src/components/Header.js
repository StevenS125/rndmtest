import React, { Component } from 'react';
import './Header.css'


export default class Header extends Component {
    constructor(props) {
        super(props);
        // change code below this line
        this.state = {
          userInput: '',
          names: [],
          selection: "pick a winner"
        }
        // change code above this line
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      handleSubmit(event) {
          let newArr = this.state.names.slice()
          newArr.push({name: this.state.userInput,
                        id: this.state.names.length + 1 })
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

      pickwinner = () => {
        const max = this.state.names.length

        const numSelect = Math.floor(Math.random() * max)
        this.setState({
            selection: this.state.names[numSelect].name
        })
      }


    render() {
       const clientelle = this.state.names.map((i, index) => <ul key={index}> {i.name}</ul>)
        return (
          <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
            <h1>Names:</h1>
              {clientelle}
</div>
<div>
    <h1>Winner</h1>
    <div>{this.state.selection}</div>
    <button onClick={this.pickwinner}>Click to Pick</button>
</div>
          </div>
      );
    }
  };