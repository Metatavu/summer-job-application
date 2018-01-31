module.exports = {
  port: 80,
  server_root: '/',
  session_secret: 'supersiikret',
  mail: {
    api_key: '',
    domain: '',
    sender: 'kesatyo'
  },
  database: {
    host: 'localhost',
    table: 'sjapplication'
  },
  positions: [{
    department: 'Sivistyksen ja hyvinvoinnin palvelualue',
    jobs: [
      {name: 'Varhaiskasvatus, päivähoito', code: 'varhaiskasvatuspaivahoito'},
      {name: 'Kirjasto', code: 'kirjasto'},
      {name: 'Liikunta, ulkoilualueet, kentät, jäähalli', code: 'liikuntaulkoilualueetkentatjaahalli'},
      {name: 'Liikunta, uimakoulut ja urheilukoulut', code: 'liikuntauimakoulutjaurheilukoulut'},
      {name: 'Nuoriso', code: 'nuoriso'},
      {name: 'Museot', code: 'museot'},
      {name: 'Kulttuuri, näyttely-, tapahtuma- ja esiintyjätehtävät', code: 'kulttuurinayttelytapahtumajaesiintyjatehtavat'},
    ]
  }, {
    department: 'Asumisen ja toimintaympäristön palvelualue',
    jobs: [
      {name: 'Tilapalvelut, kiinteistöjen piha-alueet', code: 'tilapalvelutkiinteistojenpihaalueet'},
      {name: 'Viherpalvelut Hyvönen Oy, puisto- ja puhtaanapitotyöt/ keskustan alue', code: 'viherpalveluthyvonenoypuistojapuhtaanapitotyotkeskustanalue'},
      {name: 'YIT Rakennus Oy, Puisto- ja puhtaanapitotyöt', code: 'yitrakennusoypuistojapuhtaanapitotyot'},
    ]
  }, {
    department: 'Konserni- ja elinvoimapalveluiden palvelualue',
    jobs: [
      {name: 'Ympäristöpalvelut', code: 'ymparistopalvelut'},
      {name: 'Terveysvalvonta', code: 'terveysvalvonta'},
      {name: 'Opastustehtävät', code: 'opastustehtavat'},
      {name: 'Opastustehtävät / katujuna', code: 'opastustehtavatkatujuna'},
      {name: 'Pelastuslaitos, valmiuteen ja varautumiseen liittyvät tukitehtävät', code: 'pelastuslaitosvalmiuteenjavarautumiseenliittyvattukitehtavat'},
      {name: 'Ruoka- ja puhtauspalvelut', code: 'ruokajapuhtauspalvelut'},
      {name: 'Tukitehtävät (raivaus ym.)', code: 'tukitehtavatraivausym'},
      {name: 'Asiointipiste', code: 'asiointipiste'},
    ]
  }, { 
    department: 'Essote / peruspalvelutehtävät',
    jobs: [
      {name: 'Akuuttiosastot', code: 'akuuttiosastot'},
      {name: 'Terveyspalvelut', code: 'terveyspalvelut'},
      {name: 'Sosiaalipalvelut', code: 'sosiaalipalvelut'},
      {name: 'Vanhusten piristyspartiot', code: 'vanhustenpiristyspartiot'},
      {name: 'Vanhus- ja vammaispalvelut', code: 'vanhusjavammaispalvelut'},
      {name: 'Mielenterveys- ja päihdepalvelujen hallinto', code: 'mielenterveysjapaihdepalvelujenhallinto'},
      {name: 'Mielenterveys- ja päihdepalvelujen päivä- ja työtoiminta', code: 'mielenterveysjapaihdepalvelujenpaivajatyotoiminta'}
    ]
  }]
};