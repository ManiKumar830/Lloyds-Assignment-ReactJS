import {Component} from 'react'

import './index.css'

class SideBar extends Component {
  state = {toggle: true}

  render() {
    const {toggle} = this.state
    console.log(toggle)
    const {categoryName} = this.props
    const {name} = categoryName
    return (
      <li className="sidebar-container">
        <button
          type="button"
          onClick={this.onClickToggle}
          className="category-name1"
        >
          {name}
        </button>
      </li>
    )
  }
}

export default SideBar
