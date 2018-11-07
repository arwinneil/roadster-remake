var list = document.getElementById("products");

var template = document.getElementsByTagName("template")[0];

let url = 'http://www.json-generator.com/api/json/get/cdEGTuJOWa?indent=2';

// https://www.json-generator.com/#
// [
//   '{{repeat(5, 10)}}',
//   {
//     image: 'https://picsum.photos/200?image=',
//     title: '{{company().toUpperCase()}}',
//     caption: '{{lorem(15, "words")}}',
//     price: '{{floating(1000, 4000, 2, "$0,0.00")}}'
//   }
// ]

fetch(url)
.then(res => res.json())
.then((items) => {

    console.log('Checkout the JSON! ', items);

    for (var i=0; i < items.length; i++) {

      var newItem=template.content.cloneNode(true);

      newItem.getElementById("title").innerHTML=items[i].title;

      newItem.getElementById("image").setAttribute("src",items[i].image+ (i+ 1));

      newItem.getElementById("caption").innerHTML=items[i].caption;

      newItem.getElementById("price").innerHTML=items[i].price;

      list.appendChild(newItem);

    }
})
.catch(err => { throw err });


