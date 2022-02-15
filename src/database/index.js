const mongoose = require('mongoose')



class Database {
  constructor() {
    this.mongo()
  }


  mongo() {
    this.mongoConnection = mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      function (err) {
        if (err) {
          console.error('Failed to connect to mongo on startup - retrying in 5 sec');
          setTimeout(this.mongo(), 5000);
        }
      }
    )
  }
}

module.exports = new Database();