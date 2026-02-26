import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import "./style.css";
import Home from './Home'
import Collectionpage from './collectionpage';
import Aboutus from './Aboutus'
import ScrollToHash from './ScrollToHash';
import ProductView from "./Productview";
import Allproduct from './Allproduct';
import Feacturedcollectionspage from './Feacturedcollectionspage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <ScrollToHash/>
     <Routes>
         <Route path='/'   element= {<Home/>}/>
         <Route path='/collection'   element= {<Collectionpage/>}/>
         <Route path='/featuredcollection'   element= {<Feacturedcollectionspage/>}/>
         <Route path='/Aboutus'   element= {<Aboutus/>}/>
         <Route path='/AllProduct'   element= {<Allproduct/>}/>
         <Route path="/product/:slug" element={<ProductView />} />
      </Routes>
     </BrowserRouter>
  </StrictMode>
)
