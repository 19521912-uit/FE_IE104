import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Navigation />
            <div className='container'>
                <div className='content'>{children}</div>
            </div>
            <Footer />
        </div>
    )
}
