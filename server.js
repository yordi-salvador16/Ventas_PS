<<<<<<< HEAD
const { app } = require('./app');
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
=======
const { app } = require('./app')

const port = 8080

if (require.main === module) {
  app.listen(port, () => console.log(`listening on port ${port}`))
}

module.exports.app = app
>>>>>>> 1ecd58c5451cd352fe307ed55576bace15517c13
