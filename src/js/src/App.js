import React, {Component} from "react";
import "./App.css";
import Container from "./Container";
import {getAllStudents} from "./client";
import {Table, Avatar} from 'antd';


class App extends Component {

    state = {
        students: []
    };

    componentDidMount() {
        this.fetchStudents();
    }

    fetchStudents = () => {
        getAllStudents()
            .then(res => res.json()
                .then(students => {
                    console.log(students);
                    this.setState({students});

                }));
    };

    render() {
        const {students} = this.state;

        //****************Below is without antd
        /*        if (students && students.length){
                    return students.map((student, index) => {
                            return(
                                <div key={index}>
                                    <h2>{student.studentId}</h2>
                                    <h2>{student.firstName}</h2>
                                    <h2>{student.lastName}</h2>
                                    <h2>{student.gender}</h2>
                                    <h2>{student.email}</h2>
                                </div>
                            );
                        }

                    )
                }*/

        const columns = [
            {
                title: '',
                key: 'avatar',
                render: (text, student) =>(
                    <Avatar size='large'>
                        {`${student.firstName.charAt(0).toUpperCase()} 
                        ${student.lastName.charAt(0).toUpperCase()}`}

                    </Avatar>
                )
            },
            {
                title: 'StudentId',
                dataIndex: 'StudentId',
                key: 'StudentId'
            },
            {
                title: 'First Name',
                dataIndex: 'firstName',
                key: 'firstName'
            },
            {
                title: 'Last Name',
                dataIndex: 'lastName',
                key: 'lastName'
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email'
            }, {
                title: 'Gender',
                dataIndex: 'gender',
                key: 'gender'
            },

        ];
        return (
            <Container>
                <Table
                    dataSource={students}
                    columns={columns}
                    pagination={false}
                    rowKey='studentId'
                />
            </Container>

        );


    }
}

export default App;
