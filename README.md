# CLOTHER 
옷으로 기억하는 날씨 앱 

CLOTHER의 `Front-end`repository 입니다.

### Member

- 백동우 - @100dongwoo
- 최정혜 - @jeonghye-choi

## Table of Contents

- [Architecture](#architecture)
- [Prerequisite](#prerequisite)
  - [Installation](#installation)
- [Contributing](#contributing)
  - [Branching](#branching)
  - [Commit Message](#commit-message)
    - [Type](#type)

```
.
+-- src/
|   +-- components
|   +-- layout
|   +-- pages
|   +-- styles
|   +-- ...
|
+-- assets
|   +-- ...
|
+-- ...
```

## Architecture
![image](https://user-images.githubusercontent.com/33304833/127309904-c5bc6731-3bf0-478f-9fe1-511337fc5bcc.png)


## Prerequisite

- expo v42+
- react v16+

### Installation

```bash
> git clone https://github.com/dnd-side-project/dnd-5th-4-frontend.git
> cd dnd-5th-4-frontend
> yarn
# 또는
> npm install

> yarn start
# 또는
> expo start
```






## Contributing

0. `upstream:main` -> `origin:main`으로 pull 받기
1. issue 생성
2. issue에 해당하는 branch 생성
3. 생성한 branch에 `commit`, `push`
4. `origin:feat_#n_title`branch -> `upstream:main`branch 로 **Pull Request**
5. `conflict`가 났다면 해결
6. review 요청하기
7. review 결과에 따라 merge 진행


### Branching

Git-flow 사용([참고](https://techblog.woowahan.com/2553/))

- upstream: `main` branch
- origin: `main` branch
- origin: `feat_#issueNumber_issueTitle` branch


### Commit Message

git commitizen 사용

[커밋메세지 참고](https://meetup.toast.com/posts/106)

```
<type>: <short summary>
  │            │
  │            └─⫸ 명령조. 영어로. 커밋이 처리하는 내용 요약. 커밋 메시지 마지막에 마침표는 붙이지 않음.
  │

  └─⫸ build|ci|docs|feat|fix|perf|refactor|test 중 하나
```

#### Type

- **build**: 빌드 시스템 및 의존 패키지 수정
- **ci**: 지속적 통합 (CI) 관련
- **docs**: 문서화 내용 수정
- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **perf**: 성능 향상 작업
- **reactor**: 새로운 기능을 추가하거나, 버그를 수정하지 않는 코드 개선 작업
- **test**: 테스팅 관련





