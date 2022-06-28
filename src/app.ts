import express from 'express';
import { geolocationRoutes } from './routes/geolocationRoutes'

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log('Server is up and running on port:', PORT);
});

app.use('/api', geolocationRoutes);
