---
layout: default
---
# Linux

## 파일 탐색 기본 명령어

### pwd
* Print Working Directory 의 약어
* 현재 어떤 디렉토리경로에 있는가를 절대경로로 표시하는 명령어


```
[vagrant@host1 bitcamp-study]$ pwd
/home/vagrant/git/bitcamp-study
```


### cd
* Change Directory 의 약어
* 작업 디렉토리의 위치를 바꾸는 명령어

```
[vagrant@host1 git]$ cd bitcamp-study <- bitcamp-study로 이동
[vagrant@host1 bitcamp-study]$ pwd
/home/vagrant/git/bitcamp-study <- git 폴더 안의 bitcamp-study로 이동
```

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
