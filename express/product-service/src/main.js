async function bootstrap() {
  const express = require("express");
  const app = express();

  const port = 3000;

  app.get("/products", (req, res) => {
    return res.json({message: "OK"});
  });

  app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
  });
}

bootstrap();
