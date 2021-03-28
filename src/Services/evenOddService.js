import axios from 'axios';


const checkEvenOrOdd = async ( params ) =>{

    const data = await axios.post("http://localhost:8001/isEvenorOdd",{
        stream : params
    })

    return data ;
}

export default checkEvenOrOdd ;