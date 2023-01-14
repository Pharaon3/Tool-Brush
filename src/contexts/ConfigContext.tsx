import { createContext, ReactNode } from 'react';

// Project Import
import defaultConfig from 'config';
import useLocalStorage from 'hooks/useLocalStorage';

// Types
import { PaletteMode } from '@mui/material';
import { CustomizationProps } from 'types/config';

// Initial State
const initialState: CustomizationProps = {
  ...defaultConfig,
  onChangeMenuType: () => {},
  onChangePresetColor: () => {},
  onChangeLocale: () => {},
  onChangeRTL: () => {},
  onChangeContainer: () => {},
  onChangeFontFamily: () => {},
  onChangeBorderRadius: () => {},
  onChangeOutlinedField: () => {},
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

type ConfigProviderProps = {
  children: ReactNode;
};

function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useLocalStorage('config-tepe', {
    fontFamily: initialState.fontFamily,
    borderRadius: initialState.borderRadius,
    outlinedFilled: initialState.outlinedFilled,
    navType: initialState.navType,
    presetColor: initialState.presetColor,
    locale: initialState.locale,
    rtlLayout: initialState.rtlLayout,
  });

  const onChangeMenuType = (navType: PaletteMode) => {
    setConfig({
      navType,
    });
  };

  const onChangePresetColor = (presetColor: string) => {
    setConfig({
      presetColor,
    });
  };

  const onChangeLocale = (locale: string) => {
    setConfig({
      locale,
    });
  };

  const onChangeRTL = (rtlLayout: boolean) => {
    setConfig({
      rtlLayout,
    });
  };

  const onChangeContainer = () => {
    setConfig({
      container: !config.container,
    });
  };

  const onChangeFontFamily = (fontFamily: string) => {
    setConfig({
      fontFamily,
    });
  };

  const onChangeBorderRadius = (event: Event, newValue: number | number[]) => {
    setConfig({
      borderRadius: newValue as number,
    });
  };

  const onChangeOutlinedField = (outlinedFilled: boolean) => {
    setConfig({
      outlinedFilled,
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        onChangeMenuType,
        onChangePresetColor,
        onChangeLocale,
        onChangeRTL,
        onChangeContainer,
        onChangeFontFamily,
        onChangeBorderRadius,
        onChangeOutlinedField,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };
