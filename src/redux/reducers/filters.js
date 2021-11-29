import produce from "immer";

const initialState = {
    category: 0,
    sortBy: 'popular',
};

const filters = (state = initialState, action) => produce(state, draft => {
    if (action.type === 'SET_SORT_BY') {
        draft.sortBy = action.sortType;
    };
    if (action.type === 'SET_CATEGORY') {
        draft.category = action.catIndex;
    }

})

export default filters;