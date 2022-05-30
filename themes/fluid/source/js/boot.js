// ----- freecdn begin -----
if (self.BigInt) {
  self.FREECDN_SHARED_MODE = true;
  self.FREECDN_PUBLIC_KEY = 'RVuXZ8vTj+cXxzVXpZyMJF10M6bV83vohq461axyRHTSdHDaUptc6RHDB4eV83UzN1c9c7q/oudnNPRr2nfC5w';
  if( 'function' === typeof importScripts) {
  importScripts('/freecdn-internal/0.4.1/freecdn-main.min.js');
} else {
  console.warn('freecdn is not installed because the browser is too old');
}
}
// ----- freecdn end -----

/* global Fluid */

Fluid.boot = {};

Fluid.boot.registerEvents = function() {
  Fluid.events.billboard();
  Fluid.events.registerNavbarEvent();
  Fluid.events.registerParallaxEvent();
  Fluid.events.registerScrollDownArrowEvent();
  Fluid.events.registerScrollTopArrowEvent();
  Fluid.events.registerImageLoadedEvent();
};

document.addEventListener('DOMContentLoaded', function() {
  Fluid.boot.registerEvents();
});
