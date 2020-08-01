<template>
    <div id="body">
        <!-- Page Preloder -->
      <!-- <div id="preloder">
            <div class="loader"></div>
        </div>-->
    <!--<header class="header-section" style="top:0;position:fixed;z-index:5">
        <div class="container-fluid">
            <div class="inner-header">
                <div class="logo">
                    <a href=""><img src="../assets/img/logo.png" alt=""></a>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <nav class="main-menu mobile-menu">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#"  @click="$router.push('Rooms')">Rooms</a></li>
                                    <li><a href="#">Facilities</a>
                                        <ul class="drop-menu">
                                            <li><a href="#">Junior Suit</a></li>
                                            <li><a href="#">Double Room</a></li>
                                            <li><a href="#">Senior Suit</a></li>
                                            <li><a href="#">Single Room</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </nav>
                            <div class="top-info">
                                <img src="../assets/img/placeholder.png" alt="">
                                <span>1525 Boring Lane, Los Angeles, CA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </div>
    </header>-->
      <slider />
        <!-- Room Availability Section Begin -->
        <section class="room-availability spad">
            <div class="container">
                <div class="room-check">
                    <div class="row">
                        <div class="col-lg-6">
                            <img src="../assets/img/sattal-pics/FB_IMG_1577276579967.jpg" alt="">
                            <div class="room-item">
                                <div class="room-pic-slider room-pic-item owl-carousel">
                                </div>
                                <div class="room-text">
                                    <div class="room-title">
                                        <h2>Junior Suite</h2>
                                        <div class="room-price">
                                            <span>From</span>
                                            <h2>$252</h2>
                                        </div>
                                    </div>
                                    <div class="room-features" style="margin-top:-10px">
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
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="check-form">
                                <h2>Check Availability</h2>
                                <form action="#">
                                    <div class="datepicker">
                                        <div class="date-select">
                                            <p>From</p>
                                            <input type="text" class="datepicker-1" value="dd / mm / yyyy">
                                            <img src="../assets/img/calendar.png" alt="">
                                        </div>
                                        <div class="date-select to">
                                            <p>To</p>
                                            <input type="text" class="datepicker-2" value="dd / mm / yyyy">
                                            <img src="../assets/img/calendar.png" alt="">
                                        </div>
                                    </div>
                                    <div class="room-quantity">
                                        <div class="single-quantity">
                                            <p>Adults</p>
                                            <div class="pro-qty"><input type="text" value="0"></div>
                                        </div>
                                        <div class="single-quantity">
                                            <p>Children</p>
                                            <div class="pro-qty"><input type="text" value="0"></div>
                                        </div>
                                        <div class="single-quantity last">
                                            <p>Rooms</p>
                                            <div class="pro-qty"><input type="text" value="0"></div>
                                        </div>
                                    </div>
                                    <div class="room-selector">
                                        <p>Room</p>
                                        <select class="suit-select">
                                            <option>Eg. Master suite</option>
                                            <option value="">Double Room</option>
                                            <option value="">Single Room</option>
                                            <option value="">Special Room</option>
                                        </select>
                                    </div>
                                    <button type="button">CHECK Availability <i class="lnr lnr-arrow-right"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-room">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <h2>“Customers may forget what you said  but they will never forget how you made themfeel”.</h2>
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
        </section>
        <!-- Room Availability Section End -->

        <!-- Facilities Section Begin -->
        <div class="facilities-section spad">
            <div class="container">
                <div class="facilities-content">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h1>Facilities</h1>
                            </div>
                        </div>
                        <div class="col-lg-6 p-0">
                            <img src="../assets/img/sattal-pics/IMG_20200226_102435.jpg" style="height:570px" alt="">
                        </div>
                        <div class="col-lg-6 p-0 ">
                            <div class="facilities-text-warp">
                                <div class="facilities-text">
                                    <h2>Wellness Center</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis-cing elit. Mauris tincidunt consectetur
                                        turpis, eget consequat.</p>
                                    <a href="#" class="primary-btn fac-btn">Visit Center <i class="lnr lnr-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 p-0 order-lg-1 order-2">
                            <div class="facilities-text-warp">
                                <div class="facilities-text">
                                    <h2>Wellness Center</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis-cing elit. Mauris tincidunt consectetur
                                        turpis, eget consequat.</p>
                                    <a href="#" class="primary-btn fac-btn">Visit Center <i class="lnr lnr-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 p-0 order-lg-2 order-1">
                            <img src="../assets/img/sattal-pics/IMG_20191026_114832.jpg" alt="" style="transform: rotate(90deg)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Facilities Section End -->

        <!-- Footer Room Pic Section Begin -->
        <div class="footer-room-pic">
            <div class="container-fluid">
                <div class="row">
                    <img src="../assets/img/sattal-pics/IMG_20200226_102459.jpg" alt="">
                    <img src="../assets/img/sattal-pics/IMG_20200226_102447.jpg" alt="">
                    <img src="../assets/img/sattal-pics/IMG_20200226_102435.jpg" alt="">
                    <img src="../assets/img/sattal-pics/IMG_20190623_122835.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
   /* import $ from 'jquery'*/
    /*------------------
        Preloader
    --------------------*/
   /* $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(10).fadeOut("slow");
    });*/
    import Slider from "../components/slider.vue";
    export default {
      name: "app",
      components: {
        Slider
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
