

import React from 'react'



export default function NewsItem(props) {
  return (
    <div>
      <div className="card" >
        <div>
          <span className="translate-middle badge rounded-pill bg-danger" style={{ position: 'relative', top: '0px', left: '80%' }}>
            {(props.source === null) ? 'Unknown' : props.source}
          </span>
          <img src={(props.imageUrl !== null) ? props.imageUrl : ("../images/news.jpeg")} style={{ height: '180px' }} className="card-img-top" alt="news" />
        </div>
        <div className="card-body" style={{ color: (props.mode === 'dark' ? 'white' : 'dark') }}>
          <h5 className="card-title">{props.title !== null ? props.title.slice(0, 45) : props.title}{props.title !== null ? (props.title.length < 45 ? "" : "...") : ""}</h5>
          <p className="card-text">{props.description !== null ? props.description.slice(0, 80) : props.description}{props.description !== null ? (props.description.length < 80 ? "" : "...") : ""}</p>
          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">By <cite title="Source Title">{props.author === null ? 'Unknown' : props.author}</cite></footer>
            <footer className="blockquote-footer">At {new Date(props.publishedAt).toUTCString()} <cite title="Source Title"></cite></footer>
          </blockquote>
          <a
            href={props.newsUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary" style={{ margin: '3px' }}
          >
            Read More
          </a>


        </div>
      </div>
    </div>
  )



}

// NewsItem.defaultProps = {
//     category:'general',
//     pageSize:'6'
// }

// NewsItem.propTypes = {
//   category: PropTypes.string,
//   pageSize: PropTypes.number,
// }



