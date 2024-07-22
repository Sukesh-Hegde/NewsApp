import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  article = [
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "The Washington Post",
      title:
        "Secret Service said to have denied requests for more security at Trump events - The Washington Post",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9uYXRpb24vMjAyNC8wNy8yMC90cnVtcC1zZWNyZXQtc2VydmljZS1zZWN1cml0eS1hdHRlbXB0ZWQtYXNzYXNzaW5hdGlvbi_SAQA?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-21T04:40:06Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "New York Post ",
      title:
        "Chicago mail carrier Octavia Redmond killed on her route in broad daylight: ‘Shattered’ - New York Post ",
      description: null,
      url: "https://news.google.com/rss/articles/CBMie2h0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA3LzIwL3VzLW5ld3MvY2hpY2Fnby1tYWlsLWNhcnJpZXItb2N0YXZpYS1yZWRtb25kLWtpbGxlZC1vbi1oZXItcm91dGUtaW4tYnJvYWQtZGF5bGlnaHQtc2hhdHRlcmVkL9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-21T03:41:00Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "CBS Sports",
      title:
        "WNBA All-Star Game 2024: Caitlin Clark dishes no-look pass to Angel Reese as rookies shine in Team WNBA win - CBS Sports",
      description: null,
      url: "https://news.google.com/rss/articles/CBMijwFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL3duYmEvbmV3cy93bmJhLWFsbC1zdGFyLWdhbWUtMjAyNC1jYWl0bGluLWNsYXJrLWRpc2hlcy1uby1sb29rLXBhc3MtdG8tYW5nZWwtcmVlc2UtYXMtcm9va2llcy1zaGluZS1pbi10ZWFtLXduYmEtd2luL9IBkwFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL3duYmEvbmV3cy93bmJhLWFsbC1zdGFyLWdhbWUtMjAyNC1jYWl0bGluLWNsYXJrLWRpc2hlcy1uby1sb29rLXBhc3MtdG8tYW5nZWwtcmVlc2UtYXMtcm9va2llcy1zaGluZS1pbi10ZWFtLXduYmEtd2luL2FtcC8?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-21T03:28:53Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "CNN",
      title:
        "At least 3 killed and 87 injured, Houthis say, as Israeli airstrikes hit Yemen day after Tel Aviv drone attack - CNN",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiV2h0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNy8yMC9taWRkbGVlYXN0L3llbWVuLWlzcmFlbC1zdHJpa2VzLWhvZGVpZGFoLWludGwvaW5kZXguaHRtbNIBUGh0dHBzOi8vYW1wLmNubi5jb20vY25uLzIwMjQvMDcvMjAvbWlkZGxlZWFzdC95ZW1lbi1pc3JhZWwtc3RyaWtlcy1ob2RlaWRhaC1pbnRs?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-21T03:23:00Z",
      content: null,
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        "Airlines, government and businesses rush to get back on track after global tech disruption - CBS News",
      description:
        "Microsoft said 8.5 million devices running its Windows operating system were affected by the outage that affected consumers and businesses across the globe.",
      url: "https://www.cbsnews.com/news/microsoft-crowdstrike-outage-airlines-government-businesses-rush-to-get-back-on-track/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2024/07/21/d986cb21-dedd-4af4-88e4-e214ea9d722e/thumbnail/1200x630/baeec04e676e789472fad52d0af54c6a/gettyimages-2162752608.jpg?v=5710b2ed1cee1bdfd30cb9c02455b43d",
      publishedAt: "2024-07-21T02:46:00Z",
      content:
        "Transport providers, businesses, hospitals and governments on Saturday are rushing to get all their systems back online after long disruptions following a widespread technology outage.\r\nThe biggest c… [+10909 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Bangladesh Cops Given Shoot-On-Sight Orders Amid Curfew To Quell Student Protests - NDTV",
      description:
        'Soldiers patrolled the streets of Bangladesh to quell growing civil unrest sparked by student demonstrations, with the police being granted "shoot-on-sight" orders for those defying curfew.',
      url: "https://www.ndtv.com/world-news/bangladesh-cops-given-shoot-on-sight-orders-amid-curfew-to-quell-student-protests-6151870",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/g3hoga28_bangladesh-protests-reuters-_625x300_20_July_24.jpg",
      publishedAt: "2024-07-21T02:26:24Z",
      content:
        "<li>This week's violence has killed at least 133 people so far, posing a monumental challenge to Prime Minister Sheikh Hasina's autocratic government after 15 years in office. Ms Hasina had been due … [+1991 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "NBC News",
      title:
        "'Ludicrous': Donors leave call with Kamala Harris frustrated and annoyed - NBC News",
      description: null,
      url: "https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL3BvbGl0aWNzLzIwMjQtZWxlY3Rpb24vbHVkaWNyb3VzLWRvbm9ycy1sZWF2ZS1jYWxsLWhhcnJpcy1mcnVzdHJhdGVkLWFubm95ZWQtcmNuYTE2Mjg3N9IBK2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3MvYW1wL3JjbmExNjI4Nzc?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-21T02:04:00Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Deadline",
      title:
        "Richard Simmons’ Team Shares His Final Prepared Social Media Post 1 Week After Death - Deadline",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vZGVhZGxpbmUuY29tLzIwMjQvMDcvcmljaGFyZC1zaW1tb25zLXRlYW0tc2hhcmVzLWZpbmFsLXByZXBhcmVkLXNvY2lhbC1tZWRpYS1wb3N0LTEyMzYwMTY3NjQv0gFpaHR0cHM6Ly9kZWFkbGluZS5jb20vMjAyNC8wNy9yaWNoYXJkLXNpbW1vbnMtdGVhbS1zaGFyZXMtZmluYWwtcHJlcGFyZWQtc29jaWFsLW1lZGlhLXBvc3QtMTIzNjAxNjc2NC9hbXAv?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-21T01:59:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Liz Kocan",
      title:
        "How to watch the Jake Paul vs. Mike Perry fight tonight: Full card, where to stream for less and more - Yahoo Sports",
      description:
        "Problem Child Jake Paul heads into the ring with Mike Perry this weekend –here's what to know and how to watch.",
      url: "https://sports.yahoo.com/how-to-watch-the-jake-paul-vs-mike-perry-fight-tonight-full-card-where-to-stream-for-less-and-more-160545415.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/UNmw4wgNnziE8Nl_5T0XFQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://s.yimg.com/os/creatr-uploaded-images/2024-07/96a8f9a0-4455-11ef-b7ef-c72e1348fa17",
      publishedAt: "2024-07-21T01:56:00Z",
      content:
        "Jake Paul will face Mike Perry in the ring this Saturday. (Alex Menendez/Getty Images)\r\nJake Paul will be boxing Mike Perry in an eight-round cruiserweight contest on Saturday, July 20 at the Amalie … [+2793 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Reuters.com",
      title:
        "Trump mocks Democrats, insults Pelosi, in first campaign rally since assassination attempt - Reuters.com",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VzL3RydW1wLWhvbGQtZmlyc3QtY2FtcGFpZ24tcmFsbHktYWZ0ZXItYXNzYXNzaW5hdGlvbi1hdHRlbXB0LTIwMjQtMDctMjAv0gEA?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-21T00:56:00Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "NASA’s Curiosity rover makes ‘mind-blowing’ discovery on Mars - New York Post ",
      description: null,
      url: "https://consent.google.com/m",
      urlToImage: null,
      publishedAt: "2024-07-21T00:38:00Z",
      content:
        "We use cookies and data to\r\n<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to un… [+1139 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "CBS New York",
      title:
        "At least 7 in New York sickened in listeria outbreak linked to deli meats. Map shows number of cases across U.S. - CBS New York",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiRmh0dHBzOi8vd3d3LmNic25ld3MuY29tL25ld3lvcmsvbmV3cy9saXN0ZXJpYS1vdXRicmVhay1ueWMtZGVsaS1tZWF0cy_SAUpodHRwczovL3d3dy5jYnNuZXdzLmNvbS9hbXAvbmV3eW9yay9uZXdzL2xpc3RlcmlhLW91dGJyZWFrLW55Yy1kZWxpLW1lYXRzLw?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-21T00:30:29Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "WKRC TV Cincinnati",
      title:
        "72-year-old man attacked by grizzly bear while picking huckleberries alone - WKRC TV Cincinnati",
      description: null,
      url: "https://news.google.com/rss/articles/CBMinwJodHRwczovL2xvY2FsMTIuY29tL25ld3MvbmF0aW9uLXdvcmxkLzcyLXllYXItb2xkLW1hbi1hdHRhY2tlZC1ieS1ncml6emx5LWJlYXItd2hpbGUtcGlja2luZy1odWNrbGViZXJyaWVzLWFsb25lLWNpbmNpbm5hdGktZW5kYW5nZXJlZC1zcGVjaWVzLWFjdC1maXNoLXdpbGRsaWZlLXBhcmtzLXByb3RlY3QtY3Vicy1mYWNpbGl0aWVzLXF1YWxpZmllZC1jb2x1bWJpYS1mYWxscy1ub3J0aHdlc3QtY29uZGl0aW9uLXVucmVsZWFzZWQtdmljdGltLW5hdGlvbmFsLWZvcmVzdC1sYW5kLWFkdWx0LWZlbWFsZdIBowJodHRwczovL2xvY2FsMTIuY29tL2FtcC9uZXdzL25hdGlvbi13b3JsZC83Mi15ZWFyLW9sZC1tYW4tYXR0YWNrZWQtYnktZ3JpenpseS1iZWFyLXdoaWxlLXBpY2tpbmctaHVja2xlYmVycmllcy1hbG9uZS1jaW5jaW5uYXRpLWVuZGFuZ2VyZWQtc3BlY2llcy1hY3QtZmlzaC13aWxkbGlmZS1wYXJrcy1wcm90ZWN0LWN1YnMtZmFjaWxpdGllcy1xdWFsaWZpZWQtY29sdW1iaWEtZmFsbHMtbm9ydGh3ZXN0LWNvbmRpdGlvbi11bnJlbGVhc2VkLXZpY3RpbS1uYXRpb25hbC1mb3Jlc3QtbGFuZC1hZHVsdC1mZW1hbGU?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-21T00:18:27Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "GSMArena.com",
      title:
        "Weekly poll results: the Samsung Galaxy Z Fold6 and Z Flip6 are too pricey - GSMArena.com news - GSMArena.com",
      description: null,
      url: "https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LmdzbWFyZW5hLmNvbS93ZWVrbHlfcG9sbF9yZXN1bHRzX3RoZV9zYW1zdW5nX2dhbGF4eV96X2ZvbGQ2X2FuZF96X2ZsaXA2X2FyZV90b29fcHJpY2V5LW5ld3MtNjM3NjYucGhw0gFuaHR0cHM6Ly9tLmdzbWFyZW5hLmNvbS93ZWVrbHlfcG9sbF9yZXN1bHRzX3RoZV9zYW1zdW5nX2dhbGF4eV96X2ZvbGQ2X2FuZF96X2ZsaXA2X2FyZV90b29fcHJpY2V5LWFtcC02Mzc2Ni5waHA?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-20T23:31:01Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "NBC News",
      title:
        "Cold case arrest made in Florida woman's killing nearly 25 years later - NBC News",
      description: null,
      url: "https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3MvdXMtbmV3cy9jb2xkLWNhc2UtYXJyZXN0LW1hZGUtZmxvcmlkYS13b21hbnMta2lsbGluZy1uZWFybHktMjUteWVhcnMtbGF0ZXItcmNuYTE2Mjg1NdIBK2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3MvYW1wL3JjbmExNjI4NTU?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-20T22:52:15Z",
      content: null,
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Dawn White",
      title:
        "Church members grieve massive fire at historic First Baptist Dallas sanctuary - CBS News",
      description:
        "The sight of devastation and the smell of smoke remains outside First Baptist Dallas, one day after a four-alarm fire tore through the original sanctuary.",
      url: "https://www.cbsnews.com/texas/news/church-members-continue-to-grieve-massive-fire-at-historic-first-baptist-dallas-sanctuary/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2024/07/20/0140c400-e6e0-463b-b574-a3ff7b5125ed/thumbnail/1200x630/13748ab6ed34b8c5d5b391d7c6272a27/fire.png?v=5710b2ed1cee1bdfd30cb9c02455b43d",
      publishedAt: "2024-07-20T22:37:00Z",
      content:
        "DALLAS  Heartbreak and grief continue for a Dallas church congregation after a massive fire destroyed their historic sanctuary late Friday.\r\nThe sight of devastation and the smell of smoke remained o… [+2650 chars]",
    },
    {
      source: {
        id: null,
        name: "The Texas Tribune",
      },
      author: "By Dante Motley",
      title:
        "After U.S. Rep. Sheila Jackson Lee’s death, Texas Democrats have to find a new candidate for November - The Texas Tribune",
      description:
        "To fill her seat for the remainder of the current term, Gov. Greg Abbott would have to call a special election for the Houston-based district.",
      url: "https://www.texastribune.org/2024/07/20/sheila-jackson-lee-congressional-seat/",
      urlToImage:
        "https://thumbnails.texastribune.org/-AaJ2dPMjUpED4fOv49Wkj2GfMY=/1200x630/filters:quality(95):focal(0x547:3000x2000)/static.texastribune.org/media/files/229dad88aac50fc6ddfd42d954a4aac7/US%20Capitol%20REUTERS%20TT%2013.jpg",
      publishedAt: "2024-07-20T22:30:20Z",
      content:
        "Were testing using AI-powered tools to provide an audio version of this story. While this audio recording is machine-generated, the story was written by human journalists. Read more on our AI policy.… [+3591 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "GameSpot",
      title:
        "22 Minutes of Warframe 1999 Gameplay Demo | Tennocon 2024 - GameSpot",
      description: null,
      url: "https://news.google.com/rss/articles/CCAiCzRLMjdkU2lrakM0mAEB?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-20T22:21:30Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Entertainment Tonight",
      title:
        "Country Singer Rory Feek Marries His Daughter's Teacher 8 Years After the Death of His Wife Joey - Entertainment Tonight",
      description: null,
      url: "https://news.google.com/rss/articles/CBMieGh0dHBzOi8vd3d3LmV0b25saW5lLmNvbS9jb3VudHJ5LXNpbmdlci1yb3J5LWZlZWstbWFycmllcy1oaXMtZGF1Z2h0ZXJzLXRlYWNoZXItOC15ZWFycy1hZnRlci10aGUtZGVhdGgtb2YtaGlzLXdpZmUtam9ledIBfGh0dHBzOi8vd3d3LmV0b25saW5lLmNvbS9jb3VudHJ5LXNpbmdlci1yb3J5LWZlZWstbWFycmllcy1oaXMtZGF1Z2h0ZXJzLXRlYWNoZXItOC15ZWFycy1hZnRlci10aGUtZGVhdGgtb2YtaGlzLXdpZmUtam9leT9hbXA?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-20T22:18:00Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Al Jazeera English",
      title:
        "‘Torn up bodies’: Israel intensifies bombing campaign in Gaza - Al Jazeera English",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3LmFsamF6ZWVyYS5jb20vbmV3cy8yMDI0LzcvMjAvdG9ybi11cC1ib2RpZXMtaXNyYWVsLWludGVuc2lmaWVzLWJvbWJpbmctY2FtcGFpZ24taW4tZ2F6YdIBZ2h0dHBzOi8vd3d3LmFsamF6ZWVyYS5jb20vYW1wL25ld3MvMjAyNC83LzIwL3Rvcm4tdXAtYm9kaWVzLWlzcmFlbC1pbnRlbnNpZmllcy1ib21iaW5nLWNhbXBhaWduLWluLWdhemE?oc=5",
      urlToImage: null,
      publishedAt: "2024-07-20T21:40:54Z",
      content: null,
    },
  ];

  constructor() {
    super();
    this.state = {
        article: this.article,
        loading: false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
        </div>
      </div>
    );
  }
}
