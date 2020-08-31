import axios from 'axios';
const Bugs = () => {
    console.log('i got here bo')
    axios.get('http://acnhapi.com/v1/bugs/')
        .then(res => {
            console.log('i got here boss!')
            console.log(res.data)
        })
        .catch(err => console.log(err.response));
}
export default Bugs;