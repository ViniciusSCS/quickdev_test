const app = require('./app');

let listener = app.listen(3333, function(){
    console.log(`Listening on port ${listener.address().port}`);
});