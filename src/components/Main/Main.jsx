import React ,{useState} from 'react'
import Modal from '../Modal/Modal'
import Nav from '../Nav/Nav'


export default function Main({ handleIdx , handleContacts }) {

  let [contact , setContact] = useState(
    [
      
    ]
  )
  let [show, setShow] = useState(false)
  const delContact = (idx) => {
    setContact(contact.filter(e => idx !== e.key))
  }
  const editContact = (idx) => {
    let x = contact
    x[idx] = contact[contact.length - 1]
    x[idx].key = idx
    setContact(x.slice(0,contact.length - 1))
  }
  const addContact = (input) => {
        input['key'] = contact.length 
        setContact([...contact, input])
        setShow(false)
        handleContacts([...contact, input])
    }
    
    
  return (
    <>
        <Nav contacts={contact} setShow={setShow} addContact={addContact} editContact={editContact} handleIdx={ handleIdx } delContact={delContact} />      
        {show && <Modal addContact={addContact}/>}
    </>
  )
}
