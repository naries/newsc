import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/layout"
import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table"
import { useState } from "react"
import { reportTotal as total, reportRows as rows, reportColumns as columns, reportRows } from "../lib"
import Row from './Row'

const MainReport = () => {
  const [sortActive, setSortActive] = useState({})
  const [rowState, setRowState] = useState(rows)
  console.log(rowState)
  const action = (i) => {
    rowState.splice(i, 1)
    setRowState([...rowState])
  }

  return (
    <Box fontSize={14} color="#333">
      <Table variant="unstyled">
        <Thead bg="pink.500" color="white">
          <Tr>
            {columns.map((col, i) => <>{col.title!=='country' && col.title!=="category" && col.title!=="variation" && col.title!=="offer" && col.title!=="duration" && <Th key={i} sx={{cursor: 'pointer'}} minW="70px" onClick={() => {
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
          </Tr>
        </Thead>
        <Tbody>
            {rowState.length === 0 && <Box>Nothing to show here! Try again.</Box>}
            {rowState.length !== 0 && rowState.map((k, i) => <>
              <Row k={k} i={i} noCount={true} action={action} which="outgoing_stock" noAction={true} />
            </>)}
        </Tbody>
        <Tfoot bg="gray.100">
          <Tr>
            <Th></Th>
            {total.map((tot, i) => <><Th>{tot}</Th></>)}
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  )
}

export default MainReport