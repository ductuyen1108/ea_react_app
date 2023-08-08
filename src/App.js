import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import { ClubProvider, useClub } from './context/ClubContext';
import { Fragment, useState, useEffect } from 'react';

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const { userRole } = useClub();

    useEffect(() => {
        console.log('Thay đổi role của người dùng:', userRole);
        if (userRole) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, [userRole]);
    console.log('Đã đăng nhập:', authenticated);
    console.log('userRole:', userRole);

    return (
        <Router>
            <ClubProvider>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            const Page = route.component;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                        {authenticated &&
                            privateRoutes.map((route, index) => {
                                let Layout = DefaultLayout;
                                const Page = route.component;

                                // Kiểm tra quyền truy cập dựa trên role của người dùng
                                /* if (userRole === 'admin') { */
                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                                /* } else {
                                // Không cho phép truy cập nếu role không phải là "admin"
                                    return (
                                        null
                                    );
                                } */
                            })}
                    </Routes>
                </div>
            </ClubProvider>
        </Router>
    );
}

export default App;
