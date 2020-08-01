<template>
  <div id="body">
    <!-- Page Preloder -->
    <!--<div id="preloder">
      <div class="loader"></div>
    </div>-->
    <slider/>
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
  </div>
</template>
<script>
/*import $ from 'jquery'*/
/*------------------
    Preloader
--------------------*/
/*$(window).on('load', function () {
  $(".loader").fadeOut();
  $("#preloder").delay(200).fadeOut("slow");
});*/
import slider from "@/components/slider";
export default {
 name: "app",
  components: {
   slider
  }
}
</script>

<style scoped>
</style>