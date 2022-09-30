
/*
//----------------------------------------atividade 1
function atividade1(){

    let amar =[];
    let n =1;

    for(let i = 0; i < 20;i++){

        
        amar[i] = n;
        n++;


    }
    alert(amar)

}

atividade1();
*/
//----------------------------------------atividade 2
/*
function atividade2(){

    let  maior= [];
    let menor = [];
    let n1 = 0
    let n2 = 0;

for(let i =0; i < 12; i++){
let res = prompt("digite um número")

if(res > 50){

maior[n1] = res;
n1++;

}
else{
   
    menor[n2] = res;
    n2++;

}


}
alert("números menor que ou igual a 50: " + menor);
alert("números maior que 50: " + maior);
}
atividade2();
*/
//-------------------------------------------------------------------- atividade 3



let drofo = ['anel da invisibilidade', 'dois pares de botas mágicas', 'uma poção do sono', 'duas poções da inocência'];
let tropper = ['capa da invisibilidade', 'uma pedra do despertar', 'uma varinha das varinhas', 'uma poção da inocência', 'duas poções da mentira', 'poção anti-inteligência'];



 /* no meio do caminho Tropper cansado parou pegou uma garrafa da sua mochila e bebeu, mas era a poção da mentira
        e então ele foi avisar o Drofo, mas não conseguiu falar a verdade e ainda falou para ele que estava com a perna doendo, </br>
        Drofo Preocupado com seu amigo deu para seu amigo um par de botas magicas para ele, Tropper então colocar a bota para testa e começou a correr</br>
        e correu uns 2km e caiu no lago, e por surpresa ele acha uma espada e escudo magico no fundo, mas perdeu a pedra da coragem </br>
        na aguá.
       


*/  
drofo[1] ="um par de botas";
tropper[4] ="uma poção da mentira"
tropper.splice(1,1)
tropper.push("escudo magico","espada magica","par de botas")

     
   /*
    
  drofo percebeu que tropper estava mentindo e com raiva abriu sua mochila e tacou sua poção de sono nele,
  tropper caiu no sono na hora e então drofo pegou suas botas de volta e não satisfeito pegou uma pação dele e 
  bebeu, mas ele não sabia que a poção era de anti-inteligência, após ficar com qi negativo ele começou a anda
  sem rumo e acabou avistando um ninho de Dragão e por burrice foi lá rouba um ovo,chegando no ninho ele consengue pegar
  um ovo, mas é arremessador pela mãe dragão e acabar caindo em cima de uma padaria do lado de uma coxinha, ele pegua ela 
  e sai andando como se nada tivesse acontecido.
 
    */

  drofo[1]="dois pares de botas"
  drofo.splice(2,1);
  drofo.push("ovo de dragão","coxinha");
  tropper.splice(4,1);
  tropper.splice(6,1);
  

document.write("inventario do Drofo: "+ drofo + "</br></br>")
document.write("inventario do Tropper: " +tropper)




  //-------------------------------------------------------------------- 
  