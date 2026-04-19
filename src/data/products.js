const products  = [
    {
      "id": 1,
      "name": "Classic Boba Milk Tea",
      "category": "boba-tea",
      "priceSmall": 1500,
      "priceLarge": 2050,
      "description": "Classic milk tea with chewy boba pearls.",
      "image": "/images/products/01-classic-boba-milk-tea.webp"
    },
    {
      "id": 2,
      "name": "Jasmine Boba Milk Tea",
      "category": "boba-tea",
      "priceSmall": 1500,
      "priceLarge": 2050,
      "description": "Jasmine tea mixed with creamy milk and boba.",
      "image": "/images/products/02-jasmine-boba-milk-tea.webp"
    },
    {
      "id": 3,
      "name": "Royal Jelly Milk Tea",
      "category": "boba-tea",
      "priceSmall": 1700,
      "priceLarge": 2350,
      "description": "Sweet milk tea with royal jelly topping.",
      "image": "/images/products/03-royal-jelly-milk-tea.webp"
    },
    {
      "id": 4,
      "name": "Brown Sugar Boba Milk Tea",
      "category": "boba-tea",
      "priceSmall": 1700,
      "priceLarge": 2350,
      "description": "Creamy milk tea with rich brown sugar boba.",
      "image": "/images/products/04-brown-sugar-boba-milk-tea.webp"
    },
    {
      "id": 5,
      "name": "Roasted Boba Milk Tea",
      "category": "boba-tea",
      "priceSmall": 1700,
      "priceLarge": 2350,
      "description": "Roasted flavor milk tea with chewy boba.",
      "image": "/images/products/05-roasted-boba-milk-tea.webp"
    },
    {
      "id": 6,
      "name": "Matcha Boba Tea",
      "category": "boba-tea",
      "priceSmall": 1750,
      "priceLarge": 2450,
      "description": "Refreshing matcha milk tea with boba pearls.",
      "image": "/images/products/06-matcha-boba-tea.webp"
    },
    {
      "id": 7,
      "name": "Taro Milk Tea with Sago Boba",
      "category": "boba-tea",
      "priceSmall": 1750,
      "priceLarge": 2450,
      "description": "Taro-flavored creamy tea with sago pearls.",
      "image": "/images/products/07-taro-milk-tea-with-sago-boba.webp"
    },
    {
      "id": 8,
      "name": "American Chocolate Boba Milk Tea",
      "category": "boba-tea",
      "priceSmall": 1750,
      "priceLarge": 2450,
      "description": "Chocolate milk tea with classic boba pearls.",
      "image": "/images/products/08-american-chocolate-boba-milk-tea.webp"
    },
    {
      "id": 9,
      "name": "Signature Lemon Black Tea",
      "category": "lemon-tea",
      "priceSmall": 1450,
      "priceLarge": 1950,
      "description": "Refreshing black tea with lemon flavor.",
      "image": "/images/products/09-signature-lemon-black-tea.webp"
    },
    {
      "id": 10,
      "name": "Signature Lemon Green Tea",
      "category": "lemon-tea",
      "priceSmall": 1450,
      "priceLarge": 1950,
      "description": "Green tea with citrus lemon taste.",
      "image": "/images/products/10-signature-lemon-green-tea.webp"
    },
    {
      "id": 11,
      "name": "Ducky Lemon Tea",
      "category": "lemon-tea",
      "priceSmall": 1450,
      "priceLarge": 1950,
      "description": "Fruit tea with a bright lemon twist.",
      "image": "/images/products/11-ducky-lemon-tea.webp"
    },
    {
      "id": 12,
      "name": "Guava Lemon Tea",
      "category": "lemon-tea",
      "priceSmall": 1700,
      "priceLarge": 2350,
      "description": "Guava tea with refreshing lemon notes.",
      "image": "/images/products/12-guava-lemon-tea.webp"
    },
    {
      "id": 13,
      "name": "Watermelon Popping",
      "category": "fresh-fruit-tea",
      "priceSmall": 1650,
      "priceLarge": 2250,
      "description": "Watermelon fruit tea with popping boba.",
      "image": "/images/products/13-watermelon-popping.webp"
    },
    {
      "id": 14,
      "name": "Passion Fruit Duo",
      "category": "fresh-fruit-tea",
      "priceSmall": 1650,
      "priceLarge": 2250,
      "description": "Passion fruit tea with tropical flavor.",
      "image": "/images/products/14-passion-fruit-duo.webp"
    },
    {
      "id": 15,
      "name": "Crunchy Grape",
      "category": "fresh-fruit-tea",
      "priceSmall": 1850,
      "priceLarge": 2650,
      "description": "Grape fruit tea with crunchy texture topping.",
      "image": "/images/products/15-crunchy-grape.webp"
    },
    {
      "id": 16,
      "name": "Pinky Citrus",
      "category": "fresh-fruit-tea",
      "priceSmall": 1850,
      "priceLarge": 2650,
      "description": "Bright citrus fruit tea with fresh taste.",
      "image": "/images/products/16-pinky-citrus.webp"
    },
    {
      "id": 17,
      "name": "Mango Tango",
      "category": "fresh-fruit-tea",
      "priceSmall": 2050,
      "priceLarge": 2850,
      "description": "Sweet mango fruit tea with tropical finish.",
      "image": "/images/products/17-mango-tango.webp"
    },
    {
      "id": 18,
      "name": "Americano",
      "category": "coffee",
      "priceSmall": 850,
      "priceLarge": 1200,
      "description": "Classic black coffee with rich aroma.",
      "image": "/images/products/18-americano.webp"
    },
    {
      "id": 19,
      "name": "Latte",
      "category": "coffee",
      "priceSmall": 850,
      "priceLarge": 1200,
      "description": "Smooth espresso drink with milk.",
      "image": "/images/products/19-latte.webp"
    },
    {
      "id": 20,
      "name": "Cappuccino",
      "category": "coffee",
      "priceSmall": 850,
      "priceLarge": 1200,
      "description": "Espresso with steamed milk foam.",
      "image": "/images/products/20-cappuccino.webp"
    },
    {
      "id": 21,
      "name": "Singapore Latte",
      "category": "coffee",
      "priceSmall": 1250,
      "priceLarge": 1900,
      "description": "Signature latte with sweet creamy notes.",
      "image": "/images/products/21-singapore-latte.webp"
    },
    {
      "id": 22,
      "name": "Hong Kong Latte",
      "category": "coffee",
      "priceSmall": 1250,
      "priceLarge": 1600,
      "description": "Strong tea-coffee fusion latte.",
      "image": "/images/products/22-hong-kong-latte.webp"
    },
    {
      "id": 23,
      "name": "French Latte",
      "category": "coffee",
      "priceSmall": 1250,
      "priceLarge": 1600,
      "description": "Creamy latte with a rich French-style taste.",
      "image": "/images/products/23-french-latte.webp"
    },
    {
      "id": 24,
      "name": "Jasmine Tea with Cream Cheese Cloud",
      "category": "cream-cheese-tea",
      "priceSmall": 1500,
      "priceLarge": 2050,
      "description": "Jasmine tea topped with creamy cheese foam.",
      "image": "/images/products/24-jasmine-tea-with-cream-cheese-cloud.webp"
    },
    {
      "id": 25,
      "name": "Oriental Orchid Tea with Cream Cheese Cloud",
      "category": "cream-cheese-tea",
      "priceSmall": 1500,
      "priceLarge": 2050,
      "description": "Fragrant orchid tea with cream cheese topping.",
      "image": "/images/products/25-oriental-orchid-tea-with-cream-cheese-cloud.webp"
    },
    {
      "id": 26,
      "name": "White Peach Oolong with Cream Cheese Cloud",
      "category": "cream-cheese-tea",
      "priceSmall": 1650,
      "priceLarge": 2250,
      "description": "White peach oolong tea topped with cheese cloud.",
      "image": "/images/products/26-white-peach-oolong-with-cream-cheese-cloud.webp"
    },
    {
      "id": 27,
      "name": "Oriental Orchid",
      "category": "chinese-fresh-tea",
      "priceSmall": 1650,
      "priceLarge": 1850,
      "description": "Delicate floral tea with refreshing taste.",
      "image": "/images/products/27-oriental-orchid.webp"
    },
    {
      "id": 28,
      "name": "Jasmine Green",
      "category": "chinese-fresh-tea",
      "priceSmall": 1650,
      "priceLarge": 1850,
      "description": "Fresh jasmine green tea.",
      "image": "/images/products/28-jasmine-green.webp"
    },
    {
      "id": 29,
      "name": "White Peach Oolong",
      "category": "chinese-fresh-tea",
      "priceSmall": 1800,
      "priceLarge": 2050,
      "description": "Oolong tea with white peach flavor.",
      "image": "/images/products/29-white-peach-oolong.webp"
    },
    {
      "id": 30,
      "name": "Ducky",
      "category": "chinese-fresh-tea",
      "priceSmall": 1800,
      "priceLarge": 2050,
      "description": "Refreshing signature tea blend.",
      "image": "/images/products/30-ducky.webp"
    },
    {
      "id": 31,
      "name": "Iron Buddha",
      "category": "chinese-fresh-tea",
      "priceSmall": 1800,
      "priceLarge": 2050,
      "description": "Traditional roasted Chinese tea.",
      "image": "/images/products/31-iron-buddha.webp"
    },
    {
      "id": 32,
      "name": "Classic Bubble Waffle",
      "category": "bubble-waffle",
      "priceSmall": 1600,
      "priceLarge": 2000,
      "description": "Classic crispy bubble waffle.",
      "image": "/images/products/32-classic-bubble-waffle.webp"
    },
    {
      "id": 33,
      "name": "Matcha Bubble Waffle",
      "category": "bubble-waffle",
      "priceSmall": 1600,
      "priceLarge": 2000,
      "description": "Bubble waffle with matcha flavor.",
      "image": "/images/products/33-matcha-bubble-waffle.webp"
    },
    {
      "id": 34,
      "name": "Chocolate Bubble Waffle",
      "category": "bubble-waffle",
      "priceSmall": 1600,
      "priceLarge": 2000,
      "description": "Sweet chocolate bubble waffle.",
      "image": "/images/products/34-chocolate-bubble-waffle.webp"
    },
    {
      "id": 35,
      "name": "Floating Clouds",
      "category": "specials",
      "priceSmall": 1500,
      "priceLarge": 1850,
      "description": "Signature pastel milk drink.",
      "image": "/images/products/35-floating-clouds.webp"
    },
    {
      "id": 36,
      "name": "Pompidou Pink",
      "category": "specials",
      "priceSmall": 1500,
      "priceLarge": 1850,
      "description": "Sweet pink signature special drink.",
      "image": "/images/products/36-pompidou-pink.webp"
    }
]
export default products;