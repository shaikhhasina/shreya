var lb=document.getElementById('lb');
if(lb){document.querySelectorAll('.gc').forEach(function(c){function o(){lb.querySelector('img').src=c.querySelector('img').src;lb.hidden=false}c.addEventListener('click',o);c.addEventListener('keydown',function(e){if(e.key=='Enter')o()})});
lb.addEventListener('click',function(){lb.hidden=true});addEventListener('keydown',function(e){if(e.key=='Escape')lb.hidden=true});
document.querySelectorAll('.filters button').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.filters button').forEach(function(x){x.setAttribute('aria-pressed',x==b)});document.querySelectorAll('.gc').forEach(function(c){c.hidden=b.dataset.f!='all'&&c.dataset.c!=b.dataset.f})})})}
