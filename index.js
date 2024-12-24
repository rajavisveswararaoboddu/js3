let students = [
    { id: 1, s_name: "Pavan", city: "Hyd" },
    { id: 2, s_name: "Arjun", city: "Sec" },
    { id: 3, s_name: "Meena", city: "Vizag" },
    { id: 4, s_name: "Rahul", city: "Bengaluru" },
    { id: 5, s_name: "Sita", city: "Chennai" },
    { id: 6, s_name: "Vijay", city: "Mumbai" }
];

for (let i in students) {
    console.log(`${students[i].s_name} from ${students[i].city}`);
  
}

console.log("*")

for (students of students) {
    console.log(`${students.s_name} from ${students.city}`);
}