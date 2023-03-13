import React from "react";
import './students.css'
import Button from "../../UI/buttons/button";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Student = (props) => {
    return (
        <div className="students">
            <label>شماره دانش آموزی : {props.id} </label>
            <label>نام و نام خانوادگی : {props.name} </label>

            <label> کلاس : {props.classNumber}</label>

            <label> شماره تلفن : {props.phoneNumber} </label>

            <label>  ایمیل : {props.email} </label>

            <label>
                <Button btnType="danger"
                    clicked={props.deleted}
                >
                    حذف
                </Button>
                <Link to={"/student/" + props.id}>
                    <Button btnType="success"
                    >
                        ویرایش
                    </Button>
                </Link>
            </label>
        </div>
    )
}

export default React.memo(Student);
Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    classNumber: PropTypes.number.isRequired,
    phoneNumber: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    deleted: PropTypes.func.isRequired
}
