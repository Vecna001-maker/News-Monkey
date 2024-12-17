import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [totalArticles, setTotalArticles] = useState(0);
    const [page, setPage] = useState(1);

    const updateNews = async () => {
        props.setProgress(10);
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        );
        const data = await response.json();
        props.setProgress(50);
        setArticles(data.articles);
        setTotalArticles(data.totalResults);
        props.setProgress(100);
    };

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.category]);

    const fetchMoreData = async () => {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        );
        const data = await response.json();
        setArticles((prevArticles) => prevArticles.concat(data.articles));
        setPage(page + 1);
    };

    return (
        <div
            style={{
                backgroundColor: props.mode === 'dark' ? 'black' : 'white',
                width: '100%',
            }}
        >
            <div className="container">
                <h2
                    style={{
                        color: props.mode === 'dark' ? 'white' : 'black',
                        paddingTop: '40px',
                        marginTop: '30px',
                    }}
                    className="text-center"
                >
                    <u>News-Monkey</u> : <u>Top headlines</u>
                </h2>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalArticles}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => (
                                <div key={element.url} className="col-md-4 my-3">
                                    <NewsItem
                                        source={element.source.name}
                                        author={element.author}
                                        publishedAt={element.publishedAt}
                                        title={element.title}
                                        description={element.description}
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
}
