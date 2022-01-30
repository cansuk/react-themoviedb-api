import React from 'react';

const TablePagination = ({ defaultActivePage, totalPages, handlePaginationChange }) => {
    return (
        <>
            <Pagination
                boundaryRange={0}
                defaultActivePage={defaultActivePage}
                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                firstItem={undefined}
                lastItem={undefined}
                siblingRange={1}
                totalPages={totalPages}
                onPageChange={handlePaginationChange}
            />
        </>
    )
}

export default TablePagination;
