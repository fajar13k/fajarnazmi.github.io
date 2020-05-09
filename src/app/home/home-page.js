import React, { Component } from 'react';
import HomeComponent from '../../module/home/home';
import { Helmet } from 'react-helmet';

export default class HomePage extends Component {
  render() {
    return (
      <HomeComponent>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HomeComponent>
    );
  }
}