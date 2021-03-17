const columns = [
    {title: "id"},
    {title: "Name"},
    {title: "Role"},
    {title: "Commission"},
    {title: "Last Login"},
    {title: "Status"},
]

const create = (x) => {
    let r = new Object
    columns.map((col, i) => r[col["title"]] = x[i] || "no values")
    return r
}

const roles = [
    "Administrator",
    "Moderator",
    "Customer Support Staff",
    "Social Media Staff",
    "Sales Person"
]

const rows = [
    create([1, "Ajiboye Mayokun", roles[0], 5, new Date().toUTCString(), "active"]),
    create([2, "Ajiboye Mayokun", roles[4], 5, new Date().toUTCString(), "active"]),
    create([3, "Ajiboye Mayokun", roles[4], 5, new Date().toUTCString(), "active"]),
    create([4, "Ajiboye Mayokun", roles[1], 5, new Date().toUTCString(), "active"]),
    create([5, "Ajiboye Mayokun", roles[3], 5, new Date().toUTCString(), "active"]),
]

const row = [
    create([1, "Enter Name", "Choose Row", 0, new Date().toUTCString(), "active"])
]

export {rows, row, roles, columns}