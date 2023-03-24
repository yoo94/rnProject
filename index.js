/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import list from './src/searchList.tsx';

AppRegistry.registerComponent(appName, () => list);
