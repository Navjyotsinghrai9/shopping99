let product1={
    img:"https://ohtopten.com/wp-content/uploads/2015/08/Best-T-shirts-for-men-1.jpg",
     item:'Man T -shirt',
    price: '₹ 550',
    buybtn:'Buy Now',
    buybtn2:'See More',
    
   
}
let product2={
    img:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1650552317_6930636.jpg?w=360&dpr=1.5",
    item:'Solids Full Sleeve: T-Shirt',
    price: '₹ 599',
    buybtn:'Buy Now',
    buybtn2:'See More',
   
}
let product3={
    img:"https://cdn.shopify.com/s/files/1/0094/6326/7379/products/TS-573_1_720x.jpg?v=1666426374",
    item:'Man T -shirt',
    price: '₹ 999',
    buybtn:'Buy Now',
    buybtn2:'See More',
}
let product4={
    img:"https://cdn.shopify.com/s/files/1/0094/6326/7379/products/5081-BLK-P50_1_720x.jpg?v=1663822146",
    item:'Man shirt Formal',
    price: '₹ 799',
    buybtn:'Buy Now',
    buybtn2:'See More',
}
let product5={
    img:"https://cdn.shopify.com/s/files/1/0094/6326/7379/products/5024-BLK-P58_6_720x.jpg?v=1656579569",
    item:'CROSS BUTTONED SHIRT ',
    price: '₹ 1,200',
    buybtn:'Buy Now',
    buybtn2:'See More',
   
}
let product6={
    img:"https://th.bing.com/th/id/OIP.IFlrGIFNUbg-Q37_tccdrgHaLH?pid=ImgDet&rs=1",
    item:'Man jeans',
    price: '₹ 599',
    buybtn:'Buy Now',
    buybtn2:'See More',
   
}
let product7={
    img:"https://th.bing.com/th/id/OIP.IR96LNvNJ1BdiqWsK5h9mQHaJ4?pid=ImgDet&rs=1",
    item:'Man T -shirt',
    price: '₹ 599',
    buybtn:'Buy Now',
    buybtn2:'See More',
}
let product8={
    img:"https://th.bing.com/th/id/OIP.IR96LNvNJ1BdiqWsK5h9mQHaJ4?pid=ImgDet&rs=1",
    item:'Man T -shirt',
    price: '₹ 599',
    buybtn:'Buy Now',
    buybtn2:'See More',
}
let productDetails =[product1,product2,product3,product4,product5,product6,product7,product8];
let data='';


for (let i = 0; i < productDetails.length; i++) {
    data+='<div id="ProDucts">'
    +'<h4 class="shirt_text">'+productDetails[i].item+'</h4>'
    +'<p class="price_text">'+'<span s.pngtyle="color: #262626;">'+productDetails[i].price+'</span>'+'</p>'
    +'<img src='+productDetails[i].img+'>'
    +'<div class="btn_main">'
    +'<div class="buy_bt">'+'<a href="#">'+productDetails[i].buybtn+'</a></div>'
    +'<div class="seemore_bt"><a href="#">'+productDetails[i].buybtn2+'</a></div></div></div>';
   

}
document.getElementById('products').innerHTML=data
