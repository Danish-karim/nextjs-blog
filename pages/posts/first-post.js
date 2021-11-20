import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Layout from '../../components/layout';
function FirstPost(props) {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}

FirstPost.propTypes = {};

export default FirstPost;
