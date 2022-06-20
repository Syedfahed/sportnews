import React, { Component } from 'react'

export default class NewsItem extends Component {
3  
  render() {
    let {title,description,imgurl,infourl} = this.props
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
  <img src={imgurl}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={infourl} className="btn btn-dark btn-primary">Read More</a>
  </div>
</div>
       
    </>
    )
  }
}
