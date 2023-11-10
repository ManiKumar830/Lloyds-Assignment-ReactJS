import {Component} from 'react'

import './index.css'
import {FiShoppingCart} from 'react-icons/fi'

class Header extends Component {
  state = {count: 0}

  onClickCart = () => {
    let {count} = this.state
    this.setState({count: (count += 1)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="header-container">
        <h1>E-Commerse</h1>
        <button
          type="button"
          onClick={this.onClickCart}
          className="cart-container"
        >
          <FiShoppingCart className="cart-icon" />
          <p className="counter-text">{count}</p>
        </button>
      </div>
    )
  }
}
export default Header
