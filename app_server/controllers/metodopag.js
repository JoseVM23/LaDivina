exports.getEvent = (req, res) => {
  const eventData = {
    id: 1,
    name: 'Event Name',
    description: 'Event Description',
    image: '/path/to/event/image.jpg',
  };

  res.render('events/event', { eventData });
};

exports.postBuyTickets = (req, res) => {
  const paymentMethod = req.body.paymentMethod;
  console.log(`Buying tickets for Event ${eventData.id} with ${paymentMethod}`);
  res.redirect('/event');
};