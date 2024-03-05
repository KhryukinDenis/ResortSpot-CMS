import { Category } from "../model/category";
import { City } from "../model/city";
import { Culture } from "../model/culture";
import { Entertainment } from "../model/entertainment";
import { Hotel } from "../model/hotel";
import { Nature } from "../model/nature";
import { Rest } from "../model/rest";
import { Room } from "../model/room";

export const Cities: City[] = [
  {
    id: 0,
    name: 'anapa',
    name_rus: 'Анапа'
  },
  {
    id: 1,
    name: 'novorossiysk',
    name_rus: 'Новороссийск'
  },
  {
    id: 2,
    name: 'kabardinka',
    name_rus: 'Кабардинка'
  },
  {
    id: 3,
    name: 'gelendzhik',
    name_rus: 'Геленджик'
  },
  {
    id: 4,
    name: 'divnomorskoe',
    name_rus: 'Дивноморское'
  },
  {
    id: 5,
    name: 'dzhubga',
    name_rus: 'Джубга'
  },
  {
    id: 6,
    name: 'tuapse',
    name_rus: 'Туапсе'
  },
  {
    id: 7,
    name: 'lazorevskoe',
    name_rus: 'Лазоревское'
  },
  {
    id: 8,
    name: 'sochi',
    name_rus: 'Сочи'
  },
  {
    id: 9,
    name: 'adler',
    name_rus: 'Адлер'
  }
];

export const Categories: Category[] = [
  {
    id: 0,
    name: 'hotel',
    name_rus: 'Отели'
  },
  {
    id: 1,
    name: 'nature',
    name_rus: 'Природа'
  },
  {
    id: 2,
    name: 'culture',
    name_rus: 'Культура'
  },
  {
    id: 3,
    name: 'entertainment',
    name_rus: 'Развлечения'
  }
];

export const Hotels: Hotel[] = [
  {
    id: 21,
    name: 'Сочи Парк Отель',
    address: 'ПГТ Сириус, Континентальный проспект, 6, корп.10',
    distanse_sea: 1.1,
    price: 4300,
    star: 3,
    description: 'Сочи Парк Отель находится в ....',
  },
  {
    id: 42,
    name: 'Cosmos Stay Le Rond Sochi',
    address: 'ПГТ Дагомыч, Ленинградская улица, 7А',
    distanse_sea: 0.8,
    price: 5525,
    star: 4,
    description: 'Современный апарт-отель Cosmos Stay Le Rond Sochi окружит гостей ...',
  },
];

export const Natures: Nature[] = [
  {
    id: 32,
    name: 'Дольмены Большого Сочи',
    description: 'Туристы приезжают в Сочи не только для того чтобы понежиться на солнышке и поплавать в лазурном море. В Сочи много интересных мест и достопримечательностей, которые поразят вас своей необычностью и историей. Особенно это касается природных достопримечательностей, водопадов, гор и дольменов. Про Дольмены стоит рассказать отдельно. Возможно не многих привлекают каменные монолиты, но именно вокруг них ходят интересные легенды и мифы. В Сочи насчитывается более 200 дольменов. Но до наших дней, в своем первозданном виде, сохранилось не много. До некоторых вы можете добраться самостоятельно. Если вы уже все переделали в Сочи: загорели. посмотрели достопримечательности в городе, посетили музеи и парки, то пора отправиться загород, чтобы разгадать тайны древних сооружений.',
    description_min: 'Дольмены — уникальные сооружения. Их вес достигает 70 тонн, при этом плиты соединены друг с другом без всяких зазоров. Относительно предназначения дольменов до сих пор ведутся споры, однако большинство ученых считают, что они были построены для захоронения древних людей. Многие дольмены по сей день хранят на своих стенах необычные рисунки и узоры, так что если хотите прочувствовать атмосферу древности, обязательно посетите этот памятник тысячелетий.',
  },
  {
    id: 89,
    name: 'Каньон Белые Скалы',
    description: 'Описание',
    description_min: 'Каньон существовал еще во времена юрского периода, когда по его склонам бродили динозавры. Огромные камни, водопад, скалы, обилие реликтовых растений — эту достопримечательность в окрестностях Сочи с невероятным размахом создала сама природа. Многие здешние растения занесены в красную книгу. Сразу в начале тропы вас встретит ягодный тис возрастом более 500 лет.',
  },
];

export const Cultures: Culture[] = [
  {
    id: 12,
    name: 'Морской вокзал',
    address: 'г. Сочи, улица Войкова, 1',
    description: 'Описание',
    description_min: 'Сочинский морвокзал не географически, но по смыслу — центральная точка южного города. Почти все маршруты автобусов имеют здесь остановки, а любой сочинец с радостью подскажет путь до него. Это не просто историческое здание ‒ большие круизные лайнеры регулярно заходят в местные воды. По трапу от этого красивейшего двухэтажного строения можно попасть на корабль, следующий прямиком в Грецию или Турцию, Португалию, или даже на Багамские острова.',
  },
  {
    id: 33,
    name: 'Сочинский маяк',
    address: 'г. Сочи, улица Приморская',
    description: 'Описание',
    description_min: 'Свет одного из старейших подобных сооружений юга России и всего Кавказского региона виден в море на расстоянии 32 километров. Сочинский маяк помогает мореплавателям держаться правильного курса почти 125 лет — с 1890 года! Он расположен на берегу, между Морским вокзалом и концертным залом Фестивальный, и найти его очень легко. В отличие от французской фирмы, которая изготовила необычный фонарь этого символа города. К его столетию пытались найти мастеров, следы компании, но попытки не увенчались успехом.',
  },
];

