import {useEffect, useState} from 'react';

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

function MainPage() {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
            console.log(windowSize)
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <div>
            <h2>Notificaciones y cambios de tasas</h2>
            <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQHyvsUZ2ruHwXca-7EI0WrO2P1TJ7yNHs-YSttkDtmasom5gYCT8kScPQVecrLAXU-Mh8bYDBCYhG1/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                width="390"
                height="240"
                ></iframe>
        </div>
    );
}

export default MainPage;