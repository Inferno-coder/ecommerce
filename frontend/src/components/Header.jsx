import {Search} from '../components/Search'
import {Link} from 'react-router-dom'
export const Header = ({cartItems}) => {
  return (
    <div>
         <nav class="navbar row">
      <div class="col-12 col-md-3">
        <div class="navbar-brand">
          <Link to={'/'}>
          <img width="150px" src="./images/title_pic.jpeg" />
          </Link>
        </div>
      </div>

      <div class="col-12 col-md-6 mt-2 mt-md-0">
        <Search/>
      </div>

      <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link to={'/cart'}>
        <span id="cart" class="ml-3">Cart</span>
        <span class="ml-1" id="cart_count">{cartItems.length}</span>
        </Link>
      </div>
    </nav>
    </div>
  )
}
