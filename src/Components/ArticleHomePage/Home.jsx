import { useEffect, useState } from "react";
import ArticleList from "./ArticleComponents/ArticleList";
import ArticleSearch from "./ArticleComponents/ArticleSearch";

function Home() {

    const [search, setSearch] = useState('')

    return (
        <div>
            <ArticleSearch setSearch={setSearch}/>
            <ArticleList search={search}/>
        </div>
    )
}

export default Home