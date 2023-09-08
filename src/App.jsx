import react from 'react'
import {   BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import './App.css'
import Home from './Components/ArticleHomePage/Home';
import ArticleIdPage from './Components/ArticleByIdPage/ArticleIdPage';
import CommentsPage from './Components/CommentsPage/CommentsPage';
import User from './Components/UserPage/User';

function App() {

  return (
    <div className='App-div'>
      <Router>
        <Header />
      <Routes >
        <Route path='/articles' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/articles/:article_id' element={<ArticleIdPage />} />
        <Route path='/articles/:article_id/comments' element={<CommentsPage />} />
        <Route path='/users' element={<User />} />
      </Routes>
      </Router>
    </div>
      
  )
}

export default App
