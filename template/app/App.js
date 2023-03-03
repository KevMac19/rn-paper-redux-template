import React, {createContext, useMemo, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'redux-actions';
import {Provider as PaperProvider} from 'react-native-paper';
import {getLocales} from 'react-native-localize';
import Toast from 'react-native-toast-message';

import {i18n} from 'i18n';
import {DoubleTapToClose} from 'utils';
import {MainStackNavigation} from 'navigation';
import {appTheme} from 'theme';

export const LocalizationContext = createContext();

const App = () => {
  // INFO: get local language code
  const languageCode = getLocales()[0].languageCode;
  const [locale, setLocale] = useState(languageCode);

  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    // INFO: provider for wrapping our app into redux-state-management
    <Provider store={store}>
      {/*  INFO: persist gate for persisting app state */}
      <PersistGate persistor={persistor}>
        {/* INFO: localization context to wrap our app to i18n */}
        <LocalizationContext.Provider value={localizationContext}>
          <PaperProvider theme={appTheme}>
            <View style={styles.container}>
              {/* INFO: Android double back press handler */}
              <DoubleTapToClose />
              <MainStackNavigation />
            </View>
            <Toast />
          </PaperProvider>
        </LocalizationContext.Provider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
