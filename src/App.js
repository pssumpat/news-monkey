import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {progress:0}

  setProgress = (progress) => {
    this.setState({progress:progress})
  } 

  render() {
    let pageSize = 6;
    let country = 'in';
    return (
      <BrowserRouter>
      <LoadingBar
      height={4}
        color='#f11946'
        progress={this.state.progress}
      />
      <Navbar title="News Monkey"/>
        <Routes>
            <Route exact path='/' element={<News country={country}setProgress={this.setProgress}   key='general' apiKey = {this.apiKey} category='general' pageSize={pageSize} />} />
            <Route exact path='/business' element={<News country={country}setProgress={this.setProgress}  key='business' apiKey = {this.apiKey} category='business' pageSize={pageSize} /> }/>
            <Route exact path='/entertainment' element={<News country={country}setProgress={this.setProgress}  key='entertainment' apiKey = {this.apiKey} category='entertainment' pageSize={pageSize} /> }/>
            <Route exact path='/general' element={<News country={country}setProgress={this.setProgress}  key='general' apiKey = {this.apiKey} category='general' pageSize={pageSize} /> }/>
            <Route exact path='/health' element={<News country={country}setProgress={this.setProgress}  key='science' apiKey = {this.apiKey} category='health' pageSize={pageSize} /> }/>
            <Route exact path='/science' element={<News country={country}setProgress={this.setProgress}  key='science' apiKey = {this.apiKey} category='science' pageSize={pageSize} /> }/>
            <Route exact path='/sports' element={<News country={country}setProgress={this.setProgress}  key='sports' apiKey = {this.apiKey} category='sports' pageSize={pageSize} /> }/>
            <Route exact path='/technology' element={<News country={country}setProgress={this.setProgress}  key='technology' apiKey = {this.apiKey} category='technology' pageSize={pageSize} /> }/>
        </Routes>
      </BrowserRouter>
    )
  }
}
