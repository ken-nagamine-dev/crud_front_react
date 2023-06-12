import { useNavigate } from 'react-router-dom'
import style from './TableData.module.css'
import { MdDelete, MdCreate } from 'react-icons/md'


export default function Tabledata({userList = [], handleDelete}) {

   const navigate = useNavigate()

   return (
      <table className={style.styled_table}>
         <thead>
            <tr>
               <th>Name</th>
               <th>Email</th>
               <th></th>
            </tr>
         </thead>
         <tbody>
            {userList.length > 0 ?
               userList.map((user) => {
                  return (
                     <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className={style.icons_container}>
                           <button onClick={() => navigate(`/users/${user.id}`)} className={style.blue}>
                              <MdCreate />
                           </button>
                           <button onClick={() => handleDelete(user.id)} className={style.red}>
                              <MdDelete />
                           </button>
                        </td>
                     </tr>
                  )
               }) : (
                  <tr>
                     <td colSpan={3} className={style.noInfo}>No information to show!</td>
                  </tr>
               )
            }
         </tbody>
      </table>
   )
}