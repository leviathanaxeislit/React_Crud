const axios = require('axios');


const Create = async (req, res) =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data);
  
  }
  


export default Create