const {
    Client } 
    = require('pg')
    const client = new Client({
    user:'znquvpiy',
    host:'motty.db.elephantsql.com/',
    database:'znquvpiy',
    password:'5drshur0rS9C98sMu6pTEdvFSwypzigY',
    port:'5432'
    });
    teste=async () => {
        await client.connect
    }
    teste()
