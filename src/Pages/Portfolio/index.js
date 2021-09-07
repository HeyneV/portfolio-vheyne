import React from 'react';

function Portfolio() {
    return (

        <main>
            <section id="my-work" class="flex-row">
                <h1 class="#my-work">My Work</h1>
                <div class="flex-container">
                    <div class="flex-item" >
                        <span>Travel Bucket</span>
                        <img src="./assets/images/map.jpeg" />
                        <a href="https://github.com/marksherm04/travel-bucket">Github Repo</a>
                    </div>
                    <div class="flex-item">
                        <span>Bulldog Boombox</span>
                        <img src="./assets/images/music.png" />
                        <a href="https://github.com/ktodoran/Bulldog-Boombox">Github Repo</a>
                    </div>
                    <div class="flex-item">
                        <span>Note Taker</span>
                        <img src="./assets/images/notetaker.jpeg" />
                        <a href="https://github.com/HeyneV/note-taker">Github Repo</a>
                    </div>
                    <div class="flex-item">
                        <span>Daily Planner</span>
                        <img src="./assets/images/planner.jpeg" />
                        <a href="https://github.com/HeyneV/daily-planner">Github Repo</a>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Portfolio;
