import express, { json } from "express";
import dotevn from "dotenv";

// database connection
import DatabaseCon from "./config/databaseConnnect.js";

// routes
import listRoutes from "./routes/admin/listingRoute.js";
import useRoutes from "./routes/users/userRoutes.js";
import authRoute from "./routes/authenticationRoutes.js";

dotevn.config();

const server = express();
const port = process.env.PORT || 4000;

server.use(json());
server.use("/api", listRoutes);
server.use("/api", useRoutes);
server.use("/api", authRoute);

try {
  if (DatabaseCon()) {
    console.log();
    server.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    });
  }
} catch (err) {
  console.log("falied", err);
}
