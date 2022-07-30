const axios = require('axios');

const Update = async() => {
    const updatedTodo = {
        id: 1,
        userId: 1,
        title: 'Updated task title',
        completed: true
    }
    try {
        const resp = await axios.put('https://jsonplaceholder.typicode.com/todos/1', updatedTodo);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }

}

export default  Update