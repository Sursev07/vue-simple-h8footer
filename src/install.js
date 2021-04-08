import H8Footer from './H8Footer.vue'

const H8FooterSimple = {
  install (Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component('H8Footer', H8Footer)
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(H8FooterSimple)
}

export default H8FooterSimple
