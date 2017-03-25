;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M353.024 831.808c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64S388.416 831.808 353.024 831.808L353.024 831.808zM801.024 831.808c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64S836.416 831.808 801.024 831.808L801.024 831.808zM937.312 188.48C920.96 170.016 898.496 160 874.048 160L232.864 160 230.592 146.976C224.992 100.416 184 64 137.28 64L97.024 64c-17.696 0-32 14.304-32 32s14.304 32 32 32L137.28 128c13.92 0 28.128 12.672 30.016 28.256l30.912 178.496L252.48 716.864C258.112 763.424 298.656 800 344.768 800l520.256 0c17.696 0 32-14.304 32-32s-14.304-32-32-32L344.768 736c-13.632 0-27.04-12.608-28.832-27.456l-5.312-37.344 507.712-31.392c46.08 0 86.624-36.512 92.064-81.376l50.432-288.352C964.576 239.264 956 209.568 937.312 188.48z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfont58-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M978.59 268.039c-11.715-11.715-30.72-11.715-42.435 0l-424.155 424.17-424.14-424.17c-11.715-11.7-30.72-11.7-42.435 0-11.715 11.715-11.715 30.72 0 42.435l444.361 444.359c0.315 0.345 0.555 0.765 0.915 1.11 5.895 5.895 13.605 8.805 21.315 8.775 7.725 0.030 15.435-2.88 21.33-8.775 0.345-0.345 0.585-0.765 0.915-1.11l444.361-444.359c11.685-11.715 11.685-30.705-0.030-42.435z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)