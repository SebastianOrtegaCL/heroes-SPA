import { authReducer } from "../src/auth/context/authReducer";
import { types } from "../src/auth/types/types";

describe('Pruebas en authReducer', () => { 
    test('should return the initial state', () => { 

        const newState = authReducer({logged: false},{});
        expect( newState ).toEqual({logged: false});

    });
    test('debe el (login) llamar el login autenticar y establecer el user', () =>{
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123'
            } 
        }
        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload,
        });
    });

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const state = {
            logged: true,
            user: {
                user: '123',
                name: 'Juan'
            }
        }
        const action = {
            type: types.logout
        }
        const newState = authReducer(state, action);
        //expect
        expect(newState).toEqual({logged: false});
    });

 });

