import React from 'react';
import ContactComponent from '../pure/contact';
import { Contact } from '../../models/contact.class';


const ContactListComponent = () => {

    const newContact = new Contact('Juan', 'Perez', 'juanperez@gmail.com', false);

    return (
        <div>
            <ContactComponent contact= {newContact}></ContactComponent>
        </div>
    )

}


export default ContactListComponent;
