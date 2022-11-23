---
layout: default
---
# Linux

## 파일/디렉토리 조작 명령어

### cp

- copy의 줄임말
- 파일이나 디렉토리를 복사할 때 사용하는 명령어

#### 자주 사용하는 옵션
- -i : 복사 될 파일이 이름이 이미 존재할 경우, 사용자에게 덮어 쓰기 여부를 물음
- -b : 복사 될 파일이 이름이 이미 존재할 경우, 백업 파일을 생성
- -f : 복사 될 파일이 이름이 이미 존재 할 경우, 강제로 덮어쓰기
- -r : 하위 디렉토리까지 모두 복사
- -a : 원본 파일의 속성, 링크 정보까지 모두 복사
- -p : 원본 파일의 소유자, 그룹, 권한 등의 정보까지 모두 복사
- -v : 복사 진행 상태를 출력

```
[vagrant@host1 bitcamp-ncp]$ ls
b.txt  c.txt  d.txt  hello2.txt  magic.mgc  README.md  x.txt
[vagrant@host1 bitcamp-ncp]$ cp b.txt b_cp.txt <- b.txt 파일을 복사하여 b_cp.txt 파일 생성
[vagrant@host1 bitcamp-ncp]$ ls
b_cp.txt  b.txt  c.txt  d.txt  hello2.txt  magic.mgc  README.md  x.txt
```
--------------------------------

### mv
- move의 줄임말
- 파일이나 디렉토리를 이동 시킬때 사용하는 명령어

#### 자주 사용하는 옵션
- -i : 이동될 파일이 이름이 이미 존재할 경우, 사용자에게 덮어 쓰기 여부를 물음
- -b : 이동될 파일이 이름이 이미 존재할 경우, 백업파일 생성
- -f : 이동 될 파일이 이름이 이미 존재 할 경우, 강제로 덮어쓰기
- -n : 이동 될 파일이 이름이 이미 존재 할 경우, 덮어쓰기 X
- -r : 하위 디렉토리 까지 모두 이동
- -v : 이동 진행 상태를 출력

```
현재 디렉토리에 있는 test.txt 파일을 디렉토리 내부의 new_folder 디렉토리로 이동
ex) mv test.txt new_folder

현재 디렉토리에 있는 test.txt 파일을 new_test.txt라는 파일로 이름 바꾸기
ex) mv test.txt new_test.txt

/user/jtaewu 경로의 test.txt 파일을 /user/jtaewu 디렉토리로 이동
ex) mv test.txt /user/jtaewu/new_folder

/user/jtaewu 경로 test.txt 파일을 /user/guest 디렉토리에 new.txt로 바꾸어 이동
ex) mv /user/jtaewu/test.txt /user/guest/new.txt
```
--------------------------------

### mkdir
- make directory의 줄임말
- 디렉토리(폴더)를 생성할 때 사용하는 명령어

#### 자주 사용하는 옵션
- -m : 디렉토리를 생성할 때 권한 설정
- -p : 상위 경로도 함께 생성
- -v : 디렉토리를 생성하고 생성된 디렉토리에 대한 메시지 출력

```
[vagrant@host1 bitcamp-ncp]$ tree
.
├── b.txt
├── c.txt
├── d.txt
├── hello2.txt
├── magic.mgc
├── README.md
└── x.txt

0 directories, 7 files
[vagrant@host1 bitcamp-ncp]$ mkdir txt_directory
[vagrant@host1 bitcamp-ncp]$ tree
.
├── b.txt
├── c.txt
├── d.txt
├── hello2.txt
├── magic.mgc
├── README.md
├── txt_directory
└── x.txt

1 directory, 7 files
```
--------------------------------

### rm
- remove의 줄임말
- 파일이나 디렉토리( -r 옵션시 삭제 가능)를 삭제 시킬때 사용하는 명령어

#### 자주 사용하는 옵션
- -f : 강제로 파일이나 디렉토리를 삭제하고 대상이 없는 경우에는 메시지 출력 X
- -r : 디렉토리 내부의 모든 내용을 삭제
- -d : 비어있는 디렉토리들만 제거
- -i : 매번 삭제할때마다 사용자에게 삭제할것인지 물음
- -l : 3개의 이상의 파일을 삭제하거나 디렉토리 내부가 비어있지 않을때만 삭제할것인지 물음
- -v : 삭제되는 대상의 정보를 출력


```
[vagrant@host1 bitcamp-ncp]$ tree
.
├── b.txt
├── c.txt
├── d.txt
├── hello2.txt
├── magic.mgc
├── README.md
├── test.txt
├── txt_directory
└── x.txt

1 directory, 8 files
[vagrant@host1 bitcamp-ncp]$ rm test.txt
[vagrant@host1 bitcamp-ncp]$ rm -r txt_directory
[vagrant@host1 bitcamp-ncp]$ tree
.
├── b.txt
├── c.txt
├── d.txt
├── hello2.txt
├── magic.mgc
├── README.md
└── x.txt

0 directories, 7 files
```

### Branch 확인
git branch
*표시 있는 branch가 현재 작업중인 branch

```
[vagrant@host1 bitcamp-ncp]$ git branch
* b1
  main
```

### 작업중인 branch 변경
git checkout [branch name]


```
git checkout [branch name]
git branch <- 변경된 branch 확인 가능
```

### 생성된 branch를 main에 merge
git merge [branch name]

```
git merge [branch name]
```
