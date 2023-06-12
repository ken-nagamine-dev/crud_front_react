import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import style from './User.module.css'

import { deleteUser, getUsers } from '../../services/userService'
import TableData from '../../components/TableData'

export default function UserPage () {
   const [userList, setUserList] = useState([])
   const navigate = useNavigate()

   useEffect(() => {
      getUsers().then((response) => {
         setUserList(response.data)
      })
   },[])

   const handleDelete = (id) => {
      if(confirm('Do you want to delete this user?')){
         deleteUser('', id).then(() => {
            setUserList(userList.filter( user => user.id !== id))
         }).catch(error => {
            console.log(error)
         })
      }
   }

   return (
      <section className={style.user_container}>
         <h1 className={style.users_title}>Users</h1>
         <button onClick={() => navigate('/users/new')} className={style.btn}>New User</button>
         <TableData userList={userList} handleDelete={handleDelete} />
      </section>
   )
}