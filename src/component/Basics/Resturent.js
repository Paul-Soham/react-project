import React, {useState} from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './menuCard'

const Resturent = () => {

  const [menuData, setMenuData] = useState(Menu);

  return (
    <>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturent