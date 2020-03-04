import React from 'react'
import cx from 'classnames'

export default function Pagination({
  count,
  last,
  page,
  limit,
  changePage,
  changeLimit
}) {
  return (
    <>
      <ul>
        {Array.from(Array(last).keys()).map(x => {
          const currentPage = x + 1
          return (
            <li
              className={cx({ 'active': currentPage === page })}
              key={`Pagination-${x}`}
              onClick={() => changePage(currentPage)}>
              {currentPage}
            </li>
          )
        })}
      </ul>
      count:{count} | last:{last} | page:{page} | limit:{limit}
      <select
        value={limit}
        onChange={e => changeLimit(Number(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="10">10</option>
      </select>
    </>
  )
}
