let product1={
    img:"img/laptop-img.png",
     item:'Man T -shirt',
    price: '₹ 599',
   
}
let product2={
    img:"https://rukminim1.flixcart.com/image/1664/1664/j1cgdjk0/shirt/7/n/q/44-bfshtpc501brwn-being-fab-original-imaecvnxg2fjkbhb.jpeg?q=90",
    item:'Man T -shirt',
    price: '₹ 599',
   
}
let product3={
    img:"https://th.bing.com/th/id/OIP.IR96LNvNJ1BdiqWsK5h9mQHaJ4?pid=ImgDet&rs=1",
    item:'Man T -shirt',
    price: '₹ 599',
}
let product4={
    img:"https://th.bing.com/th/id/OIP.IR96LNvNJ1BdiqWsK5h9mQHaJ4?pid=ImgDet&rs=1",
    item:'Man T -shirt',
    price: '₹ 599',
}
let product5={
    img:"https://th.bing.com/th/id/OIP.IR96LNvNJ1BdiqWsK5h9mQHaJ4?pid=ImgDet&rs=1",
    item:'Man T -shirt',
    price: '₹ 599',
   
}
let product6={
    img:"https://th.bing.com/th/id/OIP.IR96LNvNJ1BdiqWsK5h9mQHaJ4?pid=ImgDet&rs=1",
    item:'Man T -shirt',
    price: '₹ 599',
   
}
let product7={
    img:"https://th.bing.com/th/id/OIP.IR96LNvNJ1BdiqWsK5h9mQHaJ4?pid=ImgDet&rs=1",
    item:'Man T -shirt',
    price: '₹ 599',
}
let product8={
    img:"https://th.bing.com/th/id/OIP.IR96LNvNJ1BdiqWsK5h9mQHaJ4?pid=ImgDet&rs=1",
    item:'Man T -shirt',
    price: '₹ 599',
}
let productDetails =[product1,product2,product3,product4,product5,product6,product7,product8];
let data='';


for (let i = 0; i < productDetails.length; i++) {
    data+='<div id="ProDucts">'
    +'<h4 class="shirt_text">'+productDetails[i].item+'</h4>'
    +'<p class="price_text">'+'<span s.pngtyle="color: #262626;">'+productDetails[i].price+'</span>'+'</p>'
    +'<img src='+productDetails[i].img+'>'
    +'<p>'+productDetails[i].age+'</p> </div>';
   

}
document.getElementById('products').innerHTML=data
