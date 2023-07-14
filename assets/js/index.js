let goods = `[{
        "img": "assets/img/catalog/LEDBAR24x4.jpg",
        "title": "LED BAR 24x4 световой прибор линейный rgbw",
        "price": 7500,
        "category": "led"
    },
    {
        "img": "assets/img/catalog/ledPar18x12.jpg",
        "title": "Led par 18x12 прожектор световой",
        "price": 2990,
        "category": "led"
    },
    {
        "img": "assets/img/catalog/ledpar18x10.jpg",
        "title": "LED PAR 18x10 rgbw световой прибор",
        "price": 6500,
        "category": "led"
    },
    {
        "img": "assets/img/catalog/ledparmini.jpg",
        "title": "LED PAR mini, прожектор, автономный 5-10 часов",
        "price": 6700,
        "category": "led"
    },
    {
        "img": "assets/img/catalog/ledbar18x30.jpg",
        "title": "LED BAR 18x30 pixel - мечта прокатчика",
        "price": 36500,
        "category": "led"
    },
    {
        "img": "assets/img/catalog/robePatt.jpg",
        "title": "ROBE PATT ретро световой прибор",
        "price": 36000,
        "category": "retro"
    },
    {
        "img": "assets/img/catalog/portman.jpg",
        "title": "Portman P3 блайндер ретро световой прибор 2023",
        "price": 17800,
        "category": "retro"
    },
    {
        "img": "assets/img/catalog/portmanP1.jpg",
        "title": "Portman p1 ретро световой прибор - панель",
        "price": 48000,
        "category": "retro"
    },
    {
        "img": "assets/img/catalog/retro.jpg",
        "title": "Ретро блайндер portman световой прибор",
        "price": 7900,
        "category": "retro"
    },
    {
        "img": "assets/img/catalog/portmanP2.jpg",
        "title": "Portman hexaline p2 ретро световой прибор",
        "price": 38500,
        "category": "retro"
    },
    {
        "img": "assets/img/catalog/beam.jpg",
        "title": "Head Beam Spot Wash 230w BSW 3 в 1 световая голова",
        "price": 39000,
        "category": "head"
    },
    {
        "img": "assets/img/catalog/160w.jpg",
        "title": "160W LED BSW 3в1 бим спот вош - световая голова",
        "price": 29500,
        "category": "head"
    },
    {
        "img": "assets/img/catalog/wash.jpg",
        "title": "Head wash 19x15 zoom световая голова",
        "price": 14990,
        "category": "head"
    },
    {
        "img": "assets/img/catalog/robin.jpg",
        "title": "Robe robin 600 реплика 2023 световая голова",
        "price": 83000,
        "category": "head"
    },
    {
        "img": "assets/img/catalog/metall.jpg",
        "title": "Кейс металлический жесткий",
        "price": 10500,
        "category": "case"
    },
    {
        "img": "assets/img/catalog/bag.jpg",
        "title": "Ящик для инструментов 420x360x120mm",
        "price": 3200,
        "category": "case"
    }
]`;
//console.log(goods);

let all = document.getElementById("all");
let cases = document.getElementById('case');
let led = document.getElementById('led');
let retro = document.getElementById('retro');
let head = document.getElementById('head');

let goodsArr = JSON.parse(goods);

document.addEventListener("DOMContentLoaded", function(){
    let filteredGoods = filterGoodsByCategory(goodsArr, 'retro');
        renderGoods(filteredGoods);
    
    all.addEventListener('click', function() {
        renderGoods(goodsArr);
    });

    cases.addEventListener('click', function() {
        let filteredGoods = filterGoodsByCategory(goodsArr, 'case');
        renderGoods(filteredGoods);
    });

    led.addEventListener('click', function() {
        let filteredGoods = filterGoodsByCategory(goodsArr, 'led');
        renderGoods(filteredGoods);
    });

    retro.addEventListener('click', function() {
        let filteredGoods = filterGoodsByCategory(goodsArr, 'retro');
        renderGoods(filteredGoods);
    });

    head.addEventListener('click', function() {
        let filteredGoods = filterGoodsByCategory(goodsArr, 'head');
        renderGoods(filteredGoods);
    });
});

function renderGoods(goods) {
    let goodsContent = '';
    for(let product of goods) {
        goodsContent += `
            <div class="product"> 
                <img src="${product.img}">
                <h3>${product.title}</h3>
                <p>Цена: ${product.price} руб.</p>
                <button class="btn"><a href="https://vk.com/amixled">Сделать заказ</a></button>
            </div>`;
    }
    document.querySelector('.catalog-goods').innerHTML = goodsContent;
}

function filterGoodsByCategory(goods, category) {
    return goods.filter(function(product) {
        return product.category === category;
    });
}


/*document.addEventListener("DOMContentLoaded", function(){
    let goodsArr = JSON.parse(goods);
    console.log(goodsArr);
    let goodsContent = '';
    for(let product of goodsArr){
        goodsContent += `<div class="product">
        <img src=${product.img}
        </div>`
    }
    document.querySelector('.catalog-goods').innerHTML = goodsContent;
});*/

