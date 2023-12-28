import React, { Component } from 'react'
import {Formik, Form, Field, FieldArray} from "formik"
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
},
friends:[]}}
        onSubmit={(values) => console.log(values)}>
                         {({ values }) => (
            <Form>
                <label> Name </label>
                <Field name="name"/>
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
                <FieldArray

     name="friends"

     render={arrayHelpers => (

       <div>

         {values.friends.map((friend, index) => (

           <div key={index}>

             {/** both these conventions do the same */}

             <Field name={`friends[${index}].name`} />

             <Field name={`friends.${index}.age`} />

 

             <button type="button" onClick={() => arrayHelpers.remove(index)}>

               -

             </button>

           </div>

         ))}

         <button

           type="button"

           onClick={() => arrayHelpers.push({ name: '', age: '' })}

         >

           +

         </button>

       </div>

     )}

   />

            </Form>
                         )}
        </Formik>

      </div>
    )
  }
}
