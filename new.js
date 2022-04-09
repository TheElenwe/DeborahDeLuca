document.querySelector('.information').addEventListener('click', function (a){
   let img = document.querySelector('#image').src=`https://www.amsterdam-dance-event.nl/uploads/images/artists-speakers/_520x650_crop_center-center_none/23376092_10155481309824760_1410750844656635508_n_154711.jpg  ` 
   img=document.querySelector('#image').style.visibility='visible';
   document.querySelector('p').innerHTML="Deborah De Luca (* 1980 in Naples, Italy) is an Italian DJ and techno producer.";
   document.querySelector('#a').innerHTML='Back';
   document.querySelector('#a1').innerHTML='Next';
   
  
 
   
   
 
   document.querySelector('#a').style.visibility="visible";
   document.querySelector('#a1').style.visibility='visible';
   
  
     
      // button.style.display='block';
   })
 
   
   document.querySelector('#a').addEventListener('click',function (){;
     button =document.querySelector('#image').src='';
     document.querySelector('p').innerHTML='';
     document.querySelector('#a').style.visibility="hidden"
    
    
     //img.style.display="none";
  })
  function changeImage() {

   if (document.querySelector("#image").src == "https://www.amsterdam-dance-event.nl/uploads/images/artists-speakers/_520x650_crop_center-center_none/23376092_10155481309824760_1410750844656635508_n_154711.jpg") 
   {
       document.querySelector("#image").src = "https://cdn.fusoelektronique.org/media/xt-adaptive-images/480/media/kunena/attachments/109/DeborahDeLuca0321Ottobre2020.jpg";
       document.querySelector('p').innerHTML="Deborah de luca travels all over the world non-stop with her amazing music";
   }
   else 
   {
       document.querySelector("#image").src = "https://i.pinimg.com/originals/0f/2f/45/0f2f457ff3c93b6cd1716548f798d8fd.jpg";
       document.querySelector("p").innerHTML='It is one of the best and most popular in techno music'
       document.querySelector('#a1').innerHTML='Back';
       document.querySelector('#a1').style.textAlign="left"
   }
}
 
