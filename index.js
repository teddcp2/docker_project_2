const express = require("express");
const redis = require("redis");

const client = redis.createClient({
  host: "redis",
  port: 6379,
});

const app = express();

// echo redis errors to the console
client.on("error", (err) => {
  console.log("Error " + err);
});

// setting the number of visitors
client.set("visitorsCount", 0);

app.get("/", (req, res) => {
  const keyRequired = "vistorsCount";

  return client.get(keyRequired, (err, data) => {
    if (res) {
      client.set(keyRequired, Number(data) + 1);
      //   return res.json({ count: data });
      return res.send(`Number of visitors >> ${data}`);
    }
  });
});

app.listen(80);

//https://medium.com/tech-tajawal/introduction-to-caching-redis-node-js-e477eb969eab
