/*
 * FFT plugin for dancer.js
 * 
 * Usage of frequencies being 2px with 1px spacing:
 *
 * var dancer = new Dancer('song.ogg'),
 *     canvas = document.getElementById('fftcanvas');
 * dancer.fft( canvas, 2, 1 );
 */

(function() {
  Dancer.addPlugin( 'fft', function( canvasEl, freqWidth, spacing ) {
    var
      ctx    = canvasEl.getContext( '2d' ),
      h      = canvasEl.height,
      w      = canvasEl.width,
      hRatio = h / 255;

    freqWidth = freqWidth || 1;
    spacing = spacing || 0;
    ctx.fillStyle = "white";

    this.bind( 'update', function() {
      var spectrum = this.spectrum();
      ctx.clearRect( 0, 0, w, h );
      for ( var i = 0, l = spectrum.length; i < l; i++ ) {
        ctx.fillRect( i * ( spacing + freqWidth ), h, freqWidth, -spectrum[ i ] * hRatio );
      }
    });

    return this;
  });
})();