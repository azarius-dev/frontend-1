const darktheme = {};

darktheme.colors = {
    background: '#0C0815',
    off: '#1B0211',
    text: '#FFFFFF',

    primary: '#F96CC3',
    primaryHover: '#055BF0',
    primaryActive: '#EBF2FE',

    secundary: '#50FEF4',

    error: '#FF3672',
    success: '#50FEF4'

};

darktheme.shadows = {

    textSmall: `0 0 20px ${darktheme.colors.text}99`,
    textMedium: `0 0 60px ${darktheme.colors.text}4D`,
    textLarge: '',

    primarySmall: `0 0 30px ${darktheme.colors.primary}99`,
    primaryMedium: `0 0 70px ${darktheme.colors.primary}40`,
    primaryLarge: '',

    secundarySmall: `0 0 40px ${darktheme.colors.secundary}66`,

    errorSmall: `0 0 40px ${darktheme.colors.error}80`,

    successmall: `0 0 40px ${darktheme.colors.success}80`,

};

export default darktheme;