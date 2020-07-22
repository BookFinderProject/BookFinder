import React from 'react';
import axios from 'axios';

//showone component => show divs contains result of searching
class Showone extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { titles } = this.props;
    return (
      <div id='s'>
        <div>
          {titles &&
            titles.map((element, index) => {
              return (
                //main div which show the result
                <div key={index} id={`bigDiv-${index}`} class='big-div-item'>
                  <br></br>
                  <div className='txt'>
                    Title: {element.volumeInfo.title}
                    <br />
                    Authors: {element.volumeInfo.authors}
                    <br />
                    Published Date:{element.volumeInfo.publishedDate}
                    <br />
                  </div>
                  <br />
                  <div>
                    {' '}
                    <a
                      href={element.accessInfo.webReaderLink}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <a href={element.volumeInfo.infoLink} target="_blank" >
                      <img
                        src={element.volumeInfo.imageLinks.smallThumbnail}
                                                alt='new'
                        class='sora'
                      />
                      </a>
                    </a>
                    <br />
                    <br />
                    <button
                      class='zeren'
                      onClick={() => {
                        console.log(element.volumeInfo);
                        var a = element.volumeInfo.title;
                        var b = element.volumeInfo.authors;
                        var c = element.volumeInfo.publishedDate;
                        var d = element.volumeInfo.imageLinks.smallThumbnail;
                        var e = element.volumeInfo.infoLink;
                      
                        const data = {
                          title: a,
                          author: b,
                          dateOfPublication: c,
                          img: d,
                          link:e
                        };
                        //add one element to favorite list
                        axios
                          .post('http://localhost:5000/book', data)
                          .then((res) => {
                            console.log(res.data);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      {' '}
                      Add to favorite{' '}
                    </button>
                    <br></br>{' '}
                  </div>
                  
                    <br />
                    <hr />
                  </div>
               
              );
            })}
        </div>
      </div>
    );
  }
}
export default Showone;
