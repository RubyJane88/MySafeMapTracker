import React, {FC, useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import axios from 'axios';
import {getTest} from "../areas/area-service";

const CityList: FC = () => {
    useEffect(() => {
     fetch()
    });

const fetch =  async () => {
   const {data}   = await getTest()
    console.log( data);
};

    return (
        <View>

        </View>
    )
};

export default CityList;
