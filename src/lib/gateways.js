const columns = [
    { title: "gateway" },
    { title: "information" },
    { title: "use" }
]
  
const create = (x) => {
  let r = new Object
  columns.map((col, i) => r[col["title"]] = x[i] || "Add a value")
  return r
}

const rows = [
  create(["Paystack", "API Key", true]),
  create(["Flutterwave", "API Key", false]),
  create(["Bank Transfer", "- Account Name: Ajiboye Mayokun - Account Number: 2260982807 - Bank: Zenith - Send proof after payment to mail",  true]),
]

export { columns, rows }