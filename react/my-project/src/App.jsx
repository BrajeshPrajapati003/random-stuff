import React from 'react'
import Welcome from './learn1/Welcome'
import ClassComp from './learn1/ClassComp'
import Greeting from './learn1/Greeting'
import GreetingArrow from './learn1/GreetingArrow'
import Counter from './learn2/Counter'
import CounterClockWise from './learn2/CounterClockWise'
import Increase from './learn2/Increase'
import Decrease from './learn2/Decrease'
import Conditional from './learn3/Conditional'
import ListKeys from './learn3/ListKeys'
import ListTable from './learn3/ListTable'
import Greeting2 from './learn3/Greeting2'
import StudentMgmt from './learn4-states/StudentMgmt'
import StudentMgmtHook from './learn4-states/studentMgmtHook'
import UserProfile from './learn4-states/UserProfile'
import StudentDetails from './learn4-states/StudentDetails'
import ProfileHook from './learn4-states/ProfileHook'
import ButtonClick from './learn5-Events/ButtonClickClass'
import InputChange from './learn5-Events/InputChange'
import InputChange2 from './learn5-Events/InputChange2'
import ButtonClickParams from './learn5-Events/ButtonClickParams'
import ConditionalGreeting from './learn6-conditionalRendering/Greeting'
import Notification from './learn6-conditionalRendering/Notification'
import StatusMessage from './learn6-conditionalRendering/StatusMessage'
import NameList from './learn7-list/NameList'
import TodoList from './learn7-list/TodoList'
import TodoList2 from './learn7-list/TodoList2'

const App = () => {
  return (
    <div>
      <h2 className='text-red-400'>brajesh</h2>
      <ClassComp />
      <Welcome/>
      <Greeting name='Brajesh'/>      
      <Greeting name='Tyrant'/>
      <Greeting name='Prajapati'/>
      <GreetingArrow name='officialTyrant'/>

      <Counter />
      <CounterClockWise />

      <Increase />
      <Decrease />

      <Conditional />


      <ListKeys />
      <ListTable />


      <Greeting2 name="433"/>
      <Greeting2 />

      <StudentMgmt />
      <StudentMgmtHook />

      <UserProfile firstname="developer" lastname="prajapati" email="developer@gmail.com" age="21"/>

      <StudentDetails />

      <ProfileHook />

      <ButtonClick />

      <InputChange />
      <InputChange2 />

      <ButtonClickParams />

      <ConditionalGreeting />
      <Notification />
      <StatusMessage />

      <NameList />

      <TodoList />
      <TodoList2 />
    </div>
  )
}

export default App