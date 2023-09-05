import { useEffect, useState } from "react";
import ArticleList from "./ArticleComponents/ArticleList";
import ArticleSearch from "./ArticleComponents/ArticleSearch";

function Home() {

    const [search, setSearch] = useState('')
    const [topics, setTopics] = useState('')

    return (
        <div>
            <ArticleSearch />
            <ArticleList />
        </div>
    )
}

export default Home