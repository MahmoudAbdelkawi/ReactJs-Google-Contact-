import React from 'react';
import Styles from './Nav.module.css'
import { Link } from 'react-router-dom'

const Nav = ({ contacts, delContact, setShow, editContact, handleIdx }) => {
    const fun = (idx) => {
        editContact(idx)
        setShow(true)
    }
    return (
        <>
            {
                <>
                <div className={`${Styles.container} d-flex justify-content-between pt-3`}>
                    <div>
                    <span className={`${Styles.size} bg-dark text-white d-inline-block text-center rounded rounded-circle me-3  `}>N</span>
                    <span> name </span>
                    </div>
                    <div className={`pt-2`}>
                    <span>phone </span>
                    </div>
                        <div className={`bg-success text-white d-inline-block text-center rounded rounded-circle pt-2 pb-2 ps-3 pe-3 ${Styles.btn}`} onClick={()=>setShow(true)} >+</div>
                    </div>
                    
                    {
                        
                        contacts.map(contact => (
                            <div key={contact.key} className={`${Styles.container} d-flex justify-content-between pt-3`}  >
                            <div>
                                <Link to={`/Contact`} onClick={ ()=>handleIdx(contact.key) } className={`${Styles.size} bg-dark text-white d-inline-block text-center rounded rounded-circle me-3`}>{contact.name[0] ? contact.name[0].toUpperCase():""}</Link>
                                    <span>{ contact.name }</span>
                            </div>
                            <div className={`pt-2`}>
                                <span>+20 { contact.phone }</span>
                            </div>
                                <div >
                                <div className={`bg-warning text-white d-inline-block text-center rounded rounded-circle pt-2 pb-2 ps-3 pe-3 me-1 ${Styles.btn}`} onClick={()=>(fun(contact.key))} >e</div>        
                                    
                                <div className={`bg-danger text-white d-inline-block text-center rounded rounded-circle pt-2 pb-2 ps-3 pe-3 ${Styles.btn}`} onClick={()=>delContact(contact.key)} >x</div>
                            </div>
                        </div>
                        ))
                }
                </>    
            }
        </>
    );
}

export default Nav;
