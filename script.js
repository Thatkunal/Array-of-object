// const url ="https://api.github.com/users"

// fetch(url)
// .then((res)=>res.json())
// .then(data=>console.log(data))

// const url ="https://api.github.com/users"
// async function fetchData(){
//  const res=await fetch(url)
//  const data= await res.json()
//  console.log(data)
// }
// fetchData()

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ] 
    // ans1:-
    const uppercase=studentRecords.map(student =>student.name.toUpperCase())
    console.log(uppercase)
    // ans2:-
     const marks=studentRecords.filter((item)=>item.marks>50)
     console.log(marks)
    //  ans3:-
    const iddd=studentRecords.filter((item)=>item.marks>50 && item.id>120)
    console.log(iddd)
    //  ans4:-
    let ans = studentRecords.filter((item)=>item.marks>50 & item.id >120)
        let ans2= ans.map(student => student.marks);
        const TotalMarks = ans2.reduce((sum, marks) => sum + marks, 0);
        console.log(TotalMarks);
    // ans5:-
    const filteredStudents = studentRecords.filter(student => student.marks > 50);
    const namesArray = filteredStudents.map(student => student.name);
    console.log(namesArray)
    // ans6-
    const filteredStudents2 = studentRecords.filter(student => student.id > 120);
    const namesArray1 = filteredStudents2.map(student => student.name);
    console.log(namesArray1)
    //ans7:-
    let ans7=0
        let update=studentRecords.map((item)=>{
        if(item.marks < 50)
            item.marks+=15;
            return item;
            }).map((item)=>item.marks>50? ans7+=item.marks:null)
            console.log(ans7);
    //ans8:-
    const student1 = { name: 'John', class: '10th', rollNo: 101 };
    const student2 = { name: 'Alice', class: '9th', rollNo: 102 };
    const student3 = { name: 'Bob', class: '11th', rollNo: 103 };
    const student4 = { name: 'Emma', class: '12th', rollNo: 104 };
    const student5 = { name: 'Alex', class: '8th', rollNo: 105 };
    const student6 = { name: 'Eva', class: '7th', rollNo: 106 };
    const studentsArray = [student1, student2, student3, student4, student5, student6];
    // console.log(studentArray)