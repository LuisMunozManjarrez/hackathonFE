import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

function createData(name, title, createdDate, status) {
  return { name, title, createdDate, status};
}

const rows = [
  createData('Tim Jennings ', 'Acquiring new business', '23-Abr-2023', 'Open'),
  createData('Nathan Roberts', 'Upselling to existing business', '23-Abr-2023', 'Open'),
  createData('Georgia Young', 'Companies that have experienced a major event...', '23-Abr-2023', 'Open'),
  createData('Michelle Rivera', 'Cross-selling to existing business', '23-Abr-2023', 'Open'), 
  createData('Sara Cruz', 'Market share by more than 5% yesterday', '23-Abr-2023', 'Open'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='bg-slate-200'>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Created Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow> 
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.createdDate}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <Link to="/chat/new" className="flex justify-center">
                  <Button variant="contained"sx={{width:'100', heigth:'50'}}>
                    Open Chat
                  </Button>
                </Link>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}