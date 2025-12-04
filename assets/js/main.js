// Archivo JS mínimo para el blog. Aquí se pueden añadir interacciones simples.
document.addEventListener('DOMContentLoaded',()=>{
  // ejemplo: marcar enlace activo
  const links = document.querySelectorAll('nav a');
  links.forEach(a=>{
    if(location.pathname.endsWith(a.getAttribute('href'))||location.pathname.endsWith(a.getAttribute('href').replace('./',''))){
      a.style.textDecoration='underline'
    }
  })
})
