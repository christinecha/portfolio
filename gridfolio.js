                                    /*
Sample Structure:

gf_content =  [
                [ row 1
                  { block 1 },
                  { block 2 },
                  { block 3 }
                ],
                etc.
              ]

Rows can have 1 - 9 blocks.
                                    */

var gf_content = [
  [ // Row 1
    {
      title: "Christine Cha",
      style: {
        backgroundColor: "#9BD7E0",
        fontSize: "40px"
      }
    },
    {
      title: "Circlematch",
      link: "https://christinecha.github.io/circlematch",
      imageURL: "./assets/CircleMatch.png",
      keywords: ["ios", "react-native", "javascript", "css"]
    },
    {
      title: "Clickbait Generator",
      link: "https://clickbaiter.herokuapp.com",
      imageURL: "https://farm2.staticflickr.com/1288/5187875836_3a9e471fce.jpg",
      keywords: ["nodejs", "react", "javascript", "html", "css"]
    },
    {
      title: "Slinky Draw",
      link: "http://christinecha.github.io/slinkydraw/",
      imageURL: "./assets/slinky_8.png",
      keywords: ["html", "css", "javascript", "canvas"]
    }
  ],
  [
    {
      title: "Gridfolio: a simple layout for developers >>",
      link: "https://github.com/christinecha/gridfolio",
      imageURL: "./assets/squiggles.png",
      customHeight: true,
      style: {
        backgroundColor: '#F58BAD',
        height: '100px',
        fontSize: "18px"
      }
    },
  ],
  [ // Row 2
    {
      title: "Mini Scoop Shop",
      link: "https://icecreamaccessories.herokuapp.com/",
      imageURL: "./assets/MiniScoopShop.png",
      keywords: ["Jquery", "stripe", "node", "express", "css"]
    },
    {
      title: "NYC Jazz Scraper",
      link: "https://github.com/christinecha/nyc-jazz-shows",
      imageURL: "./assets/Jazz.jpeg",
      keywords: ["node", "express", "cheerio"]
    },
    {
      title: "RC Thursday Presentations",
      link: "https://presentations.recurse.com/",
      imageURL: "./assets/RCPresentations.png",
      keywords: ["react", "javascript", "css"]
    },
    {
      title: "HOMES (Gilad Hekselman)",
      link: "http://www.giladhekselman.com/discography/",
      imageURL: "./assets/GiladHekselman.jpeg",
      keywords: ["photoshop", "graphic design"]
    }
  ],
  [ // Row 3
    {
      title: "MPIA Festival Guide",
      link: null,
      imageURL: "./assets/MPIA_festivalguide.png",
      keywords: ["photoshop", "graphic design", "illustrator", "indesign"]
    },
    {
      title: "Kebab King",
      link: "https://kebabking.io",
      imageURL: "./assets/KebabKing.png",
      keywords: ["game design", "illustrator", "ui design"]
    },
    {
      title: "Sponsorship Deck (Wellthily)",
      link: "http://wellthily.com/",
      imageURL: "./assets/Wellthily.png",
      keywords: ["photoshop", "graphic design", "illustrator", "indesign"]
    }
  ],
  [ // Row 4
    {
      title: "<i class='fa fa-linkedin'></i>",
      link: "https://www.linkedin.com/in/christinechanyc",
      style: {
        backgroundColor: '#9BD7E0',
        fontSize: "30px"
      }
    },
    {
      title: "<img class='fa' src='./assets/recurse_logo.png' height='35'/>",
      link: "https://recurse.com",
      style: {
        backgroundColor: '#9BD7E0',
        fontSize: "30px"
      }
    },
    {
      title: "<i class='fa fa-twitter'></i>",
      link: "https://twitter.com/christinechanyc",
      style: {
        backgroundColor: '#9BD7E0',
        fontSize: "30px"
      }
    },
    {
      title: "<i class='fa fa-github'></i>",
      brief: null,
      link: "https://github.com/christinecha",
      style: {
        backgroundColor: '#9BD7E0',
        fontSize: "30px"
      }
    },
    {
      title: "<i class='fa fa-envelope'></i>",
      link: "mailto:hello@christinecha.com",
      style: {
        backgroundColor: '#9BD7E0',
        fontSize: "30px"
      }
    },
    {
      title: "<i class='fa fa-instagram'></i>",
      link: "https://instagram.com/christinechanyc",
      style: {
        backgroundColor: '#9BD7E0',
        fontSize: "30px"
      }
    },
    {
      title: "<i class='fa fa-apple'></i>",
      link: "https://itunes.apple.com/us/app/circlematch-minimalistic-sliding/id1082737491?ls=1&mt=8",
      style: {
        backgroundColor: '#9BD7E0',
        fontSize: "30px"
      }
    },
    {
      title: "<i class='fa fa-angellist'></i>",
      link: "https://angel.co/christinechanyc",
      style: {
        backgroundColor: '#9BD7E0',
        fontSize: "30px"
      }
    },
  ]
]


var gf_styles = {
  squareMode: true,
  innerBlock: {
    fontFamily: "Montserrat",
    color: "#fff",
    padding: "10px"
  },
  blockTitle: {
    margin: "0 auto",
    textTransform: "uppercase",
    textShadow: "0 0 5px rgba(0,0,0,0.4)"
  },
  keyword: {
    fontSize: "11px",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "2px 5px",
    margin: "2px"
  },
  keywords: {
    fontSize: "10px",
    marginTop: "-50px"
  }
}
