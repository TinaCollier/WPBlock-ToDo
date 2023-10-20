const TodoList = ( { list, remove } ) => {
    return (
        <>
        { list?.length > 0 ? (
            <ul>
              { list.map(( entry, index ) => (
                <div key={ index }>
                  <li> { entry } </li>
                  <button
                    onClick={ () => {
                      remove( entry );
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <div>
              <p>No task found</p>
            </div>
          ) }
        </>
    )
};

export default TodoList;