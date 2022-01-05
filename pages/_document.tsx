import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="description"
                        content="Apoptosis community website"
                    />
                </Head>
                <body className="bg-blue-50">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument