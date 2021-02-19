const THEME_LIGHT = {};

THEME_LIGHT.colors = {
    background: '#FFFFFF',
    off: '#F6F6F6',
    border: '#E6E6E6',
    input: '#F9F9F9',
    inputText: '#666666',
    text: '#242424',
    textInvert: '#FFFFFF',

    primary: '#1F71FA',
    primaryHover: '#055BF0',
    primaryActive: '#EBF2FE',

    error: '#F32959',
    errorHover: '#E0003C',
    errorActive: '#FFEBF0',

    success: '#00E0A5',
    successHover: '#00CC96',
    successActive: '#EBFFFA',

    warning: '#F4B73E',
    warningHover: '#F2A918',
    warningActive: '#FEF8EC'
};

THEME_LIGHT.shadows = {
    textSmall: `0 2px 5px ${THEME_LIGHT.colors.text}17`,
    textMedium: `0 2px 20px ${THEME_LIGHT.colors.text}1F`,
    textLarge: `0 6px 24px ${THEME_LIGHT.colors.text}1F`,

    primarySmall: `0 2px 5px ${THEME_LIGHT.colors.primary}4D`,
    primaryMedium: `0 2px 20px ${THEME_LIGHT.colors.primary}66`,
    primaryLarge: `0 6px 24px ${THEME_LIGHT.colors.primary}66`,

    errorSmall: `0 2px 5px ${THEME_LIGHT.colors.error}4D`,
    errorMedium: `0 2px 20px ${THEME_LIGHT.colors.error}66`,
    errorLarge: `0 6px 24px ${THEME_LIGHT.colors.error}66`,

    warningSmall: `0 2px 5px ${THEME_LIGHT.colors.warning}4D`,
    warningMedium: `0 2px 20px ${THEME_LIGHT.colors.warning}66`,
    warningLarge: `0 6px 24px ${THEME_LIGHT.colors.warning}66`,

    successSmall: `0 2px 5px ${THEME_LIGHT.colors.success}4D`,
    successMedium: `0 2px 20px ${THEME_LIGHT.colors.success}66`,
    successLarge: `0 6px 24px ${THEME_LIGHT.colors.success}66`
};

export default THEME_LIGHT;