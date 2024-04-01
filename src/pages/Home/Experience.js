import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import mongo from '../../assets/mongo.png';
import java from '../../assets/java.png';
import python from '../../assets/python.png';
import php from '../../assets/php.png';
import laravel from '../../assets/laravel.png';
import mysql from '../../assets/mysql.jpg';
import figma from '../../assets/figma.png';


const Experience = () => {
    return (
        <div className='max-w-[1280px] mx-auto mt-24'>
            <h2 className='card-title text-2xl lg:text-4xl my-4 font-ubuntu mx-10'>I am Experienced in</h2>

            <div className='mx-10 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 mt-10'>
                <div>
                <img src={html} alt='html' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>HTML</h2>
                </div>
                <div>
                <img src={css} alt='css' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>CSS</h2>
                </div>
                <div>
                <img src={javascript} alt='js' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>Javascript</h2>
                </div>
                <div>
                <img src={react} alt='react' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>React JS</h2>
                </div>
                <div>
                <img src={node} alt='node' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>Node JS</h2>
                </div>
                <div>
                <img src={express} alt='express' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>Express JS</h2>
                </div>
                <div>
                <img src={mongo} alt='mongo' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>Mongo DB</h2>
                </div>
                <div>
                <img src={java} alt='java' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>Java</h2>
                </div>
                <div>
                <img src={python} alt='py' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>Python</h2>
                </div>
                <div>
                <img src={php} alt='php' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>PHP</h2>
                </div>
                <div>
                <img src={laravel} alt='laravel' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>Laravel</h2>
                </div>
                <div>
                <img src={mysql} alt='mysql' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>MySQL</h2>
                </div>
                <div>
                <img src={figma} alt='figma' className='w-16 h-16 mx-auto'/>
                <h2 className='text-xl text-center font-pt font-semibold'>Figma</h2>
                </div>
                
            </div>
            
        </div>
    );
};

export default Experience;