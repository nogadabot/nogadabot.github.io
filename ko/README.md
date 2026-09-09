# Nogada 사용 가이드

Nogada는 EVM NFT 민팅을 위한 **Windows 앱**과 **독립 Telegram 봇**입니다. 앱은 사용자 PC에서, 봇은 서버에서 실행됩니다.

| 구분 | Windows 앱 | Telegram 봇 |
|---|---|---|
| 지갑·작업·RPC·프록시 | 이 PC의 앱 설정 | 봇에 별도로 등록한 설정 |
| 지갑 키 보관 | Windows DPAPI로 로컬 암호화 | 서버에서 암호화 |
| 시간대 | 사용자 PC의 Windows 시간대 | 개인 채팅별로 선택하고 서버에 저장 |
| 실행 유지 | 앱과 PC가 실행 중이어야 함 | 앱을 꺼도 봇 작업은 독립 실행 |

같은 주소를 양쪽에 넣을 수 있지만 지갑·작업·nonce·설정은 동기화되지 않습니다.

## 원하는 작업부터 시작하세요

- 처음 앱을 설치한다면: [다운로드](getting-started/download.md) → [활성화](getting-started/license.md) → [초기 설정](getting-started/first-setup.md)
- 민팅을 준비한다면: [Smart Mint](minting/smart-mint.md) → [작업과 Start](app-guide/tasks.md) → [결과 확인](app-guide/results.md)
- 앱 없이 사용한다면: [Telegram 시작하기](telegram/telegram-bot.md)
- 실패하거나 조회가 멈췄다면: [문제 해결](help/troubleshooting.md)

## 적용 버전

공개 버전 **v0.9.43**을 기준으로 설명합니다. **다음 업데이트**로 표시한 내용은 구현 후 검증 중인 기능이며 아직 공개 앱·봇에 반영되지 않았습니다. 기능이 보이지 않으면 먼저 [업데이트 기록](changelog.md)과 앱 버전을 확인하세요.

일반 메뉴에서는 Drops를 숨겼습니다. 공급량 감시는 별도 관측 기능이며 민팅을 자동 시작하지 않습니다. 이 가이드에 없는 기능을 지원한다고 추정하지 말고 실제 체인·페이즈와 화면의 안내를 확인하세요.
