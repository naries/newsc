const columns = [
    {title: "count"},
    {title: "product"},
    {title: "orders"},
    {title: "delivered"},
    {title: "awaiting"},
    {title: "scheduled"},
    {title: "shipped"},
    {title: "cancelled"},
]
  
const create = (x) => {
  let r = new Object
  columns.map((col, i) => r[col["title"]] = x[i] || "no values")
  return r
}

const rows = [
  create([1, "Spy Eye Glass", 1, 1, 1, 1, 1, 1, ]),
  create([2, "Spy Eye Glass", 1, 1, 1, 1, 1, 1, ]),
  create([3, "Spy Eye Glass", 1, 1, 1, 1, 1, 1, ]),
  create([4, "Spy Eye Glass", 1, 1, 1, 1, 1, 1, ]),
  create([5, "Spy Eye Glass", 1, 1, 1, 1, 1, 1, ]),
  create([6, "Spy Eye Glass", 1, 1, 1, 1, 1, 1, ]),
  create([7, "Spy Eye Glass", 1, 1, 1, 1, 1, 1, ]),
]

const orderBumpRows = [
  create([1, "Spy Eye Glass", 1, 1, 1, 1, 1, 1, ]),
]

const total = [
    "Total", 7, 7, 7, 7, 7, 7
]

const orderBumpTotal = [
    "Total", 1, 1, 1, 1, 1, 1
]

export { columns, rows, total, orderBumpRows, orderBumpTotal}