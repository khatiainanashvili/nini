// აქ ყველგან ერთი და იგივე რანდომ სიმბოლო იწერება, კარგად ვერ გავაკეთე, 
// ეს ჯგუფელისგან გადაწერე

// შევქმენი table ელემენტი
table = document.createElement('table')

// შევქმენი სიმბოლოების მასივი

symbols = ['*', '%', '^', '#', '@', '&', '$', ']', '[' ]

// გავაკეთე ცვლადი, რომელიც რანდომად მიბრუნებს ამ მასივის ინდექსს(სინამდვილეში იმ რიცხვებიდან რენდომს წერს, რა სიგრძისაცაა მასივი)
const randomIndex = Math.floor(Math.random(symbols.length) * symbols.length)

// შევქმენი ფუნქცია
function createRows() {
    // ფორ ციკლით გავაკეთე სამი სვეტი
   for (let i = 0; i < 3; i++) { 
      row = document.createElement('tr')
      table.appendChild(row)
        // და სამი მწკრივი, თუ პირიქით ზემოთაა სვეტი და ეს მწკრივი
      for (let j = 0; j < 3; j++) {
       
       col = document.createElement('td')
    //    მწკრივს მივაშვილე სვეტი თუ პირიქით, როგორც გაარკვევდი, ეგ ორი მერევა
       row.appendChild(col)

    //    HTML ში შევიტანე სიმბოლოები რენდომ ინდექსით და აქ დავუშვი შეცდომა და მაგიტომ არ ვარ 
    //    დეველოპერი და მაგიტომ ვუხახუნებ ილუსტრატორს
       col.innerHTML += symbols[randomIndex]
      }
   }
}
// გამოვიძახე ფუნქცია, (ისე არ იმუშავებს, თუ არ გამოიძახე)
createRows()

// დოკუმენტის ბადის მივაშვილე ეს მთლიანი თეიბლი
document.body.appendChild(table)


// შევქმნათ ცარელა მასივი
numsArr = [] 

// სანამ ამ მასივის სიგრძე სამზე ნაკლებია, მანამდე შეყვანილ რიცხვებს ფუშავს ამ მასივში
while (numsArr.length < 3) { 
   num = prompt('enter number')
   numsArr.push(num * 1)
}
// ... ეს სამი წერტილი არაის მაპის პონტია, ოღონდ ცოტა სხვანაირი და არ ვიცი არაის4
//  ამ მეთოდით უნდა იპოვო მაქსიმუმი თუ უფრო რთული გზებიც არსებობს:დ

console.log(Math.max(...numsArr)); 


// ეს გუგლში ვნახე ამ საიტზე : https://javascript.info/task/shuffle#:~:text=Write%20the%20function%20shuffle(array,%2C%202%5D%20%2F%2F%20...

person = []

age = prompt("enter age")
namei = prompt("enter name")
sex = prompt('enter something sexy')

person.push(age)
person.push(namei)
person.push(sex)

// პარამეტრსაც და მასვსაც ერთი და იგივე დავარქვი და ჰო არ დაგაბნევს, რა ვქნა?

function shuffle(person) {
    person.sort(() => Math.random() - 0.5);
  }
  
  
  shuffle(person);


  alert(person);