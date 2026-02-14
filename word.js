const c1=document.getElementById('ck1');
const c2=document.getElementById('ck2');
const c3=document.getElementById('ck3');
const btn=document.getElementById('nextBtn');

function checkHeart(){
 if(c1.checked && c2.checked && c3.checked){
   btn.classList.add('show');
 }
}

c1.addEventListener('change',checkHeart);
c2.addEventListener('change',checkHeart);
c3.addEventListener('change',checkHeart);

