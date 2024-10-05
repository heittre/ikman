const dotenv = require('dotenv');
dotenv.config();
dotenv.config({ path: '.env.local' });
const express = require("express");
const app = express();
const searchRoutes = require("./route");


const PORT = process.env.PORT || 3000;





app.use(express.json());
app.use("/", searchRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(process.env.CHROME_EXECUTABLE_PATH);
});
