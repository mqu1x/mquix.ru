import style from './Header.module.scss';
import { useState } from 'react';
import { LuMoon } from 'react-icons/lu';
import { LuSun } from 'react-icons/lu';

const Header = () => {
    const [theme, setTheme] = useState('dark');
    const isDark = window.matchMedia('(prefers-icon-scheme: dark)').matches;
    const themeMode = ['dark', 'light'];
    return (
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
                <button>Войти</button>
                <button>Регистрация</button>

                {/* <div onClick={() => setTheme(!theme)} className={style.theme}>
                    {themeMode.map((m, i) => (
                        theme === 'dark' ? <LuSun size={30} /> : <LuMoon size={30} />}
                    ))}
                    
                </div> */}
            </div>
        </header>
    );
};

export default Header;
