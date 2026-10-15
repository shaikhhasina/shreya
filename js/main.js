var lb=document.getElementById('lb');
if(lb){document.querySelectorAll('.gc').forEach(function(c){function o(){lb.querySelector('img').src=c.querySelector('img').src;lb.hidden=false}c.addEventListener('click',o);c.addEventListener('keydown',function(e){if(e.key=='Enter')o()})});
lb.addEventListener('click',function(){lb.hidden=true});addEventListener('keydown',function(e){if(e.key=='Escape')lb.hidden=true});
document.querySelectorAll('.filters button').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.filters button').forEach(function(x){x.setAttribute('aria-pressed',x==b)});document.querySelectorAll('.gc').forEach(function(c){c.hidden=b.dataset.f!='all'&&c.dataset.c!=b.dataset.f})})})}
(function(){
  var h=document.querySelector('header'); if(!h) return;
  var nav=h.querySelector('nav'); if(!nav||h.querySelector('.menu-btn')) return;
  var b=document.createElement('button');
  b.className='menu-btn'; b.type='button';
  b.setAttribute('aria-label','Menu'); b.setAttribute('aria-expanded','false');
  b.innerHTML='<span></span><span></span><span></span>';
  nav.parentNode.insertBefore(b,nav);
  var hb=h.querySelector('.wrap > .btn');
  if(hb&&!nav.querySelector('.nav-book')){
    var nb=hb.cloneNode(true);
    nb.classList.add('nav-book');
    nav.appendChild(nb);
  }
  b.addEventListener('click',function(){
    var o=nav.classList.toggle('open'); b.setAttribute('aria-expanded',o);
  });
  nav.addEventListener('click',function(e){
    if(e.target.closest('a')){nav.classList.remove('open');b.setAttribute('aria-expanded','false');}
  });
})();
