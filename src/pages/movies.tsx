import React from 'react';
import data from '../MovieData.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieData = data.MovieData;

class Head extends React.Component {
  render() {
    return (
      <div className="text-center">
        <br />
        <h1 className="text-info">The Joel Hilton Movie Collection</h1>
        <br />
        <p>Enjoy watching!</p>
      </div>
    );
  }
}

const divStyle = {
  width: '60%',
};

function MovieList() {
  return (
    <>
      <table className="table table-striped mx-auto" style={divStyle}>
        <thead className="">
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {MovieData.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function Collection() {
  return (
    <div>
      <Head />
      <br />
      <MovieList />
    </div>
  );
}

export default Collection;
