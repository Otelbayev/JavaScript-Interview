/*
  Global execution context
  lexiacl envoirment = {
    envoirmentRecord:{a = 10},
    outer:null
  }
*/

let a = 10;

function fn1() {
  /*
    Lexical envoirment = {
      envoirmentRecord:{b = 20},
      outer:[tepadagi lexical envoirment]
    }
  */

  let b = 20;

  function fn2() {
    /**
     *
     * Lexical envoirment = {
     *  envoirmentRecord = {c= 0}
     *  outer:[tepadagi lexical envoirment]
     * }
     *
     */

    let c = 0;

    alert(a); //! a ni o'znini lexical envoirmentidan qidiradi topolmasa fn1 ni lexical envoirmentida qidiradi topolmasi Global lexical envoirment dan qidiradi topsa oladi
  }
}
