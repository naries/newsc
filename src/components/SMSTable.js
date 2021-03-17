import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/layout"
import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table"
import { useContext, useState } from "react"
import { ThemedContext } from "../assets/themeToggle"
import { SMSRows as rows, SMSColumns as columns } from "../lib"
import Row from './Row'

const SMSTable = () => {
  const themes = useContext(ThemedContext)
  const [sortActive, setSortActive] = useState({})
  const [rowState, setRowState] = useState(rows)
  console.log(rowState)
  const action = (i) => {
    rowState.splice(i, 1)
    setRowState([...rowState])
  }

  return (
    <Box>
      <Table variant="unstyled">
        <Thead bg={themes.topBarBackground} color={themes.tableHeadColor}>
          <Tr>
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
            {rowState.length === 0 && <Box>Nothing to show here! Try again.</Box>}
            {rowState.length !== 0 && rowState.map((k, i) => <>
              <Row k={k} i={i} useCheck={true} noCount={true} action={action} nodelete={true} which="sms"/>
            </>)}
        </Tbody>
        <Tfoot>
          <Tr>
            {columns.map((col, i) => <>{col.title!=='country' && col.title!=="category" && col.title!=="variation" && col.title!=="offer" && col.title!=="duration" && <Th key={i} minW="180px" isNumeric={col.numeric ? true: false}>{col.title}</Th>}</>)}
            <Th>Action</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  )
}

export default SMSTable