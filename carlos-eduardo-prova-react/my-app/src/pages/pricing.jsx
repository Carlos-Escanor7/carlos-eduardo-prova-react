import React from 'react';
import Footer from '../templates/Footer';
import SideBar from '../templates/SideBar';

export default props => (
  <>
    < div >
      <section>
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
            {/* breadcrumbs */}
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb my-breadcrumb">
                <li className="breadcrumb-item"><a href="#/index">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Pricing Tables</li>
              </ol>
            </nav>
            {/* //breadcrumbs */}
            {/* pricing */}
            <section className="pricing">
              <div className="card card_border mb-5">
                <div className="cards__heading">
                  <h3>Pricing Tables -<span> Version 1</span></h3>
                </div>
                <div className="card-body">
                  {/* pricing version 1 */}
                  {/*//BLOCK ROW END*/}
                  <section className="w3l-pricing1">
                    <div className="row px-2">
                      <div className="col-md-4 px-2">
                        <div className="mb-4 price-card price-card1 p-lg-4 p-md-3 p-4">
                          <div className="card-header p-0 card-heading">
                            <h4 className="mb-4">Free</h4>
                          </div>
                          <div className="card-body p-0">
                            <h1 className="card-title pricing-card-title my-price-title">$0<small className="text-dull">/month</small>
                            </h1>
                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                            <ul className="list-unstyled list-pricing mt-3 mb-4">
                              <li>1 Domain</li>
                              <li>10 users included</li>
                              <li>2 GB of storage</li>
                              <li>Email support</li>
                              <li>Help center access</li>
                            </ul>
                            <div className="mt-4">
                              <a href="signup.html" className="btn btn-lg btn-outline-primary btn-style border-btn">Sign up for
                                  free</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 px-2">
                        <div className="mb-4 price-card price-card2 p-lg-4 p-md-3 p-4 recomemded-price">
                          <div className="card-header p-0 card-heading">
                            <h4 className="mb-4">Regular <span className="label label-popular">Popular</span></h4>
                          </div>
                          <div className="card-body p-0">
                            <h1 className="card-title pricing-card-title my-price-title">$49<small className="text-dull">/month</small>
                            </h1>
                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                            <ul className="list-unstyled list-pricing mt-3 mb-4">
                              <li>10 Domain</li>
                              <li>20 users included</li>
                              <li>10 GB of storage</li>
                              <li>Priority email support</li>
                              <li>Help center access</li>
                            </ul>
                            <div className="mt-4">
                              <a href="#" className="btn btn-lg btn-primary btn-style">Get started</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 px-2">
                        <div className="mb-4 price-card price-card3 p-lg-4 p-md-3 p-4">
                          <div className="card-header p-0 card-heading">
                            <h4 className="mb-4">Premium</h4>
                          </div>
                          <div className="card-body p-0">
                            <h1 className="card-title pricing-card-title my-price-title">$199<small className="text-dull">/month</small>
                            </h1>
                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                            <ul className="list-unstyled list-pricing mt-3 mb-4">
                              <li>30 Domain</li>
                              <li>30 users included</li>
                              <li>15 GB of storage</li>
                              <li>Phone and email support</li>
                              <li>Help center access</li>
                            </ul>
                            <div className="mt-4">
                              <a href="#" className="btn btn-lg btn-outline-primary btn-style border-btn">Contact us</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section></div>
              </div>
            </section>
            {/*BLOCK ROW START*/}
            {/* //pricing version 1 */}
            {/* pricing version 2 */}
            <div className="pricing-version-2">
              <div className="card card_border mb-5">
                <div className="cards__heading">
                  <h3>Pricing Tables -<span> Version 2</span></h3>
                </div>
                <div className="card-body">
                  <div className="row px-2">
                    {/* Table #1  */}
                    <div className="col-lg-4 col-md-6 px-2 mb-4">
                      <div className="card text-center card__hover">
                        <div className="card-header">
                          <h3 className="display-4"><span className="currency">$</span>19<span className="period">/month</span></h3>
                        </div>
                        <div className="card-block">
                          <h4 className="card-title">
                            Basic Plan
                            </h4>
                          <ul className="list-group">
                            <li className="list-group-item">1 Domain</li>
                            <li className="list-group-item">Ultimate Features</li>
                            <li className="list-group-item">Responsive Ready</li>
                            <li className="list-group-item">Editor Ready Builder</li>
                            <li className="list-group-item">Limited UI Blocks</li>
                            <li className="list-group-item">24/7 Support System</li>
                          </ul>
                          <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                        </div>
                      </div>
                    </div>
                    {/* Table #2  */}
                    <div className="col-lg-4 col-md-6 px-2 mb-4">
                      <div className="card text-center card__hover">
                        <div className="card-header">
                          <h3 className="display-4"><span className="currency">$</span>29<span className="period">/month</span></h3>
                        </div>
                        <div className="card-block">
                          <h4 className="card-title">
                            Regular Plan
                            </h4>
                          <ul className="list-group">
                            <li className="list-group-item">10 Domain</li>
                            <li className="list-group-item">Ultimate Features</li>
                            <li className="list-group-item">Responsive Ready</li>
                            <li className="list-group-item">Editor Ready Builder</li>
                            <li className="list-group-item">Unlimited UI Blocks</li>
                            <li className="list-group-item">24/7 Support System</li>
                          </ul>
                          <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                        </div>
                      </div>
                    </div>
                    {/* Table #3  */}
                    <div className="col-lg-4 col-md-6 px-2 mb-4">
                      <div className="card text-center card__hover">
                        <div className="card-header">
                          <h3 className="display-4"><span className="currency">$</span>39<span className="period">/month</span></h3>
                        </div>
                        <div className="card-block">
                          <h4 className="card-title">
                            Premium Plan
                            </h4>
                          <ul className="list-group">
                            <li className="list-group-item">15 Domain</li>
                            <li className="list-group-item">Ultimate Features</li>
                            <li className="list-group-item">Responsive Ready</li>
                            <li className="list-group-item">Editor Ready Builder</li>
                            <li className="list-group-item">Unlimited UI Blocks</li>
                            <li className="list-group-item">24/7 Support System</li>
                          </ul>
                          <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //pricing version 2 */}
          </div></div></section>
    </div >
    < Footer />

  </>
)