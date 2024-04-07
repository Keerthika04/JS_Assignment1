const text = "hello world";

const manipulate = text
    .toUpperCase()             
    .split('')      
    .reverse()                
    .join('')                
    .replace('O', 'X');      

console.log(manipulate); 
