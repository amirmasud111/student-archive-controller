import React, { useState, useEffect, useRef } from "react";
import Students from "../components/students/students";
import Button from "../components/UI/buttons/button";


const HomePage = (props) => {

    const [studentsTate, setStudents] = useState([
        { id: 0, name: "Mahdi", classNumber: 204, phoneNumber: 1234, email: 'mahdi@gmail.com' },
        { id: 1, name: "Amir", classNumber: 205, phoneNumber: 5678, email: 'mahdi@gmail.com' },
        { id: 2, name: "Hony", classNumber: 206, phoneNumber: 6666, email: 'mahdi@gmail.com' },
        { id: 3, name: "Ali", classNumber: 207, phoneNumber: 3245, email: 'mahdi@gmail.com' }
    ])
    const [searchBarValue, setSearchBarValue] = useState('');
    const [arrayHolder, setArrayHolder] = useState([]);
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        setArrayHolder(studentsTate);
    }, [])

    const inputElement = useRef(null);

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


    return (
        <>
            <input type="text" value={searchBarValue} onChange={searchFilterFunction} ref={inputElement} style={{ marginTop: "70px" }} />

            <Button btnType="success" clicked={toggleHandler}>
                تغییر وضعیت نمایش
            </Button>

            <Students
                studentsList={studentsTate}
                nameChanged={nameChangedHandler}
                classChanged={classChangedHandler}
                numberChanged={numberChangedHandler}
                emailChanged={emailChangedHandler}
                deleted={deleteStudent}
                toggle={toggle}
            />

        </>
    )
}

export default HomePage;