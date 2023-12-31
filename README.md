# Game Pack

## 🔍 [홈페이지바로가기](https://game-pack.vercel.app)

  - 추억속 윈도우 화면과 지뢰찾기를 구현했습니다.
  - 소켓을 이용한 멀티게임 체스를 구현했습니다.

<br>

## 😎 **`시연 영상 및 이미지`**

- 지뢰찾기
  - 게임실행 및 드래그

    ![minesweeper1](https://github.com/ParkBig/minesweeper/assets/105584331/0df441b7-c58a-4bed-b5d6-f382ac4214de)

  - 게임실행법2 및 하단드래그
  
    ![minesweeper2](https://github.com/ParkBig/minesweeper/assets/105584331/cd03976a-0326-44d7-8f4d-7f25e393a5f9)

  - 게임 난이도 선택 및 커스텀난이도 가능
  
    ![minesweeper3](https://github.com/ParkBig/minesweeper/assets/105584331/e0772d17-d64d-4837-a99c-65b1462bd3d2)

  - 지뢰찾기의 연속클릭기능 및 지뢰클릭시 지뢰 위치표시와 게임종료
  
    ![minesweeper4](https://github.com/ParkBig/minesweeper/assets/105584331/e2bbce20-1007-45b9-ad83-4e4b6c3ccf82)

  - 오른쪽클릭으로 깃발생성가능 및 게임 승리
  
    ![minesweeper5](https://github.com/ParkBig/minesweeper/assets/105584331/52b0c68c-6b93-4fb8-b425-4581857a8bc5)

- 체스게임
  - 체스 방 생성 or 참여 및 로그인

    ![chess1](https://github.com/ParkBig/game-pack/assets/105584331/c6909ebc-6f79-4129-bd97-f58838d77499)

  - 체스 방

    ![chess2](https://github.com/ParkBig/game-pack/assets/105584331/c0c70547-ebea-4770-a74d-f26a4a027085)

  - 체스 진행 및 채팅

    ![chess3](https://github.com/ParkBig/game-pack/assets/105584331/fc1c51c7-d213-430b-bb8d-690d4c1bc5a0)


  - 게임 종료

    ![chess4](https://github.com/ParkBig/game-pack/assets/105584331/c025f17a-d14d-4908-bd10-66546414bb05)

<br>

## 📅  **`프로젝트기간`**

- 2023.07 ~ 2023.08

<br>

## 🔨 **`Tech Stack`**

- Typescript
- React
- Emotion
- Zustand
- Socket.io

<br>

## ✨ **`주요 기능`**

|지뢰찾기|내용|
|---|---|
|홈페이지|추억의 윈도우 화면과 시작메뉴 페이지 및 지뢰찾기 게임을 실행할 아이콘이있습니다.<br>아이콘을 클릭하거나 시작메뉴를 통해 지뢰찾기게임을 실행할 수 있습니다.<br>지뢰찾기 게임을 실행하고, 실제처럼 게임을 드래그 해서 움직일 수 있고, 하단의 bar에서도 드래그 가능합니다.<br>|
|지뢰찾기|Beginner, Intermediate, Expert, Custom중 원하는 난이도를 클릭하여 플레이할 수 있습니다.<br>게임이 시작되면 타이머가 시작됩니다.<br>지뢰를 랜덤하게 설정하기 위해 피셔-예이츠 알고리즘을 이용했습니다.<br>지뢰게임은 첫번째 클릭은 무조건 지뢰가아닌점을 구현했습니다.<br>오른쪽 클릭을 통해 깃발을 설정할 수 있습니다.<br>지뢰게임을 하다보면 클릭하면 연속으로 클릭되는 점을 Dfs를 이용하여 구현했습니다.<br>지뢰를 클릭하면 지뢰위치가 노출되며 더이상 블럭을 클릭할 수 없으며 타이머가 멈추고 게임이 종료됩니다.<br>게임을 승리하면 더이상 블럭을 클릭할 수 없으며 타이머가 끝나고 게임이 종료됩니다.|

<br>

|체스게임|내용|
|---|---|
|홈페이지|홈 화면에서 입장하고자하는 방이름, 혹은 이미 생성된 방이름을 입력하여 게임방에 입장할 수 있습니다.<br>입장가능한 최대인원수는 2명이고 정원이 찬 방에 입장하고자하면 알람을 통해 입장 불가사유를 알립니다.<br>로그인 기능이 있어서 자신의 승률을 기록할 수 있으며 매치된 상대방의 승률 또한 확인할 수 있습니다.|
|체스페이지|최초 입장시 입장 순서에 따라 내가 몇번 플레이어인지, 무슨색 말인지 알람을 통해 확인할 수 있습니다.<br>오른쪽 상단의 상대방 정보를 확인할 수 있습니다.<br>상대방이 입장하거나 게임 준비, 말이 잡힐 때 게임이 끝날 때, 알람을 통해 확인할 수 있습니다.<br>양측이 Ready 버튼을 누르면 게임이 시작되며, 누구의 순서인지 쉽게 확인할 수 있도록 배경화면의 색과 문구가 뜹니다.<br>채팅을 통해 게임준비 하라는 등의 대화를 나눌 수 있습니다.<br>각각의 체스말을 클릭하면 이동가능한 타일이 표시됩니다.<br>게임이 종료되면 리게임을 하거나 게임방을 나갈 수 있습니다.<br>만약 로그인을 했다면 게임 승패에 따라 승과 패가 카운트 됩니다.|

<br>

## 👍 **`트러블 슈팅`**

### **`1. 배포`**

|1|비용문제|
|:---:|---|
|문제 상황|AWS 사용중 예상보다 큰 배포비용.|
|해결 방법|기존 AWS 사용하여 배포를 했는데, 프론트, 백엔드, 도메인까지 AWS를 이용하니 달에 7만원가량 청구됨.<br>비용절감을 위해 vercel로 재배포함.|

|2|Vercel의 서버리스 특성으로 인한 Socket이용 불가.|
|:---:|---|
|문제 상황|vercel로 백엔드 내용을 배포했지만, vercel의 특성으로 Socket 이용불가.|
|해결 방법|AWS보다 저렴한 railway를 이용하여 백엔드 배포함.|

<br>

### **`2. 지뢰찾기`**

|1|랜덤 지뢰 생성|
|:---:|---|
|문제 상황|균등한 확률의 랜덤 생성 방법이 필요하다.|
|해결 방법|편향되지 않은 순열을 생성하며, O(n)의 시간복잡도를 가지는 피셔 예이츠 셔플 알고리즘을 이용하여 지뢰 랜덤 생성.|

|2|첫 번째 클릭은 무조건 지뢰가 아님|
|:---:|---|
|문제 상황|지뢰찾기 게임의 규칙으로 첫번째 클릭은 무조건 지뢰가 아님을 보장해야함.|
|해결 방법|게임을 시작하는 첫번째 클릭중 mouseDown이벤트를 감지하여 지뢰를 랜덤으로 생성하며, 만약 이때 클릭한 블럭이 지뢰라면 아닌곳과 위치를 바꾸어 생성함.|

|3|자동 연속 클릭|
|:---:|---|
|문제 상황|지뢰찾기 게임중 자동으로 연속 클릭되는 기능 구현.|
|해결 방법|각 블럭의 정보에는 지뢰여부, 깃발여부, 주변지뢰개수, 클릭여부가 있습니다.<br>연속클릭이 끝나는 지점은 주변에 지뢰가 있는 경우입니다. 즉 주변지뢰개수가 0(null)이아닌 경우 연속클릭이 종료됩니다.<br>이러한 조건으로 dfs를 이용하여 앞선 조건을 만족하면 블럭의 클릭여부 정보를 변경하여 연속클릭을 구현했습니다.<br>참고로 지뢰크기를 30 x 30으로 제한했지만, 만약 크기가 더 크게 만들 수도있는점을 고려하여 bfs보다 큰값에서 메모리 이점이 있는 dfs를 이용했습니다.|

<br>

### **`3. 체스게임`**

|1|체스 판 그리기|
|:---:|---|
|문제 상황|체스판을 어떤 방법으로 그릴까.|
|해결 방법<br>도출 및<br>해결|체스판을 구현할 때 Canvas와 HTML/CSS중 어떤 기술로 구현을 할까 생각했지만,<br> 체스라는 게임 특성상 Reflow로 인한 이슈가 거의 없을 것이라 생각하여 순수하게 HTML/CSS로 구현하였으며<br> 체스판을 효율적으로 구현하기 위해 Grid를 활용하였습니다|
|||

|2|체스 상태 관리|
|:---:|---|
|문제 상황|체스의 상태를 서버에서 관리 할까, 클라이언트에서 관리할까.|
|해결 방법<br>도출 및<br>해결|각 체스의 알고리즘과 이것을 socket을 이용하여 양측에 반영하는 과정에서<br> 모든 체스 정보를 서버에 저장 후 클라이언트에 반영할지, 각각의 클라이언트에서 체스 정보를 바로 처리할지 고민했지만,<br> 실제 상용 서비스 프로그램은 아니어서 서버에 정보를 저장해 둘 필요가 없고,<br> 클라이언트 측에서 충분히 각 체스 말 정보를 처리할 수 있기에 후자의 경우로 프로그래밍 했습니다|
|||

|3|체스의 표현|
|:---:|---|
|문제 상황|상대방의 체스를 잡거나 잡힐때 체스 상태를 어떻게 관리해야할까.|
|해결 방법<br>도출 및<br>해결|현재 체스판의 모든 상태(내꺼, 상대꺼)를 전역으로 관리중이므로 체스판을 3가지 영역으로 분리.<br>1.내 체스말, 2. 상대 체스말, 3. 빈영역<br> 움직일 체스말 클릭시 토글로 이동가능한 영역을 클릭가능.<br>클릭한 곳에 상대 체스말이 있을 경우 해당 영역의 체스 상태를 나의 말로 덮어씌어 업데이트.<br>소켓을 통해 체스 상태를 상대방에게 전달해 상대방의 체스판도 업데이트.|
|||
