//Atividade 1// 
{let x = 10;
console.log("Atividade 1" + x); 
}
console.log()
//Atividade 2//
{let a = 20 ;
let b = 5 ;
console.log("Atividade 2")
console.log("Adição: ", a + b)
console.log("Subtração: ", a - b)
console.log("Multiplicação: ", a * b)
console.log("Divisão: ", a/b)
console.log("Resto: ", a % b);
} 

console.log()
//Atividade 3//
{
let num = -15
console.log("Atividade 3")
console.log( - num);
}

console.log()
//Atividade 4//
{ let count = 5;
console.log("Atividade 4")
console.log(count)
console.log(-- count)
console.log(++ count);
}

console.log()
//Atividade 5//
{
let x = 10;
console.log("Atividade 5")
 console.log (x += 5)
 console.log(x -= 3)
 console.log(x *= 20)
 console.log(x /= 4)
 console.log(x %= 3)
}

console.log()
//Atividade 6//
{ let p = true;
let q = false; 

console.log(p && q)
console.log(p || q)
console.log(!p)
console.log(!q)
}

console.log()
//Atividade 7//
{
    console.log(0 || "Hello");
    console.log("" && "World");
    console.log(null ?? "Default Value");
    console.log(undefined ?? 42);
/* ele vai mostrar 
Hello
Default Value
42*/
}

console.log()
//Atividade 8//
{
let resultado = 10 + 5 * 2 > 20 && !false;
console.log(resultado);
/* O valor da variavel sera false,pois ele esta afirmando que 20 e > 20,e o && serve para comparar os resultados*/
}

console.log()
//Atividade 9//
console.log("Atividade9")
{console.log("5" - 2);
console.log("5" + 2);
console.log(true + 1);
console.log(false + 10);
/*O primeiro resultado e da conta,o segundo e a junção dos numeros
,o terceiro o true vale 1,assim somando mais 1,o false vale 0,sendo assim somando o */
} 

console.log()
//Atividade 10//
console.log("Atividade10")
let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);
console.log(z);
/*O valor de z sera o resultado da conta,o ++ adicona 1 a variavel na proxima vez que ela for chamada,e o -- tira, 
 o * representa a multiplicação, / representa a divisão, o + a soma, e o % representa o resto da divisão*/