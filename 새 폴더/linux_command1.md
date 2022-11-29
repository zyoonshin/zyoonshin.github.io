---
layout: default
---
# Linux

## 파일 탐색 기본 명령어


-----------------------------------

### cd
* Change Directory 의 약어
* 작업 디렉토리의 위치를 바꾸는 명령어

```
[vagrant@host1 git]$ cd bitcamp-study <- bitcamp-study로 이동
[vagrant@host1 bitcamp-study]$ pwd
/home/vagrant/git/bitcamp-study <- git 폴더 안의 bitcamp-study로 이동
```

-----------------------------------

### ls
* list의 줄임말
* 현재 위치한 디렉토리에 있는 내용(디렉토리, 파일) 리스트를 출력하는 명령어

```
[vagrant@host1 bitcamp-study]$ ls
docs  README.md
```

#### 자주 사용하는 옵션
* -l : 파일들을 나열할 때 자세히 출력
* -a : 경로 안의 모든 파일을 나열(숨김파일 포함)
* -R : 위치한 디렉토리 하부 디렉토리의 파일까지 모두 출력
* -h : 파일 크기를 해석파기 편하게 출력
* -r : 출력 결과를 내림차순으로 정렬
* -t : 출력 결과를 파일이 수정된 시간을 기준으로 정렬

```
[vagrant@host1 bitcamp-study]$ ls -al <- 옵션을 한번에 여러개 줄수도 있음
total 8
drwxrwxr-x. 4 vagrant vagrant   65 Nov 21 01:54 .
drwxrwxr-x. 6 vagrant vagrant   86 Nov 21 18:35 ..
drwxrwxr-x. 2 vagrant vagrant   96 Nov 21 01:54 docs
drwxrwxr-x. 8 vagrant vagrant  163 Nov 21 01:54 .git
-rw-rw-r--. 1 vagrant vagrant 3268 Nov 21 01:54 .gitignore
-rw-rw-r--. 1 vagrant vagrant 1378 Nov 21 01:54 README.md
```

-----------------------------------

### file

* 지정된 파일의 종류(타입)을 확인하는 명령어

#### 자주 사용하는 옵션
* -C : 매직 파일의 포맷을 검사하는 옵션
* -f 목록파일 : 많은 파일들을 한번에 확인하기 위하여 파일리스트인 목록파일을 만들어서 그 안에 입력된 모든 파일을 한꺼번에 확인하는 옵션
* -m 매직파일 : 지정된 매직파일로 대상파일을 확인

```
[vagrant@host1 bitcamp-study]$ file docs <- 파일 종류 확인
docs: directory
[vagrant@host1 bitcamp-study]$ cd ..
[vagrant@host1 git]$ cd bitcamp-ncp
[vagrant@host1 bitcamp-ncp]$ dir
b.txt  c.txt  d.txt  hello2.txt  README.md  x.txt
[vagrant@host1 bitcamp-ncp]$ file c.txt <- 파일 종류 확인
c.txt: ASCII text
[vagrant@host1 bitcamp-ncp]$ file -f c.txt <- file이나 directory가 아니라서 사용 불가
1111: cannot open (No such file or directory)
[vagrant@host1 bitcamp-ncp]$ file -m c.txt <- 매직파일인지 확인
c.txt, 1: Warning: type `' invalid
file: could not find any magic files! <- 매직파일 X
[vagrant@host1 bitcamp-ncp]$ cd ..
[vagrant@host1 git]$ file bitcamp-study <- 파일 종류 확인
bitcamp-study: directory
```

-----------------------------------

### less
* 파일 내용을 확인하는 명령어 

* 페이지 단위로 나누어 보여줌 → 대용량의 파일을 열어 볼 때 빠르게 사용 가능

* 지나간 내용을 다시 볼 수 O

#### 파일 내용을 확인하는 명령어
- more
    - 페이지 단위로 나누어 보여줌
    - 위에서 아래 방향으로만 출력
    - 지나간 내용을 다시 볼 수 X
- cat
    - 파일을 모두 출력하는데 만약 파일의 내용이 많은 경우 한 번에 보기 어려움

#### 자주 사용하는 옵션
- -? : less에서 사용할 수 있는 명령들에 대한 도움말 출력
- -c : 필요 시 전체 화면을 다시 갱신
- -i : 대소문자를 구분하여 탐색
- -s : 연속되는 공백 라인은 하나의 행으로 처리
- -x [숫자] : 수치를 지정해서 탭 간격 조정, 기본값 8
- 행번호 : 지정된 행 다음부터의 내용을 출력
- --help : 해당 명령어의 도움말을 보여주고 실행이 종료
- --version : version 정보를 출력하고 실행이 종료

#### 텍스트 모드 단축키
- q : 종료 후 쉘창으로 복귀
- ente r: 1행 아래로 이동
- space bar : 아래로 1페이지 이동
- 위 방향키 : 위로 1행 이동
- 아래 방향키 : 아래로 1행 이동
- PageUp : 위로 1페이지 이동
- PageDoen : 아래로 1페이지 이동


```
[vagrant@host1 bitcamp-ncp]$ less c.txt <- c.txt 내용 확인

1111
c.txt (END)

:q
```