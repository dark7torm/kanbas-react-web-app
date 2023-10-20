import React from "react";
function FunctionParenthesesAndParameters() {
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <>
        <h3>Parentheses and Parameters</h3>
        twoSquared = {twoSquared} <br/>
        square(2) = {square(2)} <br/>
        threePlusOne = {threePlusOne} <br/>
        plusOne = {plusOne(3)} <br/>
        </>
    )
}
export default FunctionParenthesesAndParameters