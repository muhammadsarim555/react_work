import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      post: {
        createdBy: 'Muhammad Sarim',
        avatar: 'https://avatars3.githubusercontent.com/u/36129452?s=400&u=91883b50e2a98b83041a144fdd254e4c4e62f4e7&v=4',
        description: "Hp eliteBook series images",
        images: ['https://cdn.gsmarena.com/imgroot/news/18/08/oppo-f9-pro-india-announcement/-728/gsmarena_000.jpg', 'https://st1.bgr.in/wp-content/uploads/2018/08/oppo-f9-back.jpg', 'https://www.themobileindian.com/resizer.php?src=/public/uploads/news/2018/08/23344/oppo-1.jpg&w=735&h=425', 'https://static.digit.in/product/3f50d89b928a93e38b72e7dc2f7d54c8a26d52d0.jpeg', 'https://i.gadgets360cdn.com/products/large/1534834178_635_oppo_f9_pro.jpg', 'https://propakistani.pk/price/wp-content/uploads/2018/07/ComingSoon_Pic-copy-5.jpg', 'https://i.ytimg.com/vi/SenBAVnyCyU/maxresdefault.jpg', 'https://static.toiimg.com/thumb/msid-65617343,width-640,resizemode-4/65617343.jpg'],
        createdAt: new Date().toLocaleDateString(),
        likes: ['Faraz' , 'Ali' , 'Talha' , 'Rohail'],
      }
      
    }
  }

  render() {
    const {post} = this.state;
    console.log(this.state.post.createdAt)
    return (
      <div className="App">
          <img src={post.images[7]} alt="logo" />
      </div>
    );
  }
}

export default App;
