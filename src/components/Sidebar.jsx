import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
import ContentWrapper from "./ContentWrapper";
import Last from "./LastGame/Last";
import Footer from "./Footer";

function Sidebar() {
  return (
    <>
      {/*<!-- Sidebar -->*/}
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/*<!-- Sidebar - Brand -->*/}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
          <div className="sidebar-brand-icon">
            <img className="w-100" src="" alt="Games Pro Shop" />
          </div>
        </Link>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Games Pro Shop</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr class="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div class="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li class="nav-item">
          <Link class="nav-link" to="/">
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Totales -->*/}
        <li class="nav-item">
          <Link class="nav-link" to="/totales">
            <i class="fas fa-fw fa-folder"></i>
            <span>Totales</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Ultimo Videojuego -->*/}
        <li class="nav-item">
          <Link class="nav-link" to="/lastGame">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Ultimo Videojuego</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Ultimo Usuario -->*/}
        <li class="nav-item nav-link">
          <Link class="nav-link" to="/">
            <i class="fab fa-accusoft"></i>
            <span>Ultimo Usuario</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Categorias -->*/}
        <li class="nav-item nav-link">
          <Link class="nav-link" to="/">
            <i class="fas fa-fw fa-table"></i>
            <span>Categorias</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Listado de Juegos -->*/}
        <li class="nav-item nav-link">
          <Link class="nav-link" to="/">
            <i class="fas fa-fw fa-table"></i>
            <span>Listado de Juegos</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr class="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <Routes>
                    {/* <Route exact path="/" element={<ContentWrapper />} /> */}
                    <Route path="/totales" element={<ContentWrapper />} />
                    <Route path="/lastGame" element={<Last />} />
            </Routes>
            <Footer />
          </div>
      </div>
    </>
  );
}

export default Sidebar;
