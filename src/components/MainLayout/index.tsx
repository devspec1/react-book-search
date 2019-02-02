import React from 'react';
import BookList, { Props as BookListProps } from '../BookList';
import Pagination, { Props as PaginationProps } from '../Pagination';
import SearchForm, { Props as SearchFormProps } from '../SearchForm';
import './MainLayout.scss';

type StatusProps = {
  loadingBooks: boolean;
  error?: string;
}
type Props = StatusProps & BookListProps & SearchFormProps & PaginationProps;

const MainLayout = (props: Props) => (
  <div className="main-layout">
    <div className="main-layout__status">
      {props.loadingBooks && <h2>Loading...</h2>}
      {props.error && <h2>{props.error}</h2>}
    </div>
    <div className="main-layout__books">
      <BookList
        books={props.books}
        onBookClick={props.onBookClick}
        onBookLike={props.onBookLike}
      />
    </div>
    <div className="main-layout__search">
      <SearchForm search={props.search} />
    </div>
    <div className="main-layout__pagination">
      <Pagination
        currentPage={props.currentPage}
        pageCount={props.pageCount}
        showPage={props.showPage}
      />
    </div>
    <div className="main-layout__info">
      <h2>This is still a work in progress</h2>
      For now, I would ask to please consider the technical aspects involved,
      like:
      <ul>
        <li>Server side rendering</li>
        <li>Code Splitting</li>
        <li>NodeJS / Express API</li>
        <li>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{' '}
          best practices
        </li>
        <li>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>{' '}
          (static and dynamic imported)
        </li>
        <li>
          <a
            href="https://redux-observable.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux-Observable
          </a>{' '}
          middleware, powered by RxJs (with dynamic imported epics)
        </li>
        <li>
          <a
            href="https://github.com/alexnm/re-ducks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Re-ducks
          </a>{' '}
          modular architecture
        </li>
        <li>CSS Grid</li>
        <li>
          <a
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Typescript
          </a>
        </li>
        <li>
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sass
          </a>{' '}
          styles
        </li>
      </ul>
    </div>
  </div>
);

MainLayout.displayName = 'MainLayout';

export default MainLayout;