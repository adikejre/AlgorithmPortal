import React from 'react';
import './cards.css';
import MyCard from './myCard';
function Cards() {
    return (
        <div className="cards">
             <h1>Check out Algorithms at work</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <MyCard
              src='images/sort.png'
              text='Visualize sorting Algorithms '
              label='Sorting'
              path='/visualizesorting'
            />
            <MyCard
              src='images/maze.png'
              text='See how BFS and DFS pathfinding algorithms work'
              label='Graph'
              path='/mazesolver'
            />
             <MyCard
              src='images/clique.png'
              text='Find largest group of mutual friends. Understand the concept of Max Clique in graphs'
              label='Cliques'
              path='/cliques'
            />
          </ul>
          {/* <ul className='cards__items'>
            <MyCard
              src='images/maze.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/cliques'
            />
            
          </ul> */}
        </div>
      </div>
      <h1>Learn How to Code</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <MyCard
              src='images/editor.jpg'
              text='Code and run algorithms on online code editor'
              label='Editor'
              path='/implementalgos'
            />
            <MyCard
              src='images/learn.jpeg'
              text='Learn about sorting algorithms and implementation'
              label=''
              path='/sortinfo'
            />
           
          </ul>
        
        </div>
      </div>


            
        </div>




    )
}

export default Cards
