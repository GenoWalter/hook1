import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './page/home'
import NewsPage from './page/news'
import ContactPage from './page/Contact'

function app() {
    return (
        <div className="app">
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </nav>

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/news' element={<NewsPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes> 
        </div>
    );
}

export default App;