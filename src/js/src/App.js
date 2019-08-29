import React, {Component} from "react";
import "./App.css";
import Container from "./Container";
import Footer from "./Footer";
import {getAllStudents} from "./client";
import {Table, Avatar, Spin, Icon, Modal} from 'antd';

const getIndicatorIcon = () => <Icon type="loading" style={{fontSize: 20}}/>;

class App extends Component {

    state = {
        students: [],
        isFetching: false,
        isAddStudentModalVisible: false
    };



    componentDidMount() {
        this.fetchStudents();
    }

    openAddStudentModal = () =>this.setState({isAddStudentModalVisible: true});

    closeAddStudentModal = () =>this.setState({isAddStudentModalVisible: false});

    fetchStudents = () => {
        this.setState({
            isFetching: true
        });
        getAllStudents()
            .then(res => res.json()
                .then(students => {
                    console.log(students);
                    this.setState({
                        students,
                        isFetching: false
                    });

                }));
    };

    render() {

        // const antIcon =<Icon type="loading" style= {{fontSize: 20}}/>
        const {students, isFetching, isAddStudentModalVisible} = this.state;

        if (isFetching) {
            return (
                <Container>
                    <Spin indicator={getIndicatorIcon()}/>
                </Container>
            );

        }

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
                render: (text, student) => (
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
                <Modal
                    title="Add new student"
                    visible={isAddStudentModalVisible}
                    onOk={this.closeAddStudentModal}
                    onCancel={this.closeAddStudentModal}
                    witdh={1000}>
                    <h1>Hello Modal with Antd</h1>
                </Modal>
                <Footer
                    numberOfStudents={students.length}
                    handleAddStudentClickEvent={this.openAddStudentModal}/>
            </Container>
        );

    }
}

export default App;
