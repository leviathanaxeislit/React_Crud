import axios from 'axios';

const Delete = async () => {
    try {
        const resp = await axios.delete('https://jsonplaceholder.typicode.com/todos/1')
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export default Delete