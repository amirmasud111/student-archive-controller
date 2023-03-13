import React from "react";
import { useEffect } from "react";
import classes from "./newStudent.module.css";
import Button from "../../UI/buttons/button";
import PropTypes from 'prop-types';
import WithClass from "../../hoc/WithClass";
import { withRouter } from "react-router";


const NewStudent = (props) => {
    const { studentName, studentClass, studentPhoneNumber, studentEmail } = props;
    const { studentNameHandler, studentClassHandler, studentPhoneNumberHandler, studentEmailHandler, addStudent } = props

    useEffect(() => {
        // console.log(props.history)
    }, []);

    return (
        <>
            <h1>اضافه کردن دانش آموز</h1>

            <label>نام و نام خانوادگی</label>
            <input type="text" value={studentName} onChange={studentNameHandler}></input>

            <label> کلاس </label>
            <input type="number" value={studentClass} onChange={studentClassHandler} ></input>

            <label> شماره تلفن </label>
            <input type="text" value={studentPhoneNumber} onChange={studentPhoneNumberHandler} ></input>

            <label> ایمیل  </label>
            <input type="email" value={studentEmail} onChange={studentEmailHandler} ></input>

            <Button clicked={addStudent} btnType="success" >
                اضافه کردن
            </Button>

        </>
    )
}

export default React.memo(withRouter(WithClass(NewStudent, classes.newStudent)));
NewStudent.propTypes = {
    studentName: PropTypes.string.isRequired,
    studentClass: PropTypes.number.isRequired,
    studentPhoneNumber: PropTypes.number.isRequired,
    studentEmail: PropTypes.string.isRequired,
    studentNameHandler: PropTypes.func.isRequired,
    studentClassHandler: PropTypes.func.isRequired,
    studentPhoneNumberHandler: PropTypes.func.isRequired,
    studentEmailHandler: PropTypes.func.isRequired,
    addStudent: PropTypes.func.isRequired,
}