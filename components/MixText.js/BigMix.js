import React from 'react';

function BixMix({ text1, gradientText }) {
    return (
        <div className="font-bold text-[1.35rem] leading-tight text-Orch">
            {text1} <span className="gradient-text">{gradientText}</span>
        </div>
    );
}

export default BixMix;
