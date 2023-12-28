import React, { Component } from 'react'
import { Form, Field} from "formik"
function Register3(props) {
     return (
      <div>Register User
             <Form>
                <label> Name </label>
                <Field name="name"/>
<span style={{color:'red'}}> {props.errors.name} </span>
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
 
      </div>
    )
  }
export default Register3;
