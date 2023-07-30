var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "empnode"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // var sql = "INSERT INTO employee (empid,name, salary) VALUES (102,'jay',60000)";
    // con.query(sql, function(err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    // });

    var sql2 = "SELECT * FROM employee";
    con.query(sql2, function(err, result) {
        if (err) throw err;
        console.log("List of employee");
        console.log(result);
    });

    SelectAllElements = () => {
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM employee ', (error, elements) => {
                if (error) {
                    return reject(error);
                }
                console.log(elements, "hello");
                return resolve(elements);
            });
        });
    };
    const result = SelectAllElements();
    //console.log(result);


});