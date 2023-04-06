/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;




function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  
  const [posts, setPosts] = useState<any>();

  useEffect(() => {
    const fetchData = async function () {
      const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.078536&longitude=14.376350&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m');
      const json = await data.json();
      setPosts(json);
      console.log(json)
    };
    fetchData();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function getda(da: string): string{
    return new Date(da).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
  }// "Friday, Jul 2, 2021"


function getcode(){
  if (posts.current_weather.weathercode = 1||2||3 ){
return "Mainly clear, partly cloudy, and overcast"
  }
  if (posts.current_weather.weathercode = 0){
    return "Clear sky"
      }
      
      if (posts.current_weather.weathercode = 45 || 48){
        return "Fog and depositing rime fog"
          }
          if (posts.current_weather.weathercode = 51 || 53 || 55){
            return "Drizzle: Light, moderate, and dense intensity"
              }
              if (posts.current_weather.weathercode = 56||57){
                return "Freezing Drizzle: Light and dense intensity"
                  }
                  if (posts.current_weather.weathercode = 61||63||65){
                    return "Rain: Slight, moderate and heavy intensity"
                      }
                      if (posts.current_weather.weathercode = 66||67){
                        return "Freezing Rain: Light and heavy intensity"
                          }
                          if (posts.current_weather.weathercode = 80||81||82){
                            return "Rain showers: Slight, moderate, and violent"
                              }
                              if (posts.current_weather.weathercode = 95 ){
                                return "Thunderstorm: Slight or moderate"
                                  }
                                  if (posts.current_weather.weathercode = 96||99 ){
                                    return "Thunderstorm with slight and heavy hail"
                                      }

}
  

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
       <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <View
            
            style={{
              flexDirection:"row"
            }}>
              
         <View
      style={{
        width: 200,
          height: 200,
          backgroundColor: 'powderblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
       
      <Text
      style={{fontWeight: 'bold',fontSize: 40}}
      >{posts?.current_weather?.temperature}°C</Text>
    </View>
    <View
      style={{
        width: 200,
          height: 200,
          backgroundColor: 'skyblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent:"flex-start",
        padding:10
      }}>
       
      <Text
      style={{
        textAlign:"left"
        
      }}>{getcode(posts?.current_weather?.weathercode)}</Text>
    </View>
    </View>
    <View
        style={{
          width: 450,
          height: 200,
          flex:1,
          justifyContent:"center",
          backgroundColor: 'lightskyblue',
        
        }}>
          <Text style={{
            textAlign:"center", fontWeight: 'bold',fontSize: 30
          }}>
            {getda(posts?.current_weather?.time)}
          </Text>
        </View>
        
    
       <View
        style={{
          width: 450,
          height: 200,
          backgroundColor: 'cornflowerblue',
          alignItems:"flex-start",
          flexDirection:"row"
        }}
        
      >
        <Image source={require('./img/pngfind.com-wind-png-3264316.png')} 
        style={{width: 200, height: 200,  resizeMode:"contain"}}/>
        <Text style={{
            textAlign:"right", fontWeight: 'bold',fontSize: 35, marginTop:70, marginLeft:40
          }}>{posts?.current_weather?.windspeed} m/s</Text>
      </View>
      <View
        style={{
          width: 450,
          height: 200,
          backgroundColor: 'steelblue',
          flexDirection:'row'
        }}>
          <Image source={require('./img/pngfind.com-sun-path-arrow-png-384443.png')} 
        style={{width: 125, height:50, marginTop:20, marginLeft:5, resizeMode:"contain"}}/>
         <Image source={require('./img/pngfind.com-sun-path-arrow-png-384443.png')} 
        style={{width: 125, height: 125, marginTop:80,  resizeMode:"contain"}}/>
         <Text style={{
            textAlign:"right", fontWeight: 'bold',fontSize: 55, marginLeft:20, marginTop:30
          }}>{posts?.current_weather?.winddirection}°</Text>
       </View>
        
    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
