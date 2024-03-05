

import React, { useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

export default function News(props) {


  const [articles, setarticles] = useState([]);
  const [totalArticles, settotalArticles] = useState(0);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);



    if (props.category !== '') {
      let a = props.category;
      document.title = (a.charAt(0)).toUpperCase() + a.slice(1, a.length);
    }



  const updateNews = async () => {
    
    
      let a = props.category;
      document.title = a.charAt(0).toUpperCase() + a.slice(1, a.length);
    

    props.setProgress(10);
    console.log("DidMount");

    setloading(true);

    let promise = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`);

    let response = await promise.json();

    props.setProgress(50);

    setarticles(response.articles);
    setpage(page+1);
    settotalArticles(response.totalResults);
    setloading(false);

    props.setProgress(100);
  }

  useEffect(() => {
    
    return () => { 
      updateNews();
    }
  }, [])
  








  // let { apiKey, category, mode } = this.props;

  const fetchMoreData = async () => {

    props.setProgress(10);
    // setloading(true);
    // this.setState({
    //   page : this.state.page + 1,
    // });

    let promise = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`);
    let response = await promise.json();

    props.setProgress(50);

    setarticles(articles.concat(response.articles));
    setpage(page+1);
    settotalArticles(response.totalResults);
    // setloading(false);

    props.setProgress(100);


  }




  return (

    <div style={{ backgroundColor: (props.mode === 'dark' ? 'black' : 'white'), width: '100%' }}>
      <div className='container' style={{ backgroundColor: (props.mode === 'dark' ? 'black' : 'white') }} >
        <div><h2 style={{ color: (props.mode === 'dark' ? 'white' : 'black'), paddingTop: '40px',marginTop:'30px' }} className='text-center'><u>News-Monkey</u> : <u>Top headlines</u></h2></div>


        {(loading === true) ? (<Spinner />):""}




        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalArticles}
          loader={loading === true ? <Spinner /> : null}

        >

          <div className="container">
            <div className='row'>
              {
                (loading === true) ? "" : ((articles.map((element) => {
                  return <div key={element.url} className='col-md-4 my-3'>
                    <NewsItem source={(element.source.name === null) ? null : (element.source.name)} author={element.author} publishedAt={element.publishedAt} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                  </div>
                }))
                )
              }
            </div>
          </div>
        </InfiniteScroll>





        {/* <div className='container' style={{ backgroundColor: (mode === 'dark' ? 'black' : ''), display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px' }} >
              <button disabled={this.state.page <= 1} onClick={this.state.page > 1 ? handleOnClickPrevious : null} type="button" className="btn btn-primary">&larr; Previous</button>
              <button disabled={this.state.page >= Math.ceil(this.state.totalResults / pageSize)} onClick={handleOnClickNext} type="button" className="btn btn-primary">Next &rarr;</button>
            </div> */}

      </div>
    </div>

  )
}


