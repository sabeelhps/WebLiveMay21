import React,{useState} from 'react'
import './Person.css';

const Person = (props) => {


    // const [name, setName] = useState(props.name);
    // const [age, setAge] = useState(props.age);

    // const nameChangeHandler = () => {
    //     setName('Anonymous');
    // }

    // const ageChangeHandler = () => {
    //     setAge(age + 1);
    // }

  

    return (
        <div className="person">
            <h1>Name : { props.name }</h1>
            <h3>Age : { props.age}</h3>
            <p>My Fav Color is : {props.favColor}</p>
            
            {/* <button onClick={nameChangeHandler}>Change Name</button>
            <button onClick={ageChangeHandler}>Change Age</button> */}
            <button onClick={()=>props.deleteUser(props.id)}>Delete</button>
        </div>
    )
}

export default Person
