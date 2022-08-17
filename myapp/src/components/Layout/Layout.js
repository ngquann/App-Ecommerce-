import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Routes from '../../routes/Routers';

import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart.jsx';

const Layout = () => {
  const showCart = useSelector(state => state.cartUi.cartIsVisible);
  return (
    <>
        <Header />
        { 
          showCart && <Cart />
        }
        <>
            <Routes />
        </>
        <Footer />
    </>
  )
}

export default Layout