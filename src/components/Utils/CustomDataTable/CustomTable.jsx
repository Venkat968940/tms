import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const CustomTable = ({title, data}) => {
  return (
   <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                {title?.map(val=>(
                    <TableCell>{val}</TableCell>
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                {data?.map(val=>(
                    <TableCell>{val}</TableCell>
                ))}
            </TableRow>
        </TableBody>
    </Table>
   </TableContainer>
  )
}

export default CustomTable