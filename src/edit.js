/**
 * WordPress dependencies
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

// Import the editor.scss file so that the build process can compile it.
import './editor.scss';

/**
 * Helper to render images.
 * @param {Number} count
 * @returns
 */
const renderPhotos = ( count ) => {
	const photosArray = [];
	for ( let i = 0; i < count; i++ ) {
		photosArray.push(
			<div className="polaroid" key={ i }>
				<img
					src={ `https://picsum.photos/200/150.webp?random=${ i }` }
					width="200"
					loading="lazy"
					alt=""
				/>
			</div>
		);
	}
	return photosArray;
};

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
const Edit = ( { attributes, setAttributes } ) => {
	const { photos } = attributes;

	const blockProps = useBlockProps();

	return (
		<section { ...blockProps }>
			<div className="polaroids">{ renderPhotos( photos ) }</div>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label="Photos"
						value={ photos }
						onChange={ ( newCount ) =>
							setAttributes( { photos: newCount } )
						}
						min={ 3 }
						max={ 12 }
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>
		</section>
	);
};

export default Edit;
