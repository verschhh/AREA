import {View} from 'react-native';
import Dropdown from './Dropdown';
import {WeatherData} from './Interfaces';

const data = require('../config/reactions.json');

type ReactionT = {
  debugScreen?: boolean;
  debugConsole?: boolean;
  weatherData?: WeatherData;
};

function ReactionList({
  debugConsole,
  debugScreen,
  weatherData,
}: ReactionT): JSX.Element {
  return (
    <View>
      <Dropdown
        label="Reaction List"
        data={data.reactions}
        debugConsole={debugConsole}
        debugScreen={debugScreen}
        weatherData={weatherData}
      />
    </View>
  );
}

export default ReactionList;
