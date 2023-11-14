import React, { useState } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import { Container, Grid, TextField, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Select, MenuItem, Box, Button, TablePagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '@fontsource/poppins';


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});



export default function SalesReport() {

  const [originalSalesData] = useState([
    {
      date: '11/13/2023',
      productName: 'Product 5',
      quantity: 12,
      price: 120,
      category: 'Category A',
    },
    {
      date: '11/14/2023',
      productName: 'Product 6',
      quantity: 18,
      price: 180,
      category: 'Category A',
    },
    {
      date: '11/15/2023',
      productName: 'Product 7',
      quantity: 25,
      price: 250,
      category: 'Category B',
    },
    {
      date: '11/16/2023',
      productName: 'Product 8',
      quantity: 14,
      price: 140,
      category: 'Category B',
    },
    {
      date: '11/17/2023',
      productName: 'Product 9',
      quantity: 16,
      price: 160,
      category: 'Category A',
    },
    {
      date: '11/18/2023',
      productName: 'Product 10',
      quantity: 22,
      price: 220,
      category: 'Category C',
    },
    // เพิ่มข้อมูลต่อไปเรื่อย ๆ
  ]);

  const [salesData, setSalesData] = useState([...originalSalesData]);

  const [filter, setFilter] = useState({
    startDate: '',
    endDate: '',
    productName: '',
    category: '',
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const handleSearch = () => {
    const filteredData = originalSalesData.filter(item => {
      const itemDate = new Date(item.date);
      const isDateInRange = (!filter.startDate || itemDate >= new Date(filter.startDate)) && (!filter.endDate || itemDate <= new Date(filter.endDate));

      const isProductNameMatch = !filter.productName || (item.productName && item.productName.toLowerCase().includes(filter.productName.toLowerCase()));
      const isCategoryMatch = !filter.category || (item.category && item.category.toLowerCase().includes(filter.category.toLowerCase()));

      return isDateInRange && isProductNameMatch && isCategoryMatch;
    });

    setSalesData(filteredData);
  };

  const handleReset = () => {
    setFilter({
      startDate: '',
      endDate: '',
      productName: '',
      category: '',
    });

    setSalesData([...originalSalesData]);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Topbar />
        <Box height={30}>
          <Box sx={{ display: 'flex' }}>
            <Navbar />
            <Container component="main" sx={{ flexGrow: 1, p: 3, paddingTop: 16 }}>
              <h1>Sales report</h1>
              <Box>
                <Grid container spacing={2} alignItems="flex-end">
                  <Grid item>
                    <TextField
                      id="category"
                      select
                      label="Category"
                      value={filter.category}
                      sx={{ minWidth: 120 }}
                      InputLabelProps={{ shrink: true }}
                      onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                    >
                      {[...new Set(originalSalesData.map((data) => data.category))].map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item>
                    <TextField
                      label="Name Product"
                      value={filter.productName}
                      onChange={(e) => setFilter({ ...filter, productName: e.target.value })}
                      sx={{ minWidth: 120 }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item>
                    <TextField
                      label="Start Date"
                      type="date"
                      value={filter.startDate}
                      onChange={(e) => setFilter({ ...filter, startDate: e.target.value })}
                      sx={{ minWidth: 120 }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item>
                    <TextField
                      label="End Date"
                      type="date"
                      value={filter.endDate}
                      onChange={(e) => setFilter({ ...filter, endDate: e.target.value })}
                      sx={{ minWidth: 120 }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item>
                    <Button variant="contained" onClick={handleSearch} sx={{ minWidth: 120, height: 55 }}>
                      Filter
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button variant="outlined" onClick={handleReset} sx={{ minWidth: 120, height: 55 }}>
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </Box>


              <TableContainer component={Paper} sx={{ marginTop: 2 }} >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Name Product</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Amoung</TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* ใช้ slice() เพื่อดึงข้อมูลที่ต้องการแสดงตามหน้า */}
                    {salesData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.productName}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={salesData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>

            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
