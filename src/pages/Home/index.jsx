import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from './welcome';

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/about">Go to About</Link>
            <Welcome />
        </div>
    )
}