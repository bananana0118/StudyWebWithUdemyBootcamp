const fs = require('fs');
const folderName = process.argv[2] || 'Project';

// fs.mkdir('Dogs', { recursive: true }, (err) => { //디렉토리 생겅이 끝났을때, 저 콜백이 실행된다. mkdir종료후 ()=> 콜백수행
//     console.log("inthe call back!")
//     if (err) throw err;
// });


try {
    fs.mkdirSync(folderName)
    console.log(`${folderName}/index.html`);
    const dataTime = "//" + new Date();
    fs.writeFileSync(`${folderName}/index.html`, dataTime);
    fs.writeFileSync(`${folderName}/app.js`, dataTime);
    fs.writeFileSync(`${folderName}/style.css`, dataTime);
} catch (e) {
    console.log("someting went wrong");
    console.log(e);
}

