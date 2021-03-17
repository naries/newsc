const columns = [
    {title: "id"},
    {title: "date"},
    {title: "expenses"},
    {title: "sources"},
    {title: "description"},
    {title: "amount"},
]

const create = (x) => {
    let r = new Object
    columns.map((col, i) => r[col["title"]] = x[i] || "no values")
    return r
}

const rows = [
    create([1, "24-02-2021","Ad Expenses", "Cash Inflow", "Description", "N 20000"]),
]

const row = [
    create([1, "","", "", "", ""]),
]

export {rows, row, columns}