import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <div className="cards__wrapper">
                <div className="cards__items_1">
                    <CardItem 
                        src='imagesFun/makingDumplings.jpg'
                        text='Making Dumplings'
                        label='Ink'
                    />
                    <CardItem 
                        src='imagesFun/tired.jpeg'
                        text='Tired'
                        label='Charcoal'
                    />
                    <CardItem 
                        src='imagesFun/washingPeaches.jpg'
                        text='Washing Peaches'
                        label='Watercolor, Photoshop'
                    />
                </div>
                <div className="cards__items_2">
                    <CardItem 
                        src='imagesFun/eggPattern.jpg'
                        text='Breakfast Pattern'
                        label='Illustrator'
                    />
                    <CardItem 
                        src='imagesFun/escapingTheComfortZone.jpg'
                        text='Escaping the Comfort Zone'
                        label='Watercolor, Photoshop'
                    />
                    <CardItem 
                        src='imagesFun/peelingAway.jpg'
                        text='Peeling Away'
                        label='Watercolor, Photoshop'
                    />
                </div>
                <div className="cards__items_3">
                    <CardItem 
                        src='imagesFun/trim.jpg'
                        text='Trim'
                        label='Photoshop'
                    />
                    <CardItem 
                        src='imagesFun/myFace.jpg'
                        text='My Face'
                        label='Watercolor, Photoshop'
                    />
                    <CardItem 
                        src='imagesFun/protected.jpg'
                        text='Hiding Under Layers'
                        label='Watercolor, Photoshop'
                    />
                </div>
            </div>
        </div>
    );
}

export default Cards;
