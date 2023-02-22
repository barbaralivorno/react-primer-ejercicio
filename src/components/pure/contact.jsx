import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h1>Nombre y Apellido: {contact.nombre + ' ' + contact.apellido}</h1>
            <h2>Email: {contact.email}</h2>
            <h3>Estado: {contact.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h3>
        </div>
    );
};

ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact),
};


export default ContactComponent;
