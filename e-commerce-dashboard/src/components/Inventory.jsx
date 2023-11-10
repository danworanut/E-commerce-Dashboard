import React, { useState } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Box from '@mui/material/Box';
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';

const initialInventory = [
  { id: 1, name: 'Products A', category: 'category A', quantity: 10, status: 'In Stock' },
  { id: 2, name: 'Products B', category: 'category B', quantity: 5, status: 'Low Stock' },
  { id: 3, name: 'Products C', category: 'category A', quantity: 0, status: 'Out of Stock' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'In Stock':
      return 'green';
    case 'Low Stock':
      return 'orange';
    case 'Out of Stock':
      return 'red';
    default:
      return 'black'; 
  }
};

export default function Inventory() {
  const [inventory, setInventory] = useState(initialInventory);

  const handleDelete = (itemId) => {
    const updatedInventory = inventory.filter((item) => item.id !== itemId);
    setInventory(updatedInventory);
  };

  return (
    <>
      <Topbar />
      <Box height={30}>
        <Box sx={{ display: 'flex' }}>
          <Navbar />
          <Container component="main" sx={{ flexGrow: 1, p: 3, paddingTop: 16 }}>

            <Stack direction="row" spacing={5} sx={{ mb: 5 }} >
              <h1>Inventory</h1>
              <Button variant="contained" color="primary" href="/add">
                Add Product
              </Button>
            </Stack>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Amoung</TableCell>
                    <TableCell> Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {inventory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>
                        <span style={{ backgroundColor: getStatusColor(item.status) ,color: '#fff', padding: '5px', borderRadius: '5px' }}>{item.status}</span>
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={2}>
                          <Button variant="outlined" color="primary" href={`/edit/${item.id}`}>
                            Edit
                          </Button>
                          <Button variant="outlined" color="error" onClick={() => handleDelete(item.id)}>
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Box>
      </Box>
    </>
  );
}
