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
                <li className="breadcrumb-item"><a href="#">Elements</a></li>
                <li className="breadcrumb-item active" aria-current="page">Content Blocks</li>
              </ol>
            </nav>
            {/* //breadcrumbs */}
            {/* card heading */}
            <div className="cards__heading">
              <h3>Content Blocks</h3>
            </div>
            {/* //card heading */}
            {/* content block style 1*/}
            <div className="card card_border p-lg-5 p-3 mb-4">
              <div className="card-body py-3 p-0">
                <div className="row">
                  <div className="col-lg-6 align-self pr-lg-4">
                    <h3 className="block__title mb-lg-4">About Content Block</h3>
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                        neque sunt labore veritatis. </p>
                    <p className="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                    neque sunt
                    praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                        praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                    <a href="#read" className="btn btn-style btn-primary"> Read More</a>
                  </div>
                  <div className="col-lg-6 pl-lg-4 mt-lg-0 mt-4">
                    <img src={require('./images/template2.jpg')} alt="" className="img-fluid rounded" />
                  </div>
                </div>
              </div>
            </div>
            {/* //content block style 1*/}
            {/* content block style 2*/}
            <div className="card card_border p-lg-5 p-3 mb-4">
              <div className="card-body py-3 p-0">
                <div className="row">
                  <div className="col-lg-6 pr-lg-4">
                    <img src={require('./images/template1.jpg')} alt="" className="img-fluid rounded" />
                  </div>
                  <div className="col-lg-6 align-self pl-lg-4 mt-lg-0 mt-4">
                    <h3 className="block__title mb-lg-4">Content Block with 2 buttons</h3>
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti neque
                    sunt
                    praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                        praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                    <p className="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                        neque sunt labore veritatis.</p>
                    <a href="#read" className="btn btn-style btn-primary mr-2"> Read More</a>
                    <a href="#more" className="btn btn-style border-btn"> Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
            {/* //content block style 2*/}
            {/* content block style 6 */}
            <div className="card card_border p-lg-5 p-3 mb-4">
              <div className="card-body py-3 p-0">
                <h3 className="block__title mb-lg-4">Content Block Features</h3>
                <div className="row feature-3 text-center">
                  <div className="col-md-4 three-grids-columns mt-5">
                    <span className="fa fa-laptop icon-fea" aria-hidden="true" />
                    <a href="#">
                      <h4>Web Design</h4>
                    </a>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                    <a href="#" className="actionbg">Read More</a>
                  </div>
                  <div className="col-md-4 three-grids-columns mt-5">
                    <span className="fa fa-paint-brush icon-fea" aria-hidden="true" />
                    <a href="#">
                      <h4>Graphic Design</h4>
                    </a>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                    <a href="#" className="actionbg">Read More</a>
                  </div>
                  <div className="col-md-4 three-grids-columns mt-5">
                    <span className="fa fa-signal icon-fea" aria-hidden="true" />
                    <a href="#">
                      <h4>Web Development</h4>
                    </a>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                    <a href="#" className="actionbg">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            {/* //content block style 6 */}
            {/* content block style 7 */}
            <div className="w3l-about1 card card_border p-lg-5 p-3 mb-4">
              <div className="card-body py-3 p-0">
                <h3 className="block__title mb-lg-4">Content Block Features with photo</h3>
                <div className="row cwp23-content">
                  <div className="col-md-6 cwp23-text">
                    <div className="row cwp23-text-cols">
                      <div className="col-md-6 column mt-4">
                        <span className="fa fa-laptop icon-fea" aria-hidden="true" />
                        <a href="#url">Web design</a>
                        <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                      </div>
                      <div className="col-md-6 column mt-4">
                        <span className="fa fa-paint-brush icon-fea" aria-hidden="true" />
                        <a href="#url">Graphic design</a>
                        <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                      </div>
                      <div className="col-md-6 column mt-4">
                        <span className="fa fa-signal icon-fea" aria-hidden="true" />
                        <a href="#url">Web development</a>
                        <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                      </div>
                      <div className="col-md-6 column mt-4">
                        <span className="fa fa-laptop icon-fea" aria-hidden="true" />
                        <a href="#url">Webdesign</a>
                        <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-5 cwp23-img">
                    <img src={require('./images/template2.jpg')} className="img-fluid rounded" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* //content block style 7 */}
          </div>
          {/* //content */}
        </div>
        {/* main content end*/}
      </section>
    </div>
    < Footer />

  </>

)