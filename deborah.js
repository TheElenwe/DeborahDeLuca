document.querySelector('.information').addEventListener('click', function (a) {
  document.querySelector('#image').src = "https://www.amsterdam-dance-event.nl/uploads/images/artists-speakers/_520x650_crop_center-center_none/23376092_10155481309824760_1410750844656635508_n_154711.jpg"
  document.querySelector('#image').style.visibility = 'visible';
  document.querySelector('p').innerHTML = "Deborah De Luca (* 1980 in Naples, Italy) is an Italian DJ and techno producer.";
  document.querySelector('#back').innerHTML = 'Exit';
  document.querySelector('#next').innerHTML = 'Next';
  document.querySelector('#previous').innerHTML = 'Prev';






  document.querySelector('#back').style.visibility = "visible";
  document.querySelector('#next').style.visibility = 'visible';
  document.querySelector('#previous').style.visibility = 'visible';





})


document.querySelector('#back').addEventListener('click', function () {
  ;
  button = document.querySelector('#image').src = '';
  document.querySelector('p').innerHTML = '';
  document.querySelector('#back').style.visibility = "hidden"
  document.querySelector('#previous').style.visibility = "hidden"
  document.querySelector('#next').style.visibility = "hidden"
  window.location.reload()



})

document.querySelector("#next").addEventListener('click', function () {
  if (document.querySelector("#image").src == "https://www.amsterdam-dance-event.nl/uploads/images/artists-speakers/_520x650_crop_center-center_none/23376092_10155481309824760_1410750844656635508_n_154711.jpg") {

    document.querySelector('p').innerHTML = "Deborah de luca travels all over the world non-stop with her amazing music";
  }
  else {
    document.querySelector("p").innerHTML = 'It is one of the best and most popular in techno music'
  }
})

document.querySelector("#previous").addEventListener('click', function () {
  if (document.querySelector("#image").src == "https://i.pinimg.com/originals/0f/2f/45/0f2f457ff3c93b6cd1716548f798d8fd.jpg") {

    document.querySelector('p').innerHTML = "Deborah de luca travels all over the world non-stop with her amazing music";
  }
  else {
    document.querySelector('p').innerHTML = "Deborah De Luca (* 1980 in Naples, Italy) is an Italian DJ and techno producer.";
  }
})

document.querySelector('#info').addEventListener('click', function () {
  if (document.querySelector("#image").src == "https://cdn.fusoelektronique.org/media/xt-adaptive-images/480/media/kunena/attachments/109/DeborahDeLuca0321Ottobre2020.jpg") {
    window.location.reload()
  } else if (document.querySelector("#image").src == "https://i.pinimg.com/originals/0f/2f/45/0f2f457ff3c93b6cd1716548f798d8fd.jpg") {
    window.location.reload()
  }
  else if (document.querySelector("#image").src == "https://www.amsterdam-dance-event.nl/uploads/images/artists-speakers/_520x650_crop_center-center_none/23376092_10155481309824760_1410750844656635508_n_154711.jpg") {
    window.location.reload()
  }
})
$(document).ready(function () {
  var images = [
    "https://www.amsterdam-dance-event.nl/uploads/images/artists-speakers/_520x650_crop_center-center_none/23376092_10155481309824760_1410750844656635508_n_154711.jpg",
    "https://i.pinimg.com/736x/aa/43/f0/aa43f0da049c5540fa55782ec8366bb8.jpg",
    "https://i.pinimg.com/originals/0f/2f/45/0f2f457ff3c93b6cd1716548f798d8fd.jpg"


  ];


  var imageIndex = 0,
    iLength = images.length - 1,
    imageEl = $('#image'),
    prevEl = $('#previous'),
    nextEl = $('#next');

  prevEl.on("click", function () {
    imageIndex--;

    imageEl.attr('src', images[imageIndex]);


    nextEl.toggle(true)
    if (!imageIndex) {
      prevEl.toggle(false)
    }

  });

  nextEl.on("click", function () {
    imageIndex++;

    imageEl.attr('src', images[imageIndex]);

    if (imageIndex === iLength) {
      nextEl.toggle(false)
    }
    prevEl.toggle(true)
  });

  prevEl.toggle(false)
  imageEl.attr(images[0]);
});

