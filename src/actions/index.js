//import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

////original version
// export const fetchPosts =  () => {
//    return ( async (dispatch, getState) => {
//     const response = await jsonPlaceHolder.get('/posts');
    
//     dispatch({type: 'FETCH_POST', payload: response});
//    });
// };

//short version
export const fetchPosts =  () => async dispatch=> {
     const response = await jsonPlaceHolder.get('/posts');
     dispatch({type: 'FETCH_POST', payload: response.data});
    };



export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER', payload: response.data
    });
};
// export const fetchUser = (id) =>  dispatch =>{ _fetchUser(id, dispatch);}

// const _fetchUser = _.memoize( async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({
//         type: 'FETCH_USER', payload: response.data
//     });
// });

export const fetchPostsAndUsers = () => async dispatch  => {
    console.log('About to fetch posts');
  await  dispatch(fetchPosts());
  console.log('fetched posts!');
};