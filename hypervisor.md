---
layout: default
---
# Concept

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
  - _출처 : https://blog.resellerclub.com/what-is-a-hypervisor-and-how-does-it-work/_
  - 베어메탈(Bare Metal)
  - **호스트의 하드웨어에서 직접 구동**되어 게스트 운영 체제를 관리
  - 호스트 운영 체제 대신 VM 리소스가 하이퍼바이저에 의해 하드웨어에 직접 예약됨
  - 가상 시스템 또는 게스트 운영 체제 중 하나의 문제가 하드웨어에서 실행중인 다른 게스트 운영 체제에 영향을 미치지 않음

- 유형 2
![Attached2](https://github.com/zyoonshin/zyoonshin.github.io/blob/main/assets/img/hyper-2.png?raw=true)
  - _출처 : https://blog.resellerclub.com/what-is-a-hypervisor-and-how-does-it-work/_
  - 호스팅(Hosted)
  - **기존의 운영 체제에서 소프트웨어 레이어 또는 애플리케이션으로서 구동됨**
  - 호스트 운영 체제에서 게스트 운영 체제를 추상화하는 방식으로 작동
  - 운영에 있어 호스트 운영 체제에 전적으로 의존
  - VM 리소스가 호스트 운영 체제에 따라 예약된 후 하드웨어에 대해 실행됨
  - 개인 컴퓨터에서 여러 개의 운영 체제를 구동하려는 개인 사용자에게 이상적