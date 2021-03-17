const columns = [
    {title: "key"},
    {title: "product"},
    {title: "state"},
    {title: "Quantity"},
    {title: "Agent"},
]
  
const create = (x) => {
  let r = new Object
  columns.map((col, i) => r[col["title"]] = x[i] || "no values")
  return r
}

const rows = [
  create([1, "Spy Eye Glass", "Lagos",  5, "Mayokun"]),
  create([2, "Spy Eye Glass", "Lagos",  5, "Mayokun"]),
  create([3, "Spy Eye Glass", "Lagos",  5, "Mayokun"]),
]

export { columns, rows }