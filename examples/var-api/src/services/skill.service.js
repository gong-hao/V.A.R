let uuid = 6

const data = [
  { id: 1, name: 'Runic Blade', key: null },
  { id: 2, name: 'Broken Wings', key: 'q' },
  { id: 3, name: 'Ki Burst', key: 'w' },
  { id: 4, name: 'Valor', key: 'e' },
  { id: 5, name: 'Blade of the Exile', key: 'r' },
  { id: 6, name: 'Wind Slash', key: 'r' }
]

function list() {
  return data
}

function detail(id) {
  const target = data.find(x => x.id === +id)
  return target
}

function create(item) {
  delete item.id
  item = {
    id: ++uuid,
    ...item
  }
  data.push(item)
}

function modify(id, item) {
  const target = data.find(x => x.id === +id)
  const index = data.indexOf(target)
  data[index] = { ...target, ...item }
}

function remove(id) {
  const target = data.find(x => x.id === +id)
  const index = data.indexOf(target)
  data.splice(index, 1)
}

module.exports = {
  list,
  detail,
  create,
  modify,
  remove
}
