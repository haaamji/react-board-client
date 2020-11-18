import Axios from "axios";

const API_URL ='http://localhost:8090/users';//SpringBoot back-end url

class ApiService{
    //user 를 가져옴
    fetchUsers(){
        //http://localhost:8090/users -> 사용자 리스트
        return Axios.get(API_URL);    
    }
    fetchUsersByID(id){
         //http://localhost:8090/users/2 -> 특정 사용자 정보
        return Axios.get(API_URL + '/' + id);
    }
    addUser(user){
        //POST 사용자 정보 back-end 전달
        return Axios.post(API_URL, user);
    }
    editUser(user){
        //PUT 사용자 수정 정보 back-end 전달
        return Axios.put(API_URL + '/' + user.id, user);
    }
    deleteUser(id){
        //delete 사용자 아이디 전달
        return Axios.delete(API_URL + '/' + id);
    }
}

//호출시 바로 새 인스턴스를 가져옴
export default new ApiService();