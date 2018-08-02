function getData() {
    return {
        type: 'FETCH'
    }
}

function getSuccess(data) {
    return {
        type: 'FETCH_SUCCESS',
        payload: data
    }
}

function getFailed(err) {
    return {
        type: 'FAILED',
        payload: err
    }
}

export function fetchData() {
    const thunk = async function thunk(dispatch) {
        try {
            dispatch(getData());
            const body = await fetch("http://jsonplaceholder.typicode.com/users")
            const res = await body.json();
            console.log("Thunk", res);
            dispatch(getSuccess(res));
        }
        catch(err) {
            dispatch(getFailed(err));
        }
    }
    return thunk;
}