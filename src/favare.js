import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

//favorite list page => show all element that added to favorite
class Falist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: [],
      title:''
    };
  }
  //got all element from db
  getadd() {
    axios
      .get('http://localhost:5000/favorite')
      .then((result) => {
        console.log(result.data);
        const fava = result.data;
        this.setState({ fav: fava });
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
deleteHandel(i){
  // i.preventDefault();
	axios.delete(`http://localhost:5000/removeOne`)
	.then(res => console.log(res.data));
  }
  render() {
    return (
      <div id='zerinmidel'>
        <button onClick={this.getadd.bind(this)} class='favpage'>
          {' '}
          List Favorite{' '}
        </button>
        <Link to='/auth/Search'>
          <button class='favpage_'>HOME</button>
        </Link>
        <br />
        <br />
        <hr />
        <br />
        {/* itterate on array which come from db after saved it in state */}
        {this.state.fav.map((element, index) => {
          return (
            <div key={index} id='bigDiv'>
              <div class='txt'>
                Title: {element.title} <br></br>
                Authors: {element.author}
                <br></br>
                publishedDate:{element.dateOfPublication}
                <br></br>
              </div>
              <br />
              <div>
              <a href={element.link} target="_blank" >

                <img src={element.img} alt='new' class='sora' />
                </a>
                <br />
                <br />
                <button         
                  className='zer'
                  onClick={this.deleteHandel.bind(this,index)}
                >
                  {' '}
                  Remove{' '}
                </button>
                <br />
                <br /> <hr />
              </div>
            </div>
          );
        })}
        <br />
      </div>
    );
  }
}

export default withRouter(Falist);
