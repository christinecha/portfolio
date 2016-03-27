"use strict"

import React from 'react'
import * as style from './myGridfolioStyles'

export const FolioStyle = style.Default

export const Folio = [
  [ // Row 1
    {
      title: "Christine Cha",
      brief: null,
      link: null,
      image: null,
      backgroundColor: "#9BD7E0",
      titleFontSize: 40
    },
    {
      title: "Circlematch",
      brief: "An in-browser and iOS native game written in React and React-Native.",
      link: "https://christinecha.github.io/circlematch",
      image: "url('./src/assets/CircleMatch.png')",
      keywords: ["ios", "react", "react-native", "javascript", "html", "css"],
      isTinted: true,
    },
    {
      title: "Clickbait Generator",
      link: "https://clickbaiter.herokuapp.com",
      image: "url('https://farm2.staticflickr.com/1288/5187875836_3a9e471fce.jpg')",
      keywords: ["nodejs", "express", "react", "javascript", "html", "css"],
      isTinted: true
    },
  ],
  [
    {
      title: "Gridfolio: a simple layout for developers >>",
      link: "https://github.com/christinecha/gridfolio",
      image: "url('./src/assets/squiggles.png')",
      backgroundColor: '#F58BAD',
      titleFontSize: 18,
      customHeight: 0.1,
      borderRadius: '0'
    },
  ],
  [ // Row 2
    {
      title: "HOMES (Gilad Hekselman)",
      brief: "Complete 6-panel album artwork.",
      link: "http://www.giladhekselman.com/discography/",
      image: "url('./src/assets/GiladHekselman.jpeg')",
      keywords: ["photoshop", "graphic design", "photo editing"],
      isTinted: true
    },
    {
      title: "Mini Scoop Shop",
      brief: "A tiny eCommerce shop.",
      link: "https://icecreamaccessories.herokuapp.com/",
      image: "url('./src/assets/MiniScoopShop.png')",
      keywords: ["html", "css", "Jquery", "stripe", "node", "express"],
      isTinted: true
    },
    {
      title: "NYC Jazz Scraper",
      brief: "A Node + Cheerio web scraper for NYC jazz shows.",
      link: "https://github.com/christinecha/nyc-jazz-shows",
      image: "url('./src/assets/Jazz.jpeg')",
      keywords: ["node", "express", "cheerio"],
      isTinted: true
    },
    {
      title: "RC Thursday Presentations",
      brief: "A little web app to make Thursday Presentations at RC a bit more fun.",
      link: "https://presentations.recurse.com/",
      image: "url('./src/assets/RCPresentations.png')",
      keywords: ["react", "javascript", "html", "css", "firebase"],
      isTinted: true
    }
  ],
  [ // Row 3
    {
      title: "MPIA Festival Guide",
      brief: null,
      link: null,
      image: "url('./src/assets/MPIA_festivalguide.png')",
      keywords: ["photoshop", "graphic design", "illustrator", "indesign"],
      isTinted: true
    },
    {
      title: "Kebab King",
      brief: "An android cooking game.",
      link: "https://kebabking.io",
      image: "url('./src/assets/KebabKing.png')",
      keywords: ["game design", "illustrator", "ui design"],
      isTinted: true
    },
    {
      title: "Sponsorship Deck (Wellthily)",
      brief: "A little web app to make Thursday Presentations at RC a bit more fun.",
      link: "http://wellthily.com/",
      image: "url('./src/assets/Wellthily.png')",
      keywords: ["photoshop", "graphic design", "illustrator", "indesign"],
      isTinted: true
    }
  ],
  [ // Row 4
    {
      title: <i className="fa fa-linkedin"></i>,
      brief: null,
      link: "https://www.linkedin.com/in/christinechanyc",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <img className="fa" src="./src/assets/recurse_logo.png" height="35"/>,
      brief: null,
      link: "https://recurse.com",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-twitter"></i>,
      brief: null,
      link: "https://twitter.com/christinechanyc",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-github"></i>,
      brief: null,
      link: "https://github.com/christinecha",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-envelope"></i>,
      brief: null,
      link: "mailto:hello@christinecha.com",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-instagram"></i>,
      brief: null,
      link: "https://instagram.com/christinechanyc",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-apple"></i>,
      brief: null,
      link: "https://itunes.apple.com/us/app/circlematch-minimalistic-sliding/id1082737491?ls=1&mt=8",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-angellist"></i>,
      brief: null,
      link: "https://angel.co/christinechanyc",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
  ]
]
