import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { getUser } from "../../services/userService"

import UserForm from '../../components/UserForm'

export default function EditUser () {
   const [user, setUser] = useState()
   const {id} = useParams()

   useEffect(() => {
      if(id){
         getUser('', id).then((response) => {
            setUser(response.data)
         }).catch((error) => {
            console.log(error)
         })
      }
   },[id])

   return (
      <>
         <UserForm 
            user={user} 
            title="Edit user" 
            id={id}
         />
      </>
   )
}