import * as React from 'react';
import { Container, Grid, Paper, Typography, IconButton, Card } from '@mui/material';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Narbar from './Navbar';
import Box from '@mui/material/Box';
import Topbar from './Topbar';



const data = [
  { day: '01 Nov', sales: 1000 },
  { day: '02 Nov', sales: 1200 },
  { day: '03 Nov', sales: 900 },
  { day: '04 Nov', sales: 982 },
  { day: '05 Nov', sales: 444 },
  { day: '06 Nov', sales: 1500 },
  { day: '07 Nov', sales: 852 },
  { day: '08 Nov', sales: 777 },
  { day: '09 Nov', sales: 999 },
  { day: '10 Nov', sales: 685 },
  { day: '11 Nov', sales: 782 },
  { day: '12 Nov', sales: 900 },

];

const topProducts = [
  { name: 'Product A', sales: 150 },
  { name: 'Product B', sales: 120 },
  { name: 'Product C', sales: 110 },
  { name: 'Product D', sales: 100 },
  { name: 'Product E', sales: 90 },
];

export default function Overview() {
  return (
    <>
      <Topbar />
      <Box height={30}>
        <Box sx={{ display: 'flex' }}>
          <Narbar />
          <Container component="main" sx={{ flexGrow: 1, p: 3 }}>

            <Typography variant="h6" style={{ paddingTop: 80, marginBottom: 16 }}>
              Hi, Welcome back
            </Typography>


            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} style={{ padding: 20 }}>
                  <IconButton color="primary" aria-label="favorite">
                    <MonetizationOnIcon fontSize="large" style={{ marginRight: 8 }} />
                  </IconButton>
                  <Typography variant="h6">Total Sales</Typography>
                  <Typography variant="h4">$10,000</Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} style={{ padding: 20 }}>
                  <IconButton color="primary" aria-label="favorite">
                    <LocalMallIcon fontSize="large" style={{ marginRight: 8 }} />
                  </IconButton>
                  <Typography variant="h6">Total Products Sold</Typography>
                  <Typography variant="h4">500</Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} style={{ padding: 20 }}>
                  <IconButton color="primary" aria-label="favorite">
                    <PeopleAltIcon fontSize="large" style={{ marginRight: 8 }} />
                  </IconButton>
                  <Typography variant="h6">New Customers</Typography>
                  <Typography variant="h4">50</Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} style={{ padding: 20 }}>
                  <IconButton color="primary" aria-label="favorite">
                    <TrendingUpIcon fontSize="large" style={{ marginRight: 8 }} />
                  </IconButton>
                  <Typography variant="h6">Growth Rate</Typography>
                  <Typography variant="h4">10%</Typography>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ paddingTop: 2 }}>
              <Grid item xs={8}>
                <Paper elevation={3} style={{ padding: 20 }}>
                  <Typography variant="h5" style={{ marginBottom: 16 }}>
                    Sales in Current Month
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={3} style={{ padding: 20 }}>
                  <Typography variant="h5" style={{ marginBottom: 16 }}>
                    Top 5 Best-Selling Products
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={topProducts}
                        dataKey="sales"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};