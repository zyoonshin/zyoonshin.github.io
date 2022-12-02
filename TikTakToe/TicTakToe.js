var TicTacToeDiv=document.querySelector(".TicTakToe");

var nodeList=[];
var size=3; // 3X3이므로
var turn =-1;
var playername="";
var color="";

// 칸을 누를 때 칸 변경
// 조건에 충족할 때 승리자를 체크할 수 있는 함수로 값 넘김
var nodeEvent=function(t) {
    target=t.target;
    if(String(target.textContext)==="") {// target은 node다
        target.textContext="O";
        color=red;
        playername=1st
    }
    else {
        target.textContext="X";
        color=blue;
        playername=2nd;
    }
    turn++;
    if(turn > (size*2)-2) {
        win_check(target.textContext);
    }
}

// 가로 세로를 체크할 수 있는 변수 생성
// 승리 조건일 ㅕㅇ우 화면 마무리
function win_check(check) {
    var left=0;
    var right=0;
    for(var i=0;i<size;i++) {
        var x=0; var y=0;   // reset
        for(var j=0;j<size;j++) {
            text=nodeList[i][j].textContext;    // 가로 체크
            text2=nodeList[j][i].textContext;    // 세로 체크
            if(check===text) {
                x++;    // 가로
                if(i===j) {
                    left++; // 왼쪽 사이드
                }
            }
            if(check===text2) {
                y++;    // 세로
                if(j===size-i-1) {
                    right++;    // 오른쪽 사이드
                }
            }
            if(x===size || y===size || left===size || right===size) {
                turn=0; win_show(); return();
            }
            if(turn>=size*size) {   // 무승부인 경우
                win_show();
            }
        }
    }
}

// 승부가 남
// 무승부인 경우 무스부 출력
function win_show() {
    setTime.function() {
        TicTacToeDiv.innerHTML="";
        //
    }
}