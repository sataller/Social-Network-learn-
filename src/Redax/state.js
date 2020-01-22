let state = {
    dialogsPage: {
        users: [
            { id: 1, name: "Sandra", avatar:"https://pbs.twimg.com/profile_images/971694451801325568/AOagSo2b_400x400.jpg" },
            { id: 2, name: "Garry", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLl6y42IuQmRZvOPr6gANKZsukGstsJqE7WHIkn_l9YOvnDlX-w&s"},
            { id: 3, name: "Voland", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wivRhKgF8R2lpCwtKvPCO6qTbYeaBAAwUz-wKvuVfUcOMAE_5w&s" },
            { id: 4, name: "Gerald", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwqeopxBbNCnm9r_Nlvkx2qS-2PuDU_ulPVEkws6yBm-u1WMR1&s" },
        
        ],
        messages: [
            { message: "Hi!", id: 1 },
            { message: "How are you&", id: 2 },
            { message: "Good day!", id: 3 }

        ]
    },
    profilePage: {
        posts: [
            { id:1, text: "Hello friend!", lickCount: "10" },
            { id:2, text: "My first post", lickCount: "15" }
        ]
    }
}

export let addPost = (postMessage) =>{
debugger;
    let newPost = {
        id:3,
        text: {postMessage},
        lickCounter:0,
    };

    state.profilePage.posts.push(newPost);
}

export default state

