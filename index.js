const app = require('./app');

const { connectToMongoDB } = require('./query');

//console.log(process.env.RUNNING_PORT);

const port = process.env.RUNNING_PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectToMongoDB();
});