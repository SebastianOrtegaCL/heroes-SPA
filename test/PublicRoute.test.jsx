import {render, screen} from '@testing-library/react';
import {PublicRoute} from "../src/routes/PublicRoute.jsx";
import {AuthContext, AuthProvider, LoginPage} from "../src/auth/index.js";
import {createMemoryRouter, MemoryRouter, Route, Routes, routes} from "react-router-dom";

describe('Testing in PublicRoute.jsx', function () {
    test('Si no esta autenticado debe de mostrar el children', () => {
        const contextValue = {
            logged: false,
        }
        render(
            <AuthProvider value = { contextValue }>
                <PublicRoute>
                    <h1> esto es una ruta publica </h1>
                </PublicRoute>
            </AuthProvider>
        );
        // screen.debug();
        expect( screen.getByText('esto es una ruta publica')).toBeTruthy();
    });

    test('debe de navegar si esta autenticado', () => {
        const contextValue = {
            logged: true,
            name: 'Sebastian',
        }

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={["/login"]}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1> Ruta Publica </h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={<h1>Pagina Marvel</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Pagina Marvel')).toBeTruthy();

        screen.debug();
    });
});