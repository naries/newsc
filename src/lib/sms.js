const columns = [
    { title: "type" },
    { title: "message" },
    { title: "use" }
]
  
const create = (x) => {
  let r = new Object
  columns.map((col, i) => r[col["title"]] = x[i] || "Add a value")
  return r
}

const rows = [
  create(["New order (Main offer)", "",   true]),
  create(["New order (Order bump)", "",  false]),
  create(["Scheduled Offer", "",  true,]),
  create(["Shipped Offer", "",  true]),
  create(["Cancelled Offer", "",  true]),
  create(["Awaiting Offer", "",  true]),
  create(["Delivered Offer", "",  true])
]

export { columns, rows }