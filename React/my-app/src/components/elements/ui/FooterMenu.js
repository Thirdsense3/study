import React, {useState} from 'react'

export default function FooterMenu({footerMenuList, footerMenuTitle}){

    const [newList,setNewList] = useState(footerMenuList)
    const menuList = newList.map(item => (
        <li key={item.id}>{item.name}</li>
    ))

    return(
        <div class="col-12 col-md-2">
            <div class="menuTitle">{footerMenuTitle}</div>
            <ul>
                {menuList}
            </ul>
        </div>
    );
}