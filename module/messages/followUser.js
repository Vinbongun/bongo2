const getHtml = require("../getHtml");

const cookies = [
  {
    domain: ".bongamodels.com",
    expirationDate: 1677759951,
    hostOnly: false,
    httpOnly: false,
    name: "__zlcmid",
    path: "/",
    sameSite: "lax",
    secure: false,
    session: false,
    storeId: "0",
    value: "18nkkGiHfw1FrjV",
    id: 1,
  },
  {
    domain: ".bongamodels.com",
    hostOnly: false,
    httpOnly: false,
    name: "bm_cfs",
    path: "/",
    sameSite: "unspecified",
    secure: true,
    session: true,
    storeId: "0",
    value: "1",
    id: 2,
  },
  {
    domain: ".bongamodels.com",
    hostOnly: false,
    httpOnly: false,
    name: "bmcaw",
    path: "/",
    sameSite: "unspecified",
    secure: true,
    session: true,
    storeId: "0",
    value: "1",
    id: 3,
  },
  {
    domain: ".bongamodels.com",
    expirationDate: 1658863113.764823,
    hostOnly: false,
    httpOnly: true,
    name: "BONGA_REF",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "https%3A%2F%2Fwww.google.com%2F",
    id: 4,
  },
  {
    domain: ".bongamodels.com",
    hostOnly: false,
    httpOnly: true,
    name: "bonga20120608",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: true,
    storeId: "0",
    value: "d9fe23fc60c6566436569adb8126f1a8",
    id: 5,
  },
  {
    domain: ".bongamodels.com",
    hostOnly: false,
    httpOnly: false,
    name: "epc",
    path: "/",
    sameSite: "unspecified",
    secure: true,
    session: true,
    storeId: "0",
    value: "1650117250.804",
    id: 6,
  },
  {
    domain: ".bongamodels.com",
    hostOnly: false,
    httpOnly: false,
    name: "expm",
    path: "/",
    sameSite: "unspecified",
    secure: true,
    session: true,
    storeId: "0",
    value: "top_area",
    id: 7,
  },
  {
    domain: ".bongamodels.com",
    expirationDate: 1676753972.421454,
    hostOnly: false,
    httpOnly: false,
    name: "fv",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "Zmp5AmRlAGD2ZD==",
    id: 8,
  },
  {
    domain: ".bongamodels.com",
    expirationDate: 1674847113.76485,
    hostOnly: false,
    httpOnly: false,
    name: "reg_ver2",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "3",
    id: 9,
  },
  {
    domain: ".bongamodels.com",
    expirationDate: 1676754675.80984,
    hostOnly: false,
    httpOnly: false,
    name: "sg",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value: "885",
    id: 10,
  },
  {
    domain: ".bongamodels.com",
    expirationDate: 1681730824.896305,
    hostOnly: false,
    httpOnly: false,
    name: "ts_type2",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "1",
    id: 11,
  },
  {
    domain: ".bongamodels.com",
    expirationDate: 1676753972.421469,
    hostOnly: false,
    httpOnly: false,
    name: "uh",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "LyAGFyb3FIp4GR9QZ1OeMmO0JSATpt==",
    id: 12,
  },
  {
    domain: ".bongamodels.com",
    expirationDate: 1677759317.746232,
    hostOnly: false,
    httpOnly: false,
    name: "warning18",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value: "%5B%22ru_RU%22%5D",
    id: 13,
  },
  {
    domain: "ru.bongamodels.com",
    hostOnly: true,
    httpOnly: false,
    name: "_saf_124047077",
    path: "/",
    sameSite: "unspecified",
    secure: true,
    session: true,
    storeId: "0",
    value: "872250febdb3bc8f79f5bd19b9a96c4a",
    id: 14,
  },
];

async function followUser(username, url) {
  const html = getHtml(
    `${url}profile/${username}`,
    cookies,
    false,
    false,
    false,
    true
  );
  return;
}

const start = async function () {
  const members = [
    {
      username: "Opel0707",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Hshshjajjxh",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Marel3232",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Fhvfgggfg456",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Hhstyhhfed",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Sss115555",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Trewor8",
      badge: "member_free",
      modelHref: "-ANN-",
    },
    {
      username: "Jugcd5yuba16",
      badge: "member_free",
      modelHref: "-ANN-",
    },
  ];

  for (const [i, value] of members.entries()) {
    await followUser(value.username, "https://ru.bongamodels.com/");
  }

  return;
};

start();
