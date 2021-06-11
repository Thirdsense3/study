import React, {useState} from 'react'
import FooterLogo from '../elements/ui/FooterLogo'
import FooterMenu from '../elements/ui/FooterMenu'
import FooterMenuData from '../../db/footermenu.json'

export default function Footer(){

    const [newFooterMenu,setNewFooterMenu] = useState(FooterMenuData)

    return(
        <div class="container-fluid" style={{padding: "0px"}}>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <FooterLogo></FooterLogo>
                            <FooterMenu
                                footerMenuList={newFooterMenu['ABOUT US']}
                                footerMenuTitle="ABOUT US">
                            </FooterMenu>
                            <FooterMenu 
                                footerMenuList={newFooterMenu['FOLLOW US']}
                                footerMenuTitle="FOLLOW US">
                            </FooterMenu>
                            <FooterMenu 
                                footerMenuList={newFooterMenu['USEFUL LINKS']}
                                footerMenuTitle="USEFUL LINKS">
                            </FooterMenu>

                            <div class="col-12 col-md-3">
                                <p class="menuTitle">ABOUT US</p>
                                <p>GET EMDKDUDJDJD EMDKDUDJDJD EMDKDUDJDJD EMDKDUDJDJDEMDKDUDJDJDEMDKDUDJDJD</p>
                                <input type="text"/>
                                <p>SUBSCRIBE</p>
                            </div>
                        
                        </div>
                    </div>

                </div>
            </div>
    )
}