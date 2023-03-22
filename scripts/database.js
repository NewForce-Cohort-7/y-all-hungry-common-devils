const database = {
    transientState: {
    },

        foods: [
            
            { id: 1, name: "Chili Dog", price: 4, image: "https://media.istockphoto.com/id/121971996/photo/chili-dog.jpg?s=612x612&w=0&k=20&c=13_JSB92LCeHCJqY6Xa7xUQ9cgSlOd2fzeZja-z3vm0=", description: "hot dog topped with spicy meat sauce, often accompanied by cheese, onions, and other condiments." },
            { id: 2, name: "Plain Dog", price: 4, image: "https://t3.ftcdn.net/jpg/00/42/34/92/360_F_42349239_HyCGLgKEKn2KiRNwvodMOfm98UvvmtHu.jpg", description: "A boring meal with no flavor for children." },
            { id: 3, name: "Mustard Dog", price: 3, image: "https://m.media-amazon.com/images/I/41kH1o2twHL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFIVE%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA12%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg", description: "Wiener bun and mustard " },
            { id: 4, name: "Chili-Cheese Dog", price: 5, image: "https://cdn.addsaltandserve.com/wp-content/uploads/2019/07/chili-cheese-dogs-insta-min-250x250.jpg", description: "hot-dog with chili and cheese poured on top" },
            { id: 5, name: "Nic's Famous Truck Dog", price: 15, image: "https://s3-media0.fl.yelpcdn.com/bphoto/LgrWI-VLJRFdwdyTLamxAg/l.jpg", description: "A super epic hot dog that combines a high-quality sausage with a variety of creative and delicious toppings, sauces, and garnishes, resulting in a unique and unforgettable taste experience" },
            { id: 6, name: "Chili Dog", price: 5, image: "https://media.istockphoto.com/id/121971996/photo/chili-dog.jpg?s=612x612&w=0&k=20&c=13_JSB92LCeHCJqY6Xa7xUQ9cgSlOd2fzeZja-z3vm0=", description: "Hot Dog with Chili, duh." },
            { id: 7, name: "Slaw Dog", price: 3, image: "https://www.willcookforsmiles.com/wp-content/uploads/2015/08/Sriracha-Honey-Hot-Dogs-4-from-willcookforsmiles.com-grilling-sriracha-250x250.jpg", description: "Hot dog with a mountain of slaw" },
            { id: 8, name: "Philly Dog", price: 5, image: "https://i0.wp.com/www.foodzetic.com/wp-content/uploads/2020/10/No-Microwave-Philly-Cheese-Hot-Dog-1-of-2.jpg?fit=250%2C250&ssl=1", description: "Hot-dog you eat in Philadelphia, PA." },
            { id: 9, name: "Pizza Dog", price: 4, image: "https://i.pinimg.com/originals/e7/42/b5/e742b591c0604238b2e1e89710c00a2a.jpg", description: "Abomination" },
            { id: 10, name: "Hoagie Dog", price: 5, image: "https://assets.kraftfoods.com/recipe_images/Hot_Dog_Hoagies.jpg", description: "wiener in a hoagie bun" },
            { id: 11, name: "Pineapple Dog", price: 3, image: "https://hoffybrand.com/wp-content/uploads/2015/06/Hawaiian-hot-dog-1.jpg", description: "?????" },
            { id: 12, name: "Italian Dog", price: 4, image: "https://www.insp.com/content/uploads/2018/03/STP217-Still_0180_600x400.jpg", description: "Italian sub but on a hot dog bun" },
            { id: 13, name: "Tropical Dog", price: 5, image: "https://theviewfromgreatisland.com/wp-content/uploads/2017/05/Tropical-Hot-Dog-Bar-8901-May-11-2017-3-2-250x250.jpg", description: "Hot dog that's eaten at the beach or tropical weather" },
            { id: 14, name: "Chili-Cheese Dog", price: 7, image: "https://cdn.addsaltandserve.com/wp-content/uploads/2019/07/chili-cheese-dogs-insta-min-250x250.jpg", description: "chili-cheese-wiener. what more do you need??" },
            { id: 15, name: "Buffalo Dog", price: 6, image: "https://thecrumbykitchen.com/wp-content/uploads/2017/07/Buffalo-Hot-Dogs-2-250x250.jpg", description: "Spicy hot dog Bills fans eat" },
            { id: 16, name: "BBQ Dog", price: 4, image: "https://www.willcookforsmiles.com/wp-content/uploads/2015/07/BBQ-Bacon-Crispy-Onion-Hot-Dogs-1-250x250.jpg", description: "Pulled pork on a classic hot-dog just like my grandma used to make" },
            { id: 17, name: "Weenie Hut JR Dog", price: 7, image: "https://static.wikia.nocookie.net/spongebob/images/1/15/No_Weenies_Allowed_077.png/revision/latest/scale-to-width-down/250?cb=20200806151857", description: "Krabby patty? no thanks! i'll take this hot dog any day" },
            { id: 18, name: "Polish Dog", price: 5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/250px-Hotdog_-_Evan_Swigart.jpg", description: "It has kraut on it i think" },
            { id: 19, name: "Wandering Dog", price: 4, image: "https://cms.prod.nypr.digital/images/22037/fill-1200x800%7Cformat-webp%7Cwebpquality-85", description: "Kind of tastes like farley's" },
            { id: 20, name: "Classic Dog", price: 6, image: "https://www.boxedmarket.com/nkz/gifs/60083531-sm.jpg", description: "I'm hot dog, ya need to ketchup" },
            { id: 21, name: "No Food", price: 0, image: "https://media.istockphoto.com/id/890723242/vector/no-food-or-drinks-sign-paper-cup-with-tubule-and-hamburger-icons-in-crossed-out-red-circle.jpg?s=612x612&w=0&k=20&c=SeXQPldDogmpRdBnqGAiKP1uAbdD2Xrz0fiPjeU-MU4=", description: "No Food Chosen" }

        ],

        drinks: [
            
            { id: 1, name: "Coke", price: 3, image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/21eb5JZWYAL.jpg", description: "coca-cola drink beverage" },
            { id: 2, name: "Pepsi", price: 3, image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2017_14/1955116/170405-pepsi-cr-0736.jpg", description: "Pepsi drink" },
            { id: 3, name: "MT DEW", price: 3, image: "https://i.ytimg.com/vi/ePM7k_l8MQE/hqdefault.jpg", description: "Mountain dew soda" },
            { id: 4, name: "Diet MT DEW", price: 3, image: "https://target.scene7.com/is/image/Target/GUEST_50bac14e-b9d9-4233-8e2f-0aea0983a9f1?wid=488&hei=488&fmt=pjpeg", description: "Diet Dew soda pop" },
            { id: 5, name: "Diet Pepsi", price: 3, image: "https://static.wikia.nocookie.net/the-soda/images/8/84/Diet_Pepsi_Classic_Sweetener_Blend_Bottle.png/revision/latest/smart/width/250/height/250?cb=20190427094604", description: "Diet version of pepsi cola" },
            { id: 6, name: "Orange Fanta", price: 4, image: "https://dsom-imager-prod.shipt.com/0577f267-60e9-7793-030f-f49f6ac17b2f/thumb_ef517dc8488ae5b63e48498055ca6059.webp", description: "greatest version of Fanta" },
            { id: 7, name: "Grape Fanta", price: 5, image: "https://www.kroger.com/product/images/large/front/0004900002627", description: "3rd best fanta" },
            { id: 8, name: "Cherry Fanta", price: 6, image: "https://static.wikia.nocookie.net/fanta/images/0/01/Fanta_cherry.jpg/revision/latest/smart/width/250/height/250?cb=20150114025448", description: "tastes like cough syrup" },
            { id: 9, name: "Extreme Fanta", price: 10, image: "https://i.ebayimg.com/images/g/aBUAAOSw4YJf-2WT/s-l500.jpg", description: "Regular orange Fanta but just more orangey" },
            { id: 10, name: "RC", price: 1, image: "https://cdn.shopify.com/s/files/1/0269/2121/products/RC-Cola.jpg?v=1586739770", description: "Refreshing beverage for any summer night" },
            { id: 11, name: "Livewire MT DEW", price: 4, image: "https://www.myamericanmarket.com/10640/mountain-dew-live-wire-soda.jpg", description: "Great drank to play halo 3 with the boys" },
            { id: 12, name: "Voltage MT DEW", price: 4, image: "https://i5.peapod.com/c/ZW/ZWJOL.png", description: "purple mountain dew" },
            { id: 13, name: "Baja Blast", price: 5, image: "https://images.albertsons-media.com/is/image/ABS/960106539-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available", description: "taco bell water" },
            { id: 14, name: "Water", price: 8, image: "https://www.juzwater.com/wp-content/uploads/2018/01/500-ml-drinking-water.jpeg", description: "r/hydrohomies" },
            { id: 15, name: "Cold Water", price: 10, image: "https://www.updinc.net/_products/_250x250/FRZPS651.jpg", description: "r/hydrohomies" },
            { id: 16, name: "Room Temp Water", price: 1, image: "https://previews.123rf.com/images/pinkomelet/pinkomelet1503/pinkomelet150300230/38002197-closeup-glass-of-water-on-table-in-the-living-room.jpg", description: "for people with sensitive teeth" },
            { id: 17, name: "Tap Water", price: 2, image: "https://multifiles.pressherald.com/uploads/sites/4/2019/03/Screen-Shot-2019-03-18-at-4.18.05-PM-250x250.png", description: "for brave people" },
            { id: 18, name: "Sprite", price: 4, image: "http://cdn.shopify.com/s/files/1/0422/2681/1034/products/Sprite-12-Oz-Case-Of-24_600x600.png?v=1600995045", description: "Carbonated lemon water" },
            { id: 19, name: "Purple tinted Sprite", price: 150, image: "http://factmag-images.s3.amazonaws.com/wp-content/uploads/2012/05/LW280512.jpg", description: "Only served in a double cup. (must pay for both cups)" },
            { id: 20, name: "Cherry Sprite", price: 3, image: "https://www.kroger.com/product/images/large/front/0004900007222", description: "Carbonated cherry cough syrup" },
            { id: 21, name: "No Drink", price: 0, image: "https://media.istockphoto.com/id/1281632732/vector/no-alcohol-sign-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=E6BPPS1KbAkRYmXOkVMdeXqbLL6tqpf1yce0gNZVwoU=", description: "No Drink Chosen"}
        ],

        desserts: [
            
            { id:1, name: "Chocolate", price: 3, image: "https://www.kimscravings.com/wp-content/uploads/2021/06/008-250x250.jpg", description: "Vanilla ice cream with milk and chocolate sauce" },
            { id: 2, name: "Strawberry", price: 3, image: "https://cdn3.foodviva.com/static-content/food-images/smoothie-recipes/strawberry-smoothie-recipe/strawberry-smoothie-recipe-250.jpg", description: "strawberry ice cream blended up with water" },
            { id: 3, name: "Peach", price: 3, image: "https://www.willcookforsmiles.com/wp-content/uploads/2013/07/Skinny-Peaches-and-Cream-Milkshake-willcookforsmiles.com_-250x250.jpg", description: "peach milkshake with peaches" },
            { id: 4, name: "Peanut Butter", price: 5, image: "https://www.browneyedbaker.com/wp-content/uploads/2014/02/fluffernutter-milkshake-14-250-220x250.jpg", description: "vanilla milkshake add peanut butter" },
            { id: 5, name: "Peanut Butter Chocolate", price: 6, image: "https://www.browneyedbaker.com/wp-content/uploads/2014/02/fluffernutter-milkshake-14-250-220x250.jpg", description: "Vanilla milkshake add reese's for convenience and blend" },
            { id: 6, name: "Pineapple", price: 7, image: "https://cdn3.foodviva.com/static-content/food-images/smoothie-recipes/mango-pineapple-smoothie-recipe/mango-pineapple-smoothie-recipe-250.jpg", description: "Added pineapples to a vanilla milkshake" },
            { id: 7, name: "Vanilla", price: 3, image: "https://cdn3.foodviva.com/static-content/food-images/milkshake-recipes/coffee-milkshake-recipe/coffee-milkshake-recipe-250.jpg", description: "Vanilla ice cream we forgot to put back in the freezer and it melted" },
            { id: 8, name: "Caramel", price: 5, image: "https://bakingmischief.com/wp-content/uploads/2016/04/salted-caramel-snickerdoodle-milkshake-250x250.jpg", description: "Add caramel to a Vanilla milkshake and re-blend" },
            { id: 9, name: "Twisted Tea", price: 9, image: "https://skinnyms.com/wp-content/uploads/2016/01/Mango-Lassi-Smoothies-250x250.jpg", description: "For adults only. You guessed it! Add twisted tea to a vanilla milkshake" },
            { id: 10, name: "Butterscotch", price: 4, image: "https://3.imimg.com/data3/NU/KD/MY-5166995/marketing-services-250x250.png", description: "gross" },
            { id: 11, name: "Laffy Taffy", price: 4, image: "https://bloximages.newyork1.vip.townnews.com/nny360.com/content/tncms/assets/v3/editorial/8/0d/80d56320-47b4-50a1-bfd7-637291a6f137/5d28a07cc85a6.image.jpg?resize=386%2C500", description: "Melted laffy taffys mixed with a vanilla milkshake" },
            { id: 12, name: "Bussin' Brownies", price: 5, image: "https://cdn.pauladeen.com/wp-content/uploads/2017/10/29105406/brownie_milkshake.png", description: "Add brownies of the bussin' variety to a vanilla milkshake" },
            { id: 13, name: "Four Loko Berry Blast", price: 11, image: "https://onohawaiianrecipes.com/wp-content/uploads/2022/03/Ube-Ice-Cream-Shake_Thumbnail.jpg", description: "Mixin four loko's with a vanilla milkshake" },
            { id: 14, name: "Rainbow Sherbert", price: 4, image: "https://funmoneymom.com/wp-content/uploads/2018/06/Orange-creamsicle-milkshakes-with-garnish.jpg", description: "Melted Rainbow sherbert in a cup with a straw" },
            { id: 15, name: "Strawberry Cheesecake", price: 5, image: "http://laurainthekitchen.com/500x300thumbnails/strawberry-cheesecake-shake.jpg", description: "Store bought strawberry cheesecake cut up and mixed with our famous vanilla milkshake" },
            { id: 16, name: "Cake Batter", price: 4, image: "https://www.cookingclassy.com/wp-content/uploads/2013/07/cake-batter-milkshake2+srgb.1.jpg", description: "" },
            { id: 17, name: "Orange Cream Fanta", price: 7, image: "https://funmoneymom.com/wp-content/uploads/2018/06/Orange-creamsicle-milkshakes-with-garnish-480x480.jpg", description: "Pillsbury cake batter powder mixed with our number 1 rated vanilla milkshake" },
            { id: 18, name: "Grape Cream Fanta", price: 7, image: "https://i.pinimg.com/originals/3c/ff/86/3cff8604d2741644c96d895be65007d8.jpg", description: "Grape Fanta blended with our store bought vanilla ice cream" },
            { id: 19, name: "Straight up Fanta & Ice Cream", price: 11, image: "https://www.eatingonadime.com/wp-content/uploads/2021/05/fanta-float-4.jpg", description: "A bottle of orange fanta with a side of ice cream of your choosing" },
            { id: 20, name: "Extreme Chocolate", price: 4, image: "https://www.queensleeappetit.com/wp-content/uploads/2017/09/Ultimate-Chocolate-Lovers-Freakshake-recipe-queensleeappetit.com-3.jpg", description: "So so so much chocolate added to this....why so much chocolate???" },
            { id: 21, name: "No Milkshake", price: 0, image: "https://images.squarespace-cdn.com/content/v1/56f338bad210b8404d6bda90/1577389333783-51FW6RMW5ST0INK2NYY6/JAN_milkshake+of+the+moment+images-03.png?format=500w", description: "No Milkshake Chosen"}

        ],

        location: [
            { id: 1, name: "Nic's Truck", address: "Northside" },
            { id: 2, name: "David's Truck", address: "Southside" },
            { id: 3, name: "Jodi's Truck", address: "Eastside" },
            { id: 4, name: "Bobby's Truck", address: "Westside" },
        ],

        foodLocations: [
            { id: 1, foodId: 1, locationId: 1, quantity: 7000 },
            { id: 2, foodId: 2, locationId: 1, quantity: 4000 },
            { id: 3, foodId: 3, locationId: 1, quantity: 2000 },
            { id: 4, foodId: 4, locationId: 1, quantity: 1000 },
            { id: 5, foodId: 5, locationId: 1, quantity: 500 },
            { id: 6, foodId: 6, locationId: 2, quantity: 499 },
            { id: 7, foodId: 7, locationId: 2, quantity: 600 },
            { id: 8, foodId: 8, locationId: 2, quantity: 700 },
            { id: 9, foodId: 9, locationId: 2, quantity: 2000 },
            { id: 10, foodId: 10, locationId: 2, quantity: 3000 },
            { id: 11, foodId: 11, locationId: 3, quantity: 2500 },
            { id: 12, foodId: 12, locationId: 3, quantity: 1000 },
            { id: 13, foodId: 13, locationId: 3, quantity: 2000 },
            { id: 14, foodId: 14, locationId: 3, quantity: 1000 },
            { id: 15, foodId: 15, locationId: 3, quantity: 3000 },
            { id: 16, foodId: 16, locationId: 4, quantity: 1000 },
            { id: 17, foodId: 17, locationId: 4, quantity: 500 },
            { id: 18, foodId: 18, locationId: 4, quantity: 700 },
            { id: 19, foodId: 19, locationId: 4, quantity: 800 },
            { id: 20, foodId: 20, locationId: 4, quantity: 600 },
            { id: 21, foodId: 21, locationId: 1, quantity: 600 },
            { id: 22, foodId: 21, locationId: 2, quantity: 600 },
            { id: 23, foodId: 21, locationId: 3, quantity: 600 },
            { id: 24, foodId: 21, locationId: 4, quantity: 600 },
        ],

        drinkLocations: [
            { id: 1, drinkId: 1, locationId: 1, quantity: 7000 },
            { id: 2, drinkId: 2, locationId: 1, quantity: 4000 },
            { id: 3, drinkId: 3, locationId: 1, quantity: 2000 },
            { id: 4, drinkId: 4, locationId: 1, quantity: 1000 },
            { id: 5, drinkId: 5, locationId: 1, quantity: 500 },
            { id: 6, drinkId: 6, locationId: 2, quantity: 499 },
            { id: 7, drinkId: 7, locationId: 2, quantity: 600 },
            { id: 8, drinkId: 8, locationId: 2, quantity: 700 },
            { id: 9, drinkId: 9, locationId: 2, quantity: 2000 },
            { id: 10, drinkId: 10, locationId: 2, quantity: 3000 },
            { id: 11, drinkId: 11, locationId: 3, quantity: 2500 },
            { id: 12, drinkId: 12, locationId: 3, quantity: 1000 },
            { id: 13, drinkId: 13, locationId: 3, quantity: 2000 },
            { id: 14, drinkId: 14, locationId: 3, quantity: 1000 },
            { id: 15, drinkId: 15, locationId: 3, quantity: 3000 },
            { id: 16, drinkId: 16, locationId: 4, quantity: 1000 },
            { id: 17, drinkId: 17, locationId: 4, quantity: 500 },
            { id: 18, drinkId: 18, locationId: 4, quantity: 700 },
            { id: 19, drinkId: 19, locationId: 4, quantity: 800 },
            { id: 20, drinkId: 20, locationId: 4, quantity: 600 },
            { id: 21, drinkId: 21, locationId: 1, quantity: 600 },
            { id: 22, drinkId: 21, locationId: 2, quantity: 600 },
            { id: 23, drinkId: 21, locationId: 3, quantity: 600 },
            { id: 24, drinkId: 21, locationId: 4, quantity: 600 },
        ],
        
        dessertLocations: [
            { id: 1, dessertId: 1, locationId: 1, quantity: 7000 },
            { id: 2, dessertId: 2, locationId: 1, quantity: 4000 },
            { id: 3, dessertId: 3, locationId: 1, quantity: 2000 },
            { id: 4, dessertId: 4, locationId: 1, quantity: 1000 },
            { id: 5, dessertId: 5, locationId: 1, quantity: 500 },
            { id: 6, dessertId: 6, locationId: 2, quantity: 499 },
            { id: 7, dessertId: 7, locationId: 2, quantity: 600 },
            { id: 8, dessertId: 8, locationId: 2, quantity: 700 },
            { id: 9, dessertId: 9, locationId: 2, quantity: 2000 },
            { id: 10, dessertId: 10, locationId: 2, quantity: 3000 },
            { id: 11, dessertId: 11, locationId: 3, quantity: 2500 },
            { id: 12, dessertId: 12, locationId: 3, quantity: 1000 },
            { id: 13, dessertId: 13, locationId: 3, quantity: 2000 },
            { id: 14, dessertId: 14, locationId: 3, quantity: 1000 },
            { id: 15, dessertId: 15, locationId: 3, quantity: 3000 },
            { id: 16, dessertId: 16, locationId: 4, quantity: 1000 },
            { id: 17, dessertId: 17, locationId: 4, quantity: 500 },
            { id: 18, dessertId: 18, locationId: 4, quantity: 700 },
            { id: 19, dessertId: 19, locationId: 4, quantity: 800 },
            { id: 20, dessertId: 20, locationId: 4, quantity: 600 },
            { id: 21, dessertId: 21, locationId: 1, quantity: 600 },
            { id: 22, dessertId: 21, locationId: 2, quantity: 600 },
            { id: 23, dessertId: 21, locationId: 3, quantity: 600 },
            { id: 24, dessertId: 21, locationId: 4, quantity: 600 }
        ],

        orders: [
            {
                id: 1,
                foodId: 1,
                drinkId: 1,
                dessertId: 1,
                locationId: 1
            }
        ],
       
    
}

export const transientState = () => {
    return {...database.transientState}
}


export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

export const getFood = () => {
    return database.foods.map(food => ({...food}))
}

export const getDrinks = () => {
    return database.drinks.map(drink => ({...drink}))
}

export const getDesserts = () => {
    return database.desserts.map(dessert => ({...dessert}))
}

export const getFoodLocations = () => {
    return database.foodLocations.map(foodLocation => ({...foodLocation}))
}

export const getDrinkLocations = () => {
    return database.drinkLocations.map(drinkLocation => ({...drinkLocation}))
}

export const getDessertLocations = () => {
    return database.dessertLocations.map(dessertLocation => ({...dessertLocation}))
}

export const setFood = (id) => {
    database.transientState.foodId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setDrink = (id) => {
    database.transientState.drinkId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setDessert = (id) => {
    database.transientState.dessertId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setLocation = (id) => {
    database.transientState.locationId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getLocations = () => {
    return database.location.map(f => ({...f}))
}

export const addCustomOrder = () => {
    const newOrder = {...database.transientState}

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.transientState = {}

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
