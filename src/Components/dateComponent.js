
import React from 'react'
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};
z

function DateComponent() {
    return (
        <mobiscroll.Form>
                <div className="mbsc-grid mbsc-form-grid">
                    <div className="mbsc-row">
                        <div className="mbsc-col-sm-12 mbsc-col-md-6">
                            <mobiscroll.Date display="bubble">
								<mobiscroll.Input inputStyle="box" placeholder="Please Select...">Mobile</mobiscroll.Input>
							</mobiscroll.Date>
                        </div>
    					<div className="mbsc-col-sm-12 mbsc-col-md-6">
                            <mobiscroll.Date display="bubble" touchUi={false}>
								<mobiscroll.Input inputStyle="box" placeholder="Please Select...">Desktop</mobiscroll.Input>
							</mobiscroll.Date>
                        </div>
                    </div>
                </div>
            </mobiscroll.Form>
    )
}

export default DateComponent
