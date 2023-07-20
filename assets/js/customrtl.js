var dropdownToggle = document.querySelector(".custom-dropdown-toggle");
dropdownToggle.addEventListener("click", function () {
  var dropdownMenu = this.nextElementSibling;
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

$(".slider_images").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  rtl: true,
});

var filtered = false;

$(".js-filter").on("click", function () {
  if (filtered === false) {
    $(".filtering").slick("slickFilter", ":even");
    $(this).text("Unfilter Slides");
    filtered = true;
  } else {
    $(".filtering").slick("slickUnfilter");
    $(this).text("Filter Slides");
    filtered = false;
  }
});

$(".slicktwo").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  rtl: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        rtl: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
      },
    },
  ],
});
// bottom scroll button
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollToTopBtn").fadeIn();
    } else {
      $("#scrollToTopBtn").fadeOut();
    }
  });
  $("#scrollToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

// Get the language buttons in the modal body

function handleLanguageButtonClick(languageImgSrc) {
  const languageIcon = document.getElementById("languageIcon");
  languageIcon.src = languageImgSrc;
  const modalBody = document.querySelector(".modal-body");
  const loginModal = document.getElementById("loginModal");
  const bootstrapModal = bootstrap.Modal.getInstance(loginModal);
  bootstrapModal.hide();
}
const languageButtons = document.querySelectorAll(".modal_btn button");
languageButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const languageImgSrc = button.querySelector("img").src;
    handleLanguageButtonClick(languageImgSrc);
  });
});

///////////////////////////////////////////
function showPage(pageId) {
  document.getElementById("cardspage").style.display = "none";
  document.getElementById("cardspage1").style.display = "none";
  document.getElementById(pageId).style.display = "block";
}
