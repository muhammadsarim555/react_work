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
    }


    provideStars() {
      const {stars} = this.state;
      const {starMethod} =  this.props;
      this.setState({stars: stars + 1})
      starMethod(stars + 1)
 }

     shouldComponentUpdate(nProp , nState){
       console.log(nState.stars <= 5)
      return nState.stars <= 5
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
