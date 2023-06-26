const Header = (props) => {
  console.log(props)
  return <p>Header: {props.course.name}</p>
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Parts name={props.parts[0].name} exercises={props.parts[0].exercises}></Parts>
      <Parts name={props.parts[1].name} exercises={props.parts[1].exercises}></Parts>
      <Parts name={props.parts[2].name} exercises={props.parts[2].exercises}></Parts>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return <p>Total: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
}

const Parts = (props) => {
  return (
    <div>
      <p>Content: {props.name} {props.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}
export default App