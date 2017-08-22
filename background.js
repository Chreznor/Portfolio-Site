// MOVING BACKGROUND ANIMATION

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('#top-background-image').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (30 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (20 * lMouseY) / 100;

});

moveBackground();

//CHANING BACKGROUND COLOR ON SCROLL ANIMATION


function backColorChange() {
  const section1 = document.getElementById('1');
  const sectionVal1 = section1.getBoundingClientRect();
  console.log(sectionVal1.top + window.scrollY, sectionVal1.bottom + window.scrollY);
  var tStart = sectionVal1.top + window.scrollY - sectionVal1.height// Start transition 100px from top 400
  , tEnd = sectionVal1.top + window.scrollY  // End at 500px 900 
  , cStart = [4, 95, 99]
  , cEnd = [184, 192, 172]
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[2] - cStart[2]];

$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        //console.log($(this).scrollTop(), tEnd - tStart);
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $(".second-page").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
});
};

backColorChange()


function backColorChange2() {
  const section2 = document.getElementById('2');
  const sectionVal2 = section2.getBoundingClientRect();
  console.log(sectionVal2.top + window.scrollY, sectionVal2.bottom + window.scrollY);
  var tStart = sectionVal2.top + window.scrollY - sectionVal2.height // Start transition 100px from top 1400
    , tEnd = sectionVal2.top + window.scrollY   // End at 500px 1900
    , cStart = [184, 192, 172]
    , cEnd = [255, 86, 15]
    , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[2] - cStart[2]];

  $(document).ready(function(){
      $(document).scroll(function() {
          var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
          p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
          var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
          $(".third-page").css('background-color', 'rgb(' + cBg.join(',') +')');
      });
  });
};

backColorChange2();

function backColorChange3() {
  const section3 = document.getElementById('3');
  const sectionVal3 = section3.getBoundingClientRect();
  console.log(sectionVal3.top + window.scrollY, sectionVal3.bottom + window.scrollY);
  var tStart = sectionVal3.top + window.scrollY - sectionVal3.height// Start transition 100px from top 2400
  , tEnd = sectionVal3.top + window.scrollY // End at 500px 2900
  , cStart = [255, 86, 15]
  , cEnd = [46, 42, 170]
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[2] - cStart[2]];

$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $(".fourth-page").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
});
};

backColorChange3()

// SCROLL DOWN ANIMATION

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
})

//SECTION 1 ANIMATION

const centerContainer = document.querySelector('.center-container');
const leftSideContainer = document.querySelector('.left-side-container');
const rightSideContainer = document.querySelector('.right-side-container');
const borderLeft = document.querySelector('.border-left');
const borderRight = document.querySelector('.border-right');
const animEl = [borderLeft, borderRight, centerContainer];
let animState = false;

function actAnim() {
  rightSideContainer.classList.add('opening-right');
  leftSideContainer.classList.add('opening-left');
  centerContainer.classList.add('center-container-widen');
  document.querySelector('.border-left').style.backgroundColor = 'black';
  document.querySelector('.border-right').style.backgroundColor = 'black';
  document.querySelector('#word-left').style.color = '#b8c0ac';
  document.querySelector('#word-right').style.color = '#b8c0ac';
}

function deactAnim() {
  rightSideContainer.classList.remove('opening-right');
  leftSideContainer.classList.remove('opening-left');
  centerContainer.classList.remove('center-container-widen');
  if (animState === false) {
    document.querySelector('.border-left').style.backgroundColor = '#b8c0ac';
    document.querySelector('.border-right').style.backgroundColor = '#b8c0ac';
    document.querySelector('#word-left').style.color = 'black';
    document.querySelector('#word-right').style.color = 'black';
  } else {
    return;
  }
  
}

function toggleAnim() {
  rightSideContainer.classList.toggle('open-right');
  leftSideContainer.classList.toggle('open-left');
  centerContainer.classList.toggle('center-container-widenned');
  [borderLeft, borderRight].forEach(elem => elem.classList.toggle('border-color-toggle'));
  animState = !animState;
}

animEl.forEach(elem => elem.addEventListener('mouseenter', actAnim));
animEl.forEach(elem => elem.addEventListener('mouseleave', deactAnim));
animEl.forEach(elem => elem.addEventListener('click', toggleAnim));

// $(document).ready(function(){
//   $(".wrapper").mouseenter(function(){
//     $('.center-container').animate({width: "300px", left: "-154px"}, 500);
//     $('.center-container').css("left", "-154px");
//     $('.left-side-container').animate({left: "-150px"}, 500);
//     $('.right-side-container').animate({left: "-158px"}, 500);
//     $('#word-left, #word-right').css("color", "#b8c0ac");
//     $('.border-left, .border-right').css("background-color", "black");
//     $('.wrapper').css({'width': '800px', "margin": "-300px 0 0 -400px"});

//   });
//   $(".wrapper").mouseleave(function(){
//     $('.center-container').animate({width: "0", left: "0"}, 500);
//     $('.center-container').css("left", "0");
//     $('.left-side-container').animate({left: "0"}, 500);
//     $('.right-side-container').animate({left: "-8"}, 500);
//     $('#word-left, #word-right').css("color", "black");
//     $('.border-left, .border-right').css("background-color", "#b8c0ac");
//     $('.wrapper').css({'width': '600px', "margin": "-300px 0 0 -300px"});

//   });
//   $(".wrapper").click(function(){
//     $('.center-container').animate({width: "60%", left: "-30%"}, 500);
//     $('.center-container').css("left", "-30%");
//     $('.left-side-container').animate({left: "-29.75%"}, 500);
//     $('.right-side-container').animate({left: "-30.25%"}, 500);
//     $('#word-left, #word-right').css("color", "#b8c0ac");
//     $('.border-left, .border-right').css("background-color", "black");
//     $('.wrapper').css({'width': '90%', "margin": "-300px 0 0 -45%"});
//   });
// });




// $(document).ready(function(){
//   $(".wrapper, #word-right").click(function(){
//     $('.center-container').animate({width: "300px", left: "-154px"}, 500);
//     $('.center-container').css("left", "-154px");
//     $('.left-side-container').animate({left: "-150px"}, 500);
//     $('.right-side-container').animate({left: "-156px"}, 500);
//   });
//   $(".wrapper, #word-right").click(function(){
//     $('.center-container').animate({width: "0", left: "0"}, 500);
//     $('.center-container').css("left", "0");
//     $('.left-side-container').animate({left: "0"}, 500);
//     $('.right-side-container').animate({left: "-0"}, 500);
//   });
// });
