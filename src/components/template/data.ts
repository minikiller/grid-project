
export const createRandomData = (count) => {
  const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk']
  const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

  return Array(count).fill({}).map((_, idx) => ({
    ProductID: idx + 1,
    ProductName: productNames[Math.floor(Math.random() * productNames.length)],
    UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
    UnitsInStock: Math.floor(Math.random() * 100)
  }))
}

export const columns = [
  {
    field: 'ID',
    title: 'ID',
    width: '40px',
    headerCell: 'myHeaderTemplate',
    filterable: false,
    selected: false
  },
  { field: 'ProductID', title: 'ID', width: '80px', filterable: false },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
  { field: 'UnitsInStock', title: 'Units In Stock' }
]
