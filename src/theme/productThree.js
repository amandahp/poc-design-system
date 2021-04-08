const baseValueToRem = (multiplicator) => {
  return `${multiplicator / 4}rem`;
};

const defaultValues = {
  fontFamily: {
    primary: 'MyriadPro',
    secondary: 'OpenSans',
  },

  fontWeight: {
    light: 300,
    standard: 400,
    heavy: 700,
  },

  color: {
    primary: '#472D75',
    secondary: '#6F42B6',
    tertiary: '#ED676D',
    neutral: {
      ultraDark: '#333',
      dark: '#666',
      medium: '#999',
      light: '#ddd',
      ultraLight: '#eaeaea',
    },
    action: {
      conversion: {
        static: 'linear-gradient(249.55deg, #E0BF6B 0%, #C89A41 100%)',
        hover: '#C89A41',
        disabled: 'rgba(0, 0, 0, 0.16)',
      },
      navigation: {
        static: '#6F42B6',
        hover: '#472D75',
        disabled: 'rgba(0, 0, 0, 0.16);',
      },
      contrast: {
        static: '#FFFFFF',
        hover: '#E5C5C6',
        disabled: 'rgba(255, 255, 255, 0.24)',
      },
    },
    status: {
      success: '#23B218',
      alert: '#FF9700',
      error: '#DE1616',
    },
    support: {
      whatsapp: '#128C7E',
      facebook: '#0078FF',
      hyperlink: '#122AFE',
    },
  },

  dropShadow: {
    standard: '0px 8px 16px -8px rgba(0, 0, 0, 0.32)',
    far: '0px 16px 32px -8px rgba(0, 0, 0, 0.4)',
    close: '0px 0px 16px -8px rgba(0, 0, 0, 0.16)',
  },

  volume: {
    elevated: '-4px -4px 16px rgba(255, 255, 255, 0.16), 4px 4px 16px rgba(0, 0, 0, 0.24)',
    indented:
      'inset -4px -4px 8px rgba(255, 255, 255, 0.16), inset 2px 2px 8px rgba(0, 0, 0, 0.16);',
  },

  blur: {
    backdropFilter: 'blur(32px)',
  },

  padding: {
    pd0: baseValueToRem(0), // 0px
    pd1: baseValueToRem(1), // 4px
    pd2: baseValueToRem(2), // 8px
    pd3: baseValueToRem(3), // 12px
    pd4: baseValueToRem(4), // 16px
    pd5: baseValueToRem(6), // 24px
    pd6: baseValueToRem(8), // 32px
    pd7: baseValueToRem(10), // 40px
    pd8: baseValueToRem(12), // 48px
    pd9: baseValueToRem(14), // 56px
    pd10: baseValueToRem(16), // 64px
  },

  margin: {
    mg0: baseValueToRem(0), // 0px
    mg1: baseValueToRem(2), // 8px
    mg2: baseValueToRem(4), // 16px
    mg3: baseValueToRem(6), // 24px
    mg4: baseValueToRem(8), // 32px
    mg5: baseValueToRem(10), // 40px
    mg6: baseValueToRem(12), // 48px
    mg7: baseValueToRem(14), // 56px
    mg8: baseValueToRem(16), // 64px
    mg9: baseValueToRem(18), // 72px
    mg10: baseValueToRem(20), // 80px
  },

  cornerRadius: {
    sharp: baseValueToRem(0), // 0px
    primary: baseValueToRem(1), // 4px
    secondary: baseValueToRem(2), // 8px
    pill: baseValueToRem(100), // 100%
  },

  borderWidth: {
    thin: baseValueToRem(1),
    thick: baseValueToRem(2),
  },
};

const primaryStyles = `
    font-family: ${defaultValues.fontFamily.primary};
    text-transform: none;
    font-style: normal;
    letter-spacing:  ${baseValueToRem(0)};
`;
const secondaryStyles = `
    font-family: ${defaultValues.fontFamily.secondary};
    text-transform: none;
    font-style: normal;
    letter-spacing:  ${baseValueToRem(0)};
`;

const theme = {
  ...defaultValues,
  l1: `
    ${primaryStyles}
    font-size: ${baseValueToRem( 24)};
    line-height: ${baseValueToRem( 26)};
    font-weight: ${defaultValues.fontWeight.heavy};
  `,
  l2: `
    ${primaryStyles}
    font-size: ${baseValueToRem( 18)};
    line-height: ${baseValueToRem( 20)};
    font-weight: ${defaultValues.fontWeight.heavy};
  `,
  l3: `
    ${primaryStyles}
    font-size: ${baseValueToRem( 14)};
    line-height: ${baseValueToRem( 16)};
    font-weight: ${defaultValues.fontWeight.heavy};
  `,
  l4: `
    ${primaryStyles}
    font-size: ${baseValueToRem(10)};
    line-height: ${baseValueToRem( 12)};
    font-weight: ${defaultValues.fontWeight.heavy};
  `,
  l5: `
    ${secondaryStyles}
    font-size: ${baseValueToRem(8)};
    line-height: ${baseValueToRem(10)};
    font-weight: ${defaultValues.fontWeight.heavy};
  `,
  l6: `
    ${secondaryStyles}
    font-size: ${baseValueToRem(6)};
    line-height: ${baseValueToRem(8)};
    font-weight: ${defaultValues.fontWeight.heavy};
  `,
  bodyLargeLoose: `
    ${secondaryStyles}
    font-size: ${baseValueToRem(4)};
    line-height: ${baseValueToRem(6)};
    font-weight: ${defaultValues.fontWeight.standard};
  `,
  bodyLargeTight: `
    ${secondaryStyles}
    font-size: ${baseValueToRem(4)};
    line-height: ${baseValueToRem(5)};
    font-weight: ${defaultValues.fontWeight.standard};
  `,
  bodyMediumLoose: `
    ${secondaryStyles}
    font-size: ${baseValueToRem(3.5)};
    line-height: ${baseValueToRem(6)};
    font-weight: ${defaultValues.fontWeight.standard};
  `,
  bodyMediumTight: `
    ${secondaryStyles}
    font-size: ${baseValueToRem(3.5)};
    line-height: ${baseValueToRem(4)};
    font-weight: ${defaultValues.fontWeight.standard};
  `,
  auxiliarSmall: `
    ${secondaryStyles}
    font-size: ${baseValueToRem(3)};
    line-height: ${baseValueToRem(4)};
    font-weight: ${defaultValues.fontWeight.standard};
  `,
  auxiliarMini: `
    ${secondaryStyles}
    font-size: ${baseValueToRem(2.5)};
    line-height: ${baseValueToRem(4)};
  `,
  overline: `
    ${secondaryStyles}
    font-size: ${baseValueToRem(2.5)};
    line-height: ${baseValueToRem(4)};
    letter-spacing:  ${baseValueToRem(0.2)};
    text-transform: uppercase;
    font-weight: ${defaultValues.fontWeight.standard};
  `,
  action: `
    ${secondaryStyles}
    font-size: ${baseValueToRem(3.5)};
    line-height: ${baseValueToRem(4)};
    font-weight: ${defaultValues.fontWeight.standard};
`,
};

export default theme;
