const request = require ("request");//llamnar al modulo request
const apiOptions = {
  server: "http://localhost:3000/"
}

if (process.env.NODE_ENV === "production") {
  apiOptions.server = "https://ladivina-69d1bc0b8c8c.herokuapp.com/"
}

const getEvent = (req, res, body) => {
  const event = {
    title: 'Sample Event',
    imageUrl: 'https://via.placeholder.com/300x200.png',
    description: 'This is a sample event description.',
  };

  res.render('eventos' );
};


const eventos = (req, res, next) => {
  const path = 'api/events/';
  const requestOptions = {
    url: `${apiOptions.server}${path}`, 
    method: 'GET',
    json: {}
  };
  request(
    requestOptions, // opciones de request
    (err, response, body) => { // callback: error, respuesta, cuerpo
    if(err) {
      console.log('Error: ', err.message);
    } else if (response.statusCode === 200) {
      res.render('eventos' , { eventos: body });
    } else {
      console.log(response.statusCode);
      console.log(response.statusMessage);
      console.log(body);
    }
  });
}

const deleteEvent = (req, res, next) => {
  const path = `api/events/${req.params.eventid}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'DELETE',
    json: {}
  };
  request(
    requestOptions, // opciones de request
    (err, response, body) => { // callback: error, respuesta, cuerpo
    if(err) {
      console.log('Error: ', err.message);
    } else if (response.statusCode === 200) {
      console.log('Evento eliminado');
      res.redirect('/evento2');
    } else {
      console.log(response.statusCode);
      console.log(response.statusMessage);
      console.log(body);
    }
  });
}
const getSingleEvent = (req, res, next) => {
  const path = `api/events/${req.params.eventid}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions, 
    (err, response, body) => { 
    if(err) {
      console.log('Error: ', err.message);
    } else if (response.statusCode === 200) {
      res.render('evento' , { evento: body });
    } else {
      console.log(response.statusCode);
      console.log(response.statusMessage);
      console.log(body);
    }
  });
};

const renderForm = (req, res, body) => {
  const path = `api/events/${req.params.eventid}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions, 
    (err, response, body) => { 
    if(err) {
      console.log('Error: ', err.message);
    } else if (response.statusCode === 200) {
      res.render('formulario' , { event: body });
    } else {
      console.log(response.statusCode);
      console.log(response.statusMessage);
      console.log(body);
    }
  });
};

const editEvent = (req, res, next) => {
  const path = `api/events/${req.params.eventid}`;
  const postdata = {
    nombre: req.body.nombre,
    imagen: req.body.imagen,
    genero:req.body.genero,
    ubicacion:req.body.ubicacion,
    fecha: req.body.fecha,
    detalle: req.body.detalle,
    precio: req.body.precio
    
  };
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'PUT',
    json: postdata
  };
  request(
    requestOptions, 
    (err, response, body) => { 
    if(err) {
      console.log('Error: ', err.message);
    } else if (response.statusCode === 200) {
      res.redirect(`/evento2/evento/${req.params.eventid}`);
    } else {
      console.log(response.statusCode);
      console.log(response.statusMessage);
      console.log(body);
    }
  });
};

const renderFormCreate = (req, res, body) => {
  res.render('creareventos');
}

const createEvent = (req, res, next) => {
  const path = 'api/events';
  const postdata = {
    nombre: req.body.nombre,
    genero:req.body.genero,
    imagen: req.body.imagen,
    ubicacion:req.body.ubicacion,
    fecha: req.body.fecha,
    detalle: req.body.detalle,
    precio: req.body.precio
  };
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'POST',
    json: postdata
  };
  request(
    requestOptions, 
    (err, response, body) => { 
    if(err) {
      console.log('Error: ', err.message);
    } else if (response.statusCode === 201) {
      res.redirect(`/evento2`);
    } else {
      console.log(response.statusCode);
      console.log(response.statusMessage);
      console.log(body);
    }
  });
};

module.exports = {
  eventos,
  getEvent,
  deleteEvent,
  getSingleEvent,
  renderForm,
  editEvent,
  renderFormCreate,
  createEvent
}