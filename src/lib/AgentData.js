const status = [
    "Active",
    "Inactive"
]

const columns = [
    {title: "key"},
    {title: "agent"},
    {title: "state"},
    {title: "address"},
    {title: "phone"},
    {title: "status"}
]

  
const create = (x) => {
  let r = new Object
  columns.map((col, i) => r[col["title"]] = x[i] || "no values")
  return r
}

const rows = [
  create([1, "Mayokun", "Lagos",  "No 1, Lekan Solanke street, Adeoni Estate, Ojodu", "+2349031855132", "active"]),
  create([2, "Ajiboye", "Imo",   "No 1, Lekan Solanke street, Adeoni Estate, Ojodu", "+2349031855132"]),
]

export { status, columns, rows }