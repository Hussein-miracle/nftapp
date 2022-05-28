import React from 'react';
import PaintRoadmapTimeLine from '../paint-roadmap/paint-roadmap'; 
import './roadmap.styles.scss';




const RoadmapCard = ({i}) => {

  return (
    <div className='roadmap__card'>
      <h2>{`Phase${i}`}</h2>
      <ul className='roadmap__card--items'>

        <li>Website and social media launch</li>
        <li>Genesis social lunch</li>
        <li>Social swap lunch</li>

      </ul>
      
      <div className='roadmap__card--after'></div>
    </div>
  )
}

const Roadmap = () => {
  return (
    <div className='roadmap'>
      <h1 className='roadmap__title'>Roadmap</h1>
      <div className="roadmap__contents">
        <PaintRoadmapTimeLine/>
        <RoadmapCard i={1}/>
        <RoadmapCard i={2}/>
        <RoadmapCard i={3}/>
        <RoadmapCard i={4}/>
      </div>
    </div>
  )
}

export default Roadmap;