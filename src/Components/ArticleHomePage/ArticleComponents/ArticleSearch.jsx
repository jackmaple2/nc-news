import { useState, useEffect } from "react"
import axios from 'axios';
import { getArticles } from "../../../utils/axios";



function ArticleSearch(setSearch) {


    // function onChange(event) {
    //     setSearch(event.target.value)
    //     console.log(value)
    // }

    function onSearch() {
        const searchDocument = document.getElementById('searchArticles')
        setSearch(searchDocument.value)
        console.log('search', searchTerm)
    }

    return (
        <div className="articleSearch-div" >
            <input type='text' id='searchArticles' placeholder="Search Articles" ></input>
            <button onClick={ onSearch } >Search</button>
        </div>
    )
    
}

export default ArticleSearch


// value={search} onChange={onChange} 