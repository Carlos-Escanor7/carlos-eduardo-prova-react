import React from 'react';
import Footer from '../templates/Footer';
import SideBar from '../templates/SideBar';

export default props => (
  <>
    < div >
      <section>
        {/* side bar aqui */}
        < SideBar />
        {/* header-starts */}
        <div className="header sticky-header">
          {/* notification menu start */}
          <div className="menu-right">
            <div className="navbar user-panel-top">
              <div className="search-box">
                <form action="#search-results.html" method="get">
                  <input className="search-input" placeholder="Search Here..." type="search" id="search" />
                  <button className="search-submit" value><span className="fa fa-search" /></button>
                </form>
              </div>
              <div className="profile_details">
                <ul>
                  <li className="dropdown profile_details_drop">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true" aria-expanded="false">
                      <div className="profile_img">
                        <img src={require('./images/profileimg.jpg')} className="rounded-circle" alt="" />
                        <div className="user-active">
                          <span />
                        </div>
                      </div>
                    </a>
                    <ul className="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                      <li className="user-info">
                        <h5 className="user-name">John Deo</h5>
                        <span className="status ml-2">Available</span>
                      </li>
                      <li> <a href="#"><i className="lnr lnr-user" />My Profile</a> </li>
                      <li> <a href="#"><i className="lnr lnr-users" />1k Followers</a> </li>
                      <li> <a href="#"><i className="lnr lnr-cog" />Setting</a> </li>
                      <li> <a href="#"><i className="lnr lnr-heart" />100 Likes</a> </li>
                      <li className="logout"> <a href="#sign-up.html"><i className="fa fa-power-off" /> Logout</a> </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*notification menu end */}
        {/* //header-ends */}
        {/* main content start */}
        <div className="main-content">
          {/* content */}
          <div className="container-fluid content-top-gap">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb my-breadcrumb">
                <li className="breadcrumb-item"><a href="#/index">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
              </ol>
            </nav>
            <div className="welcome-msg pt-3 pb-4">
              <h1>Hi <span className="text-primary">John</span>, Welcome back</h1>
              <p>Very detailed &amp; featured admin.</p>
            </div>
            {/* statistics data */}
            <div className="statistics">
              <div className="row">
                <div className="col-xl-6 pr-xl-2">
                  <div className="row">
                    <div className="col-sm-6 pr-sm-2 statistics-grid">
                      <div className="card card_border border-primary-top p-4">
                        <i className="lnr lnr-users"> </i>
                        <h3 className="text-primary number">29.75 M</h3>
                        <p className="stat-text">Total Users</p>
                      </div>
                    </div>
                    <div className="col-sm-6 pl-sm-2 statistics-grid">
                      <div className="card card_border border-primary-top p-4">
                        <i className="lnr lnr-eye"> </i>
                        <h3 className="text-secondary number">51.25 K</h3>
                        <p className="stat-text">Daily Visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 pl-xl-2">
                  <div className="row">
                    <div className="col-sm-6 pr-sm-2 statistics-grid">
                      <div className="card card_border border-primary-top p-4">
                        <i className="lnr lnr-cloud-download"> </i>
                        <h3 className="text-success number">166.89 M</h3>
                        <p className="stat-text">Downloads</p>
                      </div>
                    </div>
                    <div className="col-sm-6 pl-sm-2 statistics-grid">
                      <div className="card card_border border-primary-top p-4">
                        <i className="lnr lnr-cart"> </i>
                        <h3 className="text-danger number">1,250k</h3>
                        <p className="stat-text">Purchased</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //statistics data */}
            {/* charts */}
            <div className="chart">
              <div className="row">
                <div className="col-lg-6 pr-lg-2 chart-grid">
                  <div className="card text-center card_border">
                    <div className="card-header chart-grid__header">
                      Bar Chart
                      </div>
                    <div className="card-body">
                      {/* bar chart */}
                      <div id="container">
                        <canvas id="barchart" />
                      </div>
                      {/* //bar chart */}
                    </div>
                    <div className="card-footer text-muted chart-grid__footer">
                      Updated 2 hours ago
                      </div>
                  </div>
                </div>
                <div className="col-lg-6 pl-lg-2 chart-grid">
                  <div className="card text-center card_border">
                    <div className="card-header chart-grid__header">
                      Line Chart
                      </div>
                    <div className="card-body">
                      {/* line chart */}
                      <div id="container">
                        <canvas id="linechart" />
                      </div>
                      {/* //line chart */}
                    </div>
                    <div className="card-footer text-muted chart-grid__footer">
                      Updated just now
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //charts */}
          </div>
          {/* //content */}
        </div>
        {/* main content end*/}
      </section>
      < Footer />
    </div >
  </>
)
