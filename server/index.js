const express = require('express');
const port = process.env.port || 4260;
const app = express();
const path = require('path');
const destinationDirectory = path.join(__dirname,'../dist/fullecommerce');
var morgan = require('morgan')


app.use(morgan('dev'));

//hosting from dist folder
app.use(express.static(destinationDirectory));
console.log(`hosting form ${destinationDirectory}`);

//serving single index.html as it is a single page application
app.get('*',(req, res)=>{
  res.sendFile(path.join(__dirname));
});
console.log(`we are serving from index.html`);

//initializing app and listen to the port
app.listen(port, ()=>{
  console.log(`serving from port ${port}`);
})
