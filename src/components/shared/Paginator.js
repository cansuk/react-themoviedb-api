import { useReducer } from "react";
import { MdFirstPage, MdLastPage, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Button, RippledButton, SlippingIconButton, Span } from "../../styled-components/Button";
import { colors } from "../../styled-components/Variables";


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
                handlePaginationChange({ activePage: action.pageIndex });
                window.scrollTo(0, 0);
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
            <MdFirstPage />
        </button>{' '}
        <button onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: pageIndex - 1 })} disabled={disabled.prevPage}>
            <MdNavigateBefore />
        </button>{' '}
        <button onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: pageIndex + 1 })} disabled={disabled.nextPage}>
            <MdNavigateNext />
        </button>{' '}
        <button onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: totalPages })} disabled={disabled.lastPage}>
            <MdLastPage />
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

            <Button color={colors.primaryColor} onClick={() => {
                dispatch({ type: 'GO_TO_PAGE', pageIndex: pageIndex });
            }}> GO  </Button>


        </span>

    </div>
}