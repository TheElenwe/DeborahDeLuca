document.querySelector('.information').addEventListener('click', function (a){
  let img = document.querySelector('#image').src=`https://www.amsterdam-dance-event.nl/uploads/images/artists-speakers/_520x650_crop_center-center_none/23376092_10155481309824760_1410750844656635508_n_154711.jpg  ` 
  img=document.querySelector('#image').style.visibility='visible';
  document.querySelector('p').innerHTML="Deborah De Luca (* 1980 in Naples, Italy) is an Italian DJ and techno producer.";
  document.querySelector('#a').innerHTML='Back';
  document.querySelector('#next').innerHTML='Next';
  document.querySelector('#previous').innerHTML='Prev';
  
 
  
 

  
  

  document.querySelector('#a').style.visibility="visible";
  document.querySelector('#next').style.visibility='visible';
  document.querySelector('#previous').style.visibility='visible';
  
  
 
    
     // button.style.display='block';
  })

  
  document.querySelector('#a').addEventListener('click',function (){;
    button =document.querySelector('#image').src='';
    document.querySelector('p').innerHTML='';
    document.querySelector('#a').style.visibility="hidden"
   
   
    //img.style.display="none";
 })

 $(document).ready(function() {
  var images = [
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
   "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
   "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  
 ];
 var imageIndex = 0,
         iLength = images.length - 1,
         imageEl = $('#image'),
         prevEl = $('#previous'),
         nextEl = $('#next');

     prevEl.on("click", function() {
        imageIndex--;

        imageEl.attr('src', images[imageIndex]);

       
        nextEl.toggle(true)
        if(!imageIndex){
          prevEl.toggle(false)
        }
       
    });

    nextEl.on("click", function() {
        imageIndex++;
       
        imageEl.attr('src', images[imageIndex]);

        if(imageIndex===iLength){
          nextEl.toggle(false)
        }
        prevEl.toggle(true)
    });

    prevEl.toggle(false)
    imageEl.attr(images[0]);
});

