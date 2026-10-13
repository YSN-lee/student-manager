
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type { Student } from "../utils/data";
import { useEffect } from 'react';



interface props {
  students: Student[]
  checkMaxLimit: boolean
}

export const StudentTable = ({students, checkMaxLimit }: props) => {
   
 useEffect(() => {
    if (students.length >= 5 && checkMaxLimit) {
      alert("Max limit reached");
    }
  }, [students, checkMaxLimit]);


  return (
    <TableContainer component={Paper} sx={{ width: 400 }}>
      <Table size="small" sx={{ border: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>Full name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Class</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((item) => {
            return (
              <TableRow>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.class}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};