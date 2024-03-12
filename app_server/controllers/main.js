const request = require ("request");//llamnar al modulo request

const apiOptions = {
  server: "http://localhost:3000"
}

if (process.env.NODE_ENV === "production") {
  apiOptions.server = "https://"
}


exports.createEvent = (req, res) => {
  res.send('Creating an event...');
};

exports.viewEvents = (req, res) => {
  const events = [
    { id: 1, name: 'Sample Event 1' },
    { id: 2, name: 'Sample Event 2' },
  ];

  res.render('index', { events });
};

exports.viewEvent = (req, res) => {
  res.send('Viewing an event...');
};

exports.purchaseTickets = (req, res) => {
  res.send('Purchasing tickets...');
}; 



module.exports.gethome = (req, res) => {
  res.render('index');
};  