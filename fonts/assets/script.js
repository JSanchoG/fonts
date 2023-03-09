// Initiate the flickity carousel
var $carousel = $(".carousel").flickity({
  percentPosition: false,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
});

// Add letter key codes to an array
// to match them up to corresponding
// flickity carousel cell index
var letterIndexes = [];
for (var i = 65; i < 91; i++) {
  letterIndexes.push(i);
}
// Go!
$(document).keyup(function (e) {
  if (e.keyCode > 64 && e.keyCode < 91) {
    jumpToLetter(letterIndexes.indexOf(e.keyCode));
  }
});
// Using flickity's select event to
// activate the cell with the matching
// index to the letter
function jumpToLetter(index) {
  $carousel.flickity("select", index);
}

// Toggling style states
$(".styles span").on("click", function () {
  if ($(this).is(".bold")) {
    if (!$(this).is(".-active")) {
      $(this).addClass("-active");
      $(".carousel, .type-tester").css("font-weight", "700");
    } else {
      $(this).removeClass("-active");
      $(".carousel, .type-tester").css("font-weight", "400");
    }
  }

  if ($(this).is(".italic")) {
    if (!$(this).is(".-active")) {
      $(this).addClass("-active");
      $(".carousel, .type-tester").css("font-style", "italic");
    } else {
      $(this).removeClass("-active");
      $(".carousel, .type-tester").css("font-style", "normal");
    }
  }
});

$(".color-mode span").on("click", function () {
  if ($(this).is(".dark")) {
    $(".light").removeClass("-active");
    $(this).addClass("-active");
    $("body").addClass("dark-mode");
  } else {
    $(".dark").removeClass("-active");
    $(this).addClass("-active");
    $("body").removeClass("dark-mode");
  }
});

$(".show-lines").on("click", function () {
  $(this).toggleClass("-active");
  $(".carousel p").toggleClass("lines-shown");
});

const lst = document.getElementById("font-list").childNodes;
// console.log(lst);
lst.forEach((element) => {
  if (element.tagName !== "A") return;
  element.addEventListener("click", () => {
    lstFun(element.innerText);
  });
});
function lstFun(innT) {
  lst.forEach((element) => {
    if (element.tagName !== "A") return;
    if (element.innerText !== innT) element.style.textDecoration = "none";
    else element.style.textDecoration = "underline";
  });
}

// const tihub_links = document.getElementsByClassName("ti-hub-links");
// tihub_links.forEach((e) => {
//   console.log(e);
// });
document.querySelectorAll(".ti-hub-links").forEach((e) => {
  e.addEventListener("click", () => {
    navigator.clipboard.writeText(e.innerText);
  });
});
