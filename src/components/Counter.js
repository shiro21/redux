import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { increaseCount, decreaseCount } from "../reducers/counter";


const Counter = () => {

    const dispatch = useDispatch();
    const { count } = useSelector(state => state.counter);

    const increase = () => {
        dispatch(increaseCount(count + 1));
    };
    const decrease = () => {
        dispatch(decreaseCount(count - 1));
    }

    return (
        <div>
            <Link to="/login">로그인 페이지 이동 !</Link> <br />
            <div style={{marginBottom: "1rem"}}></div>
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button> <br /><br />
            {
                count === 0 ? (
                    <span>카운트{count} [카운트가 커질수록 글자크기가 커집니다. (음수도 마찬가지)]</span>
                ) : (
                    <span style={{fontSize: 2 * Math.abs(count) + "px"}}>카운트{count}</span>
                )
            }
        </div>
    );
};

export default Counter;