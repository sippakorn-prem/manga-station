import '../styles/globals.css'

function App(props: any) {
  return <props.Component {...props.pageProps} />
}

export default App
