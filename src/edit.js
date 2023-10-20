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
import { useBlockProps } from '@wordpress/block-editor';
import React, { useState } from 'react';
import TodoInput from './todoInput';
import TodoList from './todoList';

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
export default function Edit() {
	const [ todos, setTodos ] = useState([]);
	const [ todo, setTodo ] = useState("");

	const addTodo = () => {
		if ( todo !== "" ){
			setTodos( [ ...todos, todo ] );
			setTodo("");
		}
	};

	const deleteTodo = ( text ) => {
		const newTodos = todos.filter( ( todo ) => {
			return todo !== text;
		});
		setTodos( newTodos );
	}

	console.log( 'edit' );
	return (
		<div { ...useBlockProps() }>
			<h1>Todo App</h1>
			<TodoInput todo={ todo } setTodo={ setTodo } addTodo={ addTodo } />
			<TodoList list={ todos } remove={ deleteTodo } /> 			

		</div>
	);
}