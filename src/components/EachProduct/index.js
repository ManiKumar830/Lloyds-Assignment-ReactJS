import {Component} from 'react'

import './index.css'

class EachProduct extends Component {
  state = {isAdd: true, count: 0}

  onClickAdd = () => {
    const {isAdd, count} = this.state
    this.setState({count: count + 1})
    this.setState({isAdd: !isAdd})
  }

  onClickMinus = () => {
    const {isAdd, count} = this.state
    this.setState({count: count - 1})
    this.setState({isAdd: !isAdd})
  }

  render() {
    const {isAdd, count} = this.state
    const {each} = this.props
    const {image, name, price, weight} = each

    console.log(count)

    return (
      <>
        <div className="eachproduct-container">
          <img className="product-image" alt="manis" src={image} />
          {isAdd ? (
            <button type="button" onClick={this.onClickAdd} className="isAdd">
              +
            </button>
          ) : (
            <button type="button" onClick={this.onClickMinus} className="isAdd">
              -
            </button>
          )}
          <h1 className="price">{price}</h1>
          <p className="name">{name}</p>
          <p className="weight">{weight}</p>
        </div>
      </>
    )
  }
}

export default EachProduct
