import React, { Component } from "react";
import Newsitem from "./NewsItem";
import PropTypes  from 'prop-types'
export default class News extends Component {
static defaultProps = {
  country: 'in',
  pageSize: 5 ,
  category:'sports'
}
static propType ={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}




  articles = [];
  constructor() {
    super();
    console.log("This Is News Items");
    this.state = {
      articles:[],
      page : 1
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=58be4e4f3fdf4da287835558b161154e&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({ articles: parsedData.articles });
    
  }
  prevpage = async () => {
    console.log("pre");
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=58be4e4f3fdf4da287835558b161154e&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json();
    this.setState({
      page : this.state.page -1,
      articles: parsedData.articles
    })
  };
  nextpage = async() => {
    console.log("Next");
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=58be4e4f3fdf4da287835558b161154e&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json();
    this.setState({
      page : this.state.page +1,
      articles: parsedData.articles
    })
  };
  render() {
    return (
      <div className="container my-3 ">
        <div className="text-center"><h1>Todays Sports News</h1></div>
        <div className="row">
          {this.state.articles.map((elm) => {
            return (
              <div className="col-md-4" key={elm.url}>
                <Newsitem
                  title={elm.title}
                  description={elm.description}
                  imgurl={elm.urlToImage}
                  infourl={elm.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} className="btn btn-dark btn-primary" onClick={this.prevpage}>
            &laquo; Previous
          </button>
          <button disabled={this.state.page +1 > Math.ceil(this.props.pageSize)} className="btn btn-dark btn-primary" onClick={this.nextpage}>
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}
