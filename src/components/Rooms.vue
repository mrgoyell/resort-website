<template>
  <div id="body">
    <!-- Page Preloder -->
    <div id="preloder">
      <div class="loader"></div>
    </div>
    <header class="header-section other-page"  style="top:0;position:fixed;z-index:5">
      <div class="container-fluid">
        <div class="inner-header">
          <div class="logo">
            <a href="#"><img src="../assets/img/logo.png" alt=""></a>
          </div>
          <div class="top-widget">
            <div class="top-info address">
              <img src="../assets/img/placeholder.png" alt="">
              <span>1525 Boring Lane, Los <br />Angeles, CA</span>
            </div>
            <div class="top-info phone-num">
              <img src="../assets/img/phone.png" alt="">
              <span>+1 (603)535-4592</span>
            </div>
          </div>
          <div class="container">
            <nav class="main-menu mobile-menu">
              <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about-us.html">About</a></li>
                <li><a href="./rooms.html">Rooms</a></li>
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
    <!-- Header End -->
    <div>
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
          <img :src="currentImg" class="imgSlider"/>
        </div>
      </transition-group>
      <a class="prev" @click="prev" href="#">&#10094;</a>
      <a class="next" @click="next" href="#">&#10095;</a>
    </div>
    <!-- Rooms Section Begin -->
    <section class="room-section spad" style="background:#787878">
      <div class="container">
        <div class="rooms-page-item">
            <div class="row" style="height:400px;background:#727272">
              <div class="col-lg-6">
                <img src="../assets/img/sattal-pics/FB_IMG_1577276579967.jpg" alt="" style=";height:400px;width:600px;margin-top:0;margin-left:-30px">
              </div>
            <div class="col-lg-6">
              <div class="room-text">
                <div class="room-title">
                  <h2>Standard Room</h2>
                  <div class="room-price">
                    <span>From</span>
                    <h2>$99</h2>
                    <sub>/night</sub>
                  </div>
                </div>
                <div class="room-desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris, bibendum
                    eget sapien ac, ultrices rhoncus ipsum.</p>
                </div>
                <div class="room-features">
                  <div class="room-info">
                    <i class="flaticon-019-television"></i>
                    <span>Smart TV</span>
                  </div>
                  <div class="room-info">
                    <i class="flaticon-029-wifi"></i>
                    <span>High Wi-fii</span>
                  </div>
                  <div class="room-info">
                    <i class="flaticon-003-air-conditioner"></i>
                    <span>AC</span>
                  </div>
                  <div class="room-info">
                    <i class="flaticon-036-parking"></i>
                    <span>Parking</span>
                  </div>
                  <div class="room-info last">
                    <i class="flaticon-007-swimming-pool"></i>
                    <span>Pool</span>
                  </div>
                </div>
                <a href="#" class="primary-btn">Book Now <i class="lnr lnr-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="rooms-page-item">
          <div class="row" style="height:400px;background:#727272">
            <div class="col-lg-6">
              <img src="../assets/img/sattal-pics/IMG_20200226_110114.jpg" alt="" style="transform: rotate(90deg);;height:560px;width:400px;margin-top:-80px;margin-left:-10px">
            </div>
            <div class="col-lg-6">
              <div class="room-text">
                <div class="room-title">
                  <h2>Double Room</h2>
                  <div class="room-price">
                    <span>From</span>
                    <h2>$179</h2>
                    <sub>/night</sub>
                  </div>
                </div>
                <div class="room-desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris, bibendum
                    eget sapien ac, ultrices rhoncus ipsum.</p>
                </div>
                <div class="room-features">
                  <div class="room-info">
                    <i class="flaticon-019-television"></i>
                    <span>Smart TV</span>
                  </div>
                  <div class="room-info">
                    <i class="flaticon-029-wifi"></i>
                    <span>High Wi-fii</span>
                  </div>
                  <div class="room-info">
                    <i class="flaticon-003-air-conditioner"></i>
                    <span>AC</span>
                  </div>
                  <div class="room-info">
                    <i class="flaticon-036-parking"></i>
                    <span>Parking</span>
                  </div>
                  <div class="room-info last">
                    <i class="flaticon-007-swimming-pool"></i>
                    <span>Pool</span>
                  </div>
                </div>
                <a href="#" class="primary-btn">Book Now <i class="lnr lnr-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="rooms-page-item">
          <div class="row" style="height:400px;background:#727272">
            <div class="col-lg-6">
              <img src="../assets/img/sattal-pics/IMG_20200226_110233.jpg" alt="" style="transform: rotate(90deg);;height:550px;width:400px;margin-top:-75px;margin-left:-20px">
            </div>
            <div class="col-lg-6">
              <div class="room-text">
                <div class="room-title">
                  <h2>Junior Suite</h2>
                  <div class="room-price">
                    <span>From</span>
                    <h2>$252</h2>
                    <sub>/night</sub>
                  </div>
                </div>
                <div class="room-desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris, bibendum
                    eget sapien ac, ultrices rhoncus ipsum.</p>
                </div>
                <div class="room-features">
                  <div class="room-info">
                    <i class="flaticon-019-television"></i>
                    <span>Smart TV</span>
                  </div>
                  <div class="room-info">
                    <i class="flaticon-029-wifi"></i>
                    <span>High Wi-fii</span>
                  </div>
                  <div class="room-info">
                    <i class="flaticon-003-air-conditioner"></i>
                    <span>AC</span>
                  </div>
                  <div class="room-info">
                    <i class="flaticon-036-parking"></i>
                    <span>Parking</span>
                  </div>
                  <div class="room-info last">
                    <i class="flaticon-007-swimming-pool"></i>
                    <span>Pool</span>
                  </div>
                </div>
                <a href="#" class="primary-btn">Book Now <i class="lnr lnr-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Rooms Section End -->

  </div>
</template>
<script>
import $ from 'jquery'
/*------------------
    Preloader
--------------------*/
$(window).on('load', function () {
  $(".loader").fadeOut();
  $("#preloder").delay(200).fadeOut("slow");
});
/*------------------
   Background Set
--------------------*/
$('.set-bg').each(function () {
  var bg = $(this).data('setbg');
  $(this).css('background-image', 'url('+bg+')');
});

export default {
  name: "Slider",
  data() {
    return {
      images: [
        require("../assets/img/sattal-pics/IMG_20190703_070933.jpg"),
        require("../assets/img/sattal-pics/IMG_20180920_071542.jpg"),
        require("../assets/img/sattal-pics/IMG_20190518_143137.jpg"),
        require("../assets/img/sattal-pics/IMG_20190623_122835.jpg"),
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/style.css";
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/font-awesome.min.css";
@import "../assets/css/slicknav.min.css";
@import "../assets/css/magnific-popup.css";
@import "../assets/css/nice-select.css";
@import "../assets/css/jquery-ui.min.css";
@import "../assets/css/owl.carousel.min.css";
@import "../assets/css/linearicons.css";
@import "../assets/css/flaticon.css";
.imgSlider{
  height:750px;
  width:100%;
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top:130px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>