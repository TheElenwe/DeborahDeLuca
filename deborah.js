    document.querySelector('.information').addEventListener('click', function (a){
    let img = document.querySelector('#image').src=`https://www.amsterdam-dance-event.nl/uploads/images/artists-speakers/_520x650_crop_center-center_none/23376092_10155481309824760_1410750844656635508_n_154711.jpg  ` 
    img=document.querySelector('#image').style.visibility='visible';
    document.querySelector('p').innerHTML="Deborah De Luca (* 1980 in Naples, Italy) is an Italian DJ and techno producer."
       
      
        //img.style.display='block';
    })

  document.querySelector('button').addEventListener('click',function (){
     let img =document.querySelector('#image').src=''
     document.querySelector('p').innerHTML=''
    
     //img.style.display="none";
  })


  
