var normalPostInput = document.getElementById('normal-post-input');
var mainPostSec = document.getElementById('main-post-sec');
mainPostSec.style.display = 'none';
normalPostInput.addEventListener('click', function(){
    mainPostSec.style.display = 'block';
    normalPostInput.style.display = 'none';
});
var closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', function(){
    mainPostSec.style.display = 'none';
    normalPostInput.style.display = 'block';
    normalPostInput.style.margin = '2% auto';
});