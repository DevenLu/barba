import {
  gsap,
} from 'gsap'

export default {
  to: {
    namespace: 'home',
  },

  once() {
    const logo = document.querySelector('.logo.homepage__logo')
    const logoItems = document.querySelectorAll('.logo.homepage__logo .base .item', this.$el);
    const logoItemsColor = document.querySelectorAll('.only-big .hover .item', this.$el)
    const title = document.querySelectorAll('.homepage__title span')
    const buttons = document.querySelectorAll('.homepage__buttons a')
    const chrome = [
      document.querySelector('.header__infos'),
      document.querySelector('.header__external-links'),
      document.querySelector('.site-footer'),
    ]

    document.documentElement.classList.add('is-transitioning')
    console.log(logoItems);
    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        document.documentElement.classList.remove('is-transitioning')
      },
    })

    tl
      .from(
        logo, {
        duration: 1,
        y: 100,
        scale: 1.5,
        ease: 'power4.inOut',
      },
        0
      )
      // .from(
      //   logoItems, {
      //   duration: 0.5,
      //   y: 100,
      //   scale: 4,
      //   ease: 'power4',
      //   stagger: 0.05,
      // },
      //   0
      // )
      .to(
        logoItemsColor, {
        duration: 0.3,
        opacity: 1,
        ease: 'power4',
      },
        1.3
      )
      .to(
        logoItemsColor, {
        duration: 0.8,
        opacity: 0,
        ease: 'power4',
        stagger: 0.05,
      },
        2.5
      )
      .from(
        title, {
        duration: 1,
        yPercent: 100,
        scale: 1,
        ease: 'power4',
        stagger: 0.05,
      },
        1.4
      )
      .from(
        buttons, {
        duration: 1,
        y: 40,
        opacity: 0,
        ease: 'power4',
        stagger: 0.05,
      },
        2
      )
      .from(
        chrome, {
        duration: 0.3,
        scale: 0,
        ease: 'power4',
        stagger: 0.2,
      },
        2.3
      )
  },
}
