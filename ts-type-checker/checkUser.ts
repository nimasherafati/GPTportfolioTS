import fs from 'fs';
import { User } from './types/types';

function isUser(obj:any) : obj is User{
    return (
        typeof obj.name === 'string' &&
        typeof obj.email === 'string' &&
        (typeof obj.age === 'number' || obj.age === undefined)
    );
}

const file = process.argv[2];
if(!file){
    console.error('there is not json file available');
    process.exit(1);
}

const data = JSON.parse(fs.readFileSync(file,'utf-8'));
if(isUser(data)){
    console.log('User is valid!')
}else{
    console.error('User is not valid!!!!!')
}