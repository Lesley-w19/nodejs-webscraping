import sql from "mysql";
import { getScrapData } from "./scrap.js";

//create connection
export const connection = sql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//connect to the database
connection.connect((err) => {
  if (err) {
    console.log("could not connect to database");
    console.log(err);
    return;
  }
  console.log(" Connected successfully");
});

// getScrapData();

export const addProducts = async () => {
  try {
    const data = await getScrapData();

    //   console.log("this is the ", data);

    connection.query(
      "INSERT INTO zuriProducts (title, image, price) VALUES ?",
      [data.map((item) => [item.title, item.image_src, item.price])],
      (err, result) => {
        if (err) {
          console.log(err);
          console.log("Inserted sunccessfully...");
        }

        connection.end();
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// get the products from db
export const getProducts = (req, res) => {
  const sqlQuery = "SELECT * FROM zuriProducts ";
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    // res.send(result);
    res.json(result);
  });
};

export const getProduct = (req, res) => {
  let product_id = req.params.id;
  const sqlQuery = "SELECT * FROM zuriProducts WHERE id = ?";

  connection.query(sqlQuery, [product_id], (err, result) => {
    if (err) {
      console.log(err);
    }

    // res.send(result);
    res.json(result);
  });
};

export const searchProduct = (req, res) => {
  let product_id = req.params.id;
};

// export const showProducts = () => {
//   return `  <div class="product">
//   <img src="" />
//   <div class="title"></div>
//   <div class="price"></div>
// </div>
//   `;
// };
