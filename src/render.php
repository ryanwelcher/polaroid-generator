<?php
/**
 * The render.php controls how a dynamic block is rendered
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @package polaroid
 */

$photos = $attributes['photos'];
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<div class="polaroids">
	<?php for ( $i = 1; $i <= $photos; $i++ ) : ?>
		<div class="polaroid">
			<img
				src="<?php echo esc_url( add_query_arg( 'random', $i, 'https://picsum.photos/200/150' ) ); ?>"
				width="200"
				loading="lazy"
				alt="Random image from https://picsum.photos/"
			/>
		</div>
	<?php endfor; ?>
	</div>
</section>
