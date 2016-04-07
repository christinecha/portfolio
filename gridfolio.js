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

var socialMediaIconStyle = {
  backgroundColor: '#9BD7E0',
  fontSize: "20px",
  color: "#fff"
}

var gf_content = [
  [ // Row 1
    {
      title: "Christine Cha",
      style: {
        backgroundColor: "#9BD7E0",
        fontSize: "28px",
        color: "#fff"
      }
    },
    {
      title: "Circlematch",
      link: "https://christinecha.github.io/circlematch",
      imageURL: "./assets/CircleMatch.png",
      keywords: ["ios", "react-native", "javascript"]
    },
    {
      title: "Clickbait Generator",
      link: "https://clickbaiter.herokuapp.com",
      imageURL: "./assets/clickbait.png",
      keywords: ["nodejs", "react", "javascript"]
    },
    {
      title: "Slinky Draw",
      link: "http://christinecha.github.io/slinkydraw/",
      imageURL: "./assets/slinky_8.png",
      keywords: ["css", "javascript", "canvas"]
    }
  ],
  [
    {
      title: "Gridfolio: a simple layout for developers >>",
      link: "https://github.com/christinecha/gridfolio",
      customHeight: true,
      style: {
        backgroundColor: '#eee',
        height: '100px'
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
  [ // row
    {
      title: "<i class='fa fa-linkedin'></i>",
      link: "https://www.linkedin.com/in/christinechanyc",
      style: socialMediaIconStyle
    },
    {
      title: "<img class='fa' src='./assets/recurse_logo.png' height='35'/>",
      link: "https://recurse.com",
      style: socialMediaIconStyle
    },
    {
      title: "<i class='fa fa-twitter'></i>",
      link: "https://twitter.com/christinechanyc",
      style: socialMediaIconStyle
    },
    {
      title: "<i class='fa fa-github'></i>",
      link: "https://github.com/christinecha",
      style: socialMediaIconStyle
    },
    {
      title: "<i class='fa fa-envelope'></i>",
      link: "mailto:hello@christinecha.com",
      style: socialMediaIconStyle
    },
    {
      title: "<i class='fa fa-instagram'></i>",
      link: "https://instagram.com/christinechanyc",
      style: socialMediaIconStyle
    },
    {
      title: "<i class='fa fa-apple'></i>",
      link: "https://itunes.apple.com/us/app/circlematch-minimalistic-sliding/id1082737491?ls=1&mt=8",
      style: socialMediaIconStyle
    },
    {
      title: "<i class='fa fa-angellist'></i>",
      link: "https://angel.co/christinechanyc",
      style: socialMediaIconStyle
    },
  ]
]


var gf_styles = {
  squareMode: true,
  innerBlock: {
    fontFamily: "Montserrat",
    color: "rgba(15,15,15,0.6)",
    padding: "15px"
  },
  blockTitle: {
    margin: "0 auto",
    textTransform: "uppercase",
    // textShadow: "0 0 2px rgba(0,0,0,0.8)"
  },
  keyword: {
    fontSize: "9px",
    backgroundColor: "rgba(255,255,255,0.8)",
    textTransform: "uppercase",
    color: "#666",
    padding: "2px 5px",
    margin: "2px"
  },
  keywords: {
    fontSize: "10px",
    marginTop: "-40px"
  }
}
