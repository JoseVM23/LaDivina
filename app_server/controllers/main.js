// Estos son controllers

const index = (req, res, next)=>{ 
    res.render('index', { title: 'Mi primera app MERN v1',materia:'DW3' });//renderiza una vista index con el objeto jason titulo y materia
  }
  const usuarios = (req, res, next)=>{ 
    res.render('usuarios', {});//renderiza una vista index con el objeto jason titulo y materia
  }

  module.exports = {
    index, 
    usuarios
  }