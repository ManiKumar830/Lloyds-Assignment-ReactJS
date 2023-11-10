import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import ProductsList from '../ProductsList'

import './index.css'

class Home extends Component {
  state = {
    productsList: [],
  }

  componentDidMount() {
    this.getProductsList()
  }

  getProductsList = async () => {
    const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const jsonData = await response.json()

    this.setState({productsList: jsonData.categories})
  }

  render() {
    const {productsList} = this.state
    console.log(productsList)
    return (
      <>
        <Header />
        <div className="bottom-container">
          <ul className="side-container">
            {productsList.map(eachItem => (
              <SideBar key={eachItem.products.id} categoryName={eachItem} />
            ))}
          </ul>
          <ul className="right-container">
            {productsList.map(eachItem => (
              <ProductsList
                key={eachItem.products.id}
                productDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Home
