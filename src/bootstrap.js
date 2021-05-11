const { appRouter } = require('./routes');
router = require('./routes');
require('dotenv').config({ path: '../.env' });

const PORT = process.env.SERVER_PORT;

module.exports = (app, router) => {

    appRouter(router);
    app.listen(PORT, ()=>{ 
        
        console.log(`server running on port: ${PORT}`);
    
    });

}; // end module.exports