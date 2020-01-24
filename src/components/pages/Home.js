import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Header title='Thank you for visiting' subtitle='' image={image} />
      </div>
    );
  }
}

export default Home;
