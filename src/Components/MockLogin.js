// import React , { useState , useContext } from "react"
// import {
//     Container,
//     AppBar,
//     Toolbar,
//     Button,
//     TextField,
// } from "@material-ui/core/"
// import { makeStyles } from "@material-ui/styles"
// import { ButtonComp } from "./ButtonCustom"
// import TextBoxComp from "./TextBoxComp";
// import { mainTheme } from "../utilities";
// import { UserContext } from "../UserProvider";

// const useStyles = makeStyles({
//     alert: {
//       color: 'white',
//       backgroundColor:`${mainTheme.palette.error.main}`,
//       borderRadius: 4,
//       padding: '6px 16px',
//       marginTop: '6px',
//       width: '50%',
//       margin: 'auto',
//     },
//     container: {
//       marginTop: '20px',
//       marginBottom: '20px',
//       padding: '0px 0px 20px 0px',
//       backgroundColor: 'white',
//     },
//     div: {
//       marginTop: '20px',
//       display: 'flex',
//       gap: '6px',
//       justifyContent: 'center',
//     },
// })

// export default function MockLogin(props) {
//     const classes = useStyles();
//     const visible = props.mockLoginVisible
//     // console.log(visible)
//     const [ isLoggedIn , setLoginState ] = useState(false)
//     const [ isRegistering , setRegisterState ] = useState(false)
//     const [ user, setUser ] = useState('')
//     const [ password, setPassword ] = useState('')

//     // const [ activeUser, setActiveUser ] = useState({
//     //     user: '', password: ''
//     // })
//     const { activeUser, setActiveUser, userList, setUserList } = useContext(UserContext)

//     // const [ userList, setUserList ] = useState([])

//     // helperFunctions

//     return (
//         <>
//             {
//                 // mock login section - to demo React Context
//                 visible ?
//                 <>
//                     <Container className={classes.container}
//                         maxWidth='sm'
//                         >
//                         <AppBar position="static">
//                         <Toolbar>
//                             <span style={{flexGrow: 1}}>Mock Login Demo Section using Context</span>
//                         </Toolbar>
//                         </AppBar>
//                         <div className={classes.div} >
//                         <div style={{
//                             width: 'fit-content',
//                             margin: 'auto',
//                             display: 'flex',
//                             flexDirection: "column",
//                             gap: '6px'}}>
//                             {/* <TextBoxComp
//                                 placeholder='User Name'
//                                 value={user}
//                                 onChange={e=>{
//                                     console.log(user)
//                                     setUser(e.target.value)}}/> */}
//                             {/* <TextBoxComp placeholder='Password'/> */}
//                             <TextField
//                                 // id="outlined-basic"
//                                 // label="Outlined"
//                                 placeholder="Username"
//                                 variant="outlined"
//                                 value={user}
//                                 onChange={e=>{
//                                     setUser(e.target.value)}} />
//                             <TextField
//                                 type="password"
//                                 placeholder="Password"
//                                 autoComplete="current-password"
//                                 variant="outlined"
//                                 value={password}
//                                 onChange={e=>{
//                                     setPassword(e.target.value)}} />
//                         </div>
//                         </div>
//                         <div className={classes.div} >
//                         {/* <ButtonComp text='LOGIN'
//                             onClick={() => {
//                                 setLoginState(true)
//                                 console.log(isLoggedIn)
//                             }} /> */}
//                         <Button
//                             variant="contained"
//                             color="secondary"
//                             onClick={() => {
//                                 if (isRegistering) {
//                                     // if both textboxes have values
//                                     if (user !== "" && password !== "") {
//                                         // if username is not taken
//                                         const nameList = userList.map((user)=>user.user)
//                                         if (nameList.includes(user)) {
//                                             alert('This username is already taken')
//                                             setLoginState(false)
//                                             setRegisterState(false)
//                                             return
//                                         }
//                                         console.log('register')
//                                         // add user to user list
//                                         setUserList([...userList, {user: user, password: password}])
//                                         // add values to user object
//                                         setActiveUser({user: user, password: password})
//                                     } else {
//                                         setRegisterState(false)
//                                         setLoginState(false)
//                                         return
//                                     }
//                                     // clear textfields
//                                     setUser('')
//                                     setPassword('')
//                                     // stop registering and login
//                                     setRegisterState(false)
//                                     setLoginState(true)
//                                 } else if (!isLoggedIn) {
//                                     // Check credentials to log in
//                                     // first check for empty fields
//                                     if (user !== "" && password !== "") {
//                                         const matchingUser = userList.find((usercred)=> usercred.user === user )
//                                         // if user is not found
//                                         if (matchingUser === undefined) {
//                                             alert('That is not a valid account')
//                                             return
//                                         }
//                                         console.log('here', password, matchingUser.password)
//                                         if (password === matchingUser.password) {
//                                             setLoginState(true)
//                                             console.log('logged in')
//                                         } else {
//                                             alert('That is not a valid account.')
//                                             setUser('')
//                                             setPassword('')
//                                             setLoginState(false)
//                                             return
//                                         }
//                                     }

//                                 } else {
//                                     // log out and clear active user
//                                     setUser('')
//                                     setPassword('')
//                                     setLoginState(false)
//                                     setActiveUser({})
//                                     console.log('not logged in')
//                                 }
//                             }}
//                             >
//                             {
//                                 isRegistering ?
//                                 'Create Account' :
//                                 isLoggedIn ?
//                                 'Log out' :
//                                 'Login'
//                                 }</Button>
//                         </div>
//                         <div className={classes.div} >
//                         {/* <ButtonComp text='No account? REGISTER' type={'textBlue'}/> */}
//                         <Button
//                             color="secondary"
//                             style={{textTransform: "none"}}
//                             onClick={() => {
//                                 // clear textboxes to register
//                                 setUser('')
//                                 setPassword('')
//                                 setLoginState(false)
//                                 setRegisterState(true)

//                             }}
//                         >
//                             No account? REGISTER
//                         </Button>
//                         </div>
//                     </Container>
//                     <p><b>vvv Stored in Mock Demo Component State vvv</b></p>
//                     { `Is Logged in: ${isLoggedIn}, ` }
//                     { `Is Registering: ${isRegistering}, ` }
//                     { `User: ${user}, Password: ${password}, ` }
//                     <p><b>vvv Stored in Context vvv</b></p>
//                     { `The Active User: ${JSON.stringify(activeUser)}, `}
//                     <ul>
//                         {userList.map((user, i)=> (
//                             <li key={i}>{user.user}, {user.password}</li>
//                         )) }
//                     </ul>
//                 </>
//                 :
//                 <></>
//             }
//         </>
//     )
// }

