function f01() {

    const x = {
        name : '피카츄',
        hp : 100 ,
        atk : 30 ,
        skill : ()=>{
            console.log("백만볼트!!!");
        }
        // 멤버변수: 자스에서는 property
    };

    console.log(x);
    console.log(x.name);
    console.log(x.hp);
    console.log(x.atk);
    console.log(x.skill()); // 결과값: 백만볼트!!! undefined: skill함수의 리턴값이 아무것도 없기 때문에

}

// f01();

function f02() {
    const x = {};

    // x.name="사과";
    // x.price=5000;

    // console.log(x);

    x["name"] = "사과";
    x["price"] = 5000;

    console.log(x["name"]);
    console.log(x["price"]);
}

// f02();

function f03() {
    const x = {
        name : "갤럭시 퀀텀3",
        price : 100000,
        brand : "삼성",
        color: "black"
    };

    for(temp in x){
        console.log(temp); // key값 출력
        console.log(x[temp]); // value값 출력
    }
}

// f03();

function f04(){
    
    const x = {
        name : "피카츄",
        hp : 100
    };

    console.log(x);

    delete(x.hp);
    console.log(x);
}

// f04();

function f05(){
    const student01 = {name: '심원용', score: 100}
    const student02 = {name: '심투용', score: 100}
    const student03 = {name: '심삼용', score: 100}
    const student04 = {name: '심사용', score: 100}
    const student05 = {name: '심오용', score: 100}

    const stdArr = [student01, student02, student03];

    stdArr.push(student04);
    stdArr.push(student05);

    for(idx in stdArr){0
        console.log(stdArr[idx].name);
    }
}

// f05(); 