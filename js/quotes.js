const quotes = [
{
    quotes: "여호와를 경외하는 것이 지식의 근본이어늘 미련한 자는 지혜와 훈계를 멸시하느니라",
    author: "잠1:7"
},
{
    quotes: "근신이 너를 지키며 명철이 너를 보호하여 12 악한 자의 길과 패역을 말하는 자에게서 건져내리라",
    author: "잠2:11"
},
{
    quotes: "너는 마음을 다하여 여호와를 의뢰하고 네 명철을 의지하지 말라 6 너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라",
    author: "잠3:5"
},
{
    quotes: "무릇 지킬만한 것보다 더욱 네 마음을 지키라 생명의 근원이 이에서 남이니라",
    author: "잠4:23"
},
{
    quotes: "대저 음녀의 입술은 꿀을 떨어뜨리며 그 입은 기름보다 미끄러우나 4 나중은 쑥 같이 쓰고 두 날 가진 칼같이 날카로우며 5 그 발은 사지로 내려가며 그 걸음은 음부로 나아가나니 6 그는 생명의 평탄한 길을 찾지 못하며 자기 길이 든든치 못하여 그것을 깨닫지 못하느니라",
    author: "잠5:3"
},
{
    quotes: "게으른 자여 네가 어느 때까지 눕겠느냐 네가 어느 때에 잠이 깨어 일어나겠느나 10 좀더 자자, 좀더 졸자, 손을 모으고 좀더 눕자 하면 11 네 빈궁이 강도 같이 오며 네 곤핍이 군사 같이 이르리라",
    author: "잠6:9"
},
{
    quotes: "네 마음이 음녀의 길로 치우치지 말며 그 길에 미혹지 말지어다",
    author: "잠7:25"
},
{
    quotes: "너희가 은을 받지 말고 나의 훈계를 받으며 정금보다 지식을 얻으라 11 대저 지혜는 진주보다 나으므로 무릇 원하는 것을 이에 비교할 수 없음이니라",
    author: "잠8:10"
},
{
    quotes: "지혜 있는 자에게 교훈을 더하라 그가 더욱 지혜로와질 것이요 의로운 사람을 가르치라 그의 학식이  더하리라 10 여호와를 경외하는 것이 지혜의 근본이요 거룩하신 자를 아는 것이 명철이니라",
    author: "잠9:9"
},
{
    quotes: "말이 많으면 허물을 면키 어려우나 그 입술을 제어하는 자는 지혜가 있느니라",
    author: "잠10:19"
},
{
    quotes: "지혜 없는 자는 그 이웃을 멸시하나 명철한 자는 잠잠하느니라 13 두루 다니며 한담하는 자는 남의 비밀을 누설하나 마음이 신실한자는 그런 것을 숨기느니라",
    author: "잠11:12"
},
{
    quotes: "슬기로운 자는 지식을 감추어 두어도 미련한 자의 마음은 미련한것을 전파하느니라",
    author: "잠12:23"
},
{
    quotes: "초달을 차마 못하는 자는 그 자식을 미워함이라 자식을 사랑하는자는 근실히 징계하느니라",
    author: "잠13:24"
},
{
    quotes: "그 이웃을 업신여기는 자는 죄를 범하는 자요 빈곤한 자를 불쌍 히 여기는 자는 복이 있는 자니라",
    author: "잠14:21"
},
{
    quotes: "마음의 즐거움은 얼굴을 빛나게 하여도 마음의 근심은 심령을 상하게 하느니라",
    author: "잠15:13"
},
{
    quotes: "너의 행사를 여호와께 맡기라 그리하면 너의 경영하는 것이 이루리라",
    author: "잠16:3"
},
{
    quotes: "미련한 자라도 잠잠하면 지혜로운 자로 여기우고 그 입술을 닫히면 슬기로운 자로 여기우느니라",
    author: "잠17:28"
}
];

const spanQuote = document.querySelector("#quotes span:first-child");
const spanAuthor = document.querySelector("#quotes span:last-child");


Math.random()
const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

spanQuote.innerText = todaysQuote.quotes;
spanAuthor.innerText = todaysQuote.author;