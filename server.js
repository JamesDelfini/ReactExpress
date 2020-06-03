const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Jezzely', lastName: 'dela Cruz'},
        {id: 2, firstName: 'Jaymark', lastName: 'Jairi'},
        {id: 3, firstName: 'Najla', lastName: 'Butucan'}
    ]

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));