const TableFooter = ({dataLength, colSpan}) => (
    <>
        {!dataLength ? <tfoot className="text-center text-gray-500"><tr><td colSpan={colSpan} className="p-4 text-center text-gray-500 dark:text-gray-100">دیتایی یافت نشد.</td></tr></tfoot> : null}
    </>
)

export default TableFooter