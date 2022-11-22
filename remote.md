---
layout: default
---
# Concept

## 사용자 인증 정보
로컬 저장소에서 원격 저장소로 데이터를 넘길때 커밋한 사람이 누구며, 어떠한 사람인지 남길 필요가 있습니다.

이 정보들은 commit 할때마다 이 정보를 사용합니다.

### 사용자 인증 정보 설정

```
[vagrant@host1 ~]$ git config --global user.name "user.name"
[vagrant@host1 ~]$ git config --global user.email "user.email"
```


### 사용자 인증 정보 확인

```
[vagrant@host1 ~]$ git config -l
user.name=user.name
user.email=user.email
[vagrant@host1 ~]$ git config --list
user.name=user.name
user.email=user.email
[vagrant@host1 ~]$ git config --system --list
fatal: unable to read config file '/etc/gitconfig': No such file or directory
[vagrant@host1 ~]$ git config --global --list
user.name=user.name
user.email=user.email
```

## 로컬 저장소 추가
### 원격 저장소 추가

```
[vagrant@host1 ~]$ git remote add origin https://github.com/zyoonshin/bitcamp-ncp <- 원격 저장소 추가
[vagrant@host1 bitcamp-ncp]$ git remote -v <- 원격 저장소 확인
origin  https://github.com/zyoonshin/bitcamp-ncp (fetch)
origin  https://github.com/zyoonshin/bitcamp-ncp (push)
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


