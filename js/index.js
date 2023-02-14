// Text Size , Style , Decoration

document.getElementById('bold').addEventListener('click',function(){
    
     const text = document.getElementById('text-area');
     
     text.classList.toggle('fontSize');
});

document.getElementById('italic').addEventListener('click',function(){

   const text = document.getElementById('text-area');

   text.classList.toggle('fontStyle');
});

document.getElementById('underline').addEventListener('click',function(){

   const text = document.getElementById('text-area');

   text.classList.toggle('underline');
});

// Text Left , Center , Right , Justify


document.getElementById('te-left').addEventListener('click',function(){

    const textArea = document.getElementById('text-area');

    textArea.style.textAlign = 'left';
 });
 
 document.getElementById('te-center').addEventListener('click',function(){
 
    const textArea = document.getElementById('text-area');

    textArea.style.textAlign = 'center';
 });
 
 document.getElementById('te-right').addEventListener('click',function(){
 
    const textArea = document.getElementById('text-area');

    textArea.style.textAlign = 'right';
 });

 document.getElementById('te-justify').addEventListener('click',function(){
 
    const textArea = document.getElementById('text-area');

    textArea.style.textAlign = 'justify';
 });

 // Text Color , Font-Size , Font-family

 document.getElementById('te-font-family').addEventListener('click',function(){

   const textArea = document.getElementById('text-area');

   textArea.classList.toggle('p-font');
});

 document.getElementById('te-font-size').addEventListener('click',function(e){

   const size = e.target.value;

   const textArea = document.getElementById('text-area');

   textArea.style.fontSize = size + 'px';

});

 document.getElementById('te-color').addEventListener('click',function(e){

   const colors = e.target.value;

   const textArea = document.getElementById('text-area');

   textArea.style.color = colors;

});