export const Entertainments: Entertainment[] = [
  {
    id: 4,
    name: 'Морская прогулка на яхте с купанием',
    time: '1 ч. 30 мин.',
    count_people: 10,
    price: 1600,
    description: '<em><strong>Сплав по горной реке Мзымта</strong></em> &mdash; это незабываемое путешествие для любителей активного отдыха. Это увлекательнейшее приключение, которое подарит море положительных эмоций, неповторимое ощущение полноты жизни и большую порцию адреналина. Вас ждет путь, насчитывающий 14 км.<br /><br /><strong>Что вас ждет:</strong><br /><br />В сопровождении опытных инструкторов вы совершите сплав на рафтах по бурной горной реке. На протяжении всего маршрута вас будут сопровождать потрясающей красоты дикая природа, отвесные скалы, дебри непроходимых лесов, захватывающие дух речные пороги, шум реки и прохладные брызги кристально чистой реки Мзымта.<br />Помимо бурной горной реки вы также увидите самое глубокое на причерноморском Кавказе ущелье Ахцу. Оно образовалось миллионы лет назад, когда скалы преградили путь реке Мзымте, но вода проложила в толще пород новое русло, сформировав узкое ущелье среди отрогов горного хребта. Еще одно творение реки &mdash; Ахштырское ущелье, расположенное недалеко от Адлера. По своей живописности оно может посоперничать с каньонами Альп, Урала и Алтая. <br /><br /><strong>Цена:</strong><br /><br />Взрослый (11+) - 2300 ₽ за человека<br />Дети от 5 до 11 лет) - 2000 ₽ за человека<br /><br /><strong>Что включено:</strong><br /><br />трансфер в обе стороны по Адлерскому району<br />страховка<br />снаряжение<br /><br /><strong>Что не включено:</strong><br /><br />обед<br /><br /><strong>Расписание:</strong><br /><br />Ежедневно 11-00<br /><br /><strong>Какие места вы увидите:</strong><br /><br />Ущелье Ахцу<br />Ахштырское ущелье<br />река Мзымта<br /><br /><strong>За какой период можно бронировать:</strong><br /><br />Бронирование возможно не позднее чем за 2 часа до начала. Бронируйте сейчас, места могут закончиться!<br /><br /><strong>Как можно оплатить:</strong><br /><br />Часть суммы заказа вы можете оплатить на сайте, оставшуюся часть на месте. Или всю сумму на месте<br /><br />Онлайн:<br />картой Visa или Mastercard;<br />SberPay;<br />ЮMoney.<br /><br />Наличными:<br />на месте встречи гиду в день экскурсии;<br /><br /><strong>Какова длительность:</strong><br /><br />3 ч.',
    description_min: 'Авторский тур на парусной яхте. Вы насладитесь романтикой открытого моря и посмотрите на прекрасную природу Кавказа. Вы увидите панорамные виды Олимпийских объектов Сочи и других зданий курорта. В летнее время сможете искупаться в открытом море, где вода идеально чистая и прозрачная. Во время морской прогулки велика вероятность встретить дельфинов в естественной среде и понаблюдать за их жизнью. Бонусом по Вашей просьбе интересные рассказы от профессионального капитана и путешественника. Задайте любой интересующий Вас вопрос и получите ответ.',
  },
  {
    id: 45,
    name: 'Сплав по реке Мзымта',
    time: '3 ч.',
    count_people: 18,
    price: 2300,
    description: 'Описание',
    description_min: 'Если пассивный отдых не для вас, и вы мечтаете получить порцию адреналина и не боитесь экстремальных приключений, предлагаем вам заняться рафтингом на бурной реке Мзымта. У вас будет уникальная возможность проверить свои силы в борьбе с водной стихией и получить незабываемые впечатления.',
  },
];

export const Rooms: Room[] = [
  {
    id: 99,
    name: 'Апартамент с одной спальней и террасой',
    area: 91,
    count_people: 4,
    description: 'Улучшенный апартамент с одной спальней, оборудованный комплектом кухонной мебели и обеденной зоной с огромной террасой не оставит равнодушным никого. Великолепный вид на парковую зону отеля позволит отдохнуть и расслабится, лежа на шезлонге и слушая пение птиц.',
    isBooked: false,
  },
  {
    id: 90,
    name: 'Студия с балконом и видом на море',
    area: 26,
    count_people: 2,
    description: 'Студия с потрясающим видом на море подарит невероятное расслабление, а ежедневное наблюдение за закатом со своего балкона подарят воспоминания, с которыми не захочется расставаться после отпуска. Кровать-диван трансформер позволит иметь больше свободного пространства в вашем номере отеля.',
    isBooked: false,
  },
];

export const Rests: Rest[] = [
  {
    id: 49,
    name: 'СПА-комплекс',
    description: '<p>Для гостей доступны:<br />- сауна<br />- хаммам<br />- крытый бассейн<br />- джакузи<br />- массажные кабинеты<br />- спа-ритуалы и инновационные эстетические процедуры по уходу за лицом и телом<br />- современный тренажерный зал с оборудованием Matrix<br />- спортивная площадка на свежем воздухе<br />Режим работы: с 10:00 до 22:00</p>',
    isClosed: false,
  },
  {
    id: 43,
    name: 'Анимации',
    description: '<p>Анимационная программа Cosmos Stay Le Rond Sochi позволяет полностью погрузиться в атмосферу веселья и развлечений.<br />В программе дня: утренняя зарядка, водные игры в бассейне, творческие мастер-классы, конкурсы и викторины, спортивные соревнования и многое другое.Интересные моменты, новые знакомства, впечатления &ndash; все это делает пребывание в отеле незабываемым.</p>',
    isClosed: false,
  },
];
