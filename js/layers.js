addLayer("p", {
    name: "pp", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "PP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration() {return hasUpgrade('s',12)},
    autoUpgrade() { return hasUpgrade('s',11)},
    color: "#574713",
    requires: new Decimal(69), // Can be a function that takes requirement increases into account
    resource: "Prestige Points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        if (hasUpgrade('p',21)) mult = mult.times(69)
        if (hasUpgrade('p',22)) mult = mult.times(420)
        if (hasUpgrade('s',13)) mult = mult.times(2)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Nice",
            description: "Gen Points",
            cost: new Decimal(1),
        },
        12: {
            title: "BrUh I HAte THe ColO(U)r Of thIs NOde It LooKs LikE A PEICE POO!!!!!",
            description: "Multiply by the Amount of characters in the name including spaces",
            cost: new Decimal(6.9),
            unlocked() { return hasUpgrade('p',11)},
        },
        13: {
            title: "Garbage",
            description: "The Other Funny Number",
            cost: new Decimal(69),
            unlocked() { return hasUpgrade('p',12)},
        },
        21: {
            title: "again but with this layer points",
            description: "69 on this layer",
            cost: new Decimal(4200),
            unlocked() { return hasUpgrade('p',13)},
        },
        22: {
            title: "Garbage garbage",
            description: "The Last One but with 420",
            cost: new Decimal(420420),
            unlocked() { return hasUpgrade('p',21)},
        },
        23: {
            title: "Embrace the Garbage",
            description: "Add 69420 to Point gain",
            cost: new Decimal(420420),
            unlocked() { return hasUpgrade('p',22)},
        },
        31: {
            title: "Garbage Man",
            description: "Add 69 to Point gain 69 times",
            cost: new Decimal(420420420),
            unlocked() { return hasUpgrade('p',23) && hasUpgrade('s',12)},
        },
        32: {
            title: "Garbage Boi",
            description: "times 69 to Point gain",
            cost: new Decimal(42042042069),
            unlocked() { return hasUpgrade('p',31) && hasUpgrade('s',12)},
        },
        33: {
            title: "Why Garbage",
            description: "do the last Upgrade Again",
            cost: new Decimal(42042042069),
            unlocked() { return hasUpgrade('p',32) && hasUpgrade('s',12)},
        },
    },
    hotkeys: [
        {key: "p", description: "P: Reset for Prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['s'],
})
addLayer("s", {
    name: "square", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "⬛", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    resetsNothing() {return hasMilestone('s',0)},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#9117fc",
    canBuyMax() { return hasUpgrade('s',12)},
    autoPrestige() {return hasUpgrade('e',33)},
    requires: new Decimal(69696969), // Can be a function that takes requirement increases into account
    resource: "Squares", // Name of prestige currency
    baseResource: "Prestige Points", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
            if (hasUpgrade('s',13)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade('p',23) || player.s.unlocked},
    upgrades: {
        11: {
            title: "Squar",
            description: "Double points and auto buy PP upgrades",
            cost: new Decimal(1),
        },
        12: {
            title: "Squar rot",
            description: "qol for PP and New UPGRADES WOOOOOOOOOO also max buy",
            cost: new Decimal(2),
            unlocked() { return hasUpgrade('s',11)},
        },
        13: {
            title: "Squar mil",
            description: "milestone yay also square TIMed by 2 and PP",
            cost: new Decimal(50),
            unlocked() { return hasUpgrade('s',12)},
        },
    },
    milestones: {
        0: {
            requirementDescription: "10+10+10+20+50 Squares",
            effectDescription: "New Layer and no Square reset stuff",
            done() { return player.s.points.gte(100)},
            unlocked() { return hasUpgrade('s',13)},
        },
    },
    branches: ['e'],
})
addLayer("e", {
    name: "Explore", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#80ff00",
    requires: new Decimal(200), // Can be a function that takes requirement increases into account
    resource: "Exploration Credits", // Name of prestige currency
    baseResource: "Squares", // Name of resource prestige is based on
    baseAmount() {return player.s.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    doReset(resettingLayer) {
        let keep = [];
        if (hasUpgrade("b", 33)) keep.push("upgrades")
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade('p',23) || player.s.unlocked},
    upgrades: {
        11: {
            title: "White Temple",
            description: "Air",
            cost: new Decimal(5),
        },
        12: {
            title: "Old CAmp",
            description: "Comp",
            cost: new Decimal(3),
        },
        13: {
            title: "A Bunch Of COde",
            description: "        13: {    title: 'A Bunch Of COde',    description:'POOP',    cost: new Decimal(3), },",
            cost: new Decimal(3),
        },
        14: {
            title: "a Hole",
            description: "lol",
            cost: new Decimal(3),
        },
        15: {
            title: "Brown Temple",
            description: "Earth",
            cost: new Decimal(5),
        },
        21: {
            title: "Tall Rock",
            description: "",
            cost: new Decimal(3),
        },
        22: {
            title: "",
            description: "Double points and auto buy PP upgrades",
            cost: new Decimal(3),
        },
        23: {
            title: "Land",
            description: "grond",
            cost: new Decimal(2),
        },
        24: {
            title: "hill",
            description: "",
            cost: new Decimal(3),
        },
        25: {
            title: "one tree",
            description: "",
            cost: new Decimal(3),
        },
        31: {
            title: "Forrest",
            description: "",
            cost: new Decimal(3),
        },
        32: {
            title: "Plains",
            description: "Plains",
            cost: new Decimal(2),
        },
        33: {
            title: "Base Camp",
            description: "Make The Base",
            cost: new Decimal(1),
        },
        34: {
            title: "Plains",
            description: "Plain",
            cost: new Decimal(2),
        },
        35: {
            title: "",
            description: "Double points and auto buy PP upgrades",
            cost: new Decimal(3),
        },
        41: {
            title: "long pond",
            description: "has water in it",
            cost: new Decimal(2),
        },
        42: {
            title: "wooter",
            description: "Wata init",
            cost: new Decimal(3),
        },
        43: {
            title: "Birg",
            description: "Cross Brige",
            cost: new Decimal(2),
        },
        44: {
            title: "Roover",
            description: "River for water",
            cost: new Decimal(3),
        },
        45: {
            title: "Rightver",
            description: "Swim Swim",
            cost: new Decimal(2),
        },
        51: {
            title: "Blue Temple",
            description: "Water Girl",
            cost: new Decimal(5),
        },
        52: {
            title: "Your MUM",
            description: "Screw american spelling",
            cost: new Decimal(3),
        },
        53: {
            title: "big <h1>PP</h1>",
            description: "like -->",
            cost: new Decimal(3),
        },
        54: {
            title: "Deez Nuts",
            description: "IN ...",
            cost: new Decimal(3),
        },
        55: {
            title: "Temple Thing",
            description: "Fire Boy",
            cost: new Decimal(5),
        },
    },
})