let state =
    {
        profilePage: {
            posts: [
                {id: 1, message: "Hello", likesCount: 0},
                {id: 2, message: "Is there any body in there", likesCount: 223},
                {id: 3, message: "I think", likesCount: 13}],
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Pasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Alex"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Fine"},
                {id: 4, message: "Me too"},
                {id: 5, message: "Okay gb"},
                {id: 6, message: "gb)"}
            ],
        },
    }

export default state;