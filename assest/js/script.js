
jQuery(document).ready(function(){
    jQuery(".side__menu__bar").click(function(){
        jQuery(".nav__bar__wrapper").toggleClass('activeMenu');
    })

});

// JS for Slider 
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots:false,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    nav: false,
    ltr: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2.5
        }
    }
})

$('.owl-carousel .right__side__slider').owlCarousel({
    loop: true,
    margin: 20,
    dots:false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    nav: false,
    rtl: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2.5
        }
    }
})


// // 
// jQuery(".sbs__btn").hover(function(){
//     jQuery(this).css("background-color", "#cccccc");
//   });
// jQuery(document).ready(function(){
//     jQuery("h1").hover(function(){
//       alert("You entered p1!");
//     },
//     function(){
//       alert("Bye! You now leave p1!");
//     }); 
//   });
// //   
// $("h1").on("click", function(){
//     $(this).hide();
//   });

//   jQuery(document).ready(function(){
//     jQuery("p").on({
//       mouseenter: function(){
//         jQuery(this).css("background-color", "lightgray", "color", "#000000");
//       },  
//       mouseleave: function(){
//         jQuery(this).css("background-color", "transparent");
//       }, 
//       click: function(){
//         jQuery(this).css("background-color", "yellow");
//       }  
//     });
//   });
 alert( 'Welcome to the website' );
 click(function(){
     jQuery('.header__btn').css('background-color', 'red');
 });
 {
 var x = 1;
{
  var y = 3;
}
console.log(x); 
}
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
function checkData() {
  if (document.form.threeChar.value.length === 3) {
    return true;
  }
  alert(
    `Enter exactly three characters. ${document.form.threeChar.value} is not valid.`,
  );
  return false;
}