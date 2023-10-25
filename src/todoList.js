const TodoList = ( { list, remove } ) => {
    return (
        <>
        { list?.length > 0 ? (
            <ul>
              { list.map(( entry, index ) => (
                <div className="list-item" key={ index }>
                                    <button
                    onClick={ () => {
                      remove( entry );
                    }}
                  >
                    X
                  </button>
                  <li> { entry } </li>
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