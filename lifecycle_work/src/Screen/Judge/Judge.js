import React from 'react';

export default class Judge extends React.Component {
    constructor(props) {
     super(props)
   
     this.state = {stars: 0, available: false, 
    }
    }
   
    // static getDerivedStateFromProps(p, s){
    //     console.log(s.applaud)
    // }


    applaud() {

      this.props.giveApplaud();
      console.log(this.props.giveApplaud());
    }
    provideStars() {
      const {stars} = this.state;
   
      this.setState({stars: stars + 1})
 }

 render() {
   const {stars, available} = this.state;
   return (
     <div>
       <button type="button" onClick={this.applaud.bind(this , 'Happy' ) }>
        Appreciate performance
       </button>
       <button type="button" onClick={this.provideStars.bind(this)}>
        Provide stars
       </button>

       Kid is available: {available}

       Stars gained: {stars}
     </div>
   );
 }
}
