
 function printNome(){
    const p = document.getElementById('print')
    const txt = document.getElementById('txt')
    const ts = document.getElementById('ts')
    const title = document.getElementById('titulo')
    const p1 = document.getElementById('point1')
    const p2 = document.getElementById('point2')
    const p3 = document.getElementById('point3')
    p1.classList.toggle('point1')
    p2.classList.toggle('point2')
    p3.classList.toggle('point3')
    title.classList.toggle('titulo')
    const nome = (txt.value)
    p.innerText = `${nome}`
  }