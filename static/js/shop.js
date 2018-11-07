var list = document.getElementById("products");

var template = document.getElementsByTagName("template")[0];

for (var i=0; i < 10; i++) {

   var newItem=template.content.cloneNode(true);

    title= newItem.getElementById("title").innerHTML="Awesome Tesla Product"+(i+ 1);

      title= newItem.getElementById("image").setAttribute("src","https://picsum.photos/200?image="+ (i+ 1));


    list.appendChild(newItem);


}