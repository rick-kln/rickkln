import React from 'react';
import Header from './header';
import './layout.css';

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0 1.0875rem 1.45rem',
      }}
    >
      <main>{children}</main>
      <footer
        style={{
          margin: '1.45rem 0 0',
          textAlign: 'center',
        }}
      >
        Made with
        {' '}
        <span role="img" aria-labelledby="love">❤️</span>
        {' '}
        by
        {' '}
        <a href="https://twitter.com/rickkln">@rickkln</a>
      </footer>
    </div>
  </>
);

export default Layout;
