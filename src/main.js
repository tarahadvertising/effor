import "./styles/main.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import AOS from "aos";
import "aos/dist/aos.css";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "jquery-parallax.js/parallax.min.js";

window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

window.onscroll = function () {
  var header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("fixed", "animate-slideDown");
  } else {
    header.classList.remove("fixed", "animate-slideDown");
  }
};

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  mobileMenu.classList.toggle("hidden");

  // Toggle between menu and close icons
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

$(document).ready(function () {
  var menu = [];
  $(".swiper-slide").each(function (index) {
    menu.push($(this).find(".slide-inner").attr("data-text"));
  });

  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide-inner").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },
      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-inner").style.transition =
            speed + "ms";
        }
      },
    },
  };

  var swiper = new Swiper(".swiper-container", swiperOptions);

  var sliderBgSetting = $(".slide-bg-image");
  sliderBgSetting.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });
});

tippy("#whatsapp", {
  content: "Whatsapp",
  arrow: true,
  animation: "fade",
  theme: "tomato",
  animation: "scale",
});

tippy("#getQuote", {
  content: "Get a Quote",
  arrow: true,
  animation: "fade",
  theme: "tomato",
  animation: "scale",
});

tippy("#downloadProfile", {
  content: "Download Profile",
  arrow: true,
  animation: "fade",
  theme: "tomato",
  animation: "scale",
});

$(".parallax-window").parallax({
  naturalWidth: 600,
  naturalHeight: 400,
  iosFix: true,
  androidFix: true,
});

const mobileServicesMenu = document.getElementById("mobileServicesMenu");
const mobileServicesDiv = document.getElementById("mobileServicesDiv");

mobileServicesMenu.addEventListener("click", () => {
  // Check if the menu is currently open or closed
  if (mobileServicesDiv.classList.contains("max-h-0")) {
    // Open the menu - set max-height to a large enough value (e.g., 500px or 1000px)
    mobileServicesDiv.classList.remove("max-h-0");
    mobileServicesDiv.classList.add("max-h-[500px]");
  } else {
    // Close the menu - set max-height to 0
    mobileServicesDiv.classList.remove("max-h-[500px]");
    mobileServicesDiv.classList.add("max-h-0");
  }
});
