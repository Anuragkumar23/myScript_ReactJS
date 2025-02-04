import { useSelector, useDispatch } from 'react-redux'
import { updateWallet } from '../Store';

export default function Payment() {
    const data =  useSelector(state => state.user)
    const ref =  useDispatch();
    const handleClick = () => {
        ref(updateWallet(5000))
    }
    return (
        <>
        <h1>Payment Component</h1>
        <h3>{data.username}, {data.balance}</h3>
        <button onClick={handleClick}>Pay</button>
        </>
    )
}
