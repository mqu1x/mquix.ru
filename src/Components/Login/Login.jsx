import style from './Login.module.scss';

const Login = ({ openLogin, setOpenLogin }) => {
    return (
        <div className={style.popup}>
            <span onClick={() => setOpenLogin(!openLogin)} className={style.close}>
                &#x2715;
            </span>
            <h1>Войти</h1>
            <form className={style.form}>
                <input placeholder='Email' className={style.inputLogin} type='email' />
                <input placeholder='Пароль' className={style.inputLogin} type='password' />
                <input value={'Войти'} className={(style.inputLogin, style.submit)} type='submit' />
                <p>
                    Ещё нет аккаунта?
                    <a href='#'> Регистрация</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
