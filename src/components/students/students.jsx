import React from "react";
import Student from "./student/student";
import "./student/students.css";
import PropTypes from 'prop-types';

const Students = (props) => {
    let container = props.toggle ? "student-section" : "";
    return (
        <div className={container}>
            {
                props.studentsList.map((student, index) =>
                    <Student
                        key={index}
                        id={student.id}
                        name={student.name}
                        classNumber={student.classNumber}
                        phoneNumber={student.phoneNumber}
                        email={student.email}
                        nameChanged={(event) => props.nameChanged(event, student.id)}
                        classChanged={(event) => props.classChanged(event, student.id)}
                        numberChanged={(event) => props.numberChanged(event, student.id)}
                        emailChanged={(event) => props.emailChanged(event, student.id)}
                        deleted={() => props.deleted(student.id)}
                    />
                )
            }
        </div>
    )

  
}

export default React.memo(Students);
Students.propTypes = {
    studentsList: PropTypes.array.isRequired,
    nameChanged: PropTypes.func.isRequired,
    deleted: PropTypes.func.isRequired,
    toggle: PropTypes.bool.isRequired,
    classChanged: PropTypes.func.isRequired,
    numberChanged: PropTypes.func.isRequired,
    emailChanged: PropTypes.func.isRequired,
}