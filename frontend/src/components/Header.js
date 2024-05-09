import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {PiShoppingCart} from 'react-icons/pi'

const Header = () => {
  return (
    <>
      <nav style={{backgroundColor:'orangered'}} className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img style={{height:'45px',width:'60px',marginRight:'8px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAaVBMVEUAAAD///8EBAQ8PDwkJCSYmJi1tbUqKipUVFS/v7/n5+cVFRXW1taPj49OTk77+/tycnL09PQaGhrGxsZeXl5CQkLa2tqEhITNzc2fn59qamplZWWvr6/v7+/h4eF5eXk1NTVHR0cwMDA6kJ+pAAADfElEQVR4nO3c61LiMBiA4QSkUBBKKafKmfu/yG1RFGlaw/rVhMz7/HFnFjN5ByEtmqhO4BQAAAAAAAAAAAAAAAAAAAAAAGjTbPv6TTaQGfdFZpjfW+t7R4lhu74Ejip9eiUx7kFiEAkv1cCewLDTicAgIloKjATGkNFOYD79/RhCWgnsLwVmJqSVwFjip1xIG4GTxJc1QrUTuPTnLaaVwINeiExNRguBu7XIzITIB+b6TWZqMsQDj8lQaGoyxANjPRaamgzpwLlOPVojlHzgUm+lpiZDOHClvVojlHTgbKe9WiOUdOBW67nc3ESIBi4SneYFb27nlXBgdh0iHQlO8XckA9++xvBnLZQM3H+N4c/9hGDgWIcdeE4DD4x02IEDHXjgOvDAgw47cDQMPDDXYQcek8AD4/sxAgucV8YILHAZeGC/OgaBf4ZACwS6RKAFAl0i0AKBLhFogUCXCLRAoEsEWiDQJQItEOgSgRYIdIlACwS6RKAFAl0i0AKBLhFogUCXCLRAoEuGwGV/VDFr2gjxbIE6GVYs+w1jPF2gQd40RgCB5a7VWe2TGEBgeTRFr3Zf2fMHvhYP7Ka1J6g8f2CZFutwA8tduXOdBBuYzlT5R73hBpZ7AVc63MDLErELOHCjLpuPgw3MigctdMCB5fVLFnBgeRG6ef9n7ZXM2edAlVZndyMtH/Kxs6z2KLFJ9fs8OtBi2hhYbvm/bj6uvaMYV7/Pn23mhcnAaFKk74v/Hl13lu3rBqie/1j/bPsk0vqkbjcf18z6ZHjmvTnasInWsfpYIj5ekF3TwzpDQ6Bfh+aY9bQuv9zuLEsML63pztDn17FONXaXd4r796B11Bt/6m0z85tw5nryFqZ6V35pXkXqiJzB2rLXy0Xo/eZjS02fwXnidDm7yPIzt3u+HXtkEuujujkB5zFeHY1nNrtcbA1+bjGpvSLwSJ501OdF6KM2rmdvIS3fB5svU2t5dCdR63D5KeuY1vAfDWeuZ29h/37vVznBwUJ6cjx3G/Prlcjp4XU+FToqv13x5/mExwffZ/aenWxotrj5He8o+rnqS/QMrz+lVt9udubVkypqLJ9hfSi83H+6tDHcsletn+D65V23+vv48yprfDEOs9Xx7yf6v8x/b9A5Dw55FFdE+Wpw7vzxFAEAAAAAAAAAAAAAAAAAAAAAQDdw/wBYDDGw73JGmwAAAABJRU5ErkJggg=="/> 
            Lelo jaani</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/category" className="nav-link">Category</NavLink></li>
            <li className="nav-item"><NavLink to="/register" className="nav-link">Signup</NavLink></li>
            <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
            <li className="nav-item"><NavLink to="/cart" className="nav-link"><PiShoppingCart size={30}/> (0)</NavLink></li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
