import React, { useEffect } from 'react'
import { changeLimit, changePage, loadList } from '../redux/reducers/productList'
import { loading, loadingSuccess } from '../redux/reducers/loading'

import Pagination from './Pagination'
import ProductListItem from './ProductListItem'
import { connect } from 'react-redux'

function ProductList({
  isLoading,
  errorMessage,
  items,
  count,
  last,
  page,
  limit,
  loadList,
  changePage,
  changeLimit,
  loading,
  loadingSuccess
}) {
  useEffect(
    () => {
      loading()
      setTimeout(() => {
        const data = {
          items: [
            { id: 1, name: 'foo' },
            { id: 2, name: 'bar' },
            { id: 3, name: 'woo' }
          ].slice(0, limit),
          count: 3,
          last: 2,
          page,
          limit
        }
        loadList(data)
        loadingSuccess()
      }, 500)
    },
    [page, limit]
  )

  if (isLoading) {
    return <span>Loading...</span>
  }

  const errorBlock = errorMessage
    ? <span>{errorMessage}</span>
    : null

  return (
    <>
      {errorBlock}
      <ul>
        {items.map(item => <ProductListItem key={`ProductListItem-${item.id}`} item={item} />)}
      </ul>
      <Pagination
        count={count}
        last={last}
        page={page}
        limit={limit}
        changePage={changePage}
        changeLimit={changeLimit} />
    </>
  )
}

const mapStateToProps = state => {
  const { loading, productList } = state
  return { ...loading, ...productList }
}

const mapDispatchToProps = {
  loadList,
  changePage,
  changeLimit,
  loading,
  loadingSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
