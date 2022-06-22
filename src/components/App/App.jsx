import React ,{useState} from 'react'
import Modal from '../Modal/Modal'
import Nav from '../Nav/Nav'
import Main from '../Main/Main'
import ShowContact from '../showContact/ShowContact'
import { Route, Routes } from 'react-router'



export default function App() {

  let [idx, setIdx] = useState()
  let [state , setState] = useState()
  const handleIdx = (index) => {
    setIdx(index)
  }

  const handleContacts = (contact) => {

    setState(contact)
      
  }
  return (
    <>
      <Routes>
        <Route element={<Main handleIdx={handleIdx} idx={idx} handleContacts={ handleContacts } />} path='/' />
        <Route element={<ShowContact index={idx} contact={ state } />} path={`/Contact`} />
      </Routes>
    </>
  )
}
