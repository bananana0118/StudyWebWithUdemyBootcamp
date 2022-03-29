
let todoes = [];
let countTodo = 0;

let input = prompt("명령어를 입력해 주세요!");
while (input !== 'quit' && input !== 'q') {
    if (input.toLowerCase() === "new") {
        const newTodo = prompt("추가 할 To Do를 입력해 주세요");
        todoes.push(newTodo);
        console.log(`좋습니다! ${newTodo}를 목록에 추가했습니다!`);
    } else if (input.toLowerCase() === "list") {
        console.log("*******************");
        for (todo of todoes) {
            console.log(`${todoes.indexOf(todo)} : ${todo}`);
        }
        console.log("*******************");

    } else if (input.toLowerCase() === "delete") {
        const deleteNum = parseInt(prompt("삭제할 index를 입력해 주세요 :"));
        if (!Number.isNaN(deleteNum)) {
            const deleted = todoes.splic(deleteNum, 1);
            console.log(`네! ${deleted}를 삭제했습니다!`);
        } else {
            console.log('unknown index:');
        }
    }
    input = prompt("명령어를 입력해 주세요!");
}
console.log("앱을 종료합니다!")
