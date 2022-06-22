import React  from 'react'
import Styles from './ShowContact.module.css'


export default function ShowContact({ index, contact }) {
  
    
    return (
      <>
        <div className={ `d-flex m-5` }>
          <div className={ `bg-dark text-white d-inline-block text-center rounded rounded-circle ${Styles.siz} ` }>
            {contact[index].name[0] ? contact[index].name[0].toUpperCase():""}
          </div>
          <div className={ `m-2` }>
            <div >
                  { contact[index].name}
                </div>
                <div >
                  { contact[index].phone}
                </div>
          </div>
        </div>
      </>
    )
}
