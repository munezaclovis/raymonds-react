import React from "react";
import "./loading.css";

const Loading = () => {
    return (
        <div
            className='loader loader--style8'
            style={{ maxHeight: "20px", maxWidth: "20px" }}
            title='7'
        >
            <svg
                version='1.1'
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                width='100%'
                viewBox='0 0 30 35'
                xmlSpace='preserve'
            >
                <rect
                    x='0'
                    y='10'
                    width='4'
                    height='10'
                    fill='#333'
                    opacity='0.2'
                >
                    <animate
                        attributeName='opacity'
                        attributeType='XML'
                        values='0.2; 1; .2'
                        begin='0s'
                        dur='0.9s'
                        repeatCount='indefinite'
                    />
                    <animate
                        attributeName='height'
                        attributeType='XML'
                        values='10; 20; 10'
                        begin='0s'
                        dur='0.9s'
                        repeatCount='indefinite'
                    />
                    <animate
                        attributeName='y'
                        attributeType='XML'
                        values='10; 5; 10'
                        begin='0s'
                        dur='0.9s'
                        repeatCount='indefinite'
                    />
                </rect>
                <rect
                    x='8'
                    y='10'
                    width='4'
                    height='10'
                    fill='#333'
                    opacity='0.2'
                >
                    <animate
                        attributeName='opacity'
                        attributeType='XML'
                        values='0.2; 1; .2'
                        begin='0.3s'
                        dur='0.9s'
                        repeatCount='indefinite'
                    />
                    <animate
                        attributeName='height'
                        attributeType='XML'
                        values='10; 20; 10'
                        begin='0.3s'
                        dur='0.9s'
                        repeatCount='indefinite'
                    />
                    <animate
                        attributeName='y'
                        attributeType='XML'
                        values='10; 5; 10'
                        begin='0.3s'
                        dur='0.9s'
                        repeatCount='indefinite'
                    />
                </rect>
                <rect
                    x='16'
                    y='10'
                    width='4'
                    height='10'
                    fill='#333'
                    opacity='0.2'
                >
                    <animate
                        attributeName='opacity'
                        attributeType='XML'
                        values='0.2; 1; .2'
                        begin='0.6s'
                        dur='0.9s'
                        repeatCount='indefinite'
                    />
                    <animate
                        attributeName='height'
                        attributeType='XML'
                        values='10; 20; 10'
                        begin='0.6s'
                        dur='0.9s'
                        repeatCount='indefinite'
                    />
                    <animate
                        attributeName='y'
                        attributeType='XML'
                        values='10; 5; 10'
                        begin='0.6s'
                        dur='0.9s'
                        repeatCount='indefinite'
                    />
                </rect>
            </svg>
        </div>
    );
};

export default Loading;
