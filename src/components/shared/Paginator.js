import { useReducer, useState } from "react"

export const Paginator = ({ defaultActivePage, totalPages, handlePaginationChange }) => {

    //const [state, setstate] = useState(initialState)
    const initialState = {
        pageIndex: defaultActivePage,
        disabled: {
            firstPage: true,
            prevPage: true,
            nextPage: false,
            lastPage: false
        }
    };

    const pagingReducer = (state, action) => {
        switch (action.type) {
            case 'GO_TO_PAGE':
                handlePaginationChange({ activePage: action.pageIndex })
                switch (action.pageIndex) {
                    case 1: // if first page
                        return { ...state, pageIndex: action.pageIndex, disabled: { ...{ prevPage: true, firstPage: true, nextPage: false, lastPage: false } } };
                    case totalPages: // if last page
                        return { ...state, pageIndex: action.pageIndex, disabled: { ...{ prevPage: false, firstPage: false, nextPage: true, lastPage: true } } };
                    default: // other pages except for first and last pages
                        return { ...state, pageIndex: action.pageIndex, disabled: { ...{ prevPage: false, firstPage: false, nextPage: false, lastPage: false } } };
                }
            case 'SET_PAGE':
                return { ...state, pageIndex: action.pageIndex };
            default:
                throw new Error("Something went wrong...");
        }
    }

    const [state, dispatch] = useReducer(pagingReducer, initialState);
    const { pageIndex, disabled } = state;

    return <div className="pagination">
        <button onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: 1 })} disabled={disabled.firstPage}>
            {'<<'}
        </button>{' '}
        <button onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: pageIndex - 1 })} disabled={disabled.prevPage}>
            {'<'}
        </button>{' '}
        <button onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: pageIndex + 1 })} disabled={disabled.nextPage}>
            {'>'}
        </button>{' '}
        <button onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: totalPages })} disabled={disabled.lastPage}>
            {'>>'}
        </button>{' '}
        <span>
            Page{' '}
            <strong>
                {pageIndex} of {totalPages}
            </strong>{' '}
        </span>
        <span>
            | Go to page:{' '}
            <input
                type="number"
                defaultValue={pageIndex}
                onChange={e => {
                    const page = e.target.value ? Number(e.target.value) : 1
                    dispatch({ type: 'SET_PAGE', pageIndex: page });
                }}
                style={{ width: '100px' }}
            />
            <button onClick={() => {
                dispatch({ type: 'GO_TO_PAGE', pageIndex: pageIndex });
            }}> Go </button>
        </span>
        {/* <span>
            | Go to page:{' '}
            <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(page)
                }}
                style={{ width: '100px' }}
            />
        </span>{' '}
        <select
            value={pageSize}
            onChange={e => {
                setPageSize(Number(e.target.value))
            }}
        >
            {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                </option>
            ))}
        </select> */}
    </div>
}