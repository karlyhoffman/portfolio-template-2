(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    /* Scroll Spy */
    $('body').scrollspy({
      target: '#navbar',
      offset: 200
    });

    /* Animations*/
    var controller = new ScrollMagic.Controller();

    $( ".reveal" ).each(function( index, elem ) {
      var revealIn = TweenMax.fromTo(this, 0.3, { "opacity": "0", marginTop: 40 }, { "opacity": "1", marginTop:0, ease: Power0.easeNone });
      var revealScene = new ScrollMagic.Scene({triggerHook: "0.72", triggerElement: this}).setTween(revealIn).addTo(controller);
    });

    $( ".fade" ).each(function( index, elem ) {
      var fadeIn = TweenMax.fromTo(this, 0.5, {"opacity": "0"}, {"opacity": "1", ease: Power0.easeNone});
      var fadeScene = new ScrollMagic.Scene({triggerHook: "0.95", triggerElement: this}).setTween(fadeIn).addTo(controller);
    });
    $( ".fade-late" ).each(function( index, elem ) {
      var fadeIn = TweenMax.fromTo(this, 0.5, {"opacity": "0"}, {"opacity": "1", ease: Power0.easeNone});
      var fadeScene = new ScrollMagic.Scene({triggerHook: "0.5", triggerElement: this}).setTween(fadeIn).addTo(controller);
    });

    $( ".nav-reveal" ).each(function( index, elem ) {
      var lineAnim = $(elem).find('.line');
      var lineIn = TweenMax.fromTo(lineAnim, 0.6, {"bottom": "100%"}, {"bottom": "0", ease: Power0.easeNone});
      var revealLine = new ScrollMagic.Scene({triggerHook: "0.85", triggerElement: elem}).setTween(lineIn).addTo(controller);
    });

    $( ".reveal-stagger" ).each(function( index, elem ) {
      var animStaggerSubjects = $(elem).find('.reveal-elmt');
      var fadeStaggerIn = TweenMax.staggerFromTo(animStaggerSubjects, 0.3, {"opacity": "0", marginTop:20}, {"opacity": "1", marginTop:0, ease: Power2.easeOut}, 0.2);
      var revealStaggerScene = new ScrollMagic.Scene({triggerHook: "0.75", triggerElement: this}).setTween(fadeStaggerIn).addTo(controller);
    });

  });

})(jQuery, window, document);
