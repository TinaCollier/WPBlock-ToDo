const DisplayItems = ({ list }) => {
    console.log('list', list);
    const listItems = list.map( ( item, index ) => (
        <li key={ index }>{ item }</li>
    ))
    return (
        <ul>
            { list.length > 0 ? listItems : <li>Nothing to do!</li> }
        </ul>
    )
}

export default DisplayItems;