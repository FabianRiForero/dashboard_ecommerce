import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
import ContentWrapper from "./ContentWrapper";
import Last from "./LastGame/Last";
import LastU from "./LastUser/LastU";
import DetailGame from "./DetailGame/DetailGame"
import Footer from "./Footer";
import CategoriesInDB from "./Categories/CategoriesInDB";
import List from "./GameList/List";

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
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        {/* <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </Link>
        </li> */}

        {/*<!-- Nav Item - Totales -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/totales">
            <i className="fas fa-fw fa-folder"></i>
            <span>Totales</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Ultimo Videojuego -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/lastGame">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Ultimo Videojuego</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Ultimo Usuario -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/lastUser">
            <i className="fab fa-accusoft"></i>
            <span>Ultimo Usuario</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Categorias -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/categories">
            <i className="fas fa-fw fa-table"></i>
            <span>Categorias</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Listado de Juegos -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/products">
            <i className="fas fa-fw fa-table"></i>
            <span>Listado de Juegos</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <Routes>
                    <Route exact path="/" element={<ContentWrapper />} />
                    <Route path="/totales" element={<ContentWrapper />} />
                    <Route path="/lastGame" element={<Last />} />
                    <Route path="/lastUser" element={<LastU />} />
                    <Route path="/product/:id"  element={<DetailGame />} />
                    <Route path="/categories"  element={<CategoriesInDB />} />
                    <Route path="/products"  element={<List />} />
            </Routes>
            <Footer />
          </div>
      </div>
    </>
  );
}

export default Sidebar;
