const { appRouter } = require('./routes');
router = require('./routes');
//require('dotenv').config({ path: '../.env' }); uncomment for local env

//const PORT = process.env.SERVER_PORT; uncomment for local env
const PORT = process.env.PORT || 80; // to build on heroku

module.exports = (app, router) => {

    appRouter(router);
    app.listen(PORT, ()=>{ 
        
        console.log(`server running on port: ${PORT}`);
    
    });

}; // end module.exports