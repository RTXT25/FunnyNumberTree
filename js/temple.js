addLayer("a", {
    name: "at", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#ffffff",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "Air", // Name of prestige currency
    baseResource: "Ex", // Name of resource prestige is based on
    baseAmount() {return player.e.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade('e',11)},
    upgrades: {
        11: {
            title: "Air Dropper",
            description: "Gen Points",
            cost: new Decimal(1),
        },
    },
    update(diff) {
        gain = new Decimal(0.1)
        if(hasUpgrade('a',12)) player[this.layer].points = player[this.layer].points.add(gain)
      },
      tabFormat: {
        "Factory": {
            content: [
                "main-display",
                "blank",
                "upgrades"
            ],
        },
        "R&D": {
            content: [
                "main-display",
                "blank",
                "upgrades"
            ],
        },
    },
    
    branches: ['e'],
})
addLayer("r", {
    name: "rt", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#6e6e6e",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "Rock", // Name of prestige currency
    baseResource: "Ex", // Name of resource prestige is based on
    baseAmount() {return player.e.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade('e',15)},
    upgrades: {
        11: {
            title: "Rock Dropper",
            description: "Gen Points",
            cost: new Decimal(1),
        },
        99: {
            title: 'Pickaxe',
            description: 'Yeah i said axE',
            cost: new Decimal(100),
            branches: [98,97],
        },
        98: {
            title: 'Pickraxe',
            description: 'Yeah i said raxE',
            cost: new Decimal(100),
            branches: [96,95],
        },
        97: {
            title: 'Drilly Drills',
            description: 'Drill',
            cost: new Decimal(100),
            branches: [94,93],
        },
        96: {
            title: 'PickFax',
            description: 'Get Ur Fax Right',
            cost: new Decimal(100),
        },
        95: {
            title: 'Raxe axe',
            description: 'Not a tree axe but a rock one',
            cost: new Decimal(100),
        },
        94: {
            title: 'Spinny Drills',
            description: 'Spin',
            cost: new Decimal(100),
        },
        93: {
            title: 'Drolly Drills',
            description: 'so Drolly',
            cost: new Decimal(100),
        },
        91: {
            title: 'Drilly Drills',
            description: 'Spin',
            cost: new Decimal(100),
        },
        91: {
            title: 'Drilly Drills',
            description: 'Spin',
            cost: new Decimal(100),
        },
    },
    milestones: {
        0: {
            requirementDescription: "100 Rock",
            effectDescription: "Activate the Rock Crystal",
            done() { return player.r.points.gte(100) }
        }
    },
    update(diff) {
        gain = new Decimal(0.1)
        if(hasUpgrade('r',11)) player[this.layer].points = player[this.layer].points.add(gain)
      },
      tabFormat: {
        "Factory Floor": {
            content: [
                "main-display",
                "blank",
                ["row", [["upgrade", 11]]],
            ],
        },
        "Research": {
            content: [
                "main-display",
                "blank",
                ["row", [["upgrade", 99]]],
                ["blank", "50px"],
                ["row", [["upgrade", 98],["upgrade", 97]]],
                ["blank", "70px"],
                ["row", [["upgrade", 96],["upgrade", 95],["upgrade", 94],["upgrade", 93]]],
            ],
        },
        "Crystal Room": {
            content: [
                "main-display",
                "blank",
                "milestones",
            ],
        },
    },
    
    branches: ['e'],
})
addLayer("w", {
    name: "w", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "W", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#00aaff",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "Water", // Name of prestige currency
    baseResource: "Ex", // Name of resource prestige is based on
    baseAmount() {return player.e.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade('e',51)},
    upgrades: {
        11: {
            title: "Water Dropper",
            description: "Gen Points",
            cost: new Decimal(1),
        },
    },
    update(diff) {
        gain = new Decimal(0.1)
        if(hasUpgrade('w',11)) player[this.layer].points = player[this.layer].points.add(gain)
      },
      tabFormat: {
        "Main tab": {
            content: [
                "main-display",
                "blank",
                "upgrades"
            ],
        },
        "Other tab": {
            content: [
                "main-display",
                "blank",
                "upgrades"
            ],
        },
    },
    
    branches: ['e'],
})
addLayer("f", {
    name: "ft", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#ff0000",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "Fire", // Name of prestige currency
    baseResource: "Ex", // Name of resource prestige is based on
    baseAmount() {return player.e.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade('e',55)},
    upgrades: {
        11: {
            title: "Air Dropper",
            description: "Gen Points",
            cost: new Decimal(1),
        },
    },
    update(diff) {
        gain = new Decimal(0.1)
        if(hasUpgrade('f',11)) player[this.layer].points = player[this.layer].points.add(gain)
      },
      tabFormat: {
        "Main tab": {
            content: [
                "main-display",
                "blank",
                "upgrades"
            ],
        },
        "Other tab": {
            content: [
                "main-display",
                "blank",
                "upgrades"
            ],
        },
    },
    
    branches: ['e'],
})