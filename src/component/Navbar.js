import {Component} from "react"; 
class Navbar extends Component {

  render(){
    
    return <>
           <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">Jevelin </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Industries 1</a></li>
            <li><a className="dropdown-item" href="#">Industries 2</a></li>
            <li><a className="dropdown-item" href="#">Industries 3</a></li>
            <li><a className="dropdown-item" href="#">Basic 1</a></li>
            <li><a className="dropdown-item" href="#">Basic 2</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Masonry 2.0</a></li>
            <li><a className="dropdown-item" href="#">Masonry Shadow</a></li>
            <li><a className="dropdown-item" href="#">Masonry Standard</a></li>
            <li><a className="dropdown-item" href="#">Grid Standard</a></li>
            <li><a className="dropdown-item" href="#">Large Images</a></li>
            <li><a className="dropdown-item" href="#">Medium Images</a></li>
            <li><a className="dropdown-item" href="#">Small Images</a></li>
            <li><a className="dropdown-item" href="#">Mix</a></li>
            <li><a className="dropdown-item" href="#">Categories</a></li>
          </ul>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Portfolio
          </a>
          
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Masonry Shadow</a></li>
            <li><a className="dropdown-item" href="#">Masonry Standard</a></li>
            <li><a className="dropdown-item" href="#">Trendy</a></li>
            <li><a className="dropdown-item" href="#">Gallery</a></li>
            <li><a className="dropdown-item" href="#">Marginless</a></li>
            <li><a className="dropdown-item" href="#">Minimalistic</a></li>
            <li><a className="dropdown-item" href="#">Overlays</a></li>
            <li><a className="dropdown-item" href="#">Pagination</a></li>
            <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">Layouts</a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Without Filter</a></li>
                    <li><a className="dropdown-item" href="#">Left Slidebar</a></li>
                    <li><a className="dropdown-item" href="#">Right Slidebar</a></li>
            <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle" href="#">Single Posts</a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Standard</a></li>
                <li><a className="dropdown-item" href="#">Gallery Slider</a></li>
                <li><a className="dropdown-item" href="#">Video Slider</a></li>
                    </ul>
                  </li>

                  
                </ul>
              </li>

          </ul>

          
          
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Cart</a></li>
            <li><a className="dropdown-item" href="#">Checkout</a></li>
            <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">Product Types</a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Left Slidebar</a></li>
                    <li><a className="dropdown-item" href="#">Right Slidebar</a></li>
                    <li><a className="dropdown-item" href="#">Full Width Products</a></li>
           </ul>
           </li>
          </ul>
          </li>

          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Variations
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Headers 1</a></li>
            <li><a className="dropdown-item" href="#">Headers 2</a></li>
            <li><a className="dropdown-item" href="#">Title Layouts</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Elements
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Basic 1</a></li>
            <li><a className="dropdown-item" href="#">Basic 2</a></li>
            <li><a className="dropdown-item" href="#">Visual 1</a></li>
            <li><a className="dropdown-item" href="#">Visual 2</a></li>
          </ul>
        </li>

      </ul>
      <div className="icons">
        <i class="fa-solid fa-cart-shopping i"></i>
        <i class="fa-solid fa-magnifying-glass i"></i>
        <i class="fa-brands fa-twitter i"></i>
        <i class="fa-brands fa-facebook i"></i>
        <i class="fa-brands fa-instagram i"></i>
      </div>
    </div>
  </div>
</nav>

       </>
  }
}



export default Navbar;
