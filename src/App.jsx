import React, { useState, useEffect, useRef } from 'react';

import './App.css';
import Students from './components/students/students';
import Button from './components/UI/buttons/button';
import NewStudnet from './components/students/newStudent/newStudent';
import Toolbar from './container/Header/Toolbar/Toolbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Sidebar from './container/Header/sidebar/sidebar';
import HomePage from './pages/HomePage';
import AddStudent from './pages/AddStudentPage';
import EditStudent from './pages/EditStudent';

function App() {

  const [studentsTate, setStudents] = useState([
    { id: 0, name: "Mahdi", classNumber: 204, phoneNumber: 1234, email: 'mahdi@gmail.com' },
    { id: 1, name: "Amir", classNumber: 205, phoneNumber: 5678, email: 'mahdi@gmail.com' },
    { id: 2, name: "Hony", classNumber: 206, phoneNumber: 6666, email: 'mahdi@gmail.com' },
    { id: 3, name: "Ali", classNumber: 207, phoneNumber: 3245, email: 'mahdi@gmail.com' }
  ])

  const inputElement = useRef(null)
  const [arrayHolder, setArrayHolder] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [studentPhoneNumber, setStudentPhoneNumber] = useState('');
  const [studentEmail, setStudentEmail] = useState('');

  useEffect(() => {
    setArrayHolder(studentsTate)
  }, [studentName])

  useEffect(() => {
    // inputElement.current.focus();
  }, [])

  const nameChangedHandler = (event, id) => {
    const studentIndex = studentsTate.findIndex(student => {
      return student.id === id;
    })
    const student = { ...studentsTate[studentIndex] };
    student.name = event.target.value;
    const students = [...studentsTate];
    students[studentIndex] = student;
    setStudents(students);

  }

  const classChangedHandler = (event, id) => {
    const studentIndex = studentsTate.findIndex(student => {
      return student.id === id;
    })
    const student = { ...studentsTate[studentIndex] };
    student.classNumber = event.target.value;
    const students = [...studentsTate];
    students[studentIndex] = student;
    setStudents(students);

  }

  const numberChangedHandler = (event, id) => {
    const studentIndex = studentsTate.findIndex(student => {
      return student.id === id;
    })
    const student = { ...studentsTate[studentIndex] };
    student.phoneNumber = event.target.value;
    const students = [...studentsTate];
    students[studentIndex] = student;
    setStudents(students);

  }

  const emailChangedHandler = (event, id) => {
    const studentIndex = studentsTate.findIndex(student => {
      return student.id === id;
    })
    const student = { ...studentsTate[studentIndex] };
    student.email = event.target.value;
    const students = [...studentsTate];
    students[studentIndex] = student;
    setStudents(students);

  }

  const deleteStudent = (id) => {
    const studentIndex = studentsTate.findIndex(student => {
      return student.id === id;
    })
    const students = [...studentsTate];
    students.splice(studentIndex, 1);
    setStudents(students);
  }

  const toggleHandler = () => {
    setToggle(!toggle)
  }

  const searchFilterFunction = (event) => {
    const itemData = arrayHolder.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = event.target.value.toUpperCase();
      return itemData.indexOf(textData) > -1
    })
    setStudents(itemData);
    setSearchBarValue(event.target.value)
  }

  const studentNameHandler = (event) => {
    setStudentName(event.target.value);
  }

  const studentClassHandler = (event) => {
    setStudentClass(event.target.value);
  }

  const studentPhoneNumberHandler = (event) => {
    setStudentPhoneNumber(event.target.value);
  }

  const studentEmailHandler = (event) => {
    setStudentEmail(event.target.value);
  }

  const executeScroll = () => {
    window.scrollTo(0, inputElement.current.offsetTop)
  }

  const addStudent = () => {
    const newStudentState = [...studentsTate];
    newStudentState.push({
      id: studentsTate.length,
      name: studentName,
      classNumber: studentClass,
      phoneNumber: studentPhoneNumber,
      email: studentEmail
    }
    );
    setStudents(newStudentState);
    setStudentName("");
    setStudentClass("");
    setStudentPhoneNumber("");
    setStudentEmail("");
  }

  return (


    <BrowserRouter>
      <div className="App">


        <Toolbar />


        {/* <NewStudnet studentName={studentName}
          studentClass={studentClass}
          studentPhoneNumber={studentPhoneNumber}
          studentEmail={studentEmail}
          studentNameHandler={studentNameHandler}
          studentClassHandler={studentClassHandler}
          studentPhoneNumberHandler={studentPhoneNumberHandler}
          studentEmailHandler={studentEmailHandler}
          addStudent={addStudent}
        /> */}
        {/* <Button btnType="success" clicked={toggleHandler}>
          تغییر وضعیت نمایش
        </Button> */}
        {/* <input type="text" value={searchBarValue} onChange={searchFilterFunction} ref={inputElement} style={{ marginTop: "70px" }} />
    
        <Students
          studentsList={studentsTate}
          nameChanged={nameChangedHandler}
          classChanged={classChangedHandler}
          numberChanged={numberChangedHandler}
          emailChanged={emailChangedHandler}
          deleted={deleteStudent}
          toggle={toggle}
        /> */}

        {/* <Route path="/" render={() => {
            <h1 style={{ marginTop: "200px" }}>React is here !</h1>
          }} /> */}

        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/add-student' exact component={AddStudent} />
          <Route path='/student/:id' exact component={EditStudent} />
        </Switch>

        {/* <Button btnType="success" clicked={executeScroll}>scroll up</Button> */}
      </div>

    </BrowserRouter >
  );
}

export default App;
