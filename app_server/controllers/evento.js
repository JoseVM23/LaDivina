exports.getEvent = (req, res) => {
  const event = {
    title: 'Sample Event',
    imageUrl: 'https://via.placeholder.com/300x200.png',
    description: 'This is a sample event description.',
  };

  res.render('events/event', { event });
};

exports.purchaseTickets = (req, res) => {
  res.send('Purchasing tickets...');
};