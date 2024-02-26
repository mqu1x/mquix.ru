import style from './Header.module.scss';
import { useState } from 'react';
import { LuMoon } from 'react-icons/lu';
import { LuSun } from 'react-icons/lu';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Header = () => {
    const [theme, setTheme] = useState('dark');
    // const isDark = window.matchMedia('(prefers-icon-scheme: dark)').matches;

    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);

    const themeMode = ['dark', 'light'];
    return (
        <>
            <header>
                <div className={style.menu}>
                    <ul className={style.menuItems}>
                        <li>Категории</li>
                        <li>Контакты</li>
                        <li>О нас</li>
                    </ul>
                    <input type='text' placeholder='Найти на mquix' />
                </div>
                <div className={style.logo}>
                    <h1>mquix</h1>
                </div>
                <div className={style.signUp}>
                    <button onClick={() => setOpenLogin(!openLogin)}>Войти</button>
                    {openLogin ? <Login openLogin={openLogin} setOpenLogin={setOpenLogin} /> : ''}
                    <button onClick={() => setOpenRegister(!openRegister)}>Регистрация</button>
                    {openRegister ? (
                        <Register openRegister={openRegister} setOpenRegister={setOpenRegister} />
                    ) : (
                        ''
                    )}
                    {themeMode.map((mode, i) => (
                        <div key={i} className={style.theme}>
                            {theme === mode ? <LuSun /> : <LuMoon />}
                        </div>
                    ))}
                </div>
            </header>
            <div className={style.marqueeContainer}>
                <div className={style.marqueeContent}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt modi
                    provident, voluptas molestiae ipsam corrupti officia eligendi minima in illum
                    velit placeat tempora, sit doloribus laboriosam labore exercitationem minus
                    vitae?
                </div>
            </div>
        </>
    );
};

export default Header;
