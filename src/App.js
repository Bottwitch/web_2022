import React, {useState, Fragment} from 'react';
import './App.css';
import data from './mock-data.json';
import {nanoid} from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

function App() {
  const[contacts, setContacts]=useState(data);
  const[addFormData, setAddFormData] = useState({     
        Identite_nationale: "",
        Nom: "",
        Date_de_naissance: "",
        Pays_de_naissance: "",
        Pays_de_residence: "",
        Sexe: "",
        Etat_civil: "",
        Langue: "" 
      })

  const[editFormData, setEditFormData] = useState({
        id: "",       
        Identite_nationale: "",
        Nom: "",
        Date_de_naissance: "",
        Pays_de_naissance: "",
        Pays_de_residence: "",
        sexe: "",
        Etat_civil: "",
        Langue: "" 
      })
  
  const [editContactId, setEditContactId] = useState(null);
  const handleAddFormChange=(event)=>{
        event.preventDefault()
    
        const fieldName = event.target.getAttribute('Nom')
        const fieldValue = event.target.value;
    
        const newFormData = {...addFormData}
        newFormData[fieldName]=fieldValue
    
        setAddFormData(newFormData)
      }

  const handleEditFormChange=(event)=>{
        event.preventDefault()
        const fieldName = event.target.getAttribute('Nom')
        const fieldValue = event.target.value;
    
        const newFormData = {...editFormData}
        newFormData[fieldName]=fieldValue
    
        setEditFormData(newFormData)
      }
      

  const handleAddFormSubmit=(event)=>{
        event.preventDefault()
    
        const newContact= {
          id:nanoid(),
          Identite_nationale:addFormData.Identite_nationale,
          Nom:addFormData.Nom,
          Date_de_naissance:addFormData.Date_de_naissance,
          Pays_de_naissance:addFormData.Pays_de_naissance,
          Pays_de_residence:addFormData.Pays_de_residence,
          Sexe:addFormData.Sexe,
          Etat_civil:addFormData.Etat_civil,
          Langue:addFormData.Langue,
        }
        const newContacts=[...contacts, newContact]
        setContacts(newContacts)
      }

  const handleEditFormSubmit = (event) =>{
    event.preventDefault();

    const editedContact={
      id:editContactId,
      Identite_nationale:editFormData.Identite_nationale,
      Nom:editFormData.Nom,
      Date_de_naissance:editFormData.Date_de_naissance,
      Pays_de_naissance:editFormData.Pays_de_naissance,
      Pays_de_residence:editFormData.Pays_de_residence,
      sexe:editFormData.sexe,
      Etat_civil:editFormData.Etat_civil,
      Langue:editFormData.Langue,
    }

    const newContacts=[...contacts]
    const index=contacts.findIndex((contact)=>contact.id===editContactId)
    newContacts[index]=editedContact

    setContacts(newContacts)
    setContacts(null)
  }

  const handleCancelClick = () =>{
    setEditContactId(null);
  }

  const handleDeleteClick = (contactId) =>{
    const newContacts=[...contacts]
    const index = contacts.findIndex((contact) => contact.id === contactId)
    newContacts.splice(index, 1)
    setContacts(newContacts)
  }


  const handleEditClick = (event, contact)=>{
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues={
      Identite_nationale:contact.Identite_nationale,
      Nom:contact.Nom,
      Date_de_naissance:contact.Date_de_naissance,
      Pays_de_naissance:contact.Pays_de_naissance,
      Pays_de_residence:contact.Pays_de_residence,
      sexe:contact.sexe,
      Etat_civil:contact.Etat_civil,
      Langue:contact.Langue,
    }
    setEditFormData(formValues);
  }
  
  return(
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Identite_nationale</th>
              <th>Nom</th>
              <th>Date_de_naissance</th>
              <th>Pays_de_naissance</th>
              <th>Pays_de_residence</th>
              <th>Sexe</th>
              <th>Etat_civil</th>
              <th>Langue</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact)=>(
            <Fragment>
              {editContactId ===contact.id ? (
                <EditableRow
                editFormData={editFormData}
                handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick}/>

              ):(
                <ReadOnlyRow 
                contact={contact}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}/>

              )}

            </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add contact</h2>
      <form onSubmit={handleAddFormSubmit}></form>
      <form>
        <input type="text" name="Identite_nationale" required="required" placeholder='indetitei national' onChange={handleAddFormChange}/>
        <input type="text" name="Nom" required="required" placeholder='nom' onChange={handleAddFormChange}/>
        <input type="text" name="Date_de_naissance" required="required" placeholder='date naissance' onChange={handleAddFormChange}/>
        <input type="text" name="Pays_de_naissance" required="required" placeholder='pays naissance' onChange={handleAddFormChange}/>
        <input type="text" name="Pays_de_residence" required="required" placeholder='pays residence' onChange={handleAddFormChange}/>
        <input type="text" name="sexe" required="required" placeholder='sexe' onChange={handleAddFormChange}/>
        <input type="text" name="Etat_civil" required="required" placeholder='etat civil' onChange={handleAddFormChange}/>
        <input type="text" name="Langue" required="required" placeholder='langue' onChange={handleAddFormChange}/>
       

        
        <button type='submit'>Add</button>
      </form>
      
      
    </div>
  )
}

export default App;
