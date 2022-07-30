



const axios = require('axios');


const Post = async () =>{
    const newTodo = { 
        userId: 1,  
        title: 'Wash my hands',
        completed: false
    }

    try {
        const resp = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }


}



export default Post