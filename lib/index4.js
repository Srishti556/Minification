let inputObjects=[{Task: 'Task 1', Sequence: 0}, {Task: 'Task 2', Sequence: 1},{Task: 'Task 3', Sequence: 2},{Task: 'Task 4', Sequence: 3},{Task: 'Task 5', Sequence: 4}]
let seq = [];
function taskSequence(inputObjects){
    return inputObjects.map(objArr);
}
function objArr(inputObjects)
{
    return seq.push(inputObjects.Sequence);
}
taskSequence(inputObjects);
console.log(seq);





















// let result = Object.keys(T1)
//                    .map(key => ({task: T1[key], sequence: T1[key]}));

// console.log(result);
// class four {
//     constructor(task, sequence) {
//         this.task = task;
//         this.sequence = sequence;
//     }
// }
// let T1 = new four("task 1","1");
// let T2 = new four("Task 2","2");
// let T3 = new four("Task 3","3");
// let T4 = new four("Task 4","4");
// let T5 = new four("Task 5","5");
// console.log(four[{}]);
// let arr4 = [];
// function object(four){
//     for (var i = 0; i < four.length; i++) {
//         arr4.push((four[i]).sequence);
//     }
//     return aar4;
// }
// object(four);
// console.log(arr4);