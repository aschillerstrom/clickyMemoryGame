import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard
      
      image={friends[0].image}
      
    />
    <FriendCard
      
      image={friends[1].image}
      
    />
    <FriendCard
      
      image={friends[2].image}
      
    />
  </Wrapper>
);

export default App;

