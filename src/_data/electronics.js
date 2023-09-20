const components = [
  {
    "name": "laser",
    "purchases": [
      {
        "price": 11.99,
        "count": 40,
        "source": "Amazon",
        "date": "2023-08-23",
        "url": "https://www.amazon.com/dp/B01ISVT86O"
      }
    ]
  },
  {
    "name": "OLED Display",
    "purchases": [
      {
        "price": 12.88,
        "count": 5,
        "source": "Amazon",
        "date": "2023-08-23",
        "url": "https://www.amazon.com/dp/B085WCRS7C"
      }
    ]
  },
  {
    "name": "SG90 Servo 9g Micro Servo",
    "purchases": [
      {
        "price": 22.39,
        "count": 12,
        "source": "Amazon",
        "date": "2023-08-23",
        "url": "https://www.amazon.com/dp/B0C3C8FG82"
      }
    ]
  },
  {
    "name": "SPDT Limit Micro Switch",
    "purchases": [
      {
        "price": 6.99,
        "count": 25,
        "source": "Amazon",
        "date": "2023-08-23",
        "url": "https://www.amazon.com/dp/B073TYWX86"
      }
    ]
  },
  {
    "name": "SPDT Roller Lever Arm Limit Micro Switch",
    "purchases": [
      {
        "price": 5.99,
        "count": 10,
        "source": "Amazon",
        "date": "2023-08-23",
        "url": "https://www.amazon.com/dp/B07X142VGC"
      }
    ]
  },
  {
    "name": "5549 Light Dependent Resistor LDR 5MM Photoresistor",
    "purchases": [
      {
        "price": 5.99,
        "count": 200,
        "source": "Amazon",
        "date": "2023-08-23",
        "url": "https://www.amazon.com/dp/B08QHJ1R8K"
      }
    ]
  },
  {
    "name": "HC-SR04 Ultrasonic Distance Measuring Sensor",
    "purchases": [
      {
        "price": 9.99,
        "count": 10,
        "source": "Amazon",
        "date": "2023-JUL-12",
        "url": "https://www.amazon.com/dp/B07JJHCVRG"
      }
    ]
  },
  {
    "name": "ULN2003 5V Stepper Motor + ULN2003 Driver Board",
    "purchases": [
      {
        "price": 16.99,
        "count": 8,
        "source": "Amazon",
        "date": "2023-JUL-12",
        "url": "https://www.amazon.com/dp/B0BPCBZG3H"
      }
    ]
  },
  {
    "name": "Breadboard 400 Tie Point",
    "purchases": [
      {
        "price": 21.39,
        "count": 16,
        "source": "Amazon",
        "date": "2023-Jun-29",
        "url": "https://www.amazon.com/dp/B07PBFPJC6"
      }
    ]
  },
  {
    "name": "Breadboard 830 Tie Point",
    "purchases": [
      {
        "price": 19.99,
        "count": 10,
        "source": "Amazon",
        "date": "2023-Jun-29",
        "url": "https://www.amazon.com/dp/B07H9X7XVN"
      }
    ]
  },
  {
    "name": "1 foot USB C to C",
    "purchases": [
      {
        "price": 13.98,
        "count": 6,
        "source": "Amazon",
        "date": "2023-Jun-29",
        "url": "https://www.amazon.com/gp/product/B092M6XNQW"
      }
    ]
  },
  {
    "name": "1 foot USB A to C",
    "purchases": [
      {
        "price": 10.69,
        "count": 10,
        "source": "Amazon",
        "date": "2023-Jun-29",
        "url": "https://www.amazon.com/gp/product/B07R14JVGW"
      }
    ]
  },
  {
    "name": "ESP8266 WeMos D1 Mini V4.0.0 Type-C",
    "purchases": [
      {
        "price": 25.99,
        "count": 10,
        "source": "Amazon",
        "date": "2023-Jun-29",
        "url": "https://www.amazon.com/gp/product/B0BKSKV54X"
      }
    ]
  }
]
const equipment = [
  {
    "name": "60W Solder Station kit",
    "purchases": [
      {
        "price": 40.65,
        "count": 1,
        "source": "Amazon",
        "url": "https://www.amazon.com/gp/product/B09DKX8LJ9"
      }
    ]
  },
  {
    "name": "soldering station helping arms",
    "purchases": [
      {
        "price": 18.99,
        "count": 1,
        "source": "Amazon",
        "url": "https://www.amazon.com/gp/product/B07L5DDVKB"
      }
    ]
  }
]

const tally = (item) => {
  const totalCount = item.purchases.reduce((result, i) => { return result + i.count }, 0)
  const totalPrice = item.purchases.reduce((result, i) => { return result + i.price }, 0)
  return {
    name: item.name,
    count: totalCount,
    pricePerEach: (totalPrice / totalCount),
    total: totalPrice,
    purchases: item.purchases
  }
}

const tallyAll = (items) => {
  return items.map(x => tally(x))
}

module.exports = {
  components: tallyAll(components),
  equipment: tallyAll(equipment)
}