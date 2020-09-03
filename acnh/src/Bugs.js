import { base } from './base';
const Bugs = () => {
    base().get('art')
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err.response));
}
export default Bugs;