import { start } from "repl";
import lightMode from "../data/lightMode.json"


function getValueAtKeys(keys:string[]){
    let currentValue:any = lightMode;
    for(let key of keys){       
        currentValue = currentValue[key as keyof typeof currentValue];
    }
    let jsonValue =  currentValue.value;
    return jsonValue;
}


function getBracketValue(stringIn:string){
    let keys= stringIn.slice(1, -1).split('.');
    return getValueAtKeys(keys);
}


function curlyScanner(stringIn:string):string{
    let bracket = [];
    let found = false;

    for(let i = 0; i < stringIn.length; i++){
        if(stringIn[i] === '{'){
            found = true;
        }
        else if(stringIn[i] === '}'){
            bracket.push(stringIn.charAt(i));
            break;
        }

        if(found){
            bracket.push(stringIn.charAt(i));
        }
    }

    if(found){
        let newString = stringIn.replace(bracket.join(''),getBracketValue(bracket.join('')));
        return curlyScanner(newString);
    }

    return stringIn;
}



export function getJSONValue(stringIn:string){
    let keys = stringIn.split('/');
    let jsonValue = getValueAtKeys(keys);
    return curlyScanner(jsonValue);
}

export function setUpTokens(tokenNames:string[]){
    let float:any = document.querySelector(':root');
    for(let token of tokenNames){
        console.log(`key: ${token} value: ${getJSONValue(token)}`);
        float.style.setProperty(`--${token.replaceAll('/','-')}`,getJSONValue(token));
    }
}
