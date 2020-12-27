//TO DO: data from server
const initiative = {
  id: '2020-12-12-0014',
  title: 'Не убран снег во дворе',
  date: '12 декабря 2020',
  status: 'working',
  type: 'complaint',
  adress: 'Москва, ул. Большая Якиманка, д35 с4',
  imagesLinks: ['./images/photo/image-000003.png', 
                './images/photo/image-000001.png', 
                './images/photo/image-000005.png'],
  files: [{name: 'Uborka.xlsx', size: '182 KB'},
          {name: 'Predlogenie.docx', size: '39 KB'}],
  text: 'Текст инициативы',
  likes: 225,
  activeLike: false,
  comments: [{avatarLink: './images/avatars/avatars-000003.jpg', author: 'Чиновьев А.С.', qoute: 'Ночь, улица, фонарь, аптека\n Бессмысленный и тусклый свет.', date: '12 декабря 2020'},
  {avatarLink: './images/avatars/avatars-000001.jpg', author: 'Укаева А.А.', qoute: 'Мороз и солнце; день чудесный!\n Еще ты дремлешь, друг прелестный\n Пора, красавица, проснись:\n Открой сомкнуты негой взоры ', date: '13 декабря 2020'}]
}
page.querySelector('.initiative__title').textContent = initiative.title;
page.querySelector('.initiative__date').textContent = initiative.date;
page.querySelector('.initiative__type').classList.add(`initiative__type_value_${initiative.type}`);
page.querySelector('.initiative__adress').textContent = initiative.adress;
page.querySelector('.initiative__status').classList.add(`initiative__status_value_${initiative.status}`);
page.querySelector('.initiative__text').textContent = initiative.text;