import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
   if (err) {
      console.error(err);
      return;
   }
   console.log(`Server running on port ${PORT}`);
});
