import React, { Component } from 'react'
import {Formik} from "formik"
import Register3 from './Register3'
import * as Yup from "yup"

const UserSchema = Yup.object().shape(
    {
        name:Yup.string().required("Name is requied").min(10,"Min 10 characters are needed")

    }
)


export default class EmployeeForm extends Component {
  render() {
    return (
      <div> 
         <Formik initialValues={{name:"", 
        address:"new delhi",
    password:"",
dob :"",
gender:"",
about:"",
qualification:"",
social:
{
    facebook:"",
    twitter:""
}}}
validationSchema={UserSchema}
onSubmit={(values) => console.log(values)}
component={Register3}>
</Formik>
      </div>
    )
  }
}
