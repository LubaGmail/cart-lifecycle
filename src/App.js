import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 1
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };

  constructor() {
    super();
    console.log('app.constructor');
  }

  componentDidMount() {
    console.log('app.componentDidMount - component is in the real DOM; 1). make ajax call; 2). setState with new data');
  }

  render() {
    console.log('app.render - virtual DOM is rendered.');
    return (
      <div className="App">
        <Navbar totalCounters={this.state.counters.filter( c => c.value > 0).length} />
        <main className='container'>
          <Counters 
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>

      </div>
    );
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  
  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: counters });
  };
}

export default App;
