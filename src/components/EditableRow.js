import React from "react";

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return(
        <tr>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Identite national"
                name="Identite_nationale"
                value={editFormData.Identite_nationale}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Nom"
                name="Nom"
                value={editFormData.Nom}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Date de naissance"
                name="Date_de_naissance"
                value={editFormData.Date_de_naissance}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="pays naissance"
                name="Pays_de_naissance"
                value={editFormData.Pays_de_naissance}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="pays de residence"
                name="Pays_de_residence"
                value={editFormData.Pays_de_residence}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="sexe"
                name="Sexe"
                value={editFormData.Sexe}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="etat civil"
                name="Etat_civil"
                value={editFormData.Etat_civil}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="langue"
                name="Langue"
                value={editFormData.Langue}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
            
        </tr>
    )
}

export default EditableRow;






































