const DisplayItems = ({ list }) => {
    console.log('list', list);
    return (
        <ul>
            { list.map(( item, index ) => {
                <li key={ index }>{ item }</li>
            })}
        </ul>
    )
}

export default DisplayItems;