import React from 'react'
import { useEffect } from 'react'
import '../Assets/gameOverView.css'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import whiteCartImg from '../Assets/img/whiteCart.png'

export default function GameOverView() {
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
  let gameScreenShot = {
    "count": 6,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 30336,
            "image": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",
            "width": 1280,
            "height": 720,
            "is_deleted": false
        },
        {
            "id": 30337,
            "image": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",
            "width": 1280,
            "height": 720,
            "is_deleted": false
        },
        {
            "id": 30338,
            "image": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",
            "width": 1280,
            "height": 720,
            "is_deleted": false
        },
        {
            "id": 30339,
            "image": "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg",
            "width": 1280,
            "height": 720,
            "is_deleted": false
        },
        {
            "id": 30340,
            "image": "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg",
            "width": 1280,
            "height": 720,
            "is_deleted": false
        },
        {
            "id": 30342,
            "image": "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg",
            "width": 1280,
            "height": 720,
            "is_deleted": false
        }
    ]
  }
  let platforms = {
    linux: 'https://rawg.io/assets/ea10db63cd5cf752e220d2726db4f934.svg',
    mac: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNSAxOCc+PHBhdGggZD0nTTEwLjg2OSAwaC4xMjdjLjEwMiAxLjI2LS4zNzkgMi4yMDItLjk2MyAyLjg4NC0uNTc0LjY3Ny0xLjM1OSAxLjMzNC0yLjYyOSAxLjIzNC0uMDg0LTEuMjQyLjM5Ny0yLjExNC45OC0yLjc5NEM4LjkyNy42OSA5LjkxOS4xMjYgMTAuODcgMHptMy43NTYgMTMuMTk2di4wMzZhMTAuNTM0IDEwLjUzNCAwIDAxLTEuNDk0IDIuODk5Yy0uNTcuNzg5LTEuMjY3IDEuODUtMi41MTMgMS44NS0xLjA3NyAwLTEuNzkyLS42OTYtMi44OTYtLjcxNS0xLjE2Ny0uMDItMS44MS41ODMtMi44NzcuNzM0aC0uMzY0Yy0uNzgzLS4xMTQtMS40MTYtLjc0LTEuODc3LTEuMzAyQTExLjQ1MiAxMS40NTIgMCAwMTAgMTAuMTM0di0uODA4Yy4wODMtMS45NjkgMS4wMzMtMy41NyAyLjI5NS00LjM0NS42NjctLjQxMyAxLjU4My0uNzY0IDIuNjAzLS42MDcuNDM3LjA2OC44ODQuMjE5IDEuMjc1LjM2OC4zNzEuMTQ0LjgzNS4zOTggMS4yNzUuMzg1LjI5OC0uMDA5LjU5NC0uMTY1Ljg5NC0uMjc1Ljg4LS4zMiAxLjc0LS42ODcgMi44NzctLjUxNCAxLjM2NS4yMDcgMi4zMzQuODE4IDIuOTMzIDEuNzYtMS4xNTUuNzQtMi4wNjggMS44NTUtMS45MTIgMy43Ni4xMzggMS43MyAxLjEzNyAyLjc0MiAyLjM4NSAzLjMzOHonIGZpbGw9JyNGRkYnLz48L3N2Zz4=',
    android: 'https://rawg.io/assets/f8777fb92ed5b91753dfb9810fad29a1.svg',
    pc: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTAgMTMuNzcybDYuNTQ1LjkwMlY4LjQyNkgwek0wIDcuNjJoNi41NDVWMS4yOTZMMCAyLjE5OHptNy4yNjUgNy4xNWw4LjcwNCAxLjJWOC40MjVINy4yNjV6bTAtMTMuNTd2Ni40Mmg4LjcwNFYweicgZmlsbD0nI0ZGRicvPjwvc3ZnPg==',
    playstation: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjEgMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTExLjExMiAxNkw4IDE0LjY1NFYwczYuNzY0IDEuMTQ3IDcuNjk1IDMuOTg3Yy45MzEgMi44NDItLjUyIDQuNjgyLTEuMDMgNC43MzYtMS40Mi4xNS0xLjk2LS43NDgtMS45Ni0uNzQ4VjMuMzlsLTEuNTQ0LS42NDhMMTEuMTEyIDE2ek0xMiAxNC4zMlYxNnM3LjY2Ni0yLjMzOCA4Ljc5NC0zLjI0YzEuMTI4LS45LTIuNjQxLTMuMTQyLTQuNjY2LTIuNzA0IDAgMC0yLjE1Mi4wOTktNC4xMDIuOTAxLS4wMTkuMDA4IDAgMS41MSAwIDEuNTFsNC45NDgtMS4wOTUgMS43NDMuNzNMMTIgMTQuMzJ6bS01LjAyNC0uNzczcy0uOTQyLjQ3Ni0zLjA0MS40NTJjLTIuMS0uMDI0LTMuOTU5LS41OTUtMy45MzUtMS44MzNDLjAyNCAxMC45MjggMy40NzYgOS41NzEgNi45NTIgOXYxLjczOGwtMy42OTMuOTUycy0uNjMyLjc4Ni4yMTcuODFBMTEuOTM0IDExLjkzNCAwIDAwNyAxMi4wNDZsLS4wMjQgMS41eicgZmlsbD0nI0ZGRicvPjwvc3ZnPg==',
    xbox: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZmlsbD0nI0ZGRicgZD0nTTMuNTY0IDEuMzU3bC0uMDIyLjAyYy4wNDYtLjA0OC4xMS0uMS4xNTQtLjEyOEM0Ljk0OC40MzUgNi4zOTYgMCA4IDBjMS41MDIgMCAyLjkwOC40MTUgNC4xMSAxLjEzNi4wODYuMDUyLjMyNC4yMTUuNDQ2LjM2M0MxMS40LjIyMiA3Ljk5MyAyLjk2MiA3Ljk5MyAyLjk2MmMtMS4xNzctLjkwOC0yLjI2LTEuNTI2LTMuMDY3LTEuNzQ2LS42NzQtLjE4NS0xLjE0LS4wMy0xLjM2Mi4xNDF6bTEwLjMwNSAxLjIwOGMtLjAzNS0uMDQtLjA3NC0uMDc2LS4xMDktLjExNi0uMjkzLS4zMjItLjY1My0uNC0uOTc4LS4zNzgtLjI5NS4wOTItMS42Ni41ODQtMy4zNDIgMi4xNzIgMCAwIDEuODk0IDEuODQxIDMuMDUzIDMuNzIzIDEuMTU5IDEuODgzIDEuODUyIDMuMzYyIDEuNDI2IDUuNDE1QTcuOTY5IDcuOTY5IDAgMDAxNiA3Ljk5OWE3Ljk2OCA3Ljk2OCAwIDAwLTIuMTMtNS40MzR6TTEwLjk4IDguNzdhNTUuNDE2IDU1LjQxNiAwIDAwLTIuMjg3LTIuNDA1IDUyLjg0IDUyLjg0IDAgMDAtLjctLjY4NmwtLjg0OC44NTRjLS42MTQuNjItMS40MTEgMS40My0xLjg1MyAxLjkwMi0uNzg3Ljg0LTMuMDQzIDMuNDc5LTMuMTcgNC45NTggMCAwLS41MDItMS4xNzQuNi0zLjg4LjcyLTEuNzY5IDIuODkzLTQuNDI1IDMuODAxLTUuMjkgMCAwLS44My0uOTEzLTEuODctMS41NDRsLS4wMDctLjAwMnMtLjAxMS0uMDA5LS4wMy0uMDJjLS41LS4zLTEuMDQ3LS41My0xLjU3My0uNTZhMS4zOTEgMS4zOTEgMCAwMC0uODc4LjQzMUE4IDggMCAwMDEzLjkyIDEzLjM4MWMwLS4wMDItLjE2OS0xLjA1Ni0xLjI0NS0yLjU3LS4yNTMtLjM1NC0xLjE3OC0xLjQ2LTEuNjk2LTIuMDR6Jy8+PC9zdmc+',
    ios: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMSAxOCc+PHBhdGggZmlsbD0nI0ZGRicgZD0nTTkuNTM4IDBIMS42NTFDLjg5NiAwIC4yODcuNTg3LjI4NyAxLjMxdjE1LjM2OGMwIC43MjMuNjEgMS4zMSAxLjM2NCAxLjMxaDcuODg3Yy43NTQgMCAxLjM2NC0uNTg3IDEuMzY0LTEuMzFWMS4zMWMwLS43MjMtLjYxLTEuMzEtMS4zNjQtMS4zMXptLTUuODkuNzk2aDMuODk0Yy4wOTggMCAuMTc4LjE0LjE3OC4zMTUgMCAuMTc0LS4wOC4zMTYtLjE3OC4zMTZIMy42NDhjLS4wOTkgMC0uMTc3LS4xNDItLjE3Ny0uMzE2IDAtLjE3NC4wNzgtLjMxNS4xNzctLjMxNXptMS45NDcgMTUuODk4Yy0uNDggMC0uODctLjM3NS0uODctLjgzNiAwLS40NjIuMzktLjgzNS44Ny0uODM1cy44Ny4zNzMuODcuODM1YzAgLjQ2MS0uMzkuODM2LS44Ny44MzZ6TTkuODggMTMuODNIMS4zMVYyLjIxaDguNTd2MTEuNjJ6Jy8+PC9zdmc+',
    nintendo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMSAxNic+PHBhdGggZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNOCAwaDVhOCA4IDAgMTEwIDE2SDhBOCA4IDAgMTE4IDB6bS0uMTM1IDEuOTM1YTYuMDY1IDYuMDY1IDAgMDAwIDEyLjEzaDUuMTJhNi4wNjUgNi4wNjUgMCAwMDAtMTIuMTNoLTUuMTJ6bS0xLjMzIDIuMzA0aDIuNDAxbDMuMTk5IDUuMTc1VjQuMjRoMi4zNDZ2Ny40OTVIMTIuMThMOC44NjQgNi41Mzd2NS4yMDFINi41M2wuMDA1LTcuNDk5eicvPjwvc3ZnPg==',

  }
  useEffect(()=>{
    document.body.style.background = '#151515'
  },[])
  console.log(game['released'].split('-')[0])

  let dateReleased = `${months[`${game['released'].split('-')[1]}`]} ${game['released'].split('-')[2]}, ${game['released'].split('-')[0]}`
  // 18, 2015
  return (
    <div className='gOverviewContainer'>
      <SideBar/>
      <Navbar/>
      <div className="gOverview">
        <div className="gOverviewLeft">
          <div className="gOTop">
            <span>{dateReleased}</span>
            <ul>
              {game['parent_platforms'].map((x,i)=>{
                return <li key={i+0} className='gOTopLi'><img src={`${platforms[`${x['platform']['slug']}`]}`} alt="" /></li>
                // return <li key={i+1} className='gOTopLi'><img src={`${platforms[`${x}`]}`} alt="" /></li>
              })}
            </ul>
            <p>Average Playtime: {game['playtime']} hours</p>
          </div>
          <h1>{game['name']}</h1>
          {/* <p>{game['description_raw'].split(' ').length <= 50? game['description_raw']:game['description_raw'].split(' ').slice(0, 50).join(' ') + ' ...'}</p> */}
          <div className="gOverviewLeftActions">
            <button className='gOverviewLeftBtns'>
              <span>Add to</span>
              <span>Library</span>
            </button>
            <button className='gOverviewLeftBtns'>
              <span>Add to</span>
              <span>Wishlist</span>
            </button>
            <button className='gOverviewLeftBtns'>
              <span>Add to</span>
              <span>Cart <img src={whiteCartImg} alt="" /></span>
            </button>
          </div>
          <div className="gOverviewLeftRating">
            <div className="gOverviewLeftInnerRating">
              <span>Exceptional</span>
              <span>5768 RATINGS</span>
            </div>
            <div className="gOverviewLeftInnerRating">
              <span>#1</span>
              <span>RPG</span>
            </div>
            <div className="gOverviewLeftInnerRating">
              <span>#1</span>
              <span>TOP 2015</span>
            </div>
          </div>
          {/* <p className='desc'>{game['description_raw']}</p> */}
        </div>
        <div className="gOverviewRight">
          <div className="gOverviewRightImg">
            {
              gameScreenShot['results'].map((x,i)=>{
                if(i>4) return
                return <div key={i+10} className='img'>
                  <img src={`${x['image']}`} alt="img of game" />
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
