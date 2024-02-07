import {app} from "./api-gw/index.js";

const port = process.env.PORT_SERVER || 3000;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });