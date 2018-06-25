let _singleton = Symbol();
const API_URL = 'https://localhost:8080/api/';

class UserService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new UserService(_singleton);
        return this[_singleton]
    }


     logout(){
        return fetch('/api/logout', {
            method: 'post',
            credentials: 'same-origin'});
    }

     findUserById(userId) {
        return fetch(self.url + 'user/' + userId)
            .then(function (response) {
                return response.json();
            });
    }

     login(user) {
        return fetch('http://localhost:8080/api/login', {
            method: 'post',
            credentials: 'same-origin',
            body: JSON.stringify(user),
            headers: {'content-type': 'application/json'}
        }).then(function(response){
            if (!response.ok) {
                throw Error(response.statusText);
            }
        }).catch(function(error) {
            alert("Login Failed!")
        });
    }

     findAllUsers() {
        return fetch(self.url + 'user/').then(function (response) {
            return response.json();
        });
    }

     findByUsername(username) {
        return fetch('/api/user?username=' + username).then(function (response) {
            return response.json();
        });
    }

     createUser(user) {
        return fetch(self.url + 'user/', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {'content-type': 'application/json'}
        });
    }

     register(user) {
        return fetch('https://localhost:8080/api/register' , {
            method: 'post',
            credentials: 'same-origin',
            body: JSON.stringify(user),
            headers: {'content-type': 'application/json'}
        });
    }

     loadProfile() {
        return fetch('https://localhost:8080/api/profile',
            {
                method: 'get',
                credentials: 'same-origin'})
            .then(function (response) {
                return response.json();
            });
    }

     deleteUser(userId) {
        return fetch(self.url + 'user/' + userId, {
            method: 'delete'
        })
    }

    updateUser(userId, user) {
        return fetch(self.url + 'user/' + userId, {
            method: 'put',
            body: JSON.stringify(user),
            headers: {'content-type': 'application/json'}
        }).then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            alert("Update Completed!");
        }).catch(function(error) {
            alert("Wrong user ID!");
        });
    }

    //
    // findAllUsers() {
    //     return fetch(API_URL + 'user')
    //         .then(response => response.json())
    // }
    //
    // findUserById(userId) {
    //     return fetch(API_URL + 'user/' + userId)
    //         .then(response => response.json())
    // }
    //
    // deleteUser(userId) {
    //     return fetch(API_URL + 'user/' + userId,
    //         { method: 'DELETE' }).then(response => response.json())
    // }
    //
    // createUser(email, password, firstName, lastName) {
    //     const user = {
    //         username: email,
    //         password: password
    //     };
    //     return fetch('https://webdev-hw-wj.herokuapp.com/api/user', {
    //         body: JSON.stringify(user),
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         method: 'POST'
    //     });
    // }
    //
    // updateUser(userId, user) {
    //     return fetch(API_URL + 'user/' + userId, {
    //         method: 'put',
    //         credentials: 'include',
    //         body: JSON.stringify(user),
    //         headers: {'content-type': 'application/json'}
    //     });
    //
    // }
    //
    // login(user) {
    //     return fetch(API_URL + 'login', {
    //         method: 'post',
    //         body: JSON.stringify(credentials),
    //         credentials: 'include',
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     });
    // }
    //
    //
    // logout() {
    //     return fetch(API_URL + 'logout', {
    //         method: 'post',
    //         credentials: 'include'
    //     });
    // }
    //
    // profile() {
    //     return fetch(API_URL + 'profile',
    //         {
    //             credentials: 'include',
    //         })
    //         .then(response => response.json());
    // }
}
export default UserService;
