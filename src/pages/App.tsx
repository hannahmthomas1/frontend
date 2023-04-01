import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends React.Component {
  render() {
    return (
      <div className="text-center">
        <br />
        <br />
        <br />
        <h1 className="text-info">The Joel Hilton Movie Collection</h1>
        <br />
        <img src="joelhilton.jpg" alt="Joel Hilton" width="500"></img>
        <br />
        <br />

        <p>
          Welcome! On this site you will find the complete movie collection of
          Joel Hilton. You can also find information about his podcast,
          "Baconsale".
        </p>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default Home;
