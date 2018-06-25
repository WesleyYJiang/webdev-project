let _singleton = Symbol();
const API_URL = 'https://project-back-end.herokuapp.com/api/';

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


    findAllUsers() {
        return fetch(API_URL + 'user')
            .then(response => response.json())
    }

    findUserById(userId) {
        return fetch(API_URL + 'user/' + userId)
            .then(response => response.json())
    }

    deleteUser(userId) {
        return fetch(API_URL + 'user/' + userId,
            { method: 'DELETE' }).then(response => response.json())
    }

    createUser(user) {
        return fetch(API_URL + 'user/create', {
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
    }

    updateUser(user) {
        return fetch(API_URL + 'update/user', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {'content-type': 'application/json'}
        });

    }

    login(user) {
        return fetch(API_URL + 'login', {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }


    logout() {
        return fetch(API_URL + 'logout', {
            method: 'post',
            credentials: 'include'
        });
    }

    profile() {
        return fetch(API_URL + 'profile',
            {
                credentials: 'include',
            })
            .then(response => response.json());
    }
}
export default UserService;
