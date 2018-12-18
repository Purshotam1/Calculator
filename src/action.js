export function setValue(temp){
    return({
        type:'SET_VALUE',
        payload:temp
    }); 
}

export function setOp(op){
    return({
        type:'SET_OP',
        payload:op
    }); 
}

export function setDig(dig){
    return({
        type:'SET_DIG',
        payload:dig
    }); 
}

export function Equal(){
    return({
        type:'EQUAL'
    }); 
}

export function Div(div){
    return({
        type:'DIV',
        payload:div
    }); 
}

export function Clear(){
    return({
        type:'CLEAR'
    }); 
}