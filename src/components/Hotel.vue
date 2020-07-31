<template>
    <div id="body">
        <!-- Page Preloder -->
       <div id="preloder">
            <div class="loader"></div>
        </div>
      <!-- Header -->
    <header class="header-section" style="top:0;position:fixed;z-index:5">
        <div class="container-fluid">
            <div class="inner-header">
                <div class="logo">
                    <a href=""><img src="../assets/img/logo.png" alt=""></a>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <nav class="main-menu mobile-menu">
                                <ul> <p>
                                  <!-- use router-link component for navigation. -->
                                  <!-- specify the link by passing the `to` prop. -->
                                  <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
                                  <router-link to="/Rooms">Go to Foo</router-link>
                                  <router-link to="/bar">Go to Bar</router-link>
                                </p>
                                  <!-- route outlet -->
                                  <!-- component matched by the route will render here -->
                                  <router-view></router-view>
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
    </header>

        <div>
            <transition-group name="fade" tag="div">
                <div v-for="i in [currentIndex]" :key="i">
                    <img :src="currentImg" class="imgSlider"/>
                </div>
            </transition-group>
            <a class="prev" @click="prev" href="#">&#10094;</a>
            <a class="next" @click="next" href="#">&#10095;</a>
        </div>

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
                            <img src="../assets/img/sattal-pics/IMG_20200226_102435.jpg" style="height:570px">
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
                            <img src="../assets/img/sattal-pics/IMG_20191026_114832.jpg">
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
        <!-- Footer Room Pic Section End -->
        <!-- Footer Section Begin -->
        <footer class="footer-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer-logo">
                            <a href="#"><img src="../assets/img/logo.png" alt=""></a>
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
        <!-- Footer Section End -->

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
