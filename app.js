import React, { Component } from 'react';

import BookList from '../containers/books_list';
import BookDetail from '../components/book_detail'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail/>
      </div>
    );
  }
}
