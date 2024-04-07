const url = "https://www.kjcreations.com/";

let domain = url.split('/')[2];
if (domain.startsWith('www.') && domain.endsWith('.com')) {
    domain = domain.slice(4);
    console.log(domain);
    domain = domain.slice(0, -4);
}

console.log("Domain:", domain);
