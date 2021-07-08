import React from 'react';
import instagramICON from '../assets/images/ICONS/Instagram.svg';
import facebookICON from '../assets/images/ICONS/Facebook.svg';
import youtubeICON from '../assets/images/ICONS/Youtube.svg';
import tiktokICON from '../assets/images/ICONS/Tiktok.svg';

const Socials = (props) =>(
            <div>
                <a href="https://www.instagram.com/olya_bridal/"> <img src={instagramICON} alt="" className={props.isSelectionCard ? 'selection-socials' : 'margin_lft_rgt'} /> </a>
                <a href="https://www.facebook.com/Olya_dresses-100865561397566"> <img src={facebookICON} alt="" className={props.isSelectionCard ? 'selection-socials' : 'margin_lft_rgt'} /> </a>
                <a href="https://www.youtube.com/channel/UCM7n4_5D5WlYY9ACPHul1lQ"> <img src={youtubeICON} alt="" className={props.isSelectionCard ? 'selection-socials' : 'margin_lft_rgt'} /> </a>
                <a href="https://vm.tiktok.com/Jdtykab/"> <img src={tiktokICON} alt="" className={props.isSelectionCard ? 'selection-socials' : 'margin_lft_rgt'} /></a>
            </div>
)
export default React.memo(Socials);
