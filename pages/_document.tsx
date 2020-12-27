import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    constructor(props) {
        super(props);
        this.state = false;
    }

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    test() {
        console.log('asd123', this.state)
    }

    render() {
        const onTest = () => {
            console.log('test')
        }
        return (
            <Html onLoad={onTest}>
                <Head/>
                {<body>
                <Main/>
                <NextScript/>
                </body>}
            </Html>
        )
    }
}

export default MyDocument