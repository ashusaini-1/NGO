// OrderPage.js

import { Typography, Container, Grid, Card, CardContent } from '@mui/material';

const orders = [
  { id: 1, product: 'Product 1', quantity: 2, price: 10 },
  { id: 2, product: 'Product 2', quantity: 1, price: 15 },
  { id: 3, product: 'Product 3', quantity: 3, price: 8 },
];

function OrderPage() {
  return (
    <Container sx={{ pt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <Grid container spacing={3}>
        {orders.map((order) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={order.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {order.product}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {order.quantity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${order.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default OrderPage;
