import react from 'react'
import {   BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import './App.css'
import Home from './Components/ArticleHomePage/Home';
import IndividualArticleById from './Components/IndividualArticlePage/ArticleById';

function App() {

  return (
    <div className='App-div'>
      <Router>
        <Header />
      <Routes >
        <Route path='/articles' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/articles/:article_id' element={<IndividualArticleById />} />
      </Routes>
      </Router>
    </div>
      
  )
}

export default App
