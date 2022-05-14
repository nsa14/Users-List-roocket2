const TableHead = ({titles}) => {
    return (
        <thead>
            <tr className="bg-primary text-center text-truncate text-white">
                {titles.map((title, index) => <th key={index}>{title}</th>)}
            </tr>
        </thead>
    )
}

export default TableHead