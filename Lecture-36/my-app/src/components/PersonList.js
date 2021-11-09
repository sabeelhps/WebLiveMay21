import React,{useState} from 'react'
import Person from './Person'
import { v4 as uuid } from 'uuid';


const PersonList = () => {

    const [persons, setPersons] = useState([
        {
            id: uuid(),
            name: 'Kartik',
            age: 25,
            favColor: "green"
        },
        {
            id: uuid(),
            name: 'Sabeel',
            age: 22,
            favColor: "skyblue"
        },
        {
            id: uuid(),
            name: 'Max',
            age: 27,
            favColor: "purple"
        }
    ]);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [favColor, setFavColor] = useState('');

    // const nameChangeHandler = (e) => {
    //     setName(e.target.value);
    // }
    // const ageChangeHandler = (e) => {
    //     setAge(e.target.value);
    // }
    // const colorChangeHandler = (e) => {
    //     setFavColor(e.target.value);
    // }


    const addPersonHandler = (e) => {
        e.preventDefault();
      
        setPersons((prevState) => {
            return [...prevState, { id:uuid(),name, age: parseInt(age), favColor }];
        });


        setName('');
        setAge('');
        setFavColor('');
    }

    const deletePerson = (personid) => {
        
        
        console.log(personid);
       

        setPersons((prevState) => {
            return prevState.filter((p)=>p.id !==personid);
        });

    }


    const personsList = persons.map((person,idx) => {
        
        return <Person
            id={person.id}
            name={person.name}
            age={person.age}
            favColor={person.favColor}
            key={idx}
            deleteUser={deletePerson}
        />
    })




    return (
        <div>
            <form onSubmit={addPersonHandler}>
                <div className="form-control">
                    <label>Name : </label>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="form-control">
                    <label>Age : </label>
                    <input
                        type="text"
                        placeholder="Age"
                        onChange={(e)=>setAge(e.target.value)}
                        value={age}
                    />
                </div>
                <div className="form-control">
                    <label>FavColor : </label>
                    <input
                        type="text"
                        placeholder="Fav Color"
                        onChange={(e)=>setFavColor(e.target.value)}
                        value={favColor}
                    />
                </div>
                <button type="submit">Add Person</button>
            </form>

            {personsList}
        </div>
    )
}

export default PersonList
