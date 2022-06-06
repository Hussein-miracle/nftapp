import React from 'react'
import './faq.styles.scss';
import { ReactComponent as  PlusBtn} from '../../assets/icons/plus.svg';

const FaqItem = ({title}) => {
  return (
    <li className='faq__contents--item'>
      <h3 className='faq__contents--item__title'>{title}</h3>
      <button className='faq__contents--item-btn'>
        <PlusBtn/>
      </button>
    </li>
  )
}
const Faq = () => {
  return (
    <div className='faq'>
      <h1 className='faq__title'>Frequently Asked Questions (FAQ)</h1>
      <ul className='faq__contents'>
        <FaqItem title="How does the MAO DAO Play-to-earn program work?"/>
        <FaqItem title="Will ready player cats have more version launched besides the 5000 versions?"/>
        <FaqItem title='How does the RPC loot box system work?' />
        <FaqItem title="How to make sure to follow complete randomness distribution and fixed rarity traits"/>
      </ul>
    </div>
  )
}

export default Faq;