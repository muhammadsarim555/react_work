import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fb_Post from './Screens/Fb_Post/Fb_Post';

class App extends Component {
  constructor(){
    super()
    this.state = {
      post: {
        createdBy: 'Muhammad Sarim',
        avatar: 'https://avatars3.githubusercontent.com/u/36129452?s=400&u=91883b50e2a98b83041a144fdd254e4c4e62f4e7&v=4',
        description: "Microsoft Surface Pro 4 in pics ",
        images: ['https://www.themobileindian.com/resizer.php?src=http://image.themobileindian.com/images/picture-story/2015/573/Microsoft-Surface-Pro-4-1.jpg&w=940&h=544&q=10',
        'https://www.themobileindian.com/resizer.php?src=http://image.themobileindian.com/images/picture-story/2015/573/Microsoft-Surface-Pro-4-8.jpg&w=940&h=544&q=10', 
         'https://www.themobileindian.com/resizer.php?src=http://image.themobileindian.com/images/picture-story/2015/573/Microsoft-Surface-Pro-4-5.jpg&w=940&h=544&q=10',
          'https://www.themobileindian.com/resizer.php?src=http://image.themobileindian.com/images/picture-story/2015/573/Microsoft-Surface-Pro-4-7.jpg&w=940&h=544&q=10',
           'https://www.themobileindian.com/resizer.php?src=http://image.themobileindian.com/images/picture-story/2015/573/Microsoft-Surface-Pro-4-9.jpg&w=940&h=544&q=10', 
           'https://www.themobileindian.com/resizer.php?src=http://image.themobileindian.com/images/picture-story/2015/573/Microsoft-Surface-Pro-4-10.jpg&w=940&h=544&q=10', 
           'https://www.themobileindian.com/resizer.php?src=http://image.themobileindian.com/images/picture-story/2015/573/Microsoft-Surface-Pro-4-11.jpg&w=940&h=544&q=10', 
           'https://www.themobileindian.com/resizer.php?src=http://image.themobileindian.com/images/picture-story/2015/573/Microsoft-Surface-Pro-4-4.jpg&w=940&h=544&q=10'],

        createdAt: Date.now(),
        likes: ['Faraz' , 'Ali' , 'Talha' , 'Rohail'],
      }
      
    }
  }

  render() {
    const {post} = this.state;
    console.log(this.state.post.createdAt)
    return (
      <div className="App">
          <Fb_Post post={post} />
      </div>
    );
  }
}

export default App;
