import './index.css'
import EachProduct from '../EachProduct'

const ProductsList = props => {
  const {productDetails} = props
  const {products} = productDetails

  return (
    <li>
      <h1>
        {productDetails.name} {`${'>'}`}
      </h1>
      <div className="images-container">
        {products.map(eachItem => (
          <EachProduct key={eachItem.id} each={eachItem} />
        ))}
      </div>
      <hr />
    </li>
  )
}

export default ProductsList
