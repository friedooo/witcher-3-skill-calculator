import filters from '../reducers/filters';

const initialState = {
    category: 0,
    sortBy: 'popular',
};


it('switch category to 2', () => {
    let action = {
        type: 'SET_CATEGORY', catIndex: 2
    }
    let newState = filters(initialState, action);
    expect(newState.category).toBe(2);
});

it('switch sortType to price', () => {
    let action = {
        type: 'SET_SORT_BY', sortType: 'price'
    }
    let newState = filters(initialState, action);
    expect(newState.sortBy).toBe('price');
});