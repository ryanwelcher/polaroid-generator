/**
 * WordPress dependencies
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

import './editor.scss';

const Edit = ( { attributes, setAttributes } ) => {
	const { photos } = attributes;
	const blockProps = useBlockProps();

	const renderPhotos = ( count ) => {
		const photosArray = [];
		for ( let i = 0; i < count; i++ ) {
			photosArray.push(
				<div className="polaroid">
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
					/>
				</PanelBody>
			</InspectorControls>
		</section>
	);
};

export default Edit;
