import {render, screen} from '@testing-library/react';
import {AuthContext} from "../src/auth/index.js";
import {PrivateRoute} from "../src/routes/PrivateRoute.jsx";
import {MemoryRouter} from "react-router-dom";

describe('Pruebas en <PrivateRoute/> ', function () {
    test('Debe de mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const authContext = {
            logged: true,
            name: 'Sebastian',
        }

        // console.log(authContext);

        render(
            <AuthContext.Provider value={ authContext } >
                <MemoryRouter initialEntries={['/login']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada')).toBeTruthy();
        expect( localStorage.setItem).toHaveBeenCalledWith("lastPath", "/login");
    });
});