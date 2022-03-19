class ConnectionService{
     query(qry,callBack) {
        var mysql = require('mysql');

        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database:"react_login"
        });
        con.connect(function(err) {
            console.log(err);
            if (err) throw err;
            console.log("Connected!");
            con.query(qry, function (err, result) {
                console.log(err);
              if (err) throw err;
              callBack(result);
            });
        });
    }
}
module.exports = ConnectionService;
