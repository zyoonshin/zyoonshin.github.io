---
layout: default
---

Text can be **bold**, _italic_, or ~~strikethrough~~.

[About me](./another-page.html).

안녕하세요!\
저는 네이버클라우드 캠프 1기 신지윤입니다.\
잘 부탁드립니다. :D

# Naver Cloud Camp

![Screenshot](https://github.com/zyoonshin/zyoonshin.github.io/blob/main/assets/img/ncc-pic2.PNG?raw=true)


## Curriculum

- 클라우드 인프라의 이해
  - 세부내용
    - 클라우드 리터러시
    - 네트워크 기초
    - 데이터베이스 이해
    - 클라우드 환경 OS 이해
    - 컨테이너의 이해
    - 클라우드 배포 및 자동화
  - 클라우드 인프라 구축 프로젝트
    - 웹개발을 위한 DevOps Docker 개발
    - 리눅스 OS 기반 Auto Scaling 시스템 구축
    - VS Code를 활용한 페어코딩 실습 환경 구축

- 클라우드 기반 웹/모바일 프로그래밍
  - 세부 내용
    - 웹 프로그래밍 기초, DB 구축 및 SQL 활용
      - Open API, RDBMS, NoSQL
      - Advanced SQL, JDBC/ODBC
    - 웹 프로그래밍 응용
      - Front End & Back End Programming
      - Web Application Programming
    - 웹 프로그래밍 심화
      - Advanced Front End Programming
      - Advanced Back End Programming
  - 클라우드 기반 웹/모바일 프로젝트
    - 미술품 경매 사이트 개발
      - SNS 알림 시스템 구축
      - URL 단축기 설계 시스템 개발

- 인공지능과 AIaaS 프로그래밍
  - 세부 내용
    - 파이썬 프로그래밍
    - 인공지능
    - 클라우드 AIaaS
    - ML 모델 개발
    - 클라우드 기반 모델 생성 및 배포
  - 클라우드 기반 AI 융복합 프로젝트
    - 동시통역 프로그램 개발
    - 얼굴인식 출입 인증 시스템 개발
    - 클라우드 ML 활용 이상 감지 시스템 구축
    - 소상공인을 위한 AI 전화 주문 시스템 구축

## Certifications



# Concept

## Markdown

### 마크다운(Mark Down)이란?
- 마크업 언어의 일종
- 온갖 태그로 범벅된 HTML 문서 등과 달리, 읽기도 쓰기도 쉬운 문서 양식을 지향
- 파일 확장자 : .md
ex) README.md

  - 장점
    - 문법이 쉽다
    - 관리가 쉽다
    - 지원 가능한 플랫폼과 프로그램이다양하다

  - 단점
    - 표준이 없어 사용자마다 문법이 상이하다
    - 모든 HTML 마크업을 대신하지 못한다.

### 사용 방법
- 문단 제목
```
# 1단계 제목
## 2단계 제목
```
ex)
# 1단계 제목
## 2단계 제목

- 글꼴
```
**굵기** 또는 *기울기*
```
ex)
**굵기** 또는 *기울기*

- Code 삽입 시
"```"로 위아래 막기
```
"```
Code
```"
```



## Hypervisor

### 하이퍼바이저(Hypervisor)란?
- **가상 머신(Virtual Machine)을 생성하고 구동**하는 소프트웨어
- 메모리 및 처리와 같은 단일 호스트 컴퓨터의 리소스를 가상으로 공유하여 호스트 컴퓨터가 여러 게스트 가상 머신을 지원
- 서로 다른 여러 개의 운영 체제를 나란히 구동 가능
- 하이퍼바이저를 사용해 동일한 가상화 하드웨어  리소스 공유
  - 호스트 : 하이퍼바이저로 사용되는 물리 하드웨어
  - 게스트 : 리소스를 사용하는 여러VM



### 하이퍼바이저(Hypervisor) 유형
- 유형 1
![Attached1](https://github.com/zyoonshin/zyoonshin.github.io/blob/main/assets/img/hyper-1.png?raw=true)
  - 베어메탈(Bare Metal)
  - **호스트의 하드웨어에서 직접 구동**되어 게스트 운영 체제를 관리
  - 호스트 운영 체제 대신 VM 리소스가 하이퍼바이저에 의해 하드웨어에 직접 예약됨
  - 가상 시스템 또는 게스트 운영 체제 중 하나의 문제가 하드웨어에서 실행중인 다른 게스트 운영 체제에 영향을 미치지 않음

- 유형 2
![Attached2](https://github.com/zyoonshin/zyoonshin.github.io/blob/main/assets/img/hyper-2.png?raw=true)
  - 호스팅(Hosted)
  - **기존의 운영 체제에서 소프트웨어 레이어 또는 애플리케이션으로서 구동됨**
  - 호스트 운영 체제에서 게스트 운영 체제를 추상화하는 방식으로 작동
  - 운영에 있어 호스트 운영 체제에 전적으로 의존
  - VM 리소스가 호스트 운영 체제에 따라 예약된 후 하드웨어에 대해 실행됨
  - 개인 컴퓨터에서 여러 개의 운영 체제를 구동하려는 개인 사용자에게 이상적


### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four





