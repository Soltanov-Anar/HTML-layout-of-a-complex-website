document.addEventListener("DOMContentLoaded", () => {

  const accordion = () => {
    const items = document.querySelectorAll(".accordion__item-trigger");

    items.forEach(item => {
      item.addEventListener("click", () => {
        const parent = item.parentNode;

        if (parent.classList.contains("accordion__item-active")) {
          parent.classList.remove("accordion__item-active");
        } else {
          document
            .querySelectorAll(".accordion__item")
            .forEach(child => {
              child.classList.remove("accordion__item-active")
            });

          parent.classList.add("accordion__item-active");
        }
      })
    })
  };

  accordion();

  const bindModal = (trigger, modal, close) => {
    trigger = document.querySelector(trigger);
    modal = document.querySelector(modal);
    close = document.querySelector(close);

    trigger.addEventListener("click", event => {
      event.preventDefault();
      modal.style.display = "flex";
    });

    close.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", event => {
      event.target === modal ?
        modal.style.display = "none" :
        null;
    });
  }

  bindModal(".modal__btn", ".modal__wrapper", ".modal__close");

  new Swiper(".swiper-container", {
    spaceBetween: 20,
    loop: true,

    navigation: {
      nextEl: ".arrow__btn-next",
      prevEl: ".arrow__btn-prev",
    },

    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 }
    },

  });

  const element = document.querySelector(".phone__input");

  const maskOption = {
    mask: "+{3}(000)000-00-00"
  };

  IMask(element, maskOption);

  new SmoothScroll("a[href*='#']");

  const changeCursor = () => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".follower");
    const links = document.querySelectorAll(".link");

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    TweenMax.to({}, 0.01, {
      repeat: -1,
      onRepeat: () => {

        posX += (mouseX - posX) / 5;
        posY += (mouseY - posY) / 5;

        TweenMax.set(cursor, {
          css: {
            top: mouseY,
            left: mouseX,
          }
        });

        TweenMax.set(follower, {
          css: {
            top: posY - 12,
            left: posX - 12,
          }
        });
      }
    })

    window.addEventListener("mousemove", event => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        follower.classList.add("active");
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        follower.classList.remove("active");
      });
    });

  };

  changeCursor();


  const tabsHeader = document.querySelectorAll(".tabs__header-item");
  const tabContent = document.querySelectorAll(".tabs__content-item");

  tabsHeader.forEach(tabHeader => {
    tabHeader.addEventListener("click", ({ target }) => {
      for (let i = 0; i < tabsHeader.length; i++) {
        if (target === tabsHeader[i]) {
          tabContent[i].classList.add("active");
          tabsHeader[i].classList.add("active");
        } else {
          tabContent[i].classList.remove("active");
          tabsHeader[i].classList.remove("active");
        }
      };
    });
  });

  const menu = document.querySelector(".menu__list");
  const menuItems = document.querySelectorAll(".menu__list-item");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
    });
  })

});