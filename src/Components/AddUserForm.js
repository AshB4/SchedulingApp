import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import vector from '../images/Sparq-Logo-White.png'
import { ButtonComp } from '../Components/ButtonCustom';
import TextBoxComp from '../Components/TextBoxComp'
import { Auth } from 'aws-amplify'
import { styleGuideColors } from '../utilities';
import { useFormik,
   Formik,
    Form, 
    Field,
    ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Pill,
} from '@material-ui/core';
import DatePicker from './DatePicker';



const validationSchema= Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phoneNumber: Yup.string().matches(/^\d{10}$/, 'Invalid phone number')
    .required('Required'),
  graduationDate:
    Yup.string().when('isStudent', {
      is: true,
      then: Yup.string().required('Required'),
    password: Yup.string('Enter your password.')
    .min(8, 'Your password should be a minimum of eight characters.')

    })
});

const Practice = [".Net", "Backend", "Business Analyst","Java","Product","QA"]
const TimeZone =  ["Atlantic (AST)","Eastern (EST)","Mountain (MST)","Pacific (PST)","Alaska (AKST)","Hawaii (HAST)"]
const Studio =["Albuquerque","Augusta","Baton Rouge","Buffalo","Fort Wayne","Jonesboro","Mobile","Oklahoma City"]
const Mgr =["mgr1", "mgr2","mgr3"]



const AddUserForm = ({ handleFormSubmit }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    isStudent:false,
    graduate: '',
      Studio: '',
      Practice: '',
      TimeZone: '',
      Mgr: '',
};
  const [hasGraduated, setHasGraduated] = useState(false);
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, 2));
    if (handleFormSubmit) {
      handleFormSubmit(values);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
<div>
     {/* <form onSubmit={formik.handleSubmit}> */}
      <>
      <div style={{
  width: '788px',
  height: '998px',
}}> <>
      <div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  // left: '272px',
  // top: '69px',
  fontFamily: 'barlow, sans-serif',
  // margin: 0,
  // flex: 'none',
  // order: 1,
  // flexGrow: 1,
  padding: 0,
  color: styleGuideColors.gray[900]
}}>
  <p style={{
    width: '239px',
    height: '40px',
    fontStyle: 'bold',
    fontSize: '36px',
    fontWeight: 700,
    letterSpacing: '-1px',
    textAlign: 'left',
    fontFamily: 'barlow, sans-serif',
    flex:'none',
    padding: 0,
    // verticalAlign: 'top',
    marginLeft: 24
  }}>
    Add New User
  </p>
  <p style={{
    fontSize: '20px',
    fontStyle:'bold',
    lineHeight: '24px',
    width: '124px',
    height: '16px',
    textAlign: 'left',
    // verticalAlign: 'top',
    marginLeft: 24,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    padding: 0,
    marginTop: '12px'
  }}>
    All fields required.
  </p>

  <div style={{
  width: '788px',
  height: '1px',
  background: styleGuideColors.gray[300],
  flex: 'none',
  // order: '2',
  alignSelf: 'stretch',
  flexGrow: '0',
}}></div>

      <h3  style={{padding: 0,marginLeft: 24}}>
        Identifying Information</h3>

      </div>

      <div style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '10px',
  color: styleGuideColors.gray[900]
}}>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '364px',
    height: '100px',
    borderRadius: '8px',
    padding: '12px',
    gap: '10px',
    padding: 24
  }}>
    <label htmlFor="firstName">First Name</label>
    <TextBoxComp
      id="firstName"
      name="firstName"
      placeholder="First Name"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.firstName}
    />
  </div>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '364px',
    height: '100px',
    borderRadius: '8px',
    padding: '12px',
    gap: '10px',
  }}>
    <label htmlFor="lastName">Last Name</label>
    <TextBoxComp
      id="lastName"
      name="lastName"
      placeholder="Last Name"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.lastName}
    />
  </div>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '364px',
    height: '100px',
    borderRadius: '8px',
    padding: '12px',
    gap: '10px',
    padding: 24
  }}>
    <label htmlFor="email">Email</label>
    <TextBoxComp
      id="email"
      name="email"
      placeholder="E-mail"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
  </div>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '364px',
    height: '100px',
    borderRadius: '8px',
    padding: '12px',
    gap: '10px',
    
  }}>
    <label htmlFor="phoneNumber">Phone Number</label>
    <TextBoxComp
      id="phoneNumber"
      name="phoneNumber"
      type="numbers"
      placeholder="555.867.5309"
      onChange={formik.handleChange}
      value={formik.values.phoneNumber}
    />
  </div>
</div>


<div style={{ display: 'flex',
alignItems: 'left',
flexDirection: 'column',
 marginBottom: '12px' }}>
  <h3 style={{ color: styleGuideColors.gray[900],
    fontWeight: 'bold',
     fontSize:'20px',
     lineHeight: '24px',
      // textAlign: 'left',
      //  verticalAlign: 'top',
        letterSpacing: '-1px',
        padding: 24 }}>
          Student Information</h3>
  <div style={{ display: 'flex',
   alignItems: 'center',
   marginLeft: '12px',
    marginTop: '8px',
     }}>

