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
    textMedium: `0 0 60px ${darktheme.colors.text}33`,
    textLarge: '',

    primarySmall: `0 0 20px ${darktheme.colors.primary}E6`,
    primaryMedium: `0 0 50px ${darktheme.colors.primary}40`,
    primaryLarge: `0 0 70px ${darktheme.colors.primary}33`,

    secundarySmall: `0 0 20px ${darktheme.colors.secundary}99`,
    secundaryMedium: `0 0 50px ${darktheme.colors.secundary}40`,
    secundaryLarge: `0 0 70px ${darktheme.colors.secundary}33`,

    errorSmall: `0 0 40px ${darktheme.colors.error}80`,

    successmall: `0 0 40px ${darktheme.colors.success}80`,

};

export default darktheme;