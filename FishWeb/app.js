const initSqlJs = require('sql.js');

const username_input = document.getElementById('username');
const password_input = document.getElementById('password');

initSqlJs().then(SQL => {
    // Create or open the database
    const db = new SQL.Database();

    // Create a table for demonstration purposes
    db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT);");

    // Insert a sample user (for testing purposes)
    db.run("INSERT INTO users (username, password) VALUES (?, ?);", ['testuser', 'testpass']);

    function login() {
        var username = username_input.value;
        var password = password_input.value;
        const query = "SELECT * FROM users WHERE username = ? AND password = ?";

        const result = db.exec(query, [username, password]);

        if (result.length > 0) {
            console.log('Login successful');
        } else {
            console.log('Login failed');
        }
        console.log(result);
    }

    // Attach the login function to a button click event (assuming you have a button with id 'loginButton')
    document.getElementById('loginButton').addEventListener('click', login);
});