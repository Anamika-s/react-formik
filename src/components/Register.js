import React, { Component } from 'react'
import {Formik, Form, Field} from "formik"

import * as Yup from "yup"
const UserSchema = Yup.object().shape(
    {
        name:Yup.string().required("Name is requied").min(10,"Min 10 characters are needed")

    }
)
export default class Register extends Component {
  render() {
    return (
      <div>Register
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

        onSubmit={(values) => console.log(values)}>
            <Form>
                <label> Name </label>
                <Field name="name"/>
                <span style={{color:'red'}}> errors.name </span>
                <br/>
                
                <label> Address </label>
                <Field name="address"/>

                <br/>
                <label> Password </label>
                <Field name="password" type="password"/>

<br/>
<label> DOB </label>
                <Field name="dob" type="date"/>
                <br/>

                <label> Gender </label>
                Male <Field name="gender" value="male" type="radio"/>
                Female <Field name="gender" value="female" type="radio"/>
                
                <br/>

                <label> About </label>
                <Field name="about" as="textarea"/>
                <br/>
                <label> Qual </label>
                <Field name="qualification" as="select">
                    <option value="G"> GRaduate </option>

                    
                    <option value="UG"> Under GRaduate </option>
                    
                    <option value="PG"> Post GRaduate </option>
                </Field>
                <br/>
                <label> SOcial ID </label>
                <Field name="social.facebook" tyep="text"/>
                
                <Field name="social.twitter" tyep="text"/>
                <br/>                
                <button type='submit'> Register </button>
            </Form>
        </Formik>

      </div>
    )
  }
}
