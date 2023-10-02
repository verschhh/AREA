import {View} from 'react-native';
import {Box} from '../Box';
import {WeatherSettings} from './WeatherSettings';

export function ActionSettings() {
  return (
    <View>
      <Box title={'Weather Settings'}>
        <WeatherSettings />
      </Box>
    </View>
  );
}