import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (e) => {
    let location = prompt("Edit location")
    let name = e.target.value
    this.props.store.editItem(name, location)
  }
  deleteItem = (e) => {
    let name = e.target.value
    this.props.store.deleteItem(name)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}><input type="checkbox" onClick={this.checkItem}
        value={item.name} />
        {item.name} - {item.location}
        <button className="editButton" value={item.name} onClick={this.editItem} >edit location</button>
        <button className="deleteButton" value={item.name} onClick={this.deleteItem} >Delete Item</button>
      </div>)
  }
}

export default Item
