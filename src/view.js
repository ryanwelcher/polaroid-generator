/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';

domReady( function () {
	//do something after DOM loads.
	const images = document.querySelectorAll( '.polaroid img' );
	images?.forEach( function ( img ) {
		// Create the loading animation
		let loader = document.createElement( 'div' );
		loader.classList.add( 'loader' );
		img.before( loader );
		// When the image loads, remove the animation.
		img.onload = function () {
			loader.remove();
			img.classList.add( 'loaded' );
		};
	} );
} );
