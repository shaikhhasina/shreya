(function(){
var g=document.querySelector('.gal');if(!g)return;
var cards=g.querySelectorAll('.gc'),lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.filters button').forEach(function(b){b.addEventListener('click',function(){
document.querySelectorAll('.filters button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
cards.forEach(function(c){c.hidden=b.dataset.f!=='all'&&c.dataset.c!==b.dataset.f})})});
function open(c){var i=c.querySelector('img');li.src=i.src;li.alt=i.alt;lb.hidden=false}
cards.forEach(function(c){c.addEventListener('click',function(){open(c)});c.addEventListener('keydown',function(e){if(e.key==='Enter')open(c)})});
lb.addEventListener('click',function(){lb.hidden=true});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true});
})();
