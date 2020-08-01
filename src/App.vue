<template>
  <div id="app">
   <!-- <hr>
    <nav class="main-menu mobile-menu" style="background-color:red">
    <router-link to="/">Home</router-link>
    <router-link to="/Rooms/10">Rooms</router-link>
      </nav>
    <hr>
    <router-view></router-view>-->
    <header class="header-section other-page" >
      <div class="container-fluid">
        <div class="inner-header">
          <div class="logo">
            <a href="#"><img src="" alt=""></a>
          </div>
          <div class="top-widget">
            <div class="top-info address">
              <img src="" alt="">
              <span>1525 Boring Lane, Los <br />Angeles, CA</span>
            </div>
            <div class="top-info phone-num">
              <img src="" alt="">
              <span>+1 (603)535-4592</span>
            </div>
          </div>
          <div class="container">
            <nav class="main-menu mobile-menu">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/Rooms">Rooms</router-link></li>
                <li><a href="#">Facilities</a>
                  <ul class="drop-menu">
                    <li><a href="#">Junior Suit</a></li>
                    <li><a href="#">Double Room</a></li>
                    <li><a href="#">Senior Suit</a></li>
                    <li><a href="#">Single Room</a></li>
                  </ul>
                </li>
                <li><a href="./news.html">News</a></li>
                <li><a href="./contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer class="footer-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="footer-logo">
              <a href="#"><img src="./assets/img/logo.png" alt=""></a>
            </div>
          </div>
        </div>
        <div class="row pb-50">
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h5>Location</h5>
              <div class="widget-text">
                <i class="lnr lnr-map-marker"></i>
                <p>1525 Boring Lane, <br />Los Angeles, CA</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h5>Reception</h5>
              <div class="widget-text">
                <i class="lnr lnr-phone-handset"></i>
                <p>+1 (603)535-4592</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h5>Shuttle Service</h5>
              <div class="widget-text">
                <i class="lnr lnr-phone-handset"></i>
                <p>+1 (603)535-4592</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h5>Restaurant</h5>
              <div class="widget-text">
                <i class="lnr lnr-phone-handset"></i>
                <p>+1 (603)535-4592</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="privacy-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Photo Requests</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  data (){
    return{

    }
  }
}
</script>
<style scoped>
@import "./assets/css/style.css";
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/font-awesome.min.css";
@import "./assets/css/slicknav.min.css";
@import "./assets/css/magnific-popup.css";
@import "./assets/css/nice-select.css";
@import "./assets/css/jquery-ui.min.css";
@import "./assets/css/owl.carousel.min.css";
@import "./assets/css/linearicons.css";
@import "./assets/css/flaticon.css";
.header-section {
  top:0;
  position:fixed;
  z-index:5;
  height:80px;
  padding:25px
}
</style>