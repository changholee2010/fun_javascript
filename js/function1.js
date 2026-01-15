const jsonData1 = `[{"id":1,"first_name":"Hazel","last_name":"Father","email":"hfather0@noaa.gov","gender":"Female","salary":14276},
{"id":2,"first_name":"Klement","last_name":"Lamble","email":"klamble1@istockphoto.com","gender":"Male","salary":12812},
{"id":3,"first_name":"Tommy","last_name":"Normanville","email":"tnormanville2@blog.com","gender":"Female","salary":17923},
{"id":4,"first_name":"Reina","last_name":"Huison","email":"rhuison3@nps.gov","gender":"Female","salary":17514},
{"id":5,"first_name":"Lindon","last_name":"Fruser","email":"lfruser4@t.co","gender":"Male","salary":5431},
{"id":6,"first_name":"Celina","last_name":"Bortoloni","email":"cbortoloni5@si.edu","gender":"Female","salary":9820},
{"id":7,"first_name":"Hattie","last_name":"Vamplus","email":"hvamplus6@vimeo.com","gender":"Female","salary":17378},
{"id":8,"first_name":"Rosalynd","last_name":"Rawet","email":"rrawet7@digg.com","gender":"Female","salary":19396},
{"id":9,"first_name":"Marget","last_name":"McAuslene","email":"mmcauslene8@cyberchimps.com","gender":"Female","salary":9701},
{"id":10,"first_name":"Harlene","last_name":"Brobeck","email":"hbrobeck9@bloglines.com","gender":"Female","salary":19950},
{"id":11,"first_name":"Vilhelmina","last_name":"Guinness","email":"vguinnessa@blogs.com","gender":"Female","salary":19988},
{"id":12,"first_name":"Sibbie","last_name":"Rodder","email":"srodderb@dagondesign.com","gender":"Female","salary":19299},
{"id":13,"first_name":"Jenifer","last_name":"Getch","email":"jgetchc@google.ru","gender":"Female","salary":8290},
{"id":14,"first_name":"Odessa","last_name":"Maxfield","email":"omaxfieldd@uol.com.br","gender":"Female","salary":11501},
{"id":15,"first_name":"Corbett","last_name":"Farquharson","email":"cfarquharsone@ca.gov","gender":"Male","salary":18694},
{"id":16,"first_name":"Kate","last_name":"Ovendon","email":"kovendonf@ihg.com","gender":"Female","salary":9066},
{"id":17,"first_name":"Emlyn","last_name":"Girardet","email":"egirardetg@rediff.com","gender":"Male","salary":2369},
{"id":18,"first_name":"Zollie","last_name":"O'Donnell","email":"zodonnellh@friendfeed.com","gender":"Male","salary":9489},
{"id":19,"first_name":"Bartolomeo","last_name":"Spencer","email":"bspenceri@dailymail.co.uk","gender":"Male","salary":6895},
{"id":20,"first_name":"Maurie","last_name":"Critten","email":"mcrittenj@addthis.com","gender":"Male","salary":10236},
{"id":21,"first_name":"Alberik","last_name":"Mortimer","email":"amortimerk@ezinearticles.com","gender":"Male","salary":4031},
{"id":22,"first_name":"Chrystal","last_name":"Falconbridge","email":"cfalconbridgel@freewebs.com","gender":"Female","salary":5859},
{"id":23,"first_name":"Katinka","last_name":"Zoanetti","email":"kzoanettim@aboutads.info","gender":"Female","salary":5997},
{"id":24,"first_name":"Rogers","last_name":"Cornils","email":"rcornilsn@samsung.com","gender":"Non-binary","salary":10440},
{"id":25,"first_name":"Giordano","last_name":"Agates","email":"gagateso@sourceforge.net","gender":"Male","salary":13866},
{"id":26,"first_name":"Inglebert","last_name":"Keetley","email":"ikeetleyp@webeden.co.uk","gender":"Polygender","salary":18291},
{"id":27,"first_name":"Flore","last_name":"Paniman","email":"fpanimanq@github.io","gender":"Female","salary":17838},
{"id":28,"first_name":"Aldon","last_name":"Carr","email":"acarrr@army.mil","gender":"Male","salary":13974},
{"id":29,"first_name":"Marven","last_name":"Occleshaw","email":"moccleshaws@netvibes.com","gender":"Male","salary":14586},
{"id":30,"first_name":"Hammad","last_name":"Clowney","email":"hclowneyt@soup.io","gender":"Male","salary":8859},
{"id":31,"first_name":"Issi","last_name":"Caustick","email":"icausticku@rediff.com","gender":"Female","salary":15821},
{"id":32,"first_name":"Garrek","last_name":"Rewan","email":"grewanv@youtu.be","gender":"Male","salary":12512},
{"id":33,"first_name":"Terrence","last_name":"Woodthorpe","email":"twoodthorpew@hao123.com","gender":"Male","salary":6572},
{"id":34,"first_name":"Bent","last_name":"Midgley","email":"bmidgleyx@washington.edu","gender":"Male","salary":8031},
{"id":35,"first_name":"Cecil","last_name":"Lockyer","email":"clockyery@deviantart.com","gender":"Female","salary":9723},
{"id":36,"first_name":"Edythe","last_name":"Waind","email":"ewaindz@vimeo.com","gender":"Female","salary":11346},
{"id":37,"first_name":"Gal","last_name":"Nelius","email":"gnelius10@theguardian.com","gender":"Male","salary":10078},
{"id":38,"first_name":"Obie","last_name":"Sorensen","email":"osorensen11@squarespace.com","gender":"Male","salary":5399},
{"id":39,"first_name":"Sibyl","last_name":"Thurgood","email":"sthurgood12@github.com","gender":"Male","salary":15977},
{"id":40,"first_name":"Violante","last_name":"Saffe","email":"vsaffe13@angelfire.com","gender":"Female","salary":9897},
{"id":41,"first_name":"Dorris","last_name":"Birchill","email":"dbirchill14@moonfruit.com","gender":"Female","salary":19709},
{"id":42,"first_name":"Sisile","last_name":"Maseres","email":"smaseres15@mit.edu","gender":"Female","salary":19505},
{"id":43,"first_name":"Ty","last_name":"Renault","email":"trenault16@icio.us","gender":"Male","salary":3367},
{"id":44,"first_name":"Peta","last_name":"Winscom","email":"pwinscom17@e-recht24.de","gender":"Female","salary":2028},
{"id":45,"first_name":"Editha","last_name":"Bellis","email":"ebellis18@pinterest.com","gender":"Female","salary":2613},
{"id":46,"first_name":"Pansie","last_name":"Ingles","email":"pingles19@privacy.gov.au","gender":"Female","salary":6406},
{"id":47,"first_name":"Richard","last_name":"Spyby","email":"rspyby1a@php.net","gender":"Male","salary":16880},
{"id":48,"first_name":"Shamus","last_name":"Filipic","email":"sfilipic1b@instagram.com","gender":"Male","salary":10578},
{"id":49,"first_name":"Renee","last_name":"Sapsforde","email":"rsapsforde1c@nhs.uk","gender":"Female","salary":15092},
{"id":50,"first_name":"Pia","last_name":"Karlowicz","email":"pkarlowicz1d@sina.com.cn","gender":"Female","salary":3278},
{"id":51,"first_name":"Siusan","last_name":"Deane","email":"sdeane1e@dailymotion.com","gender":"Female","salary":16733},
{"id":52,"first_name":"Pail","last_name":"D'Oyley","email":"pdoyley1f@guardian.co.uk","gender":"Male","salary":13905},
{"id":53,"first_name":"Lothaire","last_name":"Cockrem","email":"lcockrem1g@goo.gl","gender":"Male","salary":15312},
{"id":54,"first_name":"Katerina","last_name":"Tidgewell","email":"ktidgewell1h@businessweek.com","gender":"Female","salary":11389},
{"id":55,"first_name":"Kellia","last_name":"Finey","email":"kfiney1i@stanford.edu","gender":"Female","salary":17272},
{"id":56,"first_name":"Raphael","last_name":"Woolland","email":"rwoolland1j@cam.ac.uk","gender":"Male","salary":18619},
{"id":57,"first_name":"Penelope","last_name":"Assur","email":"passur1k@blogspot.com","gender":"Female","salary":7244},
{"id":58,"first_name":"Freddie","last_name":"Chopy","email":"fchopy1l@soundcloud.com","gender":"Female","salary":2608},
{"id":59,"first_name":"Latia","last_name":"Naptine","email":"lnaptine1m@joomla.org","gender":"Female","salary":4960},
{"id":60,"first_name":"Linn","last_name":"Irce","email":"lirce1n@illinois.edu","gender":"Male","salary":6679},
{"id":61,"first_name":"Gae","last_name":"Egell","email":"gegell1o@virginia.edu","gender":"Female","salary":17712},
{"id":62,"first_name":"Farly","last_name":"Shotboulte","email":"fshotboulte1p@ucla.edu","gender":"Male","salary":10858},
{"id":63,"first_name":"Barthel","last_name":"Ettles","email":"bettles1q@bing.com","gender":"Male","salary":6538},
{"id":64,"first_name":"Thomasa","last_name":"Yearsley","email":"tyearsley1r@apple.com","gender":"Female","salary":2070},
{"id":65,"first_name":"Shaine","last_name":"Berthomieu","email":"sberthomieu1s@homestead.com","gender":"Male","salary":19219},
{"id":66,"first_name":"Reeva","last_name":"Laffling","email":"rlaffling1t@walmart.com","gender":"Female","salary":13726},
{"id":67,"first_name":"Merralee","last_name":"Tibbotts","email":"mtibbotts1u@rakuten.co.jp","gender":"Female","salary":13486},
{"id":68,"first_name":"Lelah","last_name":"Jillis","email":"ljillis1v@dell.com","gender":"Female","salary":15030},
{"id":69,"first_name":"Othilia","last_name":"Brazur","email":"obrazur1w@smh.com.au","gender":"Agender","salary":12121},
{"id":70,"first_name":"Letty","last_name":"Caruth","email":"lcaruth1x@tinyurl.com","gender":"Female","salary":10336},
{"id":71,"first_name":"Malvin","last_name":"Diplock","email":"mdiplock1y@youku.com","gender":"Male","salary":8009},
{"id":72,"first_name":"Sophronia","last_name":"Peyzer","email":"speyzer1z@wordpress.org","gender":"Female","salary":18031},
{"id":73,"first_name":"Alecia","last_name":"Bickerstasse","email":"abickerstasse20@last.fm","gender":"Female","salary":16899},
{"id":74,"first_name":"Phineas","last_name":"Harbard","email":"pharbard21@google.es","gender":"Male","salary":19532},
{"id":75,"first_name":"Kiri","last_name":"Strathern","email":"kstrathern22@reverbnation.com","gender":"Female","salary":12066},
{"id":76,"first_name":"Broderic","last_name":"Murthwaite","email":"bmurthwaite23@cnbc.com","gender":"Male","salary":9644},
{"id":77,"first_name":"Marcos","last_name":"Laurencot","email":"mlaurencot24@infoseek.co.jp","gender":"Male","salary":5842},
{"id":78,"first_name":"Dela","last_name":"Whotton","email":"dwhotton25@guardian.co.uk","gender":"Female","salary":19382},
{"id":79,"first_name":"Edin","last_name":"Stood","email":"estood26@jugem.jp","gender":"Non-binary","salary":3134},
{"id":80,"first_name":"Leslie","last_name":"Sturridge","email":"lsturridge27@apache.org","gender":"Male","salary":7879},
{"id":81,"first_name":"Temple","last_name":"De Gregoli","email":"tdegregoli28@cbc.ca","gender":"Male","salary":3632},
{"id":82,"first_name":"Lilly","last_name":"Ludman","email":"lludman29@furl.net","gender":"Female","salary":10693},
{"id":83,"first_name":"Deeann","last_name":"Dot","email":"ddot2a@cyberchimps.com","gender":"Female","salary":8570},
{"id":84,"first_name":"Aida","last_name":"Salla","email":"asalla2b@shutterfly.com","gender":"Female","salary":7319},
{"id":85,"first_name":"Zeb","last_name":"Giacopelo","email":"zgiacopelo2c@craigslist.org","gender":"Male","salary":4233},
{"id":86,"first_name":"Armando","last_name":"Robardet","email":"arobardet2d@yellowbook.com","gender":"Male","salary":19809},
{"id":87,"first_name":"Joann","last_name":"Klampk","email":"jklampk2e@house.gov","gender":"Female","salary":12271},
{"id":88,"first_name":"Adey","last_name":"Dightham","email":"adightham2f@diigo.com","gender":"Female","salary":10706},
{"id":89,"first_name":"Brandyn","last_name":"Culbard","email":"bculbard2g@amazon.de","gender":"Male","salary":11268},
{"id":90,"first_name":"Ofilia","last_name":"Ferrandez","email":"oferrandez2h@tripod.com","gender":"Female","salary":14391},
{"id":91,"first_name":"Andree","last_name":"Talks","email":"atalks2i@google.com.au","gender":"Female","salary":6548},
{"id":92,"first_name":"Son","last_name":"Senussi","email":"ssenussi2j@vk.com","gender":"Male","salary":9825},
{"id":93,"first_name":"Feodor","last_name":"Gontier","email":"fgontier2k@slashdot.org","gender":"Male","salary":17202},
{"id":94,"first_name":"Aloisia","last_name":"Feldmesser","email":"afeldmesser2l@ezinearticles.com","gender":"Female","salary":14833},
{"id":95,"first_name":"Sukey","last_name":"Jeary","email":"sjeary2m@businessweek.com","gender":"Female","salary":4634},
{"id":96,"first_name":"Vladamir","last_name":"Renihan","email":"vrenihan2n@about.me","gender":"Male","salary":9235},
{"id":97,"first_name":"Arnold","last_name":"De Ruggero","email":"aderuggero2o@accuweather.com","gender":"Male","salary":11480},
{"id":98,"first_name":"Roberta","last_name":"Hukin","email":"rhukin2p@yahoo.com","gender":"Female","salary":12589},
{"id":99,"first_name":"Kacie","last_name":"Standbrooke","email":"kstandbrooke2q@wikimedia.org","gender":"Female","salary":9196},
{"id":100,"first_name":"Dennis","last_name":"Tidder","email":"dtidder2r@ted.com","gender":"Male","salary":16436}]`;

