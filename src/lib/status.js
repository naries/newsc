const status = [
    "Pending",
    "Confirmed",
    "Awaiting",
    "Delivered",
    "Shipped", 
    "Scheduled",
    "Cancelled",
    "Returned",
    "Cash Remitted",
    "Deleted"
]

const columns = [
    {title: "key"},
    {title: "name"},
    {title: "email"},
    {title: "product"},
    {title: "phone"},
    {title: "address"},
    {title: "state"},
    {title: "quantity"},
    {title: "cost"},
    {title: "date"},
    {title: "comment"},
    {title: "status"}
]

  
const create = (x) => {
  let r = new Object
  columns.map((col, i) => r[col["title"]] = x[i] || "no values")
  return r
}

const rows = [
  create([1, "Ajiboye Mayokun", "phynormynal@gmail.com", "Spy Eye glasses", "+2349031855132", "No 1, Lekan Solanke street, Adeoni Estate, Ojodu", "Lagos", 5, 5000, new Date().toLocaleString, "This is a new Comment!", "Pending"]),
  create([2, "Ajiboye Mayokun", "phynormynal@gmail.com", "Spy Eye glasses", "+2349031855132", "No 1, Lekan Solanke street, Adeoni Estate, Ojodu", "Lagos", 5, 5000, new Date().toLocaleString, "This is a new Comment!", "Confirmed"]),
  create([3, "Ajiboye Mayokun", "phynormynal@gmail.com", "Spy Eye glasses", "+2349031855132", "No 1, Lekan Solanke street, Adeoni Estate, Ojodu", "Lagos", 5, 5000, new Date().toLocaleString, "This is a new Comment!", "Awaiting"]),
  create([4, "Ajiboye Mayokun", "phynormynal@gmail.com", "Spy Eye glasses", "+2349031855132", "No 1, Lekan Solanke street, Adeoni Estate, Ojodu", "Lagos", 5, 5000, new Date().toLocaleString, "This is a new Comment!", "Delivered"]),
  create([5, "Ajiboye Mayokun", "phynormynal@gmail.com", "Spy Eye glasses", "+2349031855132", "No 1, Lekan Solanke street, Adeoni Estate, Ojodu", "Lagos", 5, 5000, new Date().toLocaleString, "This is a new Comment!", "Scheduled"]),
  create([6, "Ajiboye Mayokun", "phynormynal@gmail.com", "Spy Eye glasses", "+2349031855132", "No 1, Lekan Solanke street, Adeoni Estate, Ojodu", "Lagos", 5, 5000, new Date().toString, "This is a new Comment!", "Shipped"]),
  create([7, "Ajiboye Mayokun", "phynormynal@gmail.com", "Spy Eye glasses", "+2349031855132", "No 1, Lekan Solanke street, Adeoni Estate, Ojodu", "Lagos", 5, 5000, new Date().toString, "This is a new Comment!", "Cancelled"]),
]

export { status, columns, rows }