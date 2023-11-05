// // // //products details,images
// // // //add to cart ,buy now(buttons)
// // // //related products
// // // import React from 'react'

// // // const Products = () => {
// // //   return (
// // //     <div>products</div>
// // //   )
// // // }

// // // export default Products
// // import React from "react";
// // import {
// //   Container,
// //   Grid,
// //   Paper,
// //   Typography,
// //   Button,
// //   Divider,
// // } from "@mui/material";

// // const Products = () => {
// //   return (
// //     <Container maxWidth="md">
// //       <Paper elevation={3} style={{ padding: "20px" }}>
// //         <Grid container spacing={2}>
// //           <Grid item xs={12} sm={6}>
// //             <img
// //               src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRYYGBgYGBgaGhwaGRgYGhgYGRoaGhwZGhwcIy8lHB4rIRoYJjgmLC80NTU2GiQ7QDszPy40NTEBDAwMEA8QHxISHj8lISwxND8xNDY0NjQ0NDQ0NDQ0NDQ0NDQ0NjQ0NDQ0NDE0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NP/AABEIALoBDwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABDEAACAQIDBAcFBQcEAAcBAAABAgADEQQSIQUxQVEGImFxgZGhBxMyQrFScsHR8BQVYpKywuEjM4KiQ0RTY3PS8ST/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEBAQADAQACAgMAAAAAAAABAhEDEiExE0FRcTJhof/aAAwDAQACEQMRAD8A7NERAREQPJz7pX02r4TFNSVKRphUIz5gxLC56wa2/snQZxb2wU7YknnRpnydx+EsWNgwvtQv8eG8UqA+jKPrJXD+0fCN8S1U70DD/qTOCIJfSo43M3mZeN/xV9FYfpjgX3YlB9+9P+oCS2Hx1Op/t1Ef7rK30M+Yxi3HzX7wJcTHneUUnusZOH8Wn1BE+csH0krJ8FSslvs1Xt/Le0msL7QMWv8A5hm7HRG9Qt/WOM3Gp/TucTk2F9p1cfGtB+7Oh9SR6SZwvtLQ/HQYfcqI/wBcscZ46DE1LDdP8G+9qia261Nt/et5K4bpLhH+HEU78mYKfJrSCYiWqVZWF1YMOwg/SXYCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB5ORe2Sn/rI3Oh/S5P4zrs5Z7ZKetFuaVR5FT+MsWfrkgeVhxKZ4Vlevq6GBlSU+e7nLaCX6acj5znqtZnREI7jLluyZDpuGluffK0o33CZm+ut8VjGVOUvJhyZK4bZhIBIABGb4lJygkFsgOa11bhwM2DB7Iw6m7u7W3hKRPqzA8+E1NdrGpJP8tLKONzMPEypK9QfNfvA/KbljMHgL6VKy96Ix8swMw32FQf8A28Ul+VRHT/sMwi6+/rMzjU7Z/wCNeGOdDcKO8XU+YMkML0vxCbqlZbcqjOPJtJTj9jVUBZkBQfOjK6eJUkL42ke+GAANjukvk5+s/wAGdfjaML7ScQu+rm/+Smp9UsZM4X2ot86UW7men/VmnLaiWMxrkm/Cb7HK+H+ndcN7RaLfFScfcZHH1E2jZG1aeJp+8p3y5ipzDKQRa4t4ifMDTt3ser5sGynetT6qB/aZefOuWs+roMREjJERAREQEREBERAREQEREBERATnHtdFlw7WBs1Qa7j1VNj5To85/7Xad8PSPKrb+ZG/KBxyn7p76upOtsoI52AB4aShqIvobjna3pMOjg2PWVgSO3w8N3rJlKZZQ24nSx33HCY9rP2vVi+36wvdytU4GZwwxI3bpdTDXtcSXbvMMeiBoJIIFUd3fu528ZcpYHzmQdmFhYXHr5jlPPrebf16pmzP4pp4+orKg1RhYavazXvbrWtqdLcZO18QbJe4zMCSoVdVGpJy3J1PmZZwOx3IAZ7EbsoFh/MPyklV2U4XM7lgugVEszEnQaH1nLXmks+ufpPvVvDYaplZyHIdyd5La2AIyMARu37uE9XBAZOoOpf5TdgQbhjcg6kEcrTbcLhMqhdbW0Bt1Ry7R3zDx1PKpC7+PYJxvn1aZmb8aTiWCVGZFVerYdZ0IYHU3XKMtt4PHymC3uzSYs3+qL3AZSD1rXAW4Iy68NfXYNpYLML7uZ337Zr6bNJY6nmdNCN2s9OPN7T6z6et+VrzUszEzErUwJsj4QWOXmQT2qSD6gyNrbPt3z051OOes9vYi0F+E6x7F63VxCcsh9Xv9ROY18MwGk3z2NVMuIqofmps3k1P8zN51348/mzyOxxETTzEREBERAREQEREBERAREQEREBNI9q6XwSn7NemfPMPxm7zUfacl8BUP2Xpt/wBwPxgcI2dRJcWPWGoPO28HnwmwLgioBKixJ0G+314yPSorEMtwRppzv1vPXzmzYQHJd9QbBdwOnE8949Z59978j1eGxGhCCCu61rHXvkxRwOZVbLbN6S0tMXkhgHVSesN268479uPZ49TrMw+zeBEzU2XYX5S9hqynfoPpJCm6236Tz/7a1rX9LOAwoOlt36vJmjhyOEs4YrvEladRbTWc51+vL5N6l/GNiBYXMg9quqU3qkNlRWchdSQovpu1mxVbMLTSfaDj3p0lSnYh8xqCwJ90Cqt/xLOqnsaS4l3OM43yVVSRXRXzGzqGAIsbMLi44b5YqbPIDWAJIsOV98s9B9pPVLUatuogam3EopCMAfmC3TXfqLyltroce9MMwGUUwMoyGojPfrDXcdO3MN83fFc6sdc+Waz1qe1cU9HMgHzMSbaqS5uL27v0Ze2a3vVIuTYZrsqqAPvBjfxtM7pdTOQqHWxZyQBcrZ2tdu38BNc/bqSUGdLJVBKhQzX3Drb9QeXYZ1xbZ8ZuvW9SOJwpvbKTxFuI5i28Sa6BJ7rH0+HvFqJ4hGf+2ahsraFdygWooF7ZXcKH1F1seJ04TfMMBTxOEqWy/wCuiW00NRWS2n3p0zbNSVnepvFvHVoiJ6XiIiICIiAiIgIiICIiAiIgIiICaz7Q1vs7E9iA+TqZs0g+mdPNgcSP/Zf0F/wgcJwNMKWPBgSR27wfrMp67sApawXcATx1158Jg0NootgUBtvJLm/HS1rb+3dM5tqUXTqJZ7qo32I1zMdLbso778Jw3uS/ZXTM+fqV2NRdrlX1G4MQQeejaGSOIRiesAp7AF+ksYPErUTJ11sENgtrEG1gNNN4uN5MlTTDAWyk2uQL5hfsAt3zl49TWvsej/jPlWMJUZTYm/rJZHJ3kW5bvWR6IBw1/W6ZVNm0AGpG88OE63wytzzWT6lqWKygDnPH6UYdGKMxJDBWsjlUJ0GZgLLrpv4GR1eln6p1DCxt6yL2dtVVxlaiSrKUpALYae7UsL8DcMx7lE5/xZl4xrfW/wBTEqOM1DpgP9HFVSSQ1BKK7uoXqkMR3lqZP3BLtfbSvUNLI+YBDcZLMGBsdSDYWbW3ymYPSav/APyYgEkD3bbuemU+BsfCM+L71LZxFdDsVkYI+bOj5kJWxyV6ZBU67r00bymLTSr+1+7sAiv7tWt8Dg5qNRzvdr5AdbHN2zPoVQmJIN71cLTbsDU2y+Bsy+Uj8YWOKLs5CiphWsAbkOQl79jU14cZ0knb/pzsskn/AGx+leNcg5lyNc5lFjrmPzD4gd4vra17TRagLN3za+lGIDsbk3Btz3AWv4TD2JsxXzlh8jZeHW0sR3R4syTq7vbxibIQhlswaxvlPZa4IPf9ZulbaIDUTa2WvRqX+44P0kdV2ShCXsrgC7LxawufOR+0cUoDLfr5gN26w4d9x5Rcz2lJrmbH0fEs4epmVWHzKreYvL07vOREQEREBERAREQEREBERAREQEjtv082Grrzo1B/0MkZj45M1NxzRh5qRA+WXpk9a2mUa8ASsYOoLhXOl+BtY94lVXElLpvBC6cAVMw6LXcG9u2Y1nvetSt4wuPJCKgc3+Ilbmx0UL1rDcbi2ua82hnCKoYjM5sSbDMb6C51JmgbKx5Diztpz1U8OPDT1mZtbEPUdbtqFYix6oADNYG+nG/fOOMzN+Ol1bGzY3b2HoJcuGexyooL9YXFnsQAAd4vea3Q6bV1a5926kaaBN3KwFj338ZquKyjQcON/wBaTC/V51ktvbWO/wCGzbS6QvUcOXcHkGtl7NNOXCR6bYrK+dahDKdCTrY6Hfw0kSEN/wDMuBGJHVJzaDfqez0kmJPyHW3p0tb3i1CAQECn5b2N81twObv4y7tjpkKtB6NOmc1QFWZmzZVNr23C51HZNUxGDKMEzZn3FQDoeVyNZ5UwLhM9jl590es+RfatgxHSxi1FyiF0DhrZgCjhRqNwIKg6cp5jukjVXGUGwFr9VbgMri9uRW81VkPEHyM9QtfjYCP45Pw9qk6ldnZixubX8eB1kp0e2rkYo/wPYX+ZTa4I7DoPKQCYgDVgDobans32l+g6XuLg9uv1l5xO10CrYi6up0vowOms1naFVGYZVGYFrtuvfTTn6S9gr3001uCOFxrYjhqZiYplaoddwAW1jcAdm49k1qd5Umv19B9Fq+fB4ZudClfvyAGS81j2dVs+zsOeSsv8jsv4TZ5pkiIgIiICIiAiIgIiICIiAiIgJSwuLSqIHyhtWmfeMApNmcaAnc7CYiUXB1VvAazadsbMrLiKw92QPe1LXekumdraM4ImA+FdbZlUXNtKlJ+F9QjkjdvtLw6x8IoFr3F7g3Btr4SQYLrc3spAsd5I08JZGHPMev5T39mPMev5TPpF9kbi6JO4HwmTsqmtNgzoWPE8hysZlDCnmJUMKeYl4dZr1aAOZAim1rimwbuJC7pjNigGX3S9Yah6miq2uoUXJ7O2Ufsp5+k9/Zf4vSS5lPZe2HRp0nDu4Z3uMxIsgPMX+I/45ySfEUD1Ay5deF737fyEh2wIIsW9P8wmzwNzfX85Znh1KVnoMtjkuEUX33y2NvSRdTAUTTYZlzl+qdQVXU+X5jlK/wBkH2vSP2QfaPlLcynsgXwLMAbWO4jT+Yd/5zwYFwNN/K4+t5P/ALIOZj9kXmfST1OovZ71EIDA2IsesPA75cxVPrZkN+86+MzzhV5n0mdsrYtOs1nxPuALamkagN+ZVlK+RHbLyI6f7I6t8AFO9KtRfOz/AN03maz0H2AuDoMiVhWDuamYABdVVbKATpZRx33mzSBERAREQEREBERAREQEREBERASO23tAYfD1Kx+RSQObHRV8WIEkZG7a2WuJpGm/MMOIDDcSOI7IHzltVeuXaxLklid5cm5J7TvmEjAMpuBY+c3rpps4Iq0qgCMH6p3IDlNibfIRcX4eBmhVqZQlWWxBsQd4M0M47STmZT+9U5mR9v4R5XnoU/ZHlAz/AN8J2x++U5NMEA8vS0a93lAzv3wv2Gnn74H2G/XhMSzf/hEqFNjqNbb7cOFzwgZP74P2D6/lH73fhTMsLRcgkAkDfodLmw1HbKkwjkXAJAIG4nU3058D5QLv71f/ANP1/wAyn951PsL5/wCZSMOxW9tOzsF++DQsoa62P8SnjbdeB6do1fsr5zw46t/BKnw9rdZSDbcwNr668t3dKzhrWuRY8esR3aDu84Fn9qrc0/XhHvcRcMrDQ7hx7DpqJl0sICbEkE/D1WOY8t3f5SWwWzr9UBi9r5CoFwDqVYsL/hcXtAbJ29j6LA0WCai4t1W+8Doe/fO9bO2lSxC5qTBhxG4qeTDeDOSDZbgCyOygEkZKYfmMp96bm+liR38Jm7MoFT71KrUyDbQqGHNXBJt2qw8JB1yJr2zOkCkBavVOgzfK3afsn07pPg31GokFUREBERAREQEREBERATy8SkmBVeeFpQWlLNAh+lPR6ljaRpvow1RxvRvy7Jw7aux6qVDQqqfeoDkPB0XWwPGw3Hlpyn0KXkLt/YyYhVNgKiXKNyuCCp7Dc90so+essqptbQhCLg3ZAb24E39NLyZ2ls+p12qJ7uqjslRPt5RnDpzupuediZElLyjxRYncQeQvbW9tx0/W6eqxDEKx62hGUDee1bWvwnqORpmIvx+0OR4XlZVerYsSP4dO4ZFuRCKsrB2Clhe+ZTZTwvyBAPdzsJ5WQq+mYXOoz3F951DHXlzt2XFdIZTZ1OmoNmU67rjSxG8ECxHrWlXMStmYbyHsQDa+gZ9V0uLkEHdfcAsVFs9xpc63YlSdOOuvK9+Ws9qIA98qgX3/ABKT/wAl0PfpwPCXqVQZrBRrvz2XgBmFg2nMcDYi2uahPiHVCE3FycwbS2lkFja9999/bAo0V79UC+/ePK4I0/zwldJrMSCMpvfICw7bjMbbu7nwhHyv8QQHkCR272Fj5X7eCi4DasQCDf3diN3zA3t+PlAUidbFrEfKpK+IIOt/DuMuUVOQ/GV0sQEy6/wleQ3bvUTyhoxvnN+IFte0ZbeI38bW1v4dLFro7X1BVihv2jMBft/K5C5TpXQAq9ifiVsykaalc9wv0HHTSWakQqOygZdc7VXekNNC9wSB/ECLfatvj6FLKpDoSp+bPlIve7PlzW+8PG1rnPGGyqoqU6KroRWViMhBBVnyJYcywsNNQOIZtTKKgLrh0BsOs4rU30Omqqabdt7Hjc2tfqilcMtTCoVG9EzELvIPXyldNxGnCx1mFiqmQqrVsOtvhrIhBv2jOMult6lDbUDQTLq7SutkxKMRuyU8w7Rpn387eB3QL9Hadv8Ada97ZWSjUFNsx0sTcg2todNdCZO7L25UpWy3KH5XBXyB1U/q009KrZbI2I1JLU2pf6bX06rLTyoDv7bm4BOla51K5ExBUAXR6gAW2uhFSx5ZSCDpYqN5XXdmbZp1xYHK3FG0bw5jukpOOUsQ5NyrJaxBzKWv/wACbec2XZXTJk6tcF14MLZx3jc3oe+Tg36JiYHHU6y56bhx2bweRG8HsMy5AiIgIiICeT2eGB4ZQTKiZbYwPGMtM09ZpaZoBnll3njvLDvAiukOyFxC5lsKi3ytproRYnxNjwvynKNt7MKMWCkC/WXih7uU7M7yB2/ssVgWUDOB4OPsnt5H9CwciZLixlKvY2ZgOTaC/iTbN5fW0ntDA5CSAQL2IN7qeUxMsosVKgv1Xzd+S57NL2MOym1i4a2+z892ijTnrMkCAIFqo6sir7khxe7hizG/3nyi3AgA85SFutjTW/PQE+V7frWZAEqAgWKasOC+f1suvfp3S6qOfs/yuf7peS4NxMym9++BiJQc/MR3Io/qvMinhjxZ/NF/pAmSJWsCmnhV4hm+9Uc+l7TJpYWmpBFGkCN3UBt3cpSplatAkcKyfKiqeIAA8rbxMnPIe8v08Xwbz/Pl37u6BnM8ts8oZ5aZ4FTvMWo89d5i1HgXcNtKpQbPScow4jcexgdGHYZvfR72gUqlkxNqT7g//hse0n4D36dvCcyrPMRkZvhVm+6pP0gfR4NxcagyucP6Mbcx+EIVEZ6PGnUIQAfwMxBT1HZOy7OxRq00co1MsobKxUst+BKkg+BmRlxEQE8M9nhgW2lpzLzCW3SBjuZYdpkOkx3pmBju8sO8vVEMxKimBQ7yw7w95ju0oiNvbLFQF0HXtqPtj/7TQa9HKez1HYZ093mudIdk5wXQdf5lHzjmP4vr3yjTwJ6BPEa8uAQKQJUBPSbb5T7xeY+sC4BK1mOcSo4/rxlVLE5tEUueSgsfJQYEgjy6st4fZ+Kf4MNU8UKf12krhuie0H+RU+8y/wBoaBiIhlwU+ZAk3h/Z7im+Osq9wZvqVklh/Zmu96znuCr+BPrHRqWZBvceBB+k8NZBxJ9PradDw/s+wq/EGf7zsfQECSmG6K4VPhopfnlW/na8nRymniQdEF+wa+gvMqlga7/DSf8AkYerWnX6eApruQCXlpAbgPKOjlFHoxiX+Qj7zKP6QZIUOg1Q/FkH87/UgTpU9jo0bD9BgN7gfdVV/AmSlLojSHxFm72b8CJssSCIodHqCaimt+4H6yURABYSuICIiAiIgeWnmWVRAoKyk0xLsQMdqAlt8GDMyIEa2zlMxn2ODJuIGtVOj5O4zEqdHH4TcIgci6Qez+u7h8PlVi3XDEqp5sCAbHmON799rD+y/Et8damvcrP9SJ2KJejmWF9lCD48RUP3Qij6E+sl8N7NcEvxKzn+J3PoCB6TdokEBheiGCp6ph6YPPIt/O15LU8DTUWVFHhMmIFsUwNwHlLkRAREQEREBERAREQEREBERAREQP/Z" // Replace with your product image URL
// //               alt="Product"
// //               style={{ width: "100%", height: "auto" }}
// //             />
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <Typography variant="h5" gutterBottom>
// //               Product Name
// //             </Typography>
// //             <Typography variant="body1" gutterBottom>
// //               Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// //             </Typography>
// //             <Divider style={{ margin: "12px 0" }} />
// //             <Typography variant="h6" gutterBottom>
// //               Price: $99.99
// //             </Typography>
// //             <Button variant="contained" color="primary">
// //               Add to Cart
// //             </Button>
// //           </Grid>
// //         </Grid>
// //       </Paper>
// //     </Container>
// //   );
// // };

