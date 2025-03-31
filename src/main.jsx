
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import App from './App.jsx'
import "./index.css"
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
     
     <Provider store={store}>
        <ChakraProvider>
             <App />
         </ChakraProvider>
     </Provider>
    
)  