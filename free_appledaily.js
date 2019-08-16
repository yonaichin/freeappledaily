;(function() {
  function script() {
    var timer = setInterval(function() {
      if (window.omoUserType === 0 ) {
        window.omoUserType = 2;
        clearInterval(timer)
      } 
    }, 10);
  }

  function inject(fn) {
    const script = document.createElement('script');
    script.text = `(${fn.toString()})();`;
    document.documentElement.appendChild(script);
    console.clear();
    console.log('[FreeAppleDaily] Code injected. https://linkedin.com/in/yonaichin/');
    console.log('\n\n\n');
    console.log('\n\n\n');
  }

  inject(script);
})()
