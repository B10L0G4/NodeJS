const express= requeire ('express');

const app = express();
const get ('/', (req, res ) => {
  res.send('Hi There');
});

app.listen(3003 , () => {
  console.log('Listening on port 3003');
})