import {createMemoryRouter, MemoryRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {AuthContext} from "../src/auth/index.js";
import {render, screen} from "@testing-library/react";
import {PublicRoute} from "../src/routes/PublicRoute.jsx";

describe('testing  ', function () {
    test('first attempt',() => {

        const contextValue = {
            logged: false,
        }

        const routes = createMemoryRouter(router, {
            initialEntries: ['/marvel'],
            initialIndex: 1,
        });

        render(
            <MemoryRouter initialEntries={["/marvel"]}>
                <AuthContext.Provider value={ contextValue }>
                    <RouterProvider router={routes}/>
                </AuthContext.Provider>
            </MemoryRouter>
        )
        screen.debug();
    });
});