const initalState = {
    menu : [
        {
            id: '1',
            category: 'HTML',
            url: '/posts/HTML'
        },
        {
            id: '2',
            category: 'C++',
            url: '/posts/C++'
        },
        {
            id: '3',
            category: 'CSS',
            url: '/posts/CSS'
        },
        {
            id: '4',
            category: 'JAVA',
            url: '/posts/JAVA'
        },
        {
            id: '5',
            category: 'JS',
            url: '/posts/JS'
        }
    ]
}

const reducer = (state = initalState, action) => {
    switch (action.type) {

        default:
            return state

    }

}


export default reducer