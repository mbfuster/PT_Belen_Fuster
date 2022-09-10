import {useEffect, useState} from 'react';
import { Navigate } from "react-router-dom";
import './MainPage.css'; 
import { useAuth } from "../context/AuthContext";

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

function handleInput() {
    console.log("document focused");
  }

function MainPage() {
    const { user, loading } = useAuth();
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const publicURL = "https://docs.google.com/spreadsheets/d/1BBeeKJUvvjIjy8B0AD-w7UNq1kh7RHa0QywoqGOZAtQ/edit?usp=sharing;gid=0&amp;single=true&amp;widget=true&amp;headers=false&amp;range=a1:c8";
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        console.log(user)
    
        window.addEventListener('resize', handleWindowResize);
        window.addEventListener('click', handleInput);
        return () => {
            console.log(windowSize)
            window.removeEventListener('resize', handleWindowResize);
            window.removeEventListener('click', handleInput);
        };
    }, []);
    if (loading) return <h1>Loading</h1>;

    else

    return (
        <div>
            <h1 className='title'>Notificaciones y cambios de tasas</h1>
            <h3>Edita directamente en la hoja de cálculo y el encargado será notificado via email</h3>
            <div className ='holder'>
                <div className ="bar"></div>
                <iframe
                    className ='frame'
                    width="700"
                    height="500"
                    id="ssheet"
                    src={publicURL}>
                </iframe>
                <div className ="low-bar"></div>
            </div>
        </div>
    );
}

export default MainPage;