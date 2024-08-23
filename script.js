const dresses = [

    {
        brand: "Sana Safinaz",
        material: "Chiffon",
        color: "Black",
        pieces: 3,
        description: "Includes embroidered shirt, trouser, and dupatta",
        price: "PKR 5,500",
        picture: "./Brand Logos/sana.jpeg",
        colorVariations: ["Black", "Maroon", "Emerald Green"]
    },
    {
        brand: "Limelight",
        material: "Cotton",
        color: "Coral Pink",
        pieces: 2,
        description: "Includes casual shirt and trouser",
        price: "PKR 2,700",
        picture: "./Brand Logos/limelight.jpeg",
        colorVariations: ["Coral Pink", "Mint Green", "Beige"]
    },
    {
        brand: "Agha Noor",
        material: "Chiffon",
        color: "Pearl White",
        pieces: 3,
        description: "Includes embellished shirt, trouser, and dupatta",
        price: "PKR 4,900",
        picture: "./Brand Logos/agha.png",
        colorVariations: ["Pearl White", "Gold", "Silver"]
    },
    {
        brand: "Alkaram Studio",
        material: "Lawn",
        color: "Floral White",
        pieces: 3,
        description: "Includes shirt, trouser, and chiffon dupatta",
        price: "PKR 4,000",
        picture: "./Brand Logos/Alkaram.jpg",
        colorVariations: ["Floral White", "Yellow", "Pink"]
    },
    {
        brand: "Nishat Linen",
        material: "Karandi",
        color: "Beige",
        pieces: 3,
        description: "Includes shirt, trouser, and woolen shawl",
        price: "PKR 4,800",
        picture: "./Brand Logos/nishat.png",
        colorVariations: ["Beige", "Brown", "Charcoal"]
    },
    {
        brand: "Gul Ahmed",
        material: "Cotton",
        color: "Sky Blue",
        pieces: 2,
        description: "Includes shirt and trouser",
        price: "PKR 2,800",
        picture: "./Brand Logos/Gul Ahmed.png",
        colorVariations: ["Sky Blue", "White", "Grey"]
    },
    {
        brand: "Zara Shahjahan",
        material: "Organza",
        color: "Ivory",
        pieces: 3,
        description: "Includes embroidered shirt, gharara, and dupatta",
        price: "PKR 7,200",
        picture: "./Brand Logos/zara.png",
        colorVariations: ["Ivory", "Blush Pink", "Champagne"]
    },
    {
        brand: "Bareeze",
        material: "Cotton Silk",
        color: "Peach",
        pieces: 3,
        description: "Includes hand-embroidered shirt, trouser, and dupatta",
        price: "PKR 5,000",
        picture: "./Brand Logos/bareeze.png",
        colorVariations: ["Peach", "Lavender", "White"]
    },
    {
        brand: "Bonanza Satrangi",
        material: "Lawn",
        color: "Mint Green",
        pieces: 3,
        description: "Includes printed shirt, trouser, and dupatta",
        price: "PKR 3,200",
        picture: "./Brand Logos/bonanza.png",
        colorVariations: ["Mint Green", "Peach", "White"]
    },
    {
        brand: "Charcoal",
        material: "Cotton",
        color: "Navy Blue",
        pieces: 2,
        description: "Includes shirt and trouser for men",
        price: "PKR 2,500",
        picture: "./Brand Logos/charcoal.png",
        colorVariations: ["Navy Blue", "Grey", "Black"]
    },
    {
        brand: "Kayseria",
        material: "Lawn",
        color: "Lavender",
        pieces: 2,
        description: "Includes printed shirt and trouser",
        price: "PKR 2,900",
        picture: "./Brand Logos/kayseria.png",
        colorVariations: ["Lavender", "Mint Green", "Sky Blue"]
    },
    {
        brand: "Ego",
        material: "Lawn",
        color: "Mustard Yellow",
        pieces: 2,
        description: "Includes shirt and trouser",
        price: "PKR 2,600",
        picture: "./Brand Logos/ego.jpg",
        colorVariations: ["Mustard Yellow", "Coral", "Olive Green"]
    },
    {
        brand: "Generation",
        material: "Khaddar",
        color: "Maroon",
        pieces: 3,
        description: "Includes embroidered shirt, trouser, and shawl",
        price: "PKR 5,300",
        picture: "./Brand Logos/generation.png",
        colorVariations: ["Maroon", "Charcoal", "Mustard"]
    },
    {
        brand: "Beechtree",
        material: "Lawn",
        color: "Emerald Green",
        pieces: 3,
        description: "Includes printed shirt, trouser, and dupatta",
        price: "PKR 3,400",
        picture: "./Brand Logos/beechtree.png",
        colorVariations: ["Emerald Green", "White", "Black"]
    },
    {
        brand: "Sapphire",
        material: "Lawn",
        color: "Bright Orange",
        pieces: 3,
        description: "Includes printed shirt, trouser, and chiffon dupatta",
        price: "PKR 3,800",
        picture: "./Brand Logos/sapphire.png",
        colorVariations: ["Bright Orange", "Pink", "Yellow"]
    },
    {
        brand: "Junaid Jamshed",
        material: "Cambric",
        color: "Olive Green",
        pieces: 2,
        description: "Includes shirt and trouser",
        price: "PKR 3,000",
        picture: "./Brand Logos/J.png",
        colorVariations: ["Olive Green", "Navy Blue", "Brown"]
    },
    {
        brand: "Maria B",
        material: "Silk",
        color: "Deep Red",
        pieces: 3,
        description: "Includes embroidered shirt, sharara, and dupatta",
        price: "PKR 6,500",
        picture: "./Brand Logos/Maria.png",
        colorVariations: ["Deep Red", "Royal Blue", "Ivory"]
    },
    {
        brand: "Deepak Perwani",
        material: "Velvet",
        color: "Royal Blue",
        pieces: 3,
        description: "Includes velvet shirt, trouser, and dupatta",
        price: "PKR 8,000",
        picture: "./Brand Logos/deepak.png",
        colorVariations: ["Royal Blue", "Emerald Green", "Maroon"]
    },
    {
        brand: "Outfitters",
        material: "Denim",
        color: "Dark Grey",
        pieces: 2,
        description: "Includes denim jacket and jeans",
        price: "PKR 4,200",
        picture: "./Brand Logos/outfitters.png",
        colorVariations: ["Dark Grey", "Light Blue", "Black"]
    },
    {
        brand: "Khaadi",
        material: "Lawn",
        color: "Pastel Pink",
        pieces: 3,
        description: "Includes shirt, trouser, and dupatta",
        price: "PKR 3,500",
        picture: "./Brand Logos/khaadi.png",
        colorVariations: ["Pastel Pink", "Light Blue", "Mint Green"]
    },
];

