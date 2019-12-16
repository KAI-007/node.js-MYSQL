const mysql=require("mysql");

const DB={
    host:"localhost",
    port:3306,
    user:"test",
    password:"666666",
    database:"test"
}

const DBConnection=mysql.createConnection({
    host:DB.host,
    user:DB.user,
    port:DB.port,
    password:DB.password,
    database:DB.database,
    multipleStatements:true 
});
DBConnection.connect();

module.exports.DBConnection=DBConnection;