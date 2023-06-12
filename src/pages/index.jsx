import style from './Home.module.css'
import { useNavigate } from "react-router-dom";

export default function Home () {
   const navigate = useNavigate()
   return (
      <section className={style.home_container}>
         <h1 className={style.title}>Home</h1>
         <button onClick={() => navigate("/users")} className={style.btn}>Users</button>
      </section>
   )
}