const initState = {
    posts: [
        {id:'1', title:'Squirtle laid an egg', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:'2', title:'Charmander laid an egg', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:'3', title:'a Helix fossil was found', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if( action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts:newPosts
        };
    }
    
    return state;

}

export default rootReducer;