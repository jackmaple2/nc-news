import { useState, useEffect } from "react"

function ArticleSearch(setSearch) {

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