// Brands Logo
let card = document.querySelector("#card .row")

for (let i = 0; i < dresses.length; i++) {
    let dress = dresses[i];
    let links = dress.brand.toLowerCase().replace(/\s+/g, '-');

    card.innerHTML += `
        <div class="col-lg-2 mb-4 sm-6">
          <div class="card">
          <a href="#${links}">
            <img src="${dress.picture}" class="card-img-top img-fluid style="width: 100px; height: 100px; object-fit: cover;" alt="Logo">
            </a> 
          </div>
        </div>
        <br>
    `;
}

// Brand Details
let brandCards = document.querySelector("#brandCards");

const brands = {
    "sana-safinaz": [
        {
            name: "Embroidered Lawn Suit",
            description: "Elegant embroidered lawn with chiffon dupatta.",
            price: "$45",
            material: "Lawn, Chiffon",
            image: "https://www.sanasafinaz.com/media/catalog/product/s/s/ss24exe129_1_.jpg?width=1600&height=2400&canvas=1600,2400&optimize=medium&bg-color=255,255,255&fit=bounds"
        },
        {
            name: "Digital Print Lawn",
            description: "Vibrant digital prints on premium lawn fabric.",
            price: "$50",
            material: "Lawn",
            image: "https://www.sanasafinaz.com/media/catalog/product/s/s/ss24stp147p2t_1_.jpg?width=1600&height=2400&canvas=1600,2400&optimize=medium&bg-color=255,255,255&fit=bounds"
        },
        {
            name: "Cotton Silk Kurta",
            description: "Soft cotton silk kurta with intricate designs.",
            price: "$60",
            material: "Cotton Silk",
            image: "https://www.sanasafinaz.com/media/catalog/product/s/s/ss24bsd234p2t_1_.jpg?width=1600&height=2400&canvas=1600,2400&optimize=medium&bg-color=255,255,255&fit=bounds"
        },
        {
            name: "Formal Wear Suit",
            description: "Stylish formal wear with classic cuts.",
            price: "$70",
            material: "Polyester, Viscose",
            image: "https://www.sanasafinaz.com/media/catalog/product/s/s/ss24exe143_1_.jpg?width=1600&height=2400&canvas=1600,2400&optimize=medium&bg-color=255,255,255&fit=bounds"
        },
        {
            name: "Summer Collection",
            description: "Lightweight summer collection with bright colors.",
            price: "$55",
            material: "Lawn",
            image: "https://www.sanasafinaz.com/media/catalog/product/s/s/ss24bsd237p2t_1_.jpg?width=1600&height=2400&canvas=1600,2400&optimize=medium&bg-color=255,255,255&fit=bounds"
        },
        {
            name: "Luxury Pret",
            description: "Luxury pret with hand-crafted embellishments.",
            price: "$80",
            material: "Organza, Silk",
            image: "https://www.sanasafinaz.com/media/catalog/product/s/s/ss24ese224p2t_1_.jpg?width=1600&height=2400&canvas=1600,2400&optimize=medium&bg-color=255,255,255&fit=bounds"
        },
        {
            name: "Casual Wear",
            description: "Comfortable casual wear for everyday use.",
            price: "$40",
            material: "Cotton",
            image: "https://www.sanasafinaz.com/media/catalog/product/s/s/ss24bsd232p2t_1_.jpg?width=1600&height=2400&canvas=1600,2400&optimize=medium&bg-color=255,255,255&fit=bounds"
        },
        {
            name: "Festive Collection",
            description: "Exclusive festive collection with modern designs.",
            price: "$90",
            material: "Silk, Net",
            image: "https://www.sanasafinaz.com/media/catalog/product/n/2/n232-003-cl_4__1.jpg?width=1600&height=2400&canvas=1600,2400&optimize=medium&bg-color=255,255,255&fit=bounds"
        },
        {
            name: "Winter Shawl Suit",
            description: "Warm shawl suit for the winter season.",
            price: "$75",
            material: "Wool, Silk",
            image: "https://www.sanasafinaz.com/media/catalog/product/s/s/ss24sge229p3_1_.jpg?width=1600&height=2400&canvas=1600,2400&optimize=medium&bg-color=255,255,255&fit=bounds"
        },
    ],
    "limelight": [
        {
            name: "Casual Top",
            description: "Trendy casual top with floral prints.",
            price: "$25",
            material: "Cotton",
            image: "https://www.limelight.pk/cdn/shop/files/CAM_4394_34b3e52a-8d83-4cee-bb18-c5504ca0d84a_330x.jpg?v=1690183452"
        },
        {
            name: "Formal Shirt",
            description: "Elegant formal shirt for office wear.",
            price: "$35",
            material: "Polyester",
            image: "https://www.limelight.pk/cdn/shop/files/DSC04941_330x.jpg?v=1722334588"
        },
        {
            name: "Denim Jacket",
            description: "Stylish denim jacket for a casual look.",
            price: "$55",
            material: "Denim",
            image: "https://www.limelight.pk/cdn/shop/files/DSC01659_8dda9102-6ad9-4364-9b63-382d2b22f17a_330x.jpg?v=1703748606"
        },
        {
            name: "Printed Kurti",
            description: "Printed kurti with vibrant colors.",
            price: "$30",
            material: "Lawn",
            image: "https://www.limelight.pk/cdn/shop/files/CAM_3739_330x.jpg?v=1692079359"
        },
        {
            name: "Summer Dress",
            description: "Lightweight summer dress with a boho vibe.",
            price: "$40",
            material: "Cotton",
            image: "https://www.limelight.pk/cdn/shop/files/CAM_8143_330x.jpg?v=1694689230"
        },
        {
            name: "Winter Coat",
            description: "Warm and cozy winter coat.",
            price: "$100",
            material: "Wool",
            image: "https://www.limelight.pk/cdn/shop/files/DSC09741_000c52f8-05c3-4209-a1f2-6bce4fafa9c5_330x.jpg?v=1701843788"
        },
        {
            name: "Party Wear",
            description: "Chic party wear for special occasions.",
            price: "$60",
            material: "Silk",
            image: "https://www.limelight.pk/cdn/shop/files/DSC05696_1_330x.jpg?v=1700570132"
        },
        {
            name: "Sportswear",
            description: "Comfortable sportswear for workouts.",
            price: "$35",
            material: "Polyester, Spandex",
            image: "https://www.limelight.pk/cdn/shop/files/DSC05346_ed1b2165-8431-42c4-af65-dbf7d8f62571.jpg?v=1709802336"
        },
        {
            name: "Evening Gown",
            description: "Elegant evening gown for formal events.",
            price: "$120",
            material: "Satin",
            image: "https://www.limelight.pk/cdn/shop/products/DSC_3725_8a56de06-51c9-4b5d-98ee-fed55b07db2d.jpg?v=1577904378"
        },
    ],
    "agha-noor": [
        {
            name: "Chiffon Embroidery",
            description: "Delicate chiffon with beautiful embroidery.",
            price: "$55",
            material: "Chiffon",
            image: "https://aghanoorofficial.com/cdn/shop/files/95392F6B-41E2-43E3-97A6-B75E7207C74D_295x.jpg?v=1724344832"
        },
        {
            name: "Silk Tunic",
            description: "Luxurious silk tunic with a contemporary design.",
            price: "$65",
            material: "Silk",
            image: "https://aghanoorofficial.com/cdn/shop/files/E983293B-B58C-4B55-9DE4-694CFCEE16DA_295x.jpg?v=1724344737"
        },
        {
            name: "Casual Kurta",
            description: "Comfortable casual kurta for everyday wear.",
            price: "$40",
            material: "Cotton",
            image: "https://aghanoorofficial.com/cdn/shop/files/51B914F3-9B0A-408F-9F61-3409F08CA47E_295x.jpg?v=1724309542"
        },
        {
            name: "Festive Silk Suit",
            description: "Festive silk suit with a traditional look.",
            price: "$85",
            material: "Silk",
            image: "https://bridal.aghanoorofficial.com/cdn/shop/products/WhatsAppImage2022-03-04at2.55.23PM_1024x1024.jpg?v=1646393466"
        },
        {
            name: "Winter Shawl",
            description: "Woolen shawl perfect for winter.",
            price: "$70",
            material: "Wool",
            image: "https://bridal.aghanoorofficial.com/cdn/shop/products/WhatsAppImage2021-11-11at2.38.39AM_1_590x.jpg?v=1636609134"
        },
        {
            name: "Party Wear Suit",
            description: "Elegant suit perfect for parties.",
            price: "$90",
            material: "Chiffon, Silk",
            image: "https://cdn.shopify.com/s/files/1/0609/1967/7146/files/WhatsAppImage2023-11-01at16.07.30_295x.jpg?v=1698838201"
        },
        {
            name: "Lawn Dress",
            description: "Comfortable lawn dress with a casual style.",
            price: "$35",
            material: "Lawn",
            image: "https://aghanoorofficial.com/cdn/shop/files/43F482AD-A18F-49FF-8E6D-87471A981754_394x.jpg?v=1724172764"
        },
        {
            name: "Luxury Pret",
            description: "Luxury pret with exquisite design.",
            price: "$80",
            material: "Organza, Silk",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZdTkCwyrQVOSSjoy63DzrVzRduiu8-wWpw&s"
        },
        {
            name: "Formal Chiffon Suit",
            description: "Formal chiffon suit with intricate embroidery.",
            price: "$95",
            material: "Chiffon",
            image: "https://aghanoorofficial.com/cdn/shop/files/E983293B-B58C-4B55-9DE4-694CFCEE16DA_394x.jpg?v=1724344737"
        },
    ],
    "alkaram-studio": [
        {
            name: "Printed Lawn Suit",
            description: "Beautifully printed lawn suit for summer.",
            price: "$45",
            material: "Lawn",
            image: ""
        },
        {
            name: "Cotton Kurta",
            description: "Comfortable cotton kurta with a modern look.",
            price: "$30",
            material: "Cotton",
            image: ""
        },
        {
            name: "Embroidered Lawn",
            description: "Elegant embroidered lawn with intricate details.",
            price: "$55",
            material: "Lawn",
            image: ""
        },
        {
            name: "Casual Wear",
            description: "Stylish casual wear for everyday comfort.",
            price: "$35",
            material: "Cotton",
            image: ""
        },
        {
            name: "Festive Collection",
            description: "Bright and vibrant festive collection.",
            price: "$60",
            material: "Silk",
            image: ""
        },
        {
            name: "Winter Collection",
            description: "Warm and stylish winter collection.",
            price: "$80",
            material: "Wool",
            image: ""
        },
        {
            name: "Luxury Pret",
            description: "Luxurious pret with exclusive designs.",
            price: "$95",
            material: "Silk, Chiffon",
            image: ""
        },
        {
            name: "Printed Kurti",
            description: "Printed kurti with soft lawn fabric.",
            price: "$40",
            material: "Lawn",
            image: ""
        },
        {
            name: "Chiffon Dupatta",
            description: "Chiffon dupatta with elegant embroidery.",
            price: "$25",
            material: "Chiffon",
            image: ""
        },
    ],
    "nishat-linen": [
        {
            name: "Casual Lawn Suit",
            description: "Comfortable and casual lawn suit for everyday wear.",
            price: "$45",
            material: "Lawn",
            image: "images/nishat-linen-product1.jpg"
        },
        {
            name: "Formal Silk Dupatta",
            description: "Elegant silk dupatta perfect for formal events.",
            price: "$40",
            material: "Silk",
            image: "images/nishat-linen-product2.jpg"
        },
        {
            name: "Printed Khaddar Shirt",
            description: "Stylish printed khaddar shirt with modern patterns.",
            price: "$30",
            material: "Khaddar",
            image: "images/nishat-linen-product3.jpg"
        },
        {
            name: "Embroidered Lawn",
            description: "Elegant embroidered lawn with intricate details.",
            price: "$55",
            material: "Lawn",
            image: ""
        },
        {
            name: "Casual Wear",
            description: "Stylish casual wear for everyday comfort.",
            price: "$35",
            material: "Cotton",
            image: ""
        },
        {
            name: "Festive Collection",
            description: "Bright and vibrant festive collection.",
            price: "$60",
            material: "Silk",
            image: ""
        },
        {
            name: "Winter Collection",
            description: "Warm and stylish winter collection.",
            price: "$80",
            material: "Wool",
            image: ""
        },
        {
            name: "Luxury Pret",
            description: "Luxurious pret with exclusive designs.",
            price: "$95",
            material: "Silk, Chiffon",
            image: ""
        },
        {
            name: "Printed Kurti",
            description: "Printed kurti with soft lawn fabric.",
            price: "$40",
            material: "Lawn",
            image: ""
        },
    ],
    "gul-ahmed": [
        {
            name: "Chiffon Suit",
            description: "Luxury chiffon suit with beautiful embroidery.",
            price: "$90",
            material: "Chiffon",
            image: "images/gul-ahmed-product1.jpg"
        },
        {
            name: "Winter Collection",
            description: "Warm and cozy winter collection featuring wool blends.",
            price: "$70",
            material: "Wool Blend",
            image: "images/gul-ahmed-product2.jpg"
        },
        {
            name: "Digital Print Silk",
            description: "Vibrant digital print on premium silk fabric.",
            price: "$75",
            material: "Silk",
            image: "images/gul-ahmed-product3.jpg"
        },
        {
            name: "Embroidered Lawn",
            description: "Elegant embroidered lawn with intricate details.",
            price: "$55",
            material: "Lawn",
            image: ""
        },
        {
            name: "Casual Wear",
            description: "Stylish casual wear for everyday comfort.",
            price: "$35",
            material: "Cotton",
            image: ""
        },
        {
            name: "Festive Collection",
            description: "Bright and vibrant festive collection.",
            price: "$60",
            material: "Silk",
            image: ""
        },
        {
            name: "Winter Collection",
            description: "Warm and stylish winter collection.",
            price: "$80",
            material: "Wool",
            image: ""
        },
        {
            name: "Luxury Pret",
            description: "Luxurious pret with exclusive designs.",
            price: "$95",
            material: "Silk, Chiffon",
            image: ""
        },
        {
            name: "Printed Kurti",
            description: "Printed kurti with soft lawn fabric.",
            price: "$40",
            material: "Lawn",
            image: ""
        },
    ],
    "zara-shahjahan": [
        {
            name: "Classic Silk Kurta",
            description: "Timeless silk kurta for a sophisticated look.",
            price: "$85",
            material: "Silk",
            image: "images/zara-shahjahan-product1.jpg"
        },
        {
            name: "Embroidered Cotton Suit",
            description: "Comfortable cotton suit with elegant embroidery.",
            price: "$60",
            material: "Cotton",
            image: "images/zara-shahjahan-product2.jpg"
        },
        {
            name: "Festive Wear Collection",
            description: "Special festive wear collection with vibrant colors.",
            price: "$95",
            material: "Lawn, Silk",
            image: "images/zara-shahjahan-product3.jpg"
        },
        {
            name: "Embroidered Lawn",
            description: "Elegant embroidered lawn with intricate details.",
            price: "$55",
            material: "Lawn",
            image: ""
        },
        {
            name: "Casual Wear",
            description: "Stylish casual wear for everyday comfort.",
            price: "$35",
            material: "Cotton",
            image: ""
        },
        {
            name: "Festive Collection",
            description: "Bright and vibrant festive collection.",
            price: "$60",
            material: "Silk",
            image: ""
        },
        {
            name: "Winter Collection",
            description: "Warm and stylish winter collection.",
            price: "$80",
            material: "Wool",
            image: ""
        },
        {
            name: "Luxury Pret",
            description: "Luxurious pret with exclusive designs.",
            price: "$95",
            material: "Silk, Chiffon",
            image: ""
        },
        {
            name: "Printed Kurti",
            description: "Printed kurti with soft lawn fabric.",
            price: "$40",
            material: "Lawn",
            image: ""
        },
    ],
    "bareeze": [
        {
            name: "Handcrafted Embroidery Suit",
            description: "Exclusive handcrafted embroidery for a luxurious feel.",
            price: "$120",
            material: "Silk, Chiffon",
            image: "images/bareeze-product1.jpg"
        },
        {
            name: "Casual Cotton Kurti",
            description: "Simple and stylish cotton kurti for everyday wear.",
            price: "$35",
            material: "Cotton",
            image: "images/bareeze-product2.jpg"
        },
        {
            name: "Formal Wear Suit",
            description: "Elegant formal wear suit with a modern touch.",
            price: "$110",
            material: "Silk, Lawn",
            image: "images/bareeze-product3.jpg"
        },
        {
            name: "Embroidered Lawn",
            description: "Elegant embroidered lawn with intricate details.",
            price: "$55",
            material: "Lawn",
            image: ""
        },
        {
            name: "Casual Wear",
            description: "Stylish casual wear for everyday comfort.",
            price: "$35",
            material: "Cotton",
            image: ""
        },
        {
            name: "Festive Collection",
            description: "Bright and vibrant festive collection.",
            price: "$60",
            material: "Silk",
            image: ""
        },
        {
            name: "Winter Collection",
            description: "Warm and stylish winter collection.",
            price: "$80",
            material: "Wool",
            image: ""
        },
        {
            name: "Luxury Pret",
            description: "Luxurious pret with exclusive designs.",
            price: "$95",
            material: "Silk, Chiffon",
            image: ""
        },
        {
            name: "Printed Kurti",
            description: "Printed kurti with soft lawn fabric.",
            price: "$40",
            material: "Lawn",
            image: ""
        },
    ],
    "bonanza-satrangi": [
        {
            name: "Digital Print Lawn Suit",
            description: "Colorful digital print lawn suit for all seasons.",
            price: "$50",
            material: "Lawn",
            image: "images/bonanza-satrangi-product1.jpg"
        },
        {
            name: "Winter Collection Sweater",
            description: "Warm and cozy sweater for the winter season.",
            price: "$40",
            material: "Wool",
            image: "images/bonanza-satrangi-product2.jpg"
        },
        {
            name: "Silk Dupatta",
            description: "Elegant silk dupatta with intricate designs.",
            price: "$30",
            material: "Silk",
            image: "images/bonanza-satrangi-product3.jpg"
        },
        {
            name: "Formal Shirt",
            description: "Elegant formal shirt for office wear.",
            price: "$35",
            material: "Polyester",
            image: ""
        },
        {
            name: "Denim Jacket",
            description: "Stylish denim jacket for a casual look.",
            price: "$55",
            material: "Denim",
            image: ""
        },
        {
            name: "Printed Kurti",
            description: "Printed kurti with vibrant colors.",
            price: "$30",
            material: "Lawn",
            image: ""
        },
        {
            name: "Summer Dress",
            description: "Lightweight summer dress with a boho vibe.",
            price: "$40",
            material: "Cotton",
            image: ""
        },
        {
            name: "Winter Coat",
            description: "Warm and cozy winter coat.",
            price: "$100",
            material: "Wool",
            image: ""
        },
        {
            name: "Party Wear",
            description: "Chic party wear for special occasions.",
            price: "$60",
            material: "Silk",
            image: ""
        },
    ],
    "charcoal": [
        {
            name: "Men's Casual Shirt",
            description: "Comfortable and stylish casual shirt for men.",
            price: "$45",
            material: "Cotton",
            image: "images/charcoal-product1.jpg"
        },
        {
            name: "Formal Suit",
            description: "Elegant formal suit for a sharp look.",
            price: "$200",
            material: "Wool, Silk",
            image: "images/charcoal-product2.jpg"
        },
        {
            name: "Cotton Trousers",
            description: "Slim fit cotton trousers for a modern style.",
            price: "$55",
            material: "Cotton",
            image: "images/charcoal-product3.jpg"
        },
        {
            name: "Printed Kurti",
            description: "Printed kurti with vibrant colors.",
            price: "$30",
            material: "Lawn",
            image: ""
        },
        {
            name: "Summer Dress",
            description: "Lightweight summer dress with a boho vibe.",
            price: "$40",
            material: "Cotton",
            image: ""
        },
        {
            name: "Winter Coat",
            description: "Warm and cozy winter coat.",
            price: "$100",
            material: "Wool",
            image: ""
        },
        {
            name: "Party Wear",
            description: "Chic party wear for special occasions.",
            price: "$60",
            material: "Silk",
            image: ""
        },
        {
            name: "Sportswear",
            description: "Comfortable sportswear for workouts.",
            price: "$35",
            material: "Polyester, Spandex",
            image: ""
        },
        {
            name: "Evening Gown",
            description: "Elegant evening gown for formal events.",
            price: "$120",
            material: "Satin",
            image: ""
        },
    ],
    "kayseria": [
        {
            name: "Printed Lawn Kurta",
            description: "Stylish printed lawn kurta for casual wear.",
            price: "$35",
            material: "Lawn",
            image: "images/kayseria-product1.jpg"
        },
        {
            name: "Embroidered Dupatta",
            description: "Elegant embroidered dupatta with traditional designs.",
            price: "$50",
            material: "Chiffon",
            image: "images/kayseria-product2.jpg"
        },
        {
            name: "Cotton Suit",
            description: "Comfortable cotton suit with floral prints.",
            price: "$60",
            material: "Cotton",
            image: "images/kayseria-product3.jpg"
        },
        {
            name: "Printed Kurti",
            description: "Printed kurti with vibrant colors.",
            price: "$30",
            material: "Lawn",
            image: ""
        },
        {
            name: "Summer Dress",
            description: "Lightweight summer dress with a boho vibe.",
            price: "$40",
            material: "Cotton",
            image: ""
        },
        {
            name: "Winter Coat",
            description: "Warm and cozy winter coat.",
            price: "$100",
            material: "Wool",
            image: ""
        },
        {
            name: "Party Wear",
            description: "Chic party wear for special occasions.",
            price: "$60",
            material: "Silk",
            image: ""
        },
        {
            name: "Sportswear",
            description: "Comfortable sportswear for workouts.",
            price: "$35",
            material: "Polyester, Spandex",
            image: ""
        },
        {
            name: "Evening Gown",
            description: "Elegant evening gown for formal events.",
            price: "$120",
            material: "Satin",
            image: ""
        },
    ],
    "ego": [
        {
            name: "Casual Printed Kurta",
            description: "Modern printed kurta for a chic casual look.",
            price: "$40",
            material: "Cotton",
            image: "images/ego-product1.jpg"
        },
        {
            name: "Trendy Pants",
            description: "Stylish pants for a casual outing.",
            price: "$35",
            material: "Denim",
            image: "images/ego-product2.jpg"
        },
        {
            name: "Embroidered Tunic",
            description: "Beautifully embroidered tunic with intricate designs.",
            price: "$55",
            material: "Lawn",
            image: "images/ego-product3.jpg"
        },
        {
            name: "Printed Kurti",
            description: "Printed kurti with vibrant colors.",
            price: "$30",
            material: "Lawn",
            image: ""
        },
        {
            name: "Summer Dress",
            description: "Lightweight summer dress with a boho vibe.",
            price: "$40",
            material: "Cotton",
            image: ""
        },
        {
            name: "Winter Coat",
            description: "Warm and cozy winter coat.",
            price: "$100",
            material: "Wool",
            image: ""
        },
        {
            name: "Party Wear",
            description: "Chic party wear for special occasions.",
            price: "$60",
            material: "Silk",
            image: ""
        },
        {
            name: "Sportswear",
            description: "Comfortable sportswear for workouts.",
            price: "$35",
            material: "Polyester, Spandex",
            image: ""
        },
        {
            name: "Evening Gown",
            description: "Elegant evening gown for formal events.",
            price: "$120",
            material: "Satin",
            image: ""
        },
    ],
}


