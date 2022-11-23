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

## Branch
### Branch 생성

git branch [branch name]

```
[vagrant@host1 bitcamp-ncp]$ git branch [branch name]
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
