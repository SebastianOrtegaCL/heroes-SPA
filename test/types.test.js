import {types} from "../src/auth/types/types.js";

describe('test in types.js', function () {
    test('Debe de regresar estos types ', () => {
        console.log(types);

        expect(types).toEqual({ login: '[Auth] Login', logout: '[Auth] Logout' });
    })
});

