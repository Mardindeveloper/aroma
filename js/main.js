var mySwiper = new Swiper('#mySwiperComment', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '#paginationComment',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  }
});



var mySwiper = new Swiper('#mySwiperProduct', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '#nextProduct',
    prevEl: '#prevProduct',
  },
  pagination: {
    el: '#paginationProduct',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1250: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
  }
});



// str-icon
var stars = document.querySelectorAll('.star-icon');

document.addEventListener('click', function (e) {
  var classStar = e.target.classList;
  if (!classStar.contains('ativo')) {
    stars.forEach(function (star) {
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'));
  }
});

// category
function openCategory(evt, categoryName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  // تنظیم کننده وضعیت نمایش اولیه برای همه آیتم‌ها
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  // حذف کلاس "active" از تمام لینک‌ها
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // نمایش آیتم مورد نظر
  document.getElementById(categoryName).style.display = "block";

  // افزودن کلاس "active" به لینک فعلی
  evt.currentTarget.className += " active";
  // تابع setTimeout برای نمایش تب بعدی با تاخیر
  setTimeout(function () {
    // نمایش آیتم مورد نظر
    document.getElementById(categoryName).style.display = "block";

    // افزودن کلاس "active" به لینک فعلی
    evt.currentTarget.className += " active";
  }, 1000); // تاخیر یک ثانیه (1000 میلی‌ثانیه)
}

// برای اجرای اولین آیتم به طور پیش‌فرض
// فرض می‌کنیم اولین لینک در مستند شامل کلاس "tablinks" است
document.getElementsByClassName("tablinks")[0].click();

// pages

function product(evt, product) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(product).style.display = "block";
  evt.currentTarget.className += " active";
}
