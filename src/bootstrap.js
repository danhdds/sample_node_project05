const PORT = process.env.PORT || 5000; // 5000 on local env | 8080 prod.

const { appRouter } = require('./routes');

router = require('./routes');

module.exports = (app, router) => {

    appRouter(router);
    app.listen(PORT, ()=>{ 
        
        console.log(`server running on port: ${PORT}`);
    
    });

}; // end module.exports