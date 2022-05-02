import './App.css';
import Header from "./components/header/Header";
import BookList from "./components/books/BookList";
import Categories from "./components/categories/Categories";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
    return (
        <Router>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path={'/'} element={<BookList />} />
                    <Route path={'/books'} element={<BookList />} />
                    <Route path={'/categories'} element={<Categories />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
