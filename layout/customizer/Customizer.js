import React, { useState } from 'react'
import { Settings, X } from 'react-feather'
import { Input } from 'reactstrap';

const Customizer = () => {
    const [openCustomizer, setOpenCustomizer] = useState(false);

    const changeThemeColor = (event) => {
        event ? document.body.classList.add('dark-layout') : document.body.classList.remove('dark-layout');
    }
    const changeThemeType = (event) => {
        event ? document.body.classList.add('rtl') : document.body.classList.remove('rtl');
        event ? document.body.dir = 'rtl' : document.body.dir = 'ltr';
    }
    const handleColor1 = (e) => {
        document.documentElement.style.setProperty("--theme-default", e.target.value);
    };
    const handleColor2 = (e) => {
        document.documentElement.style.setProperty("--theme-default2", e.target.value);
    };

    return (
        <div className={`customizer-wrap ${openCustomizer ? 'open' : ''}`}>
            <div className="customizer-links">
                <Settings onClick={() => setOpenCustomizer(true)} />
            </div>
            <div className="customizer-contain custom-scrollbar">
                <div className="setting-back">
                    <X onClick={() => setOpenCustomizer(false)} />
                </div>
                <div className="layouts-settings">
                    <div className="customizer-title">
                        <h6>Layout type</h6>
                    </div>
                    <div className="option-setting">
                        <span>Light</span>
                        <label className="switch">
                            <input type="checkbox" name="chk1" defaultValue="option" className="setting-check" onClick={(e) => { changeThemeColor(e.target.checked) }} />
                            <span className="switch-state" />
                        </label>
                        <span>Dark</span>
                    </div>
                </div>
                <div className="layouts-settings">
                    <div className="customizer-title">
                        <h6>Layout Direction</h6>
                    </div>
                    <div className="option-setting">
                        <span>LTR</span>
                        <label className="switch">
                            <input type="checkbox" name="chk2" defaultValue="option" className="setting-check1" onClick={(e) => { changeThemeType(e.target.checked) }} />
                            <span className="switch-state" />
                        </label>
                        <span>RTL</span>
                    </div>
                </div>
                <div className="layouts-settings">
                    <div className="customizer-title">
                        <h6>Unlimited Color</h6>
                    </div>
                    <div className="option-setting unlimited-color-layout">
                        <div className="form-group d-flex">
                            <Input id="ColorPicker6" type="color" defaultValue="#f35d43" name="Default" onClick={handleColor1} />
                            <Input id="ColorPicker7" type="color" defaultValue="#f34451" className='ms-2' name="Default" onClick={handleColor2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Customizer