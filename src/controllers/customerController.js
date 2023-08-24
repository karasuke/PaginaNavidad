const controller = {}; // Objeto vacio

//renderizar index.ejs
controller.index = (req, res) => {
    res.render('index');
};

controller.renderCatalog = (req, res) => {
    res.render('catalog');
};

controller.renderContact = (req, res) => {
    res.render('contact');
};

controller.save = (req, res) => {

    const data = req.body;
    console.log(data);

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
            console.log(customer);
            res.redirect('/');
        });
    });

  
};



module.exports = controller;