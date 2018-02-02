angular.module('ContactosApp')
  .factory('contactosService', [function() {

    var contactos = [{
        nombre: 'Eva Madrid',
        email: 'yo@dominio.com',
        tel: '123456789',
      },
      {
        nombre: 'María',
        email: 'maria@example.com',
        tel: '543216789',
      }
    ];

    return {
      lista: function() {
        return contactos;
      },
      ver: function(id) {
        console.log(contactos[id] || false)
        return contactos[id] || false;
      },
      borrar: function(id) {
        return contactos.splice(id, 1).length ? true : false;
      },
      crear: function(contacto) {
        return contactos.push(contacto);
      },
      editar: function(id, contacto) {
        contactos[id] = contacto;
      }
    };
  }])