// // export default Products;
// import React from 'react';
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   makeStyles,
// } from '@mui/material';

// const products = [
//   {
//     id: 1,
//     name: 'Smartphone',
//     description: 'The latest smartphone with high-resolution camera.',
//     price: '$699',
//     image: '/images/smartphone.jpg', // Add image path
//   },
//   {
//     id: 2,
//     name: 'Laptop',
//     description: 'Powerful laptop with fast processor and large storage.',
//     price: '$999',
//     image: '/images/laptop.jpg', // Add image path
//   },
//   // Add more products as needed
// ];

// const useStyles = makeStyles((theme) => ({
//   productCard: {
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.2s',
//     '&:hover': {
//       transform: 'scale(1.05)',
//     },
//   },
//   productImage: {
//     objectFit: 'cover',
//     height: '200px',
//   },
//   productPrice: {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//   },
// }));

// const Products = () => {
//   const classes = useStyles();

//   return (
//     <Grid container spacing={3}>
//       {products.map((product) => (
//         <Grid item key={product.id} xs={12} sm={6} md={4}>
//           <Card className={classes.productCard}>
//             <img
//               src={product.image}
//               alt={product.name}
//               className={classes.productImage}
//             />
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 {product.name}
//               </Typography>
//               <Typography variant="body2">{product.description}</Typography>
//               <Typography className={classes.productPrice}>
//                 {product.price}
//               </Typography>
//               <Button variant="contained" color="primary">
//                 Add to Cart
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default Products;
import React from 'react';
import { useParams } from 'react-router';
import productsData from './products.json';
import NavBar from './navBar.jsx';

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  // console.log("###########################")

  return (
    <div>
      <NavBar/>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}

export default ProductDetail;
