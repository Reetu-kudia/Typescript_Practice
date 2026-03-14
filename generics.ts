function display<T>(value:T):T{
    return value;
}

console.log(display<string>("Hello"));
console.log(display<number>(100));