// 합계, 평균.....구하는 함수.
function getMemberInfo(memberAry) {
  let sum = 0; // memberAry급여 합.
  let sumOfMale = 0; // Gender가 'Male'인 합계.
  let avg = 0; // 전체평균.
  let avgOfMale = 0; // 남자평균.
  let cntOfMale = 0; // 남자인원.

  for (let elem of memberAry) {
    sum += elem.salary; // 전체합계.
    if (elem.gender == "Male") {
      sumOfMale += elem.salary;
      cntOfMale++; // 남자 몇명인지 카운트.
    }
  }
  avg = sum / memberAry.length; // 전체평균.
  avgOfMale = sumOfMale / cntOfMale; // 남자평균.

  // 객체.
  return {
    sum,
    sumOfMale,
    avg,
    avgOfMale,
  };
} // end of getMemberInfo()

const ary1 = JSON.parse(jsonData1);
let result = getMemberInfo(ary1);

console.log(
  `전체 급여합계는 ${result.sum}
  , 전체 평균급여는 ${result.avg}
  , 남자 합계급여는 ${result.sumOfMale}
  , 남자 평균급여는 ${result.avgOfMale}`
);

let jsonStr = `{"name": "Hong", "age": 20, "weight": 67}`;
let obj = JSON.parse(jsonStr); // 문자열 => 객체.
let jsonStr2 = JSON.stringify(obj); // 객체 => 문자열.

console.log(jsonStr);
console.log(obj);
console.log(jsonStr2);
