import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Row, Col, Input, List } from 'antd'
import TodoItem from './TodoItem'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  
  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1);
    this.setState({list})
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            delete={this.handleDelete} 
            key={index} 
            content={item} 
            index={index}
          />
        ) 
      })
    )
  }
  render() {
    return (
      <div className="App">
        <div>
          <h2>Todo List</h2>
          <Row type="flex" justify="center" gutter={6}>
            <Col span={6}>
              <Input value={this.state.inputValue} onChange={this.handleInputChange} />
            </Col>
            <Col>
              <Button type="primary" onClick={this.handleBtnClick}>Add</Button>
            </Col>
          </Row>
          {/* <List>{this.getTodoItems}</List> */}
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
      </div>
    );
  }
}

export default App;
