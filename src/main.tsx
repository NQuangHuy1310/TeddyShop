import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from '~/components/GlobalStyles'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyles>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </GlobalStyles>
  </Provider>
)
