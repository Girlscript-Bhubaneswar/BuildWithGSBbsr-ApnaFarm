import React from 'react'
import Footer from '../Footer/main'
import Posts from '../Posts/main'
import Sidebar from '../Sidebar/main'
// import './style.css'

const Information = (props) => {
    return (
        <>
        <main>
            <section class="container">
            <div class="site-content">
                <Posts />
                <Sidebar />
            </div>
        </section>
        </main>
        
        </>
    )

}

export default Information