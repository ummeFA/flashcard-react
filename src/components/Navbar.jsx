import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const navigateToFlashcards = () =>{
        navigate('/');
    };
    const navigateToVocabList = () =>{
        navigate('/show-vocab-list');
    };
    return (
        <div className="p-3 bg-gray-700 flex justify-between  text-white">
            <div className="text-xl">
                <button className='p-3 font-extrabold' onClick={navigateToFlashcards}>Flash Card</button>
            </div>
            <div className="p-3 text-lg flex justify-between">
                <button className='pr-3' onClick={navigateToVocabList}>Showlist</button>
                <button>Icon</button>
            </div>
        </div>
    );
};

export default Navbar;