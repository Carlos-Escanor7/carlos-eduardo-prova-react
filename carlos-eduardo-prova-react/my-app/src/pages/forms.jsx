import React from 'react';
import Footer from '../templates/Footer';
import SideBar from '../templates/SideBar';

export default props => (
  <>
    <div>
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
                <li className="breadcrumb-item active" aria-current="page">Forms</li>
              </ol>
            </nav>
            {/* //breadcrumbs */}
            {/* forms */}
            <section className="forms">
              {/* forms 1 */}
              <div className="card card_border py-2 mb-4">
                <div className="cards__heading">
                  <h3>Forms <span /></h3>
                </div>
                <div className="card-body">
                  <form action="#" method="post">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1" className="input__label">Email address</label>
                      <input type="email" className="form-control input-style" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                          anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1" className="input__label">Password</label>
                      <input type="password" className="form-control input-style" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check check-remember check-me-out">
                      <input type="checkbox" className="form-check-input checkbox" id="exampleCheck1" />
                      <label className="form-check-label checkmark" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-style mt-4">Submit</button>
                  </form>
                </div>
              </div>
              {/* //forms 1 */}
              {/* forms 2 */}
              <div className="card card_border py-2 mb-4">
                <div className="card-body">
                  <form action="#" method="post">
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4" className="input__label">Email</label>
                        <input type="email" className="form-control input-style" id="inputEmail4" placeholder="Email" />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4" className="input__label">Password</label>
                        <input type="password" className="form-control input-style" id="inputPassword4" placeholder="Password" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress" className="input__label">Address</label>
                      <input type="text" className="form-control input-style" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress2" className="input__label">Address 2</label>
                      <input type="text" className="form-control input-style" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputCity" className="input__label">City</label>
                        <input type="text" className="form-control input-style" id="inputCity" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState" className="input__label">State</label>
                        <select id="inputState" className="form-control input-style">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label htmlFor="inputZip" className="input__label">Zip</label>
                        <input type="text" className="form-control input-style" id="inputZip" />
                      </div>
                    </div>
                    <div className="form-check check-remember check-me-out">
                      <input className="form-check-input checkbox" type="checkbox" id="gridCheck" />
                      <label className="form-check-label checkmark" htmlFor="gridCheck">
                        Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-style mt-4">Sign in</button>
                  </form>
                </div>
              </div>
              {/* //forms 2 */}
            </section>
            {/* //forms */}
          </div></div></section>
    </div>
    < Footer />
  </>
)