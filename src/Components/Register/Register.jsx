import React from 'react';
import style from './Register.module.scss';

const Register = ({ openRegister, setOpenRegister }) => {
    return (
        <div className={style.popup}>
            <span onClick={() => setOpenRegister(!openRegister)} className={style.close}>
                &#x2715;
            </span>
            <h1>Регистрация</h1>
            <form className={style.form}>
                <input placeholder='Email' className={style.inputLogin} type='email' />
                <input placeholder='Пароль' className={style.inputLogin} type='password' />
                <input
                    value={'Зарегистрироваться'}
                    className={(style.inputLogin, style.submit)}
                    type='submit'
                />
                <p>
                    Уже есть аккаунт?
                    <a href='#'> Войти</a>
                </p>
            </form>
        </div>
    );
};

export default Register;
