import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

const Home = () => {
    return (
        <>

        <div className="
                grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 rounded-3xl w-full max-w-7xl mt-12 bg-gray-300 mx-auto p-4">
                {/* Sidebar hidden on mobile */}
                <Sidebar className="hidden md:flex" />

                {/* Main takes remaining space */}
                <Main />
        </div>
          
        
        </>
    )
}

export default Home