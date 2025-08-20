let calendarEl = document.getElementById('calendar');

const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  events: [
    {
      start: '2025-08-04',
      extendedProps: {
        homeLogo: '/images/66f35ab2800a6086bea703949dcb525d-DFfiyhXi.png',
        awayLogo: '/images/daf09a43cd9ac03a096244bba630c820-DKl5286n.png',
        homeShort: 'tol',
        awayShort: 'nan',
        time: '2 : 0',
        matchUrl: '#'
      }
    },
    {
      start: '2025-08-04',
      extendedProps: {
        homeLogo: '/images/66f35ab2800a6086bea703949dcb525d-DFfiyhXi.png',
        awayLogo: '/images/daf09a43cd9ac03a096244bba630c820-DKl5286n.png',
        homeShort: 'tol',
        awayShort: 'nan',
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
