import React from 'react';
import Head from 'next/head'
import conf from '../data/config'

function PageHead(){
    return (
        <Head>
            <title>{conf.title}</title>
            <meta name="description" content={conf.description}/>
            <link rel="icon" href={conf.favicon}/>
        </Head>
    )
}
export default PageHead
