import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'
import { connect } from 'react-redux'

function ShoppingCart({
  itemIds,
  itemMap
}) {
  const items = itemIds.map(id => itemMap[id])
  return (
    <ul>
      {items.map(item => <ShoppingCartItem key={`ShoppingCartItem-${item.product.id}`} item={item} />)}
    </ul>
  )
}

const mapStateToProps = state => {
  const { shoppingCart } = state
  return { ...shoppingCart }
}

export default connect(mapStateToProps)(ShoppingCart)
