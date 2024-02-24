import React, { useState } from 'react';

const Theme = () => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const [theme, setTheme] = useState(isDark);
    return <div>Theme</div>;
};

export default Theme;
