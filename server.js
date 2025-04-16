const express = require('express');
const cors = require('cors');
const careersCsvRoute = require('./routes/careersCsv');

const app = express();
const PORT = 5000;

app.use(cors());
app.use('/api/careers-csv', careersCsvRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
