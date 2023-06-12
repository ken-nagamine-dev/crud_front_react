import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Header from './components/Header'
import Footer from './components/Footer'
import UserPage from './pages/user'
import NewUser from './pages/user/newUser'
import EditUser from './pages/user/editUser'
import NotFound from './pages/notFound'
import Home from './pages'

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main_container'>
        <BrowserRouter>
          <Routes>
            <Route path='/users' element={<UserPage />} />
            <Route path='/users/new' element={<NewUser />} />
            <Route path='/users/:id' element={<EditUser />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
