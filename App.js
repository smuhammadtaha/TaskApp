import React from 'react';
import {SafeAreaView, ScrollView, useColorScheme, View} from 'react-native';
import Card from './components/card';
import Post from './data/post.json';
import User from './data/user.json';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const post = Post.map(val => {
    const user = User.filter(user => user.id == val.user_id);
    return {
      ...val,
      user,
    };
  });
  return (
    <SafeAreaView
      style={{
        backgroundColor: isDarkMode ? '#0000' : '#F3F8FB',
      }}>
      <ScrollView>
        {post.map((val, index) => (
          <Card post={val} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
