import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/layout"
import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table"
import { useContext, useState } from "react"
import { ThemedContext } from "../assets/themeToggle"
import Row from "./Row"

const columns = [
  {title: "country"},
  {title: "product"},
  {title: "category"},
  {title: "cost"},
  {title: "recurring"},
  {title: "duration"},
  {title: "variation"},
  {title: "offer"}
]


const create = (x) => {
  let r = new Object
  columns.map((col, i) => r[col["title"]] = x[i] || "no values")
  return r
}

const rows = [
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "Yes", "Bi-Weekly", [{title: "color", options: [{title: 'red', cost: '₦ 4000'}, {title: 'blue', cost: '₦ 6000'}]}, {title: 'size', options: [{title:"large", cost: "N3000"}]}], {title: "Buy 2 get one free"}]),
  create(["Nigeria", "Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "Yes"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),
  create(["Nigeria", "Spy Eye glasses", "Fashion", "₦ 5000", "No"]),

  create(["mm", "nm", "NM", "₦ 39500", "No values"])
]


const CollapsibleTable = () => {
  const themes = useContext(ThemedContext)
  const [sortActive, setSortActive] = useState({})
  const [rowState, setRowState] = useState(rows)
  return (
    <Box>
      <Table variant="unstyled">
        <Thead bg={themes.topBarBackground} color={themes.tableHeadColor}>
          <Tr>
            <Th w="20px">Count</Th>
            <Th>Collapse</Th> 
            {columns.map((col, i) => <>{col.title!=='country' && col.title!=="category" && col.title!=="variation" && col.title!=="offer" && col.title!=="duration" && <Th key={i} sx={{cursor: 'pointer'}} minW="180px" onClick={() => {
              // For sorting table according to columns
              
              if(sortActive === {}) {
                setSortActive({
                  column: col.title,
                  order: 'asc',
                  previous: col.title
                })
              }else if(sortActive.column === col.title){
                setSortActive({...sortActive, order: sortActive.order === 'asc' ? "desc": 'asc'})
              }else{
                setSortActive({...sortActive, order: 'asc', previous: sortActive.column, column: col.title})
              }
              sortActive.order === 'asc' ? setRowState([...[...rows].sort((a, b) => (a[sortActive.column] > b[sortActive.column]) ? 1 : (a[sortActive.column] === b[sortActive.column]) ? ((a[sortActive.previous] > b[sortActive.previous]) ? 1 : -1) : -1 )])
                : setRowState([...[...rows].sort((a, b) => (a[sortActive.column] < b[sortActive.column]) ? 1 : (a[sortActive.column] === b[sortActive.column]) ? ((a[sortActive.previous] < b[sortActive.previous]) ? 1 : -1) : -1 )])
            
            }} isNumeric={col.numeric ? true: false}>{col.title} {col.title===sortActive.column && <ChevronDownIcon w={4} h={4}/>}</Th>}</>)}
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
            {rowState.map((k, i) => <>
              <Row k={k} i={i} which="product"/>
            </>)}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th w="20px"></Th>
            <Th>Collapse</Th>
            {columns.map((col, i) => <>{col.title!=='country' && col.title!=="category" && col.title!=="variation" && col.title!=="offer" && col.title!=="duration" && <Th key={i} minW="180px" isNumeric={col.numeric ? true: false}>{col.title}</Th>}</>)}
            <Th>Action</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  )
}

export default CollapsibleTable