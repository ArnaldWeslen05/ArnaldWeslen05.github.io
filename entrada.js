 
 function printNome(){
    const p = document.getElementById('print')
    const txt = document.getElementById('txt')
    const ts = document.getElementById('ts')
    const nome = (txt.value)
    p.innerText = `${nome}`
  }