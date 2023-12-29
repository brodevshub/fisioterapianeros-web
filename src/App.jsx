import { Routes, Route } from 'react-router-dom'
import { Toolbar } from './components/common/toolbar/Toolbar.jsx'
import { Landing } from './components/landing/Landing.jsx'
import { OurCompany } from './components/ourCompany/OurCompany.jsx'
import { Tecnics } from './components/tecnics/Tecnics.jsx'
import { Contact } from './components/contact/Contact.jsx'
import { News } from './components/news/News.jsx'

export function App() {
    return (
        <>
            <Toolbar></Toolbar>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/nosotros' element={<OurCompany/>}/>
                <Route path='/tecnicas' element={<Tecnics/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/noticias' element={<News/>}/>
            </Routes>
        </>
    )
}