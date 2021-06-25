import React, { Component } from 'react'

export default class Navbar extends Component {


    render() {
        const { lang } = this.props;
        return (
            <div className='flex align-center justify-center navbar-items'>
                <a href="/">   <div className={`nav-item full-height flex align-center margin_lft_rgt ${lang === 'en' ? 'en' : 'he'}`} >{lang === 'en' ? 'קצת עלינו' : 'שמלות כלה'}</div> </a>
                <a href="https://api.whatsapp.com/send?phone=972548233442"> <div className={`nav-item full-height flex align-center margin_lft_rgt ${lang === 'en' ? 'en' : 'he'} `}>{lang === 'en' ? 'יצירת קשר' : 'שמלות ערב'}</div> </a>
                <a href="/collection"> <div className={`nav-item full-height flex align-center margin_lft_rgt ${lang === 'en' ? 'en' : 'he'} `}>{lang === 'en' ? 'הקולקציות' : 'אודות'}</div> </a>
                <a href="/"><div className={`nav-item full-height flex align-center margin_lft_rgt ${lang === 'en' ? 'en' : 'he'} `}>{lang === 'en' ? 'ראשי' : 'תיאום פגישה'}</div> </a>
            </div >
        )
    }
}