{/* []Add Graduate? text above yes/no chips
    []Add padding in between yes/no chips] */}

    <div style={{ marginRight: '12px' }}>
    <div  style={{ display: 'flex',
alignItems: 'center',
// flexDirection: 'column',
  // position: 'absolute',
  width: '364px',
  height: '12px',
  fontWeight: '600',
  fontSize: '12px',
  fontFamily: 'barlow,sans-serif',
  marginLeft: 24,
  marginBottom: 8
}}>Graduated?</div>

<div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  }}>
    <ButtonComp
  variant="outlined"
  text="Yes"
  onClick={()=>{
    console.log("clicked yes")
    setHasGraduated(true)
  }}
  style={{
    width: '65px',
    height: '40px',
    borderRadius: '30px',
    padding: '10px 20px',
  }}
/>
</div>
<ButtonComp
  variant="outlined"
  text="No"
  onClick={()=>{
    console.log("clicked no")
    setHasGraduated(false)
  }}
  style={{
    width: '65px',
    height: '40px',
    borderRadius: '30px',
    padding: '10px 20px',
  }}
/>
    </div>
     {(hasGraduated === true) ? (<div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      flexDirection: 'column', 
      justifyContent: 'space-around', }}>
      <DatePicker
        id="GRADUATION DATE"
        name="graduationDate"
        placeholder="mm/dd/yyyy"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.graduationDate}
        onSubmit={handleSubmit}
      /></div>) : (<></>)}
    
  </div>
</div>

<div>
<h3 style={{
  width: '129px',
  height: '24px',
  fontFamily: 'Barlow,Sans-serif',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: '-1px',
  color: styleGuideColors.gray[900]
}}>Interal Profile</h3>

<div style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '10px',
 }}> 

{/* []Center drop down text
    []Change to dev studio? for Tara */}

<div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '364px',
    height: '100px',
    borderRadius: '8px',
    padding: '12px',
    gap: '10px',
  }}>
<label htmlFor="Development Studio">Development Studio</label>
    <Formik
     initialValues={{ dropdownOption: '', Studio: '' }}
     onSubmit={values => console.log(values)}
     >

     {({ values, handleChange }) => (
       <Form>
         <FormControl variant="outlined" fullWidth>
          <InputLabel>Development Studio</InputLabel>
         <Select
    name="devStudio"
    labelId="devStudio-label"
    id="devStudio"
    value={values.devStudio}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    validationschema={validationSchema}
    onSubmit={handleSubmit}
    >
{Studio.map(option => (
               <MenuItem key={option} value={option}>
                 {option}
               </MenuItem>
             ))}
  </Select>
         </FormControl>
       </Form>
     )}
   </Formik>
   </div>

   <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '364px',
    height: '100px',
    borderRadius: '8px',
    padding: '12px',
    gap: '10px',
  }}>

<label htmlFor="Time Zone">Time Zone</label>
                <Formik
     initialValues={{ dropdownOption: '', TimeZone: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ values, handleChange }) => (
       <Form>
         <FormControl variant="outlined" fullWidth>
          <InputLabel>Time Zone</InputLabel>
         <Select
    name="timeZone"
    labelId="timeZone-label"
    id="timeZone"
    value={values.timeZone}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    validationschema={validationSchema}
    onSubmit={handleSubmit}
>
{TimeZone.map(option => (
               <MenuItem key={option} value={option}>
                 {option}
               </MenuItem>
             ))}
  </Select> 
         </FormControl>
       </Form>
     )}
   </Formik>
   {/* </div> */}
   </div></div>

   <div style={{
    display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '10px',
  }}>
     <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '364px',
    height: '100px',
    borderRadius: '8px',
    padding: '12px',
    gap: '10px',
  }}>

   <label>Practice Area</label> 

<Formik
     initialValues={{ dropdownOption: '', Practice: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ values, handleChange }) => (
       <Form>
         <FormControl variant="outlined" fullWidth>
          <InputLabel>Practice Area</InputLabel>
         <Select
    name="practiceArea"
    labelId="practiceArea-label"
    id="practiceArea"
    value={values.practiceArea}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    validationschema={validationSchema}
    onSubmit={handleSubmit}
>
{Practice.map(option => (
               <MenuItem key={option} value={option}>
                 {option}
               </MenuItem>
             ))}
  </Select>
         </FormControl>
       </Form>
     )}
   </Formik>
   </div>

   <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '364px',
    height: '100px',
    borderRadius: '8px',
    padding: '12px',
    gap: '10px',
  }}>
<label>Manager</label>
<Formik
     initialValues={{ dropdownOption: '', Mgr: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ values, handleChange }) => (
       <Form>
         <FormControl variant="outlined" fullWidth>
          <InputLabel> Manager</InputLabel>
         <Select
    name="manager"
    labelId="manager-label"
    id="manager"
    value={values.manager}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    validationschema={validationSchema}
    onSubmit={handleSubmit}
>
{Mgr.map(option => (
               <MenuItem key={option} value={option}>
                 {option}
               </MenuItem>
             ))}
  </Select>
         </FormControl>
       </Form>
     )}
   </Formik>
   </div></div></div>
   {/*[] Move Save button up so it visible without scrolling- Need V - colab */}
          </> </div> </>
          </div>
          )
          };
 export default AddUserForm;
