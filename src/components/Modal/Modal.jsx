import { Formik,Field,ErrorMessage } from 'formik'
import React from 'react'
import Styles from './Modal.module.css'
import * as Yup from 'yup';
export default function Modal({ addContact }) {
    
   

    const Form = (props) => {
        return (
            <form className='text-center' onSubmit={props.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name : <Field name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></label>
                    <ErrorMessage name="name"  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Number : <Field type="number" className="form-control" name='phone' /></label>
                    <ErrorMessage name="phone"  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
       )
    }
    const schema = () => {
        let schema = Yup.object({
            name:Yup.string().required("required"),
            phone:Yup.number().required("required"),
        })
        return schema
    }
    const show = (values) => {
        addContact(values)
        addContact(values)
    }
  return (
      <>
          <div className={`${Styles.backDrop} position-fixed bg-dark top-0 start-0 w-100 h-100`}></div>
          <div className={`${Styles.overLay} bg-white position-absolute top-50 start-50 translate-middle rounded rounded-3`}>
            
              <Formik 
                  initialValues={{ name: '', phone: '', }}
                  render={Form}
                  onSubmit={show}
                  validationSchema={schema} 
              />
          </div>
      </>
  )
}
