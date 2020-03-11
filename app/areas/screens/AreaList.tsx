import React, {FC, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {getAreas} from '../area-service';
import {IAreaModel} from '../area-model';

const AreaList: FC = () => {
  const [areas, setAreas] = useState<IAreaModel[]>([]);

  useEffect(() => {
    fetch();
  });

  const fetch = async () => {
    const {data} = await getAreas();
    setAreas(data);
  };

  return (
    <View>
      {areas.map(a => (
        <Text> {a.countryregion} </Text>
      ))}
    </View>
  );
};

export default AreaList;
