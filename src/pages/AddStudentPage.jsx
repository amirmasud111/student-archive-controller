import React, { useState, useEffect } from "react";
import NewStudent from "../components/students/newStudent/newStudent";

const AddStudent = (props) => {

    const [studentName, setStudentName] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [studentPhoneNumber, setStudentPhoneNumber] = useState('');
    const [studentEmail, setStudentEmail] = useState('');


    useEffect(() => {
    }, [])


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

    const addStudent = () => {
        alert("student added")
    }

    return (
        <NewStudent studentName={studentName}
            studentClass={studentClass}
            studentPhoneNumber={studentPhoneNumber}
            studentEmail={studentEmail}
            studentNameHandler={studentNameHandler}
            studentClassHandler={studentClassHandler}
            studentPhoneNumberHandler={studentPhoneNumberHandler}
            studentEmailHandler={studentEmailHandler}
            addStudent={addStudent}
            {...props}
        />
    )
}

export default AddStudent;