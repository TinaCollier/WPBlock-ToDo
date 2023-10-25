/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps,
	InspectorControls 
} from '@wordpress/block-editor';
import React, { useState } from 'react';
import TodoInput from './todoInput';
import TodoList from './todoList';
import DisplayItems from './displayItems';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const [ todo, setTodo ] = useState("");
	console.log(attributes.list);
	const addTodo = () => {
		if ( todo !== "" ){
			setTodo("");
			setAttributes( { list: [ ...attributes.list, todo ] } )
		}
	};

	const deleteTodo = ( text ) => 
		setAttributes( { list: attributes.list.filter( ( todo ) => todo !== text ) } );

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<div className="todo-controls">
					<h1>Todo App</h1>
					<TodoInput todo={ todo } setTodo={ setTodo } addTodo={ addTodo } />
					<TodoList list={ attributes.list } remove={ deleteTodo } /> 
				</div>
			</InspectorControls>
			<div>
				<h1>Today's Todos</h1>
				<DisplayItems list={ attributes.list } />
			</div>	
		</div>
	);
}
