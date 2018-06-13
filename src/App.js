import React, { Component } from "react";
import friendCard from "./components/friendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav  from "./components/Nav";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friendCard => {
      friendCard.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map 
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>Oodels of Poodles</Title>
        {this.state.friends.map(card => (
          <friendCard
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;