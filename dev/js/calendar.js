let calendarEl = document.getElementById('calendar');

const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  events: [
    {
      start: '2025-08-04',
      extendedProps: {
        homeLogo: '/images/75a31dc79507ffc704ea253868f91aa0-p9a-Zbzd.webp',
        awayLogo: '/images/9f01a91fb8263c0e893c95e38562df57-DGcQmgp4.png',
        homeShort: 'bar',
        awayShort: 'dor',
        time: '2 : 0',
        matchUrl: '#'
      }
    },
       {
      start: '2025-08-04',
      extendedProps: {
        homeLogo: '/images/75a31dc79507ffc704ea253868f91aa0-p9a-Zbzd.webp',
        awayLogo: '/images/9f01a91fb8263c0e893c95e38562df57-DGcQmgp4.png',
        homeShort: 'bar',
        awayShort: 'dor',
        time: '2 : 0',
        matchUrl: '#'
      }
    },
  ],
  eventContent: function (arg) {
    const { homeLogo, awayLogo, homeShort, awayShort, time, matchUrl } = arg.event.extendedProps;

    return {
      html: `
        <div class="event-wrapper">
          <div class="event-top">
            <a href="${matchUrl}"  class="team">
              <img src="${homeLogo}" alt="${homeShort}" class="team-logo" />
              <div class="team-code">${homeShort}</div>
            </a>
            <div class="time">${time}</div>
            <a href="${matchUrl}" class="team">
              <img src="${awayLogo}" alt="${awayShort}" class="team-logo" />
              <div class="team-code">${awayShort}</div>
            </a>
          </div>
          <div class="event-bottom">
            <a href="${matchUrl}" class="match-center-btn">Match center</a>
          </div>
        </div>
      `
    };
  }
});

calendar.render();
