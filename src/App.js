import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';
import { HeaderOnly } from './components/Layout';

import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    {publicRoutes.map((router, index) => {
                        const Page = router.Component;

                        let Layout = DefaultLayout;

                        if (router.layout) {
                            Layout = router.layout;
                        } else if (router.layout === null) {
                            Layout = Fragment;
                        }
                        
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
