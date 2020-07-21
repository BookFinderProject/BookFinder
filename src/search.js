import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Showone from './showone';

//search component
class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      input: ' ',
      title: [],
      books:[],
      searchField:"",
      sort:""
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      searcField: e.target.value,
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') this.handleSubmit();
  }
  handleSubmit(e) {
    e.preventDefault();
    const { input } = this.state;

    // use api google books
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=` + this.state.input)
      // .query({q:this.state.searcField})
      .then((result) => {
        console.log(result.data.items)
        const cleanData = this.cleanData(result);
        const resultArray = result.data.items;
        this.setState({books:cleanData})//me
        console.log(...result.data.items)
        this.setState({ title: resultArray });
        this.setState({ input: '' });
      })
      .catch((err) => {
        console.log('Error------->', err); //console print this error, we solve it by commenting last lines and adding (query)
      });

  }
  clearText() {
    this.setState({ input: '' });
  }

  //sort data to new or old
  handleSort = (e) => {
    console.log(e.target.value)
    this.setState({ sort: e.target.value});
}

  cleanData =( result)=>{
    const cleanedData = result.data.items.map((book)=> {
    if (book.volumeInfo.hasOwnProperty('publishedDate') == false ){
      book.volumeInfo['publishedDate'] = "0000";
    }else if (book.volumeInfo.hasOwnProperty('imageLinks') == false ){
      book.volumeInfo['imageLinks'] = {thumbnail: "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337"};
    }
    return book;
    })
    return cleanedData;
  }
  render() {
    const filteredBooks = this.state.books.sort((a, b) => {
      if(this.state.sort == 'Newest'){
          console.log("in newest")
          return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
      }
      else if(this.state.sort == 'Oldest'){
          return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
      }

    return;
  })
    return (
      <div id='search'>
        <h1 id='header'>
          <span id='wh'> Book </span> <span id='finder'>Finder</span>{' '}
        </h1>
        <div id='links'>
          {/* switch to favorite list */}
          <Link to='/auth/Fav' class='right'>
            <button class='zer'> Favorite </button>
          </Link>

          {/* switch to read later list */}
          <Link to='/auth/read' class='right'>
            <button class='zer'> Read later </button>
          </Link>
        </div>

        <div class='buttonIn'>

          <button
            id='butn'
            onClick={this.handleSubmit.bind(this)}
            class='loginbutton'
          >
            Search
          </button>

          <input
            class='logemailandpassword'
            id='inpt'
            type='search'
            name='input'
            placeholder='Type, auther, book name, subject ...'
            value={this.state.input}
            onChange={this.handleChange.bind(this)}
          />

          <select value={this.sort} onChange={this.handleSort}>
              <option value="" disabled selected>Sort</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
          </select>

        </div>
        <hr id='khat' />

        <Showone titles={filteredBooks} />
      </div>
    );
  }
}

export default withRouter(SearchBooks);
