import React from 'react';


export default class Teacher extends React.Component {
 sendDataToKid() {
	const furtherSteps = ['step3', 'step4', 'step5'];
	//Send this data to Kid.js
// this.setState({furtherState})
this.props.updateSteps(furtherSteps)
console.log(furtherSteps , "teacher js")

}


 render() {
   
   return (
     <button onClick={this.sendDataToKid.bind(this)}>Get Help From Teacher</button>
   );
 }
}
