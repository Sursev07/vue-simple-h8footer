import HacktivFooter from './components/HacktivFooter.vue'

const HacktivFooterSimple = {
  install (Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component('H8Footer', HacktivFooter)
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(HacktivFooterSimple)
}

export default HacktivFooterSimple
