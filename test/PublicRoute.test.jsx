import {render, screen} from '@testing-library/react';
import {PublicRoute} from "../src/routes/PublicRoute.jsx";
import {AuthContext, AuthProvider} from "../src/auth/index.js";
import {createMemoryRouter, Route, Routes, routes} from "react-router-dom";

describe('Testing in PublicRoute.jsx', function () {
    // test('Si no esta autenticado debe de mostrar el children', () => {
    //     const contextValue = {
    //         logged: false,
    //     }
    //     render(
    //         <AuthProvider value = { contextValue }>
    //             <PublicRoute>
    //                 <h1> esto es una ruta publica </h1>
    //             </PublicRoute>
    //         </AuthProvider>
    //     );
    //     // screen.debug();
    //     expect( screen.getByText('esto es una ruta publica')).toBeTruthy();
    // });

    test('debe de navegar si esta autenticado', () => {
        const contextValue = {
            logged: false,
            user: {
                name: 'Sebastian',
                id: 'ABC123'
            }
        }

        render(
            <AuthProvider value={contextValue} >

            </AuthProvider>
        )

        screen.debug();
    });
});