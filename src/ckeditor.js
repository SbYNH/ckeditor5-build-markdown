/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 *
 * @license Copyright (c) 2019, JDinABox All rights reserved.
 */
// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';

function Markdown( editor ) {
	editor.data.processor = new GFMDataProcessor();
}

export default class LiteMarkdownEditor extends ClassicEditorBase {}

// Plugins to include in the build.
LiteMarkdownEditor.builtinPlugins = [
	Essentials,
	Markdown,
	Autoformat,
	Bold,
	Italic,
	Heading,
	Link,
	Paragraph,
	PasteFromOffice
];

// Editor configuration.
LiteMarkdownEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'|',
			'undo',
			'redo',
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
