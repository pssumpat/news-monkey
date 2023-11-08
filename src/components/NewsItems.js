import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { urlToImage, title, content, url, publishedAt, author, source } = this.props;
    return (
    <div className="my-3">
        <div className="card">
            <div>
            <span className="position-absolute badge rounded-pill bg-danger" style={{right:'0'}}>{source}</span>
            </div>
            <img src={urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content.length>180?content.slice(0,180)+"...":content}</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(publishedAt).toGMTString()} </small></p>
            <a href={url} target="_blank" rel="noreferrer"  className="btn btn-dark">Read News</a>
            </div>
        </div>
      </div>
    );
  }
}
