/* Shared site header. Load it from each page with a script tag whose src is js/header.js, placed where the header should appear. */
(function(){
var page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
if(!/^(about|service|doctor|gallery|contact)\.html$/.test(page))page='index.html';
var html="<header><div class=\"wrap\">\n<a href=\"index.html\" class=\"brand\"><img src=\"images/logo.jpg\" alt=\"Shreya clinic logo\"><span>Shreya Skin &amp; Hair Care Clinic</span></a>\n<nav><a href=\"index.html\">Home</a><a href=\"about.html\">About Us</a><a href=\"service.html\">Services</a><a href=\"doctor.html\">Doctor</a><a href=\"gallery.html\">Gallery</a><a href=\"contact.html\">Contact Us</a></nav>\n<a class=\"btn\" href=\"contact.html\">Book Appointment</a>\n</div></header>";
html=html.replace('<a href="'+page+'">','<a href="'+page+'" aria-current="true">');
document.write(html);
})();
