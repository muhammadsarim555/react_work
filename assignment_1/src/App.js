import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = "Hello World";
    const obj = {name: "Hello World Object"};
    const data = ['We', 'are', 'United'] //Show these in seperate tags
    const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
    const complex = [{company: 'XYZ', jobs: ['Javascript' , 'React']}, 
    {company: 'ABC', jobs: ['AngularJs' , 'Ionic']}]
    
    

    return (
      <div className="App">
        <ul> 
          <li> {name} </li>
           </ul>
            <hr/>

        <ul> 
          <li>
            {obj.name}
            </li>
        </ul>
        <hr/>
        <ol>

            {data.map((v ,i)=>{
              // console.log(v);
              return <li>{v}</li>
            })}
          </ol>
            <hr/>
            
            <ul>

                {
                  list.map(function(li){
                    // console.log(li.name);
                   return  <li>{li.name}</li>
                  })
                } 
                </ul> 
                <hr/>

                {/* <ul>
                    
                      {
                      complex.map((data)=>{
                        // console.log("Company" , data.company)
                        const a = data.company;
                        let jobs = data.jobs; 
                        // return <li>Company <s`trong>{a} </strong> </li>

                         jobs.map((dataV)=>{
                          console.log("company  " , a , "Jobs" , dataV);
                          // return
                           <li>Company {a} Job Title {dataV}  </li>
                        })
                      })
                    }
                    
                  </ul> */}
{
                  complex.map(c =>{
                    return <ul>
                      <li>{c.company }
                    {   c.jobs.map( job => {
           return <span>{job}</span>
         }) }
                        </li>
                    </ul>
                  })
}

      </div>
    );
  }
}

export default App;
