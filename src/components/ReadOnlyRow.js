import React from 'react';

const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick})=>{
    return(
        <tr>
            <td>{contact.Identite_nationale}</td>
            <td>{contact.Nom}</td>
            <td>{contact.Date_de_naissance}</td>
            <td>{contact.Pays_de_naissance}</td>
            <td>{contact.Pays_de_residence}</td>
            <td>{contact.sexe}</td>
            <td>{contact.Etat_civil}</td>
            <td>{contact.Langue}</td>
            <td>
                <button type="button"
                onClick={(event) =>handleEditClick(event, contact)}
                >
                    Edit
                </button>

                <button type="button"
                onClick={(event) =>handleDeleteClick(contact.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;