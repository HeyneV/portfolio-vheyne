import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navbar() {
    return (
        <>
            <header>
                <h1>
                    <a href="/">Verna Heyne's Portfolio</a>
                </h1>
                <nav>
                    <ul className="flex-row">
                        <li>
                            <a href="/">About Me</a>
                        </li>
                        <li>
                            <a href="/portfolio">My Work</a>
                         
                        </li>
                        <li>
                            <a href="/resume">My Resume</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Me</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar