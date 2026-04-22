
import Student from './component/Student.jsx'
import FavouriteStudent from './component/FavouriteStudent.jsx'
import AddStudent from "./component/AddStudent.jsx"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ListContextProvider from './component/ListContextProvider.jsx'
function App() {
  return (
    <div>
      <BrowserRouter>
        <ListContextProvider>
          <div className='bg-black text-white text-2xl font-bold flex gap-6 px-4 py-2 '>
            <Link to="/" className='hover:underline'>Student</Link>
            <Link to="/favouritestudent" className='hover:underline'>Favourite Student</Link>
            <Link to="/addstudent" className='hover:underline'>Add Student</Link>
          </div>

          <Routes>

            <Route path='/' element={<Student />}></Route>
            <Route path='/favouritestudent' element={<FavouriteStudent />}></Route>
            <Route path='/addstudent' element={<AddStudent />} />

          </Routes>
        </ListContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
