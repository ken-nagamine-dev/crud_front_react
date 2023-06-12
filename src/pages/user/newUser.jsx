import {useState} from 'react'

import UserForm from '../../components/UserForm'

const initialUser = {
   name: "",
   email: "",
   password: ""
}

export default function NewUser () {
   const [user] = useState(initialUser)

   return (
      <>
         <UserForm 
            user={user} 
            title="New user"   
         />
      </>
   )
}