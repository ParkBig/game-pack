# 추억의 지뢰찾기

## 🔍 [홈페이지바로가기](https://memory-game-eta-woad.vercel.app)

  - 추억속 윈도우 화면과 지뢰찾기를 구현했습니다.

----

## 😎 **`시연 영상 및 이미지`**

- [유투브 시연영상 보기 클릭!](https://youtu.be/I8NAlDIx86w)
  - 게임실행 및 드래그

    ![chess1](https://github.com/ParkBig/minesweeper/assets/105584331/0df441b7-c58a-4bed-b5d6-f382ac4214de)

  - 게임실행법2 및 하단드래그
  
    ![chess2](https://github.com/ParkBig/minesweeper/assets/105584331/cd03976a-0326-44d7-8f4d-7f25e393a5f9)

  - 게임 난이도 선택 및 커스텀난이도 가능
  
    ![chess3](https://github.com/ParkBig/minesweeper/assets/105584331/e0772d17-d64d-4837-a99c-65b1462bd3d2)

  - 지뢰찾기의 연속클릭기능 및 지뢰클릭시 지뢰 위치표시와 게임종료
  
    ![chess4](https://github.com/ParkBig/minesweeper/assets/105584331/e2bbce20-1007-45b9-ad83-4e4b6c3ccf82)

  - 오른쪽클릭으로 깃발생성가능 및 게임 승리
  
    ![chess5](https://github.com/ParkBig/minesweeper/assets/105584331/52b0c68c-6b93-4fb8-b425-4581857a8bc5)


----

## 📅  **`프로젝트기간`**

- 2023.07 ~ 2023.08

----

## 🔨 **`Tech Stack`**

- Typescript
- React
- Emotion
- Zustand

----

## ✨ **`주요 기능`**

||내용|
|---|---|
|홈페이지|추억의 윈도우 화면과 시작메뉴 페이지 및 지뢰찾기 게임을 실행할 아이콘이있습니다.<br>아이콘을 클릭하거나 시작메뉴를 통해 지뢰찾기게임을 실행할 수 있습니다.<br>지뢰찾기 게임을 실행하고, 실제처럼 게임을 드래그 해서 움직일 수 있고, 하단의 bar에서도 드래그 가능합니다.<br>|
|지뢰찾기|Beginner, Intermediate, Expert, Custom중 원하는 난이도를 클릭하여 플레이할 수 있습니다.<br>게임이 시작되면 타이머가 시작됩니다.<br>지뢰를 랜덤하게 설정하기 위해 피셔-예이츠 알고리즘을 이용했습니다.<br>지뢰게임은 첫번째 클릭은 무조건 지뢰가아닌점을 구현했습니다.<br>오른쪽 클릭을 통해 깃발을 설정할 수 있습니다.<br>지뢰게임을 하다보면 클릭하면 연속으로 클릭되는 점을 Dfs를 이용하여 구현했습니다.<br>지뢰를 클릭하면 지뢰위치가 노출되며 더이상 블럭을 클릭할 수 없으며 타이머가 멈추고 게임이 종료됩니다.<br>게임을 승리하면 더이상 블럭을 클릭할 수 없으며 타이머가 끝나고 게임이 종료됩니다.|

----
