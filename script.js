document.addEventListener('DOMContentLoaded', function(){
  // Simple enhancement: allow clicking numeric header to copy its name
  document.querySelectorAll('th').forEach(function(th){
    th.style.cursor = 'pointer';
    th.title = 'Click to copy column name';
    th.addEventListener('click', function(){
      const text = th.innerText.trim();
      if(!navigator.clipboard) return;
      navigator.clipboard.writeText(text).then(function(){
        th.style.background = '#e6f6ff';
        setTimeout(()=> th.style.background = '', 400);
      });
    });
  });
});
