<template>
<div id="body">

  <!-- Page Preloder -->
 <!-- <div id="preloder">
    <div class="loader"></div>
  </div>-->
  <!-- Header End -->
 <slider/>

  <!-- About Room Section Begin -->
  <div class="about-us-room spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <h2>“Customers may forget what you said  but they will never forget how you made them
            feel”.</h2>
        </div>
      </div>
      <div class="about-para">
        <div class="row">
          <div class="col-lg-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris,
              bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum
              ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae
              orci. Suspendisse maximus malesuada</p>
          </div>
          <div class="col-lg-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est.
              Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam.
              Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum
              magna </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About Room Section End -->

  <!-- Gallery Section Begin -->
  <section class="gallery-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="gallery-text">
            <h2>Hotel Gallery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum eget
              sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare. Morbi vel
              ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci.</p>
            <a href="#" class="primary-btn">View Gallery <i class="lnr lnr-arrow-right"></i></a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-6 col-md-3 col-sm-6">
              <div class="gallery-img">
                <img src="../assets/img/sattal-pics/FB_IMG_1577276574427.jpg" alt="" style="height:265px">
              </div>
            </div>
            <div class="col-lg-6 col-md-3 col-sm-6">
              <div class="gallery-img">
                <img src="../assets/img/sattal-pics/IMG_20200226_102447.jpg" alt="" style="height:265px">
              </div>
            </div>
            <div class="col-lg-6 col-md-3 col-sm-6">
              <div class="gallery-img">
                <img src="../assets/img/sattal-pics/IMG_20190630_111430.jpg" alt="" style="transform: rotate(90deg);width:400px;height:260px">
              </div>
            </div>
            <div class="col-lg-6 col-md-3 col-sm-6">
              <div class="gallery-img">
                <img src="../assets/img/sattal-pics/IMG_20190630_112847.jpg" alt="" style="transform: rotate(90deg);width:400px;height:260px">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Gallery Section End -->

  <!-- Staff Section End -->
  <section class="staff-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Our Staff</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-staff-item">
            <div class="staff-img">
              <img src="img/staff/staff-1.jpg" alt="">
            </div>
            <div class="staff-text">
              <h5>Sarah Doe</h5>
              <span>Hotel Manager</span>
              <a href="#"><i class="lnr lnr-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-staff-item">
            <div class="staff-img">
              <img src="img/staff/staff-2.jpg" alt="">
            </div>
            <div class="staff-text">
              <h5>Jessica Doe</h5>
              <span>Reception Manager</span>
              <a href="#"><i class="lnr lnr-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-staff-item">
            <div class="staff-img">
              <img src="img/staff/staff-3.jpg" alt="">
            </div>
            <div class="staff-text">
              <h5>Jessica Doe</h5>
              <span>It</span>
              <a href="#"><i class="lnr lnr-arrow-right"></i></a>
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
import slider from "../components/slider.vue";
export default {
  name:"app",
  components:{
    slider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>