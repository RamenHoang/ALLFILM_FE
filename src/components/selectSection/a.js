const cinemaData = [
  {
    id: 1,
    name: 'Mặt trời',
    address: 'Đà Nẵng',
    Sessions: [
      {
        id: 1,
        date: '2021-04-29',
        startTime: '2021-04-29 08:00:00'
      },
      {
        id: 10,
        date: '2021-04-29',
        startTime: '2021-04-29 10:00:00'
      },
      {
        id: 10,
        date: '2021-04-30',
        startTime: '2021-04-29 10:00:00'
      },
      {
        id: 10,
        date: '2021-05-01',
        startTime: '2021-04-29 10:00:00'
      }
    ]
  }
];

const sessionsGroupByDate = cinemaData[0].Sessions.reduce((sessionObject, currentSession) => {
  if (Array.isArray(sessionObject[currentSession.date])) {
    sessionObject[currentSession.date].push({
      id: currentSession.id,
      startTime: currentSession.startTime
    });

    return sessionObject;
  }

  sessionObject[currentSession.date] = [{
    id: currentSession.id,
    startTime: currentSession.startTime
  }];

  return sessionObject;
}, {});

cinemaData[0].Sessions = sessionsGroupByDate;



  {
    "id": 65,
    "bookingTime": "2021-05-22 11:17:33",
    "keepingTime": "2021-05-22 11:17:48",
    "fee": 60000,
    "seats": "J-9", "userId": 2,
    "sessionId": 25,
    "sessionRoomId": 7,
    "qrCode": null,
    "checkedOutAt": null,
    "createdAt": "2021-05-22 23:16:56",
    "updatedAt": "2021-05-22 23:16:56",
    "Session": {
      "startTime": "2021-04-29 10:00:00",
      "Cinema": { "name": "Trái Đất", "address": "Hà Nội" },
      "Room": { "name": "RAP1" }, 
      "Film": {
        "name": "Boss Level",
        "subName": "Trùm cuối siêu đẳng"
      }
    }
  },
  "status": 200,
    "statusText": "OK",
      "headers": { "content-length": "445", "content-type": "application/json; charset=utf-8" }, "config": { "url": "/booking", "method": "post", "data": "{\"bookingTime\":\"2021-05-22 11:17:33\",\"keepingTime\":\"2021-05-22 11:17:48\",\"seats\":\"J-9\",\"fee\":60000,\"sessionId\":25,\"sessionRoomId\":7,\"foodDrinks\":[]}", "headers": { "Accept": "application/json, text/plain, */*", "Content-Type": "application/json;charset=utf-8", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiUm9sZXMiOlt7InBlcm1pdGlvbiI6InciLCJlbnRpdHkiOiJ1c2VyIn0seyJwZXJtaXRpb24iOiJ3IiwiZW50aXR5IjoiZmlsbSJ9LHsicGVybWl0aW9uIjoidyIsImVudGl0eSI6InNjaGVkdWxlIn0seyJwZXJtaXRpb24iOiJ3IiwiZW50aXR5IjoicHJvbW90aW9uIn0seyJwZXJtaXRpb24iOiJ3IiwiZW50aXR5IjoiZm9vZF9kcmluayJ9XSwiaWF0IjoxNjIxNjk5Mzg5LCJleHAiOjE2MjE3MzUzODl9.__4yhWRu_pDYeciVKqFaVgSHRwau9b06yyW5qptRgps" }, "baseURL": "http://allfilm.mediadnnb.codes:5001/api/v1", "transformRequest": [null], "transformResponse": [null], "timeout": 10000, "xsrfCookieName": "XSRF-TOKEN", "xsrfHeaderName": "X-XSRF-TOKEN", "maxContentLength": -1, "maxBodyLength": -1 }, "request": { }