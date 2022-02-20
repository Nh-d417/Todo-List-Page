const image = [
  "img/note.jpg",
  "img/paper.jpg"
];


  const num = Math.floor(Math.random()*image.length);
  
  const img = document.createElement("img");
  img.src = image[num];
  
  document.body.prepend(img);
