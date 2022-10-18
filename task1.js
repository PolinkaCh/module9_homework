//Задание 1// 
/*Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}*/

const parser = new DOMParser();    /// Создание экземпляра класса DOMParser
// Записываем XML
const xmlString = `               
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
// Получение DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNodes = listNode.querySelectorAll("student");

const list = [];    //Создание переменной, в которой будет выводиться результат 
var students = studentNodes.childNodes

studentNodes.forEach((studentNodes) => {     
  const nameNode = studentNodes.querySelector("name");
  const langAttr = nameNode.getAttribute('lang');
  const firstNameNode = studentNodes.querySelector("first");
  const secondNameNode = studentNodes.querySelector("second");
  const ageNode = studentNodes.querySelector("age");
  const profNode = studentNodes.querySelector("prof");
  
  list.push({
   name: firstNameNode.textContent + " " + secondNameNode.textContent, 
   age: Number(ageNode.textContent),  
   prof: profNode.textContent, 
   lang: langAttr
  });
});

console.log(list);