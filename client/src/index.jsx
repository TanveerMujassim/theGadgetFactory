// ///nav bar-> logo,search,signin,cart
// //slider,suggested products,offer
// //footer->links ,etc
// // import React from 'react'

// // const Index = () => {
// //   return (
// //     <h1>index</h1>
// //   )
// // }

// // export default Index
import React from "react";
import {
  // AppBar,
  Button,
  Container,
  CssBaseline,
//   IconButton,
  // Toolbar,
  Typography,
//   Slider,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { ArrowForward, 
  // Person, 
  // ShoppingBasket
 } from "@mui/icons-material";
import NavBar from './navBar.jsx';
// Sample product data (you would typically fetch this from an API)
const products = [
  {
        id:1,
        name:"thinkpad",
        category:"laptop",
        price: 25,
        description:" a basic laptop",
        image:"https://rukminim2.flixcart.com/image/832/832/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70"
    },
    {
        id:2,
        name:"pavilion",
        category:"laptop",
        price: 30,
        description:" a coding laptop",
        image:"https://rukminim2.flixcart.com/image/832/832/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70"
    },
    {
        id:3,
        name:"hp pavilion",
        category:"laptop",
        price:50,
        description:"Graphics laptop",
        image:"https://th.bing.com/th/id/OIP.aFywxx2DuURHemZu4OMUtAHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7"
    }
];

const Index = () => {
  return (
    <div>
      <NavBar/>
      <CssBaseline />
      

      <Container maxWidth="md" sx={{ marginTop: 2 }}>
        {/* Image Slider */}
        {/* <Slider
          components={({ value }) => (
            // <img
            //   src={slider-image-${value}.jpg}
            //   alt={Image ${value}}
            //   style={{ width: "100%" }} />
            )}
        /> */}

        {/* Random Products */}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Paper elevation={3}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={product.name}
                    height="150"
                    image={product.image}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.price}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button
                        color="primary"
                        variant="contained"
                        endIcon={<ArrowForward />}
                      >
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Index;