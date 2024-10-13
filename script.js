pets = {
    name: "",
    type: "",
    age: 0,
    happines: 0,
    hunger: 0,

    feed: function(){
        pets.name = prompt("what is your pets name")
        pets.type = prompt("what is pets type")
        pets.age = +prompt("what is yor pet age")
        pets.happines = +prompt("how much your pet is happy")
        pets.hunger = +prompt("how mch your pet is hunger")
    }
}

pets.feed()