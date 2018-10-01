import React from 'react';
import '../../App.css'; 

export default class Kid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      emotion: 'nervous',
      danceSteps: [],
      currentStepIndex: 0,
      startedPerforming: false

    };
    
  }

  static getDerivedStateFromProps(props, state) {
    const { furtherSteps , applaud , star } = props;
    const { danceSteps , emotion } = state;
    console.log(props.star);
    
    if (danceSteps.length < 5) {
      danceSteps.push(...furtherSteps)
    }

    // return 
    //     emotion : applaud

    return {
      danceSteps,
      startedPerforming: danceSteps.length === 5 ? 
      
      true : false,
      emotion: applaud ? applaud : emotion,
      startedPerforming : props.star === 5 ? this.qualified() : console.log("tesing")
    }

  }

  
  componentDidMount() {

    this.setState({
      danceSteps: ['step1', 'step2'],
    })

  }

  componentDidUpdate(prevProps) {

    if (prevProps.stars === 5) {
      this.qualified();
      alert("it has been done")
    }
  }

  qualified() {

    this.setState({
      startedPerforming: false,
      qualified: true,
      danceSteps: []
    })
  }

  componentWillUnmount() {

    const { judge } = this.props;
    judge(false);
  }

// componentDidMount(p){
// console.log(p.star , "p.star")
// }


  render() {
    const { dressColor ,applaud } = this.props;
    const { danceSteps, emotion, startedPerforming, currentStepIndex, qualified } = this.state;
    // console.log(this.props.applaud);
    return (
      <div>
        <div>dressColor: {dressColor} </div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
        <div>Emotion: {emotion} </div>
        {
          startedPerforming ?
            <div>
              Current Step: {danceSteps[currentStepIndex]}
              <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>Perform Next Step</button>
            </div>
            :
            qualified ? <p>You are Qualified</p> : null
        }
      </div>
    );
  }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };