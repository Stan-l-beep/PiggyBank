const addRoutes = require('./add_routes');


module.exports = function(app, db) {  
    addRoutes(app, db);  // Other route groups could go here, in the future
};