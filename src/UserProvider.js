import React , { createContext , useState, useEffect } from "react";
import axios from "axios";
import { API, Auth } from "aws-amplify";
import { useAuthenticator } from '@aws-amplify/ui-react'

export const UserContext = createContext({})

export function UserProvider ({ children, ...props }) {
    const [ activeUser, setActiveUser ] = useState({
        user: '', password: ''
    })
    const [ userList, setUserList ] = useState([])

    const { user, signOut } = useAuthenticator((context) => [context.user])
    const get = ({ path }) => {
        return API.get("JavaAPI", `${path}`);
    }
    const [devCenters, setDevCenters] = useState([])

    useEffect(()=>{
        (async()=>{
            const response = await axios.get(`http://ec2-44-211-246-137.compute-1.amazonaws.com/actuator/health`)
            console.log('HealthCheck:', response.data, 'Status:', response.status)
            const responseMetrics = await axios.get(`http://ec2-44-211-246-137.compute-1.amazonaws.com/actuator/metrics`)
            console.log('Metrics:', responseMetrics)
            // let session = Auth.currentSession()
            // let responseDevCenter = await axios.post('http://ec2-44-211-246-137.compute-1.amazonaws.com/users/getDevCenterAll', {DevCenter:"Baton Rouge"}, {headers: {Authorization: `Bearer ${(await session).getAccessToken().getJwtToken()}`}})
            // console.log(responseDevCenter)
            // setDevCenters(responseDevCenter.data)
            const responseValidate = axios.post(`http://ec2-44-211-246-137.compute-1.amazonaws.com/authenticate/validate`, {
                email: 'joseph.bourgeois@teamsparq.com',
                Pword: 'testP@55',
              })
            console.log('Validate:', responseValidate)
            const { token }  = await responseValidate.then(result => result.data);
            console.log('Validate2:', token)
            
            let responseDevCenter = await axios.post('http://ec2-44-211-246-137.compute-1.amazonaws.com/users/getDevCenterAll', {DevCenter:"Baton Rouge"}, {headers: {Authorization: `Bearer ${token}`}})
            console.log('DevCenter', responseDevCenter)

            let responseUserInfo = await axios.post('http://ec2-44-211-246-137.compute-1.amazonaws.com/users/getUserByEmail', {
                "practiceArea": "string",
                "DevCenter": "string",
                "TimeZone": "string",
                "firstName": "string",
                "lastName": "string",
                "middleName": "string",
                "email": "vincent.bradbury@teamsparq.com",
                "phoneNumber": "string",
                "graduated": true,
                "isActive": true,
                "isAdmin": true,
                "isManager": true,
                "graduationDate": "2023-03-22T23:25:56.485Z",
                "CognitoUserName": "string"
              }, {headers: {Authorization: `Bearer ${token}`}})
            console.log('UserInfo', responseUserInfo)

        })()
    }, [user])

       return (
        <UserContext.Provider value={{ get, activeUser, setActiveUser, userList, setUserList, devCenters }}>
            {children}
        </UserContext.Provider>
    )
}