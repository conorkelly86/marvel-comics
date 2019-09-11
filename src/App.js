import React from 'react';
import './App.css';

const comic = 
{
  "code": 200,
  "status": "Ok",
  "copyright": "© 2019 MARVEL",
  "attributionText": "Data provided by Marvel. © 2019 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2019 MARVEL</a>",
  "etag": "68e8cc5197d68814f25c75a5c554c3f28e7bdc5d",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 1,
    "count": 1,
    "results": [
      {
        "id": 78235,
        "digitalId": 0,
        "title": "Daredevil (2019) #11 (Variant)",
        "issueNumber": 11,
        "variantDescription": "Variant",
        "description": null,
        "modified": "2019-09-06T13:02:05-0400",
        "isbn": "",
        "upc": "75960609142301121",
        "diamondCode": "JUL191015",
        "ean": "",
        "issn": "2578-8779",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/78235",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/78235/daredevil_2019_11_variant/variant?utm_campaign=apiRef&utm_source=3aa86d938a10214b54013b56089dad10"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/26080",
          "name": "Daredevil (2019 - Present)"
        },
        "variants": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/71570",
            "name": "Daredevil (2019) #11"
          }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2019-09-11T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2019-08-19T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/5d700b83ec413",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/5d700b83ec413",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/78235/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11748",
              "name": "Marco Checchetto",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
              "name": "Vc Clayton Cowles",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/13250",
              "name": "Romulo Fajardo Jr.",
              "role": "colorist (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
              "name": "Emily Newcomen",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1103",
              "name": "Khoi Pham",
              "role": "inker (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
              "name": "Nolan Woodard",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12494",
              "name": "Chip Zdarsky",
              "role": "writer"
            }
          ],
          "returned": 7
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/78235/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/78235/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/173481",
              "name": "cover from Daredevil (2019) #11 (VARIANT)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/173482",
              "name": "story from Daredevil (2019) #11 (VARIANT)",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/78235/events",
          "items": [],
          "returned": 0
        }
      }
    ]
  }
}

function App() {
  const {thumbnail} = comic.data.results[0];
  return (
    
    <div className="App">
      <p>{comic.data.results[0].title}</p>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} className="comicbook"/>
      <p>Issue: {comic.data.results[0].issueNumber}</p>
      <p>Format: {comic.data.results[0].format}</p>

    </div>
  );
}

export default App;
