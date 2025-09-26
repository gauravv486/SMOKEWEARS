import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from '../../utils/appStore'

const UserLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="flex flex-col min-h-screen">

                <div className="fixed top-0 left-0 w-full z-40 bg-white">
                    <Navbar />
                </div>

                <main className="pt-25">
                    <Outlet />
                </main>

                <Footer />

            </div>
        </Provider>
    )
}

export default UserLayout
