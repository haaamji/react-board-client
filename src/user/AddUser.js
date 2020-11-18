import React, { Component } from 'react';
import ApiService from '../ApiService';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


class AddUser extends Component{
    constructor(props){
        super(props);

        this.state ={
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            gender: '',
            salary: '',
            message : null
        }
    }

    onChange = (e) =>{
        console.log(e.target.name, e.target.value);
        this.setState({
            //한줄로 모든 값 변환
            [e.target.name] : e.target.value
        });
    };

    saveUser =(e) => {
        e.preventDefault(); //form post 발동방지
        let user = {
            userName: this.state.userName,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            salary: this.state.salary
        }
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : '유저 저장성공!'});
                console.info(this.state.message);
//              alert('유저 정보 저장 성공!');
                this.props.history.push('/users');
            })
            .catch(err => {
                console.error("saveUser()에러",err);
                alert('저장 실패, 관리자에게 문의하세요');
            });
    }   

    render(){
        return(
            <div>
                <Typography variant="h4" style={style}>사용자 추가</Typography>
                <form>

                    <TextField 
                        type="text" 
                        id="userName" 
                        name="userName"
                        placeholder="userName을 입력하세요" 
                        label="사용자 이름"
                        margin="normal" 
                        fullWidth
                        value={this.state.userName}
                        onChange={this.onChange} />

                    <TextField 
                        type="password" 
                        id="password" 
                        name="password"
                        placeholder="password를 입력하세요" 
                        label="비밀번호 입력"
                        margin="normal" 
                        fullWidth
                        value={this.state.password}
                        onChange={this.onChange} />

                    <TextField 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        placeholder="firstName 입력하세요" 
                        label="이름"
                        margin="normal" 
                        fullWidth
                        value={this.state.firstName}
                        onChange={this.onChange} />

                    <TextField 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        placeholder="lastName을 입력하세요" 
                        label="성"
                        margin="normal" 
                        fullWidth
                        value={this.state.lastName}
                        onChange={this.onChange} />
                        
                    <FormControl  variant="outlined" fullWidth>
                    <InputLabel htmlFor="gender-label">성별</InputLabel>
                    <Select
                        labelId='gender-label'
                        id="gender"
                        name="gender"
                        label="gender"
                        value={this.state.gender}
                        onChange={this.onChange}
                        fullWidth
                        >
                        <MenuItem value="">
                        <em>----성별을 선택하세요----</em>
                        </MenuItem>
                        <MenuItem  value={'M'}>남자</MenuItem >
                        <MenuItem  value={'F'}>여자</MenuItem >
                    </Select>
                    </FormControl> 

                    <TextField 
                        type="text" 
                        id="salary" 
                        name="salary"
                        placeholder="salary를 입력하세요" 
                        label="급여"
                        margin="normal" 
                        fullWidth
                        value={this.state.salary}
                        onChange={this.onChange} />
                    <div style={buttonStyle}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.saveUser}>저장</Button>    
                    </div>
                </form>
            </div>
        );
    }
}
const style = {
    display : 'flex',
    justifyContent : 'center',
    marginTop : '20px',
  
  }

const buttonStyle ={
    marginTop : '10px',
    textAlign : 'right',
}
export default AddUser;