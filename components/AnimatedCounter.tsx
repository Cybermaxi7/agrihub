"use client"
import React from 'react'
import CountUp from "react-countup";

interface AnimatedCounterProps {
    value: string;
}

const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
    const processValue = (val: string) => {
        if (val.includes('M')) {
            // For values like "1M+"
            const number = parseFloat(val.replace(/[^0-9.]/g, ''));
            return {
                number: number * 1_000_000, // Convert to actual million value
                suffix: 'M+'
            };
        }
        // For regular numbers like "1000+"
        return {
            number: parseFloat(val.replace(/[^0-9.]/g, '')),
            suffix: val.includes('+') ? '+' : ''
        };
    };

    const { number, suffix } = processValue(value);

    if (isNaN(number)) return value;

    return (
        <CountUp
            end={number}
            duration={2.5}
            separator=","
            suffix={suffix}
            enableScrollSpy
            scrollSpyOnce
            decimals={0}
            formattingFn={(n) => {
                // If it's a million or more, format as xM
                if (n >= 1_000_000) {
                    return `${(n / 1_000_000).toFixed(0)}${suffix}`;
                }
                // Otherwise return regular number with suffix
                return `${n}${suffix}`;
            }}
        />
    );
};

export default AnimatedCounter;