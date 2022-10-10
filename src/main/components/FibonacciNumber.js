import React from "react";

export default function FibonacciNumber(props) {
    const {number} = props;

    return (
        <div className={"numberBlock_" + number + " numberBlock"}>
            <h3>{number}</h3>
        </div>
    )
}
