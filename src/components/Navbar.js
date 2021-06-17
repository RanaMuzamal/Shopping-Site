import React from 'react'

 const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div class="container">
            <a href="#" class="navbar-brand ">Yoopec</a>
            <button class="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span class="navbar-toggler-icon"></span>
            </button>       
            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-tem">
                        <a href="#learn" class="nav-link">Home</a>
                    </li>
                    <li class="nav-tem">
                        <a href="#questions" class="nav-link">My Orders</a>
                    </li>
                    <li class="nav-tem">
                        <a href="#instructors" class="nav-link">Promotions</a>
                    </li>
                    <li class="nav-tem">
                      <a href="#contact" class="nav-link">Notifications</a>
                  </li>
                  <li class="nav-tem">
                      <a href="#contact" class="nav-link">Setting</a>
                  </li><li class="nav-tem">
                      <a href="#contact" class="nav-link">About Us</a>
                  </li><li class="nav-tem">
                      <a href="#contact" class="nav-link">Login</a>
                  </li>
                </ul>
                <i class="glyphicon glyphicon-shopping-cart"></i>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;

