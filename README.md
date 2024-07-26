# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

## 1단계

- [x] 테스트 기반 환경 구축 (Jest와 React Testing Libaray 사용)
- [x] MSW를 사용하여 Mock API가 동작하도록 (상세 API / 옵션 API)
- [ ] 단위 테스트 코드 작성

### 상품 상세 페이지 테스트

- [x] 통합 테스트 코드 작성

### 결제 페이지 테스트

- 통합 테스트 코드 작성
  - [ ] 현금영수증 false → 현금영수증 종류, 현금영수증 번호 field가 비활성화인지 확인
  - [ ] 현금영수증 true → 현금영수증 종류, 번호 field 값 입력 필수
  - [ ] form의 validation 로직이 정상 동작하는지 확인

## 2단계

### 회원가입 및 로그인

- [ ] 로그인 기능 구현
- [ ] 회원가입 UI 구축
  - 회원가입 버튼은 로그인 화면 하단에 배치. (로그인 화면을 그대로 사용 OK)
- [ ] 회원가입 기능 동작 구현 (회원가입 시, 로그인 가능)

### 관심 기능

- [ ] 상품 상세 페이지에 관심 등록 버튼 추가.
- [ ] 관심 버튼을 클릭 시, 관심 목록에 추가하는 동작.
- [ ] 관심 등록 성공 시 Alert로 "관심 등록 완료" 메시지 노출.
- [ ] 마이 페이지에 관심 목록 리스트 추가.
  - chakra UI를 사용하여 자유롭게 UI 구축.
- [ ] 관심 목록 API는 [카카오테크 선물하기 API 노션](https://www.notion.so/API-c78c990bf1264a5a91c4421e125a28c8?pvs=21)의 response 데이터 사용.
- [ ] 관심 목록 리스트에서 관심 삭제 기능. (삭제 시 목록에서 사라짐)

## 3단계

### 질문 1. Test code를 작성해보면서 좋았던 점과 아쉬웠던 점에 대해 말해주세요.

### 질문 2. 스스로 생각했을 때 좋은 컴포넌트란 무엇인지 본인만의 기준을 세우고 설명해 주세요.

### 질문 3. 스스로 생각했을 때 공통 컴포넌트를 만들 때 가장 중요한 요소 2개를 선택하고 이유와 함께 설명해주세요
