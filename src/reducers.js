import {fromJS} from 'immutable';

var initialState=fromJS({
    temp:0,
    prev:[],
    curr:'',
    total:0
});
export default function reducers(state=initialState,action){
    switch(action.type){
        case 'SET_DIG':
        {
            if(state.total===undefined)state.total=0;
            if(state.temp===undefined)state.temp=0;
            state={...state,temp:(state.temp)*10+(action.payload)};
            break;
        }
        case 'SET_VALUE':
        {
            state={...state,temp:action.payload};
            break;
        }
        case 'SET_OP':
        {
            if(state.total===undefined)state.total=0;
            if(state.temp===undefined)state.temp=0;
            switch(state.curr){
                case '+':
                {
                    state={...state,total:state.temp+state.total};
                    break;
                }
                case '-':
                {
                    state={...state,total:state.total-state.temp};
                    break;
                }
                case '*':
                {
                    state={...state,total:state.temp*state.total};
                    break;
                }
                case '/':
                {
                    state={...state,total:state.total/state.temp};
                    break;
                }
                default:
                {
                    state={...state,total:state.total+state.temp};
                    break;
                }
            }
            if(state.prev){
                state={...state,prev:[...state.prev,state.temp],temp:0,curr:action.payload};
            }
            else{
                var l=[state.temp];
                state={...state,prev:l,temp:0,curr:action.payload};
            }
            break;
        }
        case 'EQUAL':
        {
            if(state.total===undefined)state.total=0;
            if(state.temp===undefined)state.temp=0;
            switch(state.curr){
                case '+':
                {
                    state={...state,total:state.temp+state.total};
                    break;
                }
                case '-':
                {
                    state={...state,total:state.total-state.temp};
                    break;
                }
                case '*':
                {
                    state={...state,total:state.temp*state.total};
                    break;
                }
                case '/':
                {
                    state={...state,total:state.total/state.temp};
                    break;
                }
                default:
                {
                    break;
                }
            }
            state={...state,prev:[],temp:0,curr:''};
            break;
        }
        case 'CLEAR':
        {
            state=initialState;
            break;
        }
        default:
        {
            break;
        }
    }
    return state;
};