function generateBrandCards(brand) {
    const brandContainer = document.getElementById(brand);
    const products = brands[brand];

    const row = document.createElement('div');
    row.classList.add('row');

    products.forEach(product => {
        const col = document.createElement('div');
        col.classList.add('col-lg-4', 'mb-4');

        const card = document.createElement('div');
        card.classList.add('card', 'h-100');
        card.innerHTML = `
            <div class="card-body gallery-item">
            <img src="${product.image}" class="card-img-top img-fluid" style="width: 100; height: 100; object-fit: cover;" alt="${product.name}" onclick="openMainImg(this.src)">
                <h4 class="card-title">${product.name}</h4>
                <p class="card-text">${product.description}</p>
                <p class="card-text">Price: ${product.price}</p>
                <p class="card-text">Material: ${product.material}</p>
                
            </div>
        `;

        col.appendChild(card);
        row.appendChild(col);
    });

    brandContainer.appendChild(row);
}

Object.keys(brands).forEach(generateBrandCards);

var imgBox = document.getElementById("imgBox");
var mainImg = document.getElementById("mainImg");
var closeBtn = document.getElementById("closeBtn");

function openMainImg(pic) {
    imgBox.style.display = "flex";
    mainImg.src = pic;
}

function closeMainImg() {
    imgBox.style.display = "none";
    mainImg.src = "";
}
