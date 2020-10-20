import React from 'react';
import './styles/sideBar.css';

export default props => (
    <>
    {/* sidebar menu start */}
    <div className="sidebar-menu sticky-sidebar-menu">
          {/* logo start */}
          <div className="logo">
            <h1><a href="#/index">Collective</a></h1>
          </div>
          {/* if logo is image enable this */}
          {/* image logo --
    <div class="logo">
      <a href="index.html">
        <img src="image-path" alt="Your logo" title="Your logo" class="img-fluid" style="height:35px;" />
      </a>
    </div>*/}
          {/* //image logo */}
          <div className="logo-icon text-center">
            <a href="#/index" title="logo"><img src={require('../pages/images/logo.png')} alt="logo-icon" /> </a>
          </div>
          {/* //logo end */}
          <div className="sidebar-menu-inner">
            {/* sidebar nav start */}
            <ul className="nav nav-pills nav-stacked custom-nav">
              <li><a href="#/index"><i className="fa fa-tachometer" /><span> Dashboard</span></a></li>
              <li><a href="#/cards"><i className="fa fa-cogs" /> <span>Default cards</span></a></li>
              <li><a href="#/pricing"><i className="fa fa-table" /> <span>Pricing tables</span></a></li>
              <li><a href="#/blocks"><i className="fa fa-th" /> <span>Content blocks</span></a></li>
              <li><a href="#/forms"><i className="fa fa-file-text" /> <span>Forms</span></a></li>
            </ul>
            {/* //sidebar nav end */}
            {/* toggle button start */}
            <a className="toggle-btn" onclick="toggleMenu()">
              <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
              <i className="fa fa-angle-double-right menu-collapsed__right" />
            </a>
            {/* //toggle button end */}
          </div>
        </div>
        {/* //sidebar menu end */}
    </>
)