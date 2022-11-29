import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../reducers/auth";

import style from '../styles/login.module.css';


const Login = () => {

    const dispatch = useDispatch();
    const navigation = useNavigate();
    const auth = useSelector(state => state.auth);
    const total = useSelector(state => state);
    console.log(total);

    const [formData, setFormData] = useState({ id: "", password: "" });
    const { id, password } = formData;

    const onChange = (e) => {
        const { target: { value, name } } = e;

        if (name === "id") setFormData({...formData, id: value});
        else if (name === "password") setFormData({...formData, password: value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(formData))
        navigation("/login");
    }

    return (
        <>
            <Link to="/">카운트 페이지 이동 !</Link> <br />
            <form onSubmit={onSubmit} className={style.login_form}>
                <input type="text" name="id" value={id} onChange={onChange} />
                <input type="password" name="password" value={password} onChange={onChange} />
                <input type="submit" value="저장" />
            </form>

            {
                auth && <div>ID : {auth.id} <br /> PASSWORD : {auth.password}</div>
            }
        </>
    );
}

export default Login;