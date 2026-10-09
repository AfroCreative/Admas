/*
 * Admas menu. Edit prices and dishes here; the page renders from this file.
 * veg: true shows the vegetarian marker.
 */
window.ADMAS_MENU = [
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { name: "Tomato Fitfit", price: "9.99", veg: true,
        desc: "Bits of injera soaked in house dressing, mixed with chopped tomatoes, onions and jalapeños. Served cold." },
      { name: "House Salad", price: "9.99", veg: true,
        desc: "Romaine lettuce, tomatoes, onions, jalapeños and house dressing. Served with a side of bread." },
      { name: "Hummus Salad", price: "13.99",
        desc: "Creamy hummus topped with crisp salad greens, tomatoes, cucumbers and onions, finished with tender, slow-cooked meat." }
    ]
  },
  {
    id: "entrees",
    title: "Entrées",
    note: "Traditional dishes are served on injera.",
    items: [
      { name: "Geba Weta", price: "18.99",
        desc: "Tender beef chunks or tenderloin sautéed with onions, garlic, jalapeños, rosemary and spiced herbal butter. Served medium rare to medium." },
      { name: "Tibs'i", options: [["Beef", "18.99"], ["Lamb", "19.99"]],
        desc: "Cubed or sliced meat sautéed or pan-fried with onions, garlic, hot peppers and spiced clarified butter." },
      { name: "Derek Tibs'i", price: "18.99",
        desc: "Bite-sized fresh beef cubes dry-cooked with onions, jalapeños and garlic, topped with fresh rosemary." },
      { name: "Goden Tibs'i", price: "23.99",
        desc: "Prime short ribs cooked with onions and jalapeños, topped with fresh rosemary." },
      { name: "Lega Tibs'i", price: "19.99",
        desc: "Small, diced tender beef marinated with homemade spices and butter, served medium rare or medium. Topped with fresh rosemary." },
      { name: "Gored Gored", price: "21.99",
        desc: "Chunked tender beef marinated with homemade spices and butter. Served medium rare or medium." },
      { name: "Kitfo", price: "20.99",
        desc: "Special chopped ground beef mixed with homemade butter. Medium rare, medium or well done." },
      { name: "Quanta Firfir", price: "20.99",
        desc: "Bite-sized dried beef cooked with onion, jalapeños and garlic, mixed with injera and served with boiled eggs. Topped with fresh rosemary." },
      { name: "Chicken Tibs'i", price: "18.99",
        desc: "Sautéed tender chicken tossed with onions, tomatoes, garlic, jalapeños and spiced butter, finished with fresh rosemary. Mild or spicy." },
      { name: "Fish Tibs'i", price: "18.99",
        desc: "Tilapia fillet marinated and cooked with onion, tomatoes, jalapeños and garlic, touched with homemade butter and topped with fresh rosemary. Mild or spicy." },
      { name: "Banatu", price: "23.99",
        desc: "Pieces of injera tossed in spiced stews, layered with tibs, kitfo and feta cheese." },
      { name: "Fish Dulet", price: "18.99",
        desc: "Finely minced tilapia garnished with homemade spices and butter." },
      { name: "Gaslight", price: "18.99",
        desc: "Finely diced lamb tripe and beef simmered in seasoned butter and a rich homemade spice blend with onions, garlic and jalapeños." },
      { name: "Dulet", price: "19.99",
        desc: "Tender, minced beef slow-sautéed in clarified butter with onions, garlic, a fiery blend of chili powders and aromatic herbs." },
      { name: "Asa Tibsi", price: "19.99",
        desc: "Pan-fried, spiced whole tilapia roasted in olive oil, served with rice and salad." },
      { name: "Fish Goulash", price: "19.99",
        desc: "Sautéed tilapia stewed with garlic, onion, tomatoes, serrano peppers and berbere sauce." },
      { name: "Shiro", price: "17.99", veg: true,
        desc: "Ground split peas and chickpeas cooked with onion, tomatoes and garlic, served with a slice of jalapeño." },
      { name: "Veggie Combination", price: "18.99", veg: true,
        desc: "Medium-spicy split lentils, yellow split peas, cabbage and potatoes, shiro, collard greens and salad, topped with fresh rosemary." },
      { name: "Injera Firfir", price: "17.99", veg: true,
        desc: "Shredded injera tossed in a house-spiced dressing with fresh tomatoes, onions and green chilies." },
      { name: "Mahberawi", price: "23.99",
        desc: "Split lentils, yellow split peas, cabbage, potatoes, shiro and collard greens, served with a selection of tender, seasoned meats." }
    ]
  },
  {
    id: "breakfast",
    title: "Breakfast",
    note: "Served 10am to 2pm.",
    items: [
      { name: "Admas Special", price: "13.99",
        desc: "The ultimate morning feast: classic ful topped with feta and a boiled egg, a savory frittata, and your choice of tuna or sardines in spicy tomato silsi." },
      { name: "Frittata", price: "13.99", veg: true,
        desc: "Scrambled eggs, plain or with your choice of grilled veggies. Served with a side of warm bread." },
      { name: "Ful", price: "13.99", veg: true,
        desc: "Sautéed mashed fava beans with chopped onions, tomatoes, green peppers and sliced boiled eggs, topped with feta, olive oil and cumin. Served with warm bread." },
      { name: "Kitcha Fitfit", price: "13.99", veg: true,
        desc: "Traditional homemade flatbread tossed in butter or hot berbere spice, served with yogurt on top." },
      { name: "Kitcha Fitfit with Quanta", price: "16.99",
        desc: "Traditional homemade flatbread tossed in butter or hot berbere spice with quanta, served with yogurt on top." },
      { name: "Fata", price: "13.99", veg: true,
        desc: "Torn bread tossed in a hot, spicy tomato stew with onions and jalapeños, with a side of yogurt. Add tuna (+$4.99), sardines (+$4.99) or egg (+$1.99)." },
      { name: "Egg Silsi", price: "13.99", veg: true,
        desc: "Scrambled eggs gently cooked in a savory, aromatic homemade tomato silsi sauce. Served with warm bread." },
      { name: "Tuna Silsi", price: "13.99",
        desc: "Flaky tuna simmered in a rich, homemade spicy tomato silsi sauce. Served with warm bread." },
      { name: "Tuna Salad / Sardine", price: "13.99",
        desc: "Tuna mixed with romaine lettuce, tomatoes, onions, jalapeños and house dressing. Served with warm bread." }
    ]
  },
  {
    id: "sandwiches",
    title: "Sandwiches & Burger",
    note: "Every sandwich comes with fries.",
    items: [
      { name: "Steak Sandwich", price: "14.99",
        desc: "Beef steak topped with onions, tomatoes, jalapeños and lettuce, with cheese and ranch dressing." },
      { name: "Chicken Sandwich", price: "14.99",
        desc: "Chicken topped with melted cheese, onions, tomatoes, jalapeños, lettuce and ranch dressing." },
      { name: "Cotoletta Sandwich", price: "16.99",
        desc: "Crispy, pan-fried Italian breaded cutlet of chicken, steak or fish, with fries." },
      { name: "Fish Sandwich", price: "14.99",
        desc: "Flaky tilapia fillet topped with cheese, crisp lettuce, tomatoes, onions, jalapeños and ranch dressing." },
      { name: "Kitfo Sandwich", price: "14.99",
        desc: "Special chopped ground beef mixed with homemade spices. Medium rare, medium or well done." },
      { name: "Mortadella Sandwich", price: "14.99",
        desc: "Italian mortadella topped with tomatoes, onions, jalapeños and lettuce." },
      { name: "Egg Sandwich", price: "13.99",
        desc: "Eggs topped with tomatoes, onions, jalapeños and lettuce." },
      { name: "Admas Burger", price: "16.99",
        desc: "Juicy beef patty topped with lettuce, tomato, onions and cheese on a toasted bun. Served with fries." }
    ]
  },
  {
    id: "pasta",
    title: "Pasta",
    items: [
      { name: "Spaghetti with Tomato", price: "15.99", veg: true,
        desc: "Spaghetti in tomato sauce, topped with fresh rosemary. Served with warm bread." },
      { name: "Spaghetti with Meat Sauce", price: "17.99",
        desc: "Spaghetti in meat sauce, topped with fresh rosemary. Served with warm bread." },
      { name: "Cotoletta Pasta", price: "23.99",
        desc: "Crispy, pan-fried Italian breaded cutlet of chicken, steak or fish alongside a comforting bowl of pasta pomodoro. Substitute meat sauce for $4." }
    ]
  }
];

window.ADMAS_DRINKS = {
  beer: [
    ["Asmera Beer", "5.00"], ["Habesha Beer", "5.00"], ["Corona", "4.00"], ["Bud", "4.00"],
    ["Peroni", "4.00"], ["Michelob Ultra", "4.00"], ["Columbus IPA", "4.00"], ["Blue Moon", "4.00"],
    ["Stella", "4.00"], ["Modelo", "4.00"], ["Guinness", "4.00"], ["Miller Lite", "4.00"],
    ["Heineken", "4.00"], ["Heineken 0.0", "4.00"]
  ],
  hot: [
    ["Tea", "2.50"], ["Coffee", "3.49"], ["Cappuccino", "3.49"], ["Espresso", "3.49"],
    ["Latte", "3.49"], ["Macchiato", "3.49"]
  ],
  soft: [
    ["Bottled Water", "2.00"], ["Soda / Pop", "2.50"], ["Perrier", "3.00"], ["Cranberry Juice", "4.00"],
    ["Orange Juice", "4.00"], ["Mango Juice", "4.00"], ["Pineapple Juice", "4.00"], ["Red Bull", "4.00"],
    ["Kids Juice", "2.50"]
  ]
};
