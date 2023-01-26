import logo from './logo.svg';

import './App.css';
import Refsdemo from './component/refsdemo';
import Focusinput from './component/focusinput';
import Hero_for_error from './component/Hero_for_error'
import ErrorBoundary from './component/error_boundary';
import Clickcounter from './component/clickcounter'
import Hovercounter from './component/hovercounter';
import Clickcounter2 from './component/clickcounter2';
import Hovercounter2 from './component/hovercounter2';
import User from './component/user' 
import Counter2 from './component/counter2'
import Componentc from './component/componentc';
import { Provide } from './component/usercontext';
import Hookcounter_three from './component/hookcounter_three';
import Cordinate_x_y from './component/cordinate_x_y';
import Useeffect from './component/interval_counter_with_useeffect'
import Interval_class_counter from './component/Interval_class_counter';
import Hookcounter_for_me from './component/hookcounter_for_me';
import Fetching_data_using_useeffect from './component/fetching_data_using_useeffect';
import Hook_part2 from './component/hook_part2';
import Hook_functional_part2 from './component/hook_functional_part2';
import Prevstate from './component/prevstate';
import Naming from './component/naming';
/*

import Clicker from  './component/functionClick'
import Classclick from './component/classClick'
import EventBind from './component/EventBind';
import Parentcomponent  from './component/parentcomponent';
import Conditional from './component/condtional';
import Namelist from './component/Namelist'
//import StyleSheet from './component/stylesheet'
import Form from './component/loginpage'

import CounterApp from './component/counter'

import Anotherwise from './component/another.js'
import Greet from './component/Greet.js'
import {Welcome,Welcomee } from './component/welcome.js'
import Hwllo from './component/hello.js'
import helllo from './component/new.js'
import Hi from './component/sami.js'

import Subscribe from './component/subscribe'; 
*/
function App() {
  return (
    <div className="App">

    <Naming/>
 {/*
   <Prevstate/>  
 <Hook_functional_part2/>
 <Hook_part2/>
<Fetching_data_using_useeffect/>
 
<Interval_class_counter/>
<Hookcounter_for_me/>
     

       <Useeffect/>
<Cordinate_x_y/>

      
      <Hookcounter_three/>
       
    <Provide value={"kingo"}>
    <Componentc />
    </Provide>
      
       HEY GIVE ATTENTION FOR THE SYNTAX IN THE RENDER FUNCTION 
       RENDER={()=>()} AFTER THE ARROW IT IS NOT A CURLY BRACE
       
      <Counter2  render={(count,handler)=>(
        <Clickcounter2 count={count} handler={handler}/>
  )}/>
      <Counter2  render={(count,handler)=>(
        <Hovercounter2 count={count} handler={handler}/>
  )}/>
  */}
        {/*
      <Clickcounter2/>
      <Hovercounter2/>
      <User render={(islogedin)=>islogedin?"aman":"belete"}/>
    
      <Clickcounter name="AMAN"/>
      <Hovercounter name="AMAN"/>
       
      //THIS STARTS FROM THIS PART FOR ERRORbOUNDARY TUTORIAL
<ErrorBoundary>
<Hero_for_error heroname="batman"/>
</ErrorBoundary>
<ErrorBoundary>
<Hero_for_error heroname="superman"/>
</ErrorBoundary>
<ErrorBoundary>
<Hero_for_error heroname="joker"/>
</ErrorBoundary>
  //UP TO THIS PART 
<Focusinput/>
<Refsdemo/>
<Form/>//THIS IS THE PAGE THAT I MADE USING CSS FOR FORM 
      <Form />
      <StyleSheet primary={true}/>
      <Namelist/>
      <Conditional/>

      <Parentcomponent/>
      
<EventBind/>
       <Clicker/>
      <Classclick/>
     <Greet />
        <h1> It is {new Date().toLocaleTimeString()}.</h1>
        <h1> It is the date {new Date().toLocaleDateString()}</h1>
     <Welcome/>
     <Welcomee/>
        <Hwllo />
        <Anotherwise name="aman" age="22" />
  <Hi/>
        <CounterApp/>
        <Subscribe/>
*/}
    </div>
   
  )
}

export default App;
