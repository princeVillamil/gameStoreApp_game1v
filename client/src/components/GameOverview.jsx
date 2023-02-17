import React from 'react'

export default function GameOverview({platforms}) {
  // let plat = ['pc','playstation', 'xbox','nintendo']
  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }
  let game = {
    "id": 3328,
    "slug": "the-witcher-3-wild-hunt",
    "name": "The Witcher 3: Wild Hunt",
    "name_original": "The Witcher 3: Wild Hunt",
    "description": "<p>The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.</p>\n<p>CD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items.</p>\n<p>Players praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction.</p>",
    "metacritic": 92,
    "metacritic_platforms": [
        {
            "metascore": 91,
            "url": "https://www.metacritic.com/game/xbox-one/the-witcher-3-wild-hunt",
            "platform": {
                "platform": 1,
                "name": "Xbox One",
                "slug": "xbox-one"
            }
        },
        {
            "metascore": 93,
            "url": "https://www.metacritic.com/game/pc/the-witcher-3-wild-hunt",
            "platform": {
                "platform": 4,
                "name": "PC",
                "slug": "pc"
            }
        },
        {
            "metascore": 92,
            "url": "https://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt",
            "platform": {
                "platform": 18,
                "name": "PlayStation 4",
                "slug": "playstation4"
            }
        }
    ],
    "released": "2015-05-18",
    "tba": false,
    "updated": "2022-12-17T22:18:10",
    "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    "background_image_additional": "https://media.rawg.io/media/screenshots/3e4/3e4576a772b3df47bfc52b86e4cf7e03.jpg",
    "website": "https://thewitcher.com/en/witcher3",
    "rating": 4.67,
    "rating_top": 5,
    "ratings": [
        {
            "id": 5,
            "title": "exceptional",
            "count": 4496,
            "percent": 77.99
        },
        {
            "id": 4,
            "title": "recommended",
            "count": 900,
            "percent": 15.61
        },
        {
            "id": 3,
            "title": "meh",
            "count": 230,
            "percent": 3.99
        },
        {
            "id": 1,
            "title": "skip",
            "count": 139,
            "percent": 2.41
        }
    ],
    "reactions": {
        "1": 51,
        "2": 13,
        "3": 49,
        "4": 24,
        "5": 14,
        "6": 9,
        "7": 15,
        "10": 15,
        "11": 17,
        "12": 18,
        "14": 1,
        "15": 1,
        "16": 2,
        "21": 1
    },
    "added": 17273,
    "added_by_status": {
        "yet": 981,
        "owned": 9892,
        "beaten": 4123,
        "toplay": 695,
        "dropped": 781,
        "playing": 801
    },
    "playtime": 46,
    "screenshots_count": 107,
    "movies_count": 0,
    "creators_count": 34,
    "achievements_count": 684,
    "parent_achievements_count": 49,
    "reddit_url": "https://www.reddit.com/r/thewitcher3/",
    "reddit_name": "r/thewitcher3",
    "reddit_description": "A subreddit for veterans and new fans alike of The Witcher 3: Wild Hunt as well as for other Witcher games and the franchise in general. Everyone is welcome.",
    "reddit_logo": "",
    "reddit_count": 8520,
    "twitch_count": 151,
    "youtube_count": 1000000,
    "reviews_text_count": 82,
    "ratings_count": 5683,
    "suggestions_count": 659,
    "alternative_names": [],
    "metacritic_url": "https://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt",
    "parents_count": 0,
    "additions_count": 3,
    "game_series_count": 8,
    "user_game": null,
    "reviews_count": 5765,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "parent_platforms": [
        {
            "platform": {
                "id": 1,
                "name": "PC",
                "slug": "pc"
            }
        },
        {
            "platform": {
                "id": 2,
                "name": "PlayStation",
                "slug": "playstation"
            }
        },
        {
            "platform": {
                "id": 3,
                "name": "Xbox",
                "slug": "xbox"
            }
        },
        {
            "platform": {
                "id": 7,
                "name": "Nintendo",
                "slug": "nintendo"
            }
        }
    ],
    "platforms": [
        {
            "platform": {
                "id": 186,
                "name": "Xbox Series S/X",
                "slug": "xbox-series-x",
                "image": null,
                "year_end": null,
                "year_start": 2020,
                "games_count": 668,
                "image_background": "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg"
            },
            "released_at": "2015-05-18",
            "requirements": {}
        },
        {
            "platform": {
                "id": 18,
                "name": "PlayStation 4",
                "slug": "playstation4",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 6530,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            "released_at": "2015-05-18",
            "requirements": {}
        },
        {
            "platform": {
                "id": 7,
                "name": "Nintendo Switch",
                "slug": "nintendo-switch",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 5087,
                "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
            },
            "released_at": "2015-05-18",
            "requirements": {}
        },
        {
            "platform": {
                "id": 4,
                "name": "PC",
                "slug": "pc",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 503856,
                "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            },
            "released_at": "2015-05-18",
            "requirements": {}
        },
        {
            "platform": {
                "id": 1,
                "name": "Xbox One",
                "slug": "xbox-one",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 5443,
                "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
            },
            "released_at": "2015-05-18",
            "requirements": {}
        },
        {
            "platform": {
                "id": 187,
                "name": "PlayStation 5",
                "slug": "playstation5",
                "image": null,
                "year_end": null,
                "year_start": 2020,
                "games_count": 742,
                "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
            },
            "released_at": "2015-05-18",
            "requirements": {}
        }
    ],
    "stores": [
        {
            "id": 354780,
            "url": "",
            "store": {
                "id": 5,
                "name": "GOG",
                "slug": "gog",
                "domain": "gog.com",
                "games_count": 4585,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            }
        },
        {
            "id": 3565,
            "url": "",
            "store": {
                "id": 3,
                "name": "PlayStation Store",
                "slug": "playstation-store",
                "domain": "store.playstation.com",
                "games_count": 7787,
                "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
            }
        },
        {
            "id": 305376,
            "url": "",
            "store": {
                "id": 1,
                "name": "Steam",
                "slug": "steam",
                "domain": "store.steampowered.com",
                "games_count": 69655,
                "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
            }
        },
        {
            "id": 312313,
            "url": "",
            "store": {
                "id": 2,
                "name": "Xbox Store",
                "slug": "xbox-store",
                "domain": "microsoft.com",
                "games_count": 4755,
                "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
            }
        },
        {
            "id": 676022,
            "url": "",
            "store": {
                "id": 6,
                "name": "Nintendo Store",
                "slug": "nintendo",
                "domain": "nintendo.com",
                "games_count": 8878,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            }
        }
    ],
    "developers": [
        {
            "id": 9023,
            "name": "CD PROJEKT RED",
            "slug": "cd-projekt-red",
            "games_count": 20,
            "image_background": "https://media.rawg.io/media/games/c19/c193180583c34e5753a1aaf15a586761.jpg"
        }
    ],
    "genres": [
        {
            "id": 4,
            "name": "Action",
            "slug": "action",
            "games_count": 168167,
            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
        },
        {
            "id": 3,
            "name": "Adventure",
            "slug": "adventure",
            "games_count": 128587,
            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
        },
        {
            "id": 5,
            "name": "RPG",
            "slug": "role-playing-games-rpg",
            "games_count": 51116,
            "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
        }
    ],
    "tags": [
        {
            "id": 31,
            "name": "Singleplayer",
            "slug": "singleplayer",
            "language": "eng",
            "games_count": 193456,
            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
        },
        {
            "id": 13,
            "name": "Atmospheric",
            "slug": "atmospheric",
            "language": "eng",
            "games_count": 26601,
            "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
        },
        {
            "id": 40836,
            "name": "Full controller support",
            "slug": "full-controller-support",
            "language": "eng",
            "games_count": 13259,
            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        },
        {
            "id": 42,
            "name": "Great Soundtrack",
            "slug": "great-soundtrack",
            "language": "eng",
            "games_count": 3221,
            "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
        },
        {
            "id": 24,
            "name": "RPG",
            "slug": "rpg",
            "language": "eng",
            "games_count": 15924,
            "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
        },
        {
            "id": 118,
            "name": "Story Rich",
            "slug": "story-rich",
            "language": "eng",
            "games_count": 16869,
            "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
        },
        {
            "id": 36,
            "name": "Open World",
            "slug": "open-world",
            "language": "eng",
            "games_count": 5803,
            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
        },
        {
            "id": 149,
            "name": "Third Person",
            "slug": "third-person",
            "language": "eng",
            "games_count": 8455,
            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        },
        {
            "id": 64,
            "name": "Fantasy",
            "slug": "fantasy",
            "language": "eng",
            "games_count": 22740,
            "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
        },
        {
            "id": 37,
            "name": "Sandbox",
            "slug": "sandbox",
            "language": "eng",
            "games_count": 5554,
            "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
        },
        {
            "id": 97,
            "name": "Action RPG",
            "slug": "action-rpg",
            "language": "eng",
            "games_count": 5411,
            "image_background": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg"
        },
        {
            "id": 41,
            "name": "Dark",
            "slug": "dark",
            "language": "eng",
            "games_count": 12950,
            "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
        },
        {
            "id": 44,
            "name": "Nudity",
            "slug": "nudity",
            "language": "eng",
            "games_count": 4294,
            "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
        },
        {
            "id": 336,
            "name": "controller support",
            "slug": "controller-support",
            "language": "eng",
            "games_count": 293,
            "image_background": "https://media.rawg.io/media/games/c81/c812e158129e00c9b0f096ae8a0bb7d6.jpg"
        },
        {
            "id": 145,
            "name": "Choices Matter",
            "slug": "choices-matter",
            "language": "eng",
            "games_count": 2892,
            "image_background": "https://media.rawg.io/media/games/260/26023c855f1769a93411d6a7ea084632.jpeg"
        },
        {
            "id": 192,
            "name": "Mature",
            "slug": "mature",
            "language": "eng",
            "games_count": 1768,
            "image_background": "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg"
        },
        {
            "id": 40,
            "name": "Dark Fantasy",
            "slug": "dark-fantasy",
            "language": "eng",
            "games_count": 2917,
            "image_background": "https://media.rawg.io/media/games/1dc/1dc45435c09f844b24eb96cd66eb6325.jpg"
        },
        {
            "id": 66,
            "name": "Medieval",
            "slug": "medieval",
            "language": "eng",
            "games_count": 4871,
            "image_background": "https://media.rawg.io/media/games/155/155a7d8f464ef6029e11cc6a9c0f763d.jpg"
        },
        {
            "id": 82,
            "name": "Magic",
            "slug": "magic",
            "language": "eng",
            "games_count": 7562,
            "image_background": "https://media.rawg.io/media/games/b17/b175178f8842276b8b18b339fe3146a1.jpg"
        },
        {
            "id": 218,
            "name": "Multiple Endings",
            "slug": "multiple-endings",
            "language": "eng",
            "games_count": 6309,
            "image_background": "https://media.rawg.io/media/games/1aa/1aaf454e0d3809ba1c34df4514492237.jpg"
        }
    ],
    "publishers": [
        {
            "id": 7411,
            "name": "CD PROJEKT RED",
            "slug": "cd-projekt-red",
            "games_count": 22,
            "image_background": "https://media.rawg.io/media/screenshots/d01/d01ed4a7726ba30fdd16cd8c2e60989a_uAmdR8i.jpg"
        }
    ],
    "esrb_rating": {
        "id": 4,
        "name": "Mature",
        "slug": "mature"
    },
    "clip": null,
    "description_raw": "The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.\n\nCD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items.\n\nPlayers praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction."
}

  console.log(game['released'].split('-')[1])
  return (
    <div className='gOverviewContainer'>
      <div className="gOverview">
        <div className="gOverviewLeft">
          <div className="gOTop">
            <span>{months[`${game['released'].split('-')[1]}`]} 18, 2015</span>
            <ul>
            	{/* {game['parent_platforms'].map((x,i)=>{
                return <li key={i+0} className='gOTopLi'><img src={`${platforms[`${x['platform']['slug']}`]}`} alt="" /></li>
                // return <li key={i+1} className='gOTopLi'><img src={`${platforms[`${x}`]}`} alt="" /></li>
              })} */}
            </ul>
            <p>Average Playtime: 46 hours</p>
          </div>
          <h1>The Witcher 3: Wild Hunt</h1>
        </div>
        <div className="gOverviewRight">

        </div>
      </div>
    </div>
  )
}
