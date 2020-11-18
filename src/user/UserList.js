import React, { Component } from 'react';
import ApiService from '../ApiService'; // ApiService.js

//테이블 관련
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

//버튼
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//icons
import CreateIcon from '@material-ui/icons/Create';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIon from '@material-ui/icons/Delete';

class UserList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            users: [],
            message: null,
        }

        console.log('constructor run');
    }

    componentDidMount() {
        console.log('componentDidMount run');
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then(res => {
            //debugger; data가 넘어 갔는 지 확인
                this.setState({ users: res.data });
            })
            .catch(err => {
                console.error('reloadUserList() 에러!', err);
                alert('사용자 정보 조회 오류, 관리자에게 문의하세요', err);
            });

    }

    componentWillUnmount() {
        console.log('componentWillUnmount run');
    }
    addUser = () => {
      window.localStorage.removeItem('id'); // 값이 필요없으면 지우고
      this.props.history.push('/add-user');
    }
    editUser = ( id ) => {
        window.localStorage.setItem('id', id); //값 설정
        this.props.history.push('/edit-user'); //edit-user로 route

    }
    deleteUser = (id) => {
        if(window.confirm('삭제하시겠습니까?')) {
            //삭제처리
            ApiService.deleteUser(id)
            .then(res => {
                this.setState({
                    message : "삭제 성공!",
                    users : this.state.users.filter(user => user.id !== id)
                });
                alert('삭제 성공');
            })
            .catch(err => {
                console.error("deleteUser()오류" ,err);
                alert('삭제 오류, 관리자에게 문의하세요!');
            });
        }
 
     }

    render() {
        console.log('render run');
        console.log(this.state.users);
        return (
            <div>
                <Typography variant="h4" style={style}>사용자 리스트</Typography>
                <Button
                  variant="contained" 
                  color="primary"
                  onClick={this.addUser}>추가</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">UserName</TableCell>
                            <TableCell align="center">FirstName</TableCell>
                            <TableCell align="center">LastName</TableCell>
                            <TableCell align="center">Gender</TableCell>
                            <TableCell align="center">Salary ($)</TableCell>
                            <TableCell align="center">Edit</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.users.map(user => 
                        <TableRow key={user.id}>
                            <TableCell align="right">{user.id}</TableCell>
                            <TableCell>{user.userName}</TableCell>
                            <TableCell>{user.firstName}</TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell align="center">{user.gender}</TableCell>
                            <TableCell align="right">{user.salary}</TableCell>
                            <TableCell align="center" 
                                       onClick={() => this.editUser(user.id)}>
                                <EditIcon />
                            </TableCell>
                            <TableCell align="center"
                                       onClick={() => this.deleteUser(user.id)}>
                                <DeleteIon/>
                            </TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

const style = {
  display : 'flex',
  justifyContent : 'center',
  marginTop : '20px',

}

export default UserList;
