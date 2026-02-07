import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

const Home = () => {
    return (
        <>

        <div className="grid grid-col-1 md:grid-row-1 rounded-3xl w-250 h-150 mt-12 bg-gray-300 mx-auto">
            <div className="flex flex-row gap-8 justify-center items-center p-6">
                <Sidebar />
                <Main /> 
            </div>
          
        </div>
        
        </>
    )
}

export default Home