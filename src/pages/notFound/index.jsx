import { useNavigate } from "react-router-dom"
import style from './NotFound.module.css'

const NotFound = () => {
  const navigate = useNavigate()
   return (
     <section className={style.notFound_container}>
       <h1>NotFound: 404</h1>
       <p>Page not found!!</p>
       <button onClick={() => navigate("/")}>Go Home!</button>
     </section>
   )
 }
 
 export default NotFound