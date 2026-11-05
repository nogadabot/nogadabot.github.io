---
description: Nogada는 NFT 민팅과 그 뒤의 일을 한 앱에서 처리하는 Windows 데스크톱 앱입니다.
---

# Nogada 소개

Nogada는 Windows 데스크톱 앱입니다. 여러 지갑으로 NFT를 민팅하고, 민팅한 NFT를 관리하고, 시장을 보고, 소셜 작업까지 한 곳에서 처리합니다. 설치하기 전에 2분만 읽어 보세요.

앱이 하는 일은 크게 둘입니다.

- **온체인**: 민팅, 거래 실행, NFT와 자금 전송을 지갑 수 제한 없이 여러 EVM 체인에서 합니다.
- **오프체인**: Google 폼, X, Discord, 화이트리스트 신청 같은 소셜 작업을 여러 계정으로 처리합니다.

여기에 NFT 관리, 손익 카드, 마켓 차트, 민트 캘린더, 얼리 콜, 드롭 발견, 가스 계산기, 브라우저 캡처 확장이 붙어 있습니다.

## 메뉴 한눈에 보기

왼쪽 메뉴는 넷으로 나뉩니다.

| 묶음 | 메뉴 | 쓰임 |
| --- | --- | --- |
| 민팅 | [대시보드](market/dashboard.md) | 지금 시장과 얼리 콜을 봅니다 |
| | [스마트 민트](tasks/smart-mint.md) | 링크만 넣으면 민팅 경로를 찾아 작업을 만듭니다 |
| | [작업](tasks/overview.md) | 민팅과 소셜 작업을 만들고 실행하는 곳입니다 |
| | [얼리 콜](market/early-calls.md) | 운영자가 고른 민팅 전 프로젝트입니다 |
| | [발견](market/discovery.md) | 새로 올라온 드롭을 스캔합니다 |
| 내 자산 | [지갑](setup/wallets.md) | 지갑을 만들고 가져오고 자금을 옮깁니다 |
| | [계정](setup/accounts.md) | 소셜 작업에 쓰는 Google, X, Discord 계정입니다 |
| | [NFT](tools/nfts.md) | 보유 NFT, 손익, 뷰어가 있습니다 |
| | [마켓](market/market.md) | 컬렉션 시세, 차트, 알림, 민트 캘린더입니다 |
| 연결 | [RPC](setup/rpc.md) | 체인에 닿는 길입니다. 모든 온체인 작업이 여기를 지납니다 |
| | [프록시](setup/proxies.md) | 사이트 요청을 나눠 보내는 IP입니다 |
| | [OS API](setup/opensea-api.md) | OpenSea API 키를 관리합니다 |
| | [화이트리스트](tools/whitelists.md) | 지갑 자격을 확인하고 모아 둡니다 |
| | [컨트랙트](tools/contracts.md) | EIP-7702 번들러와 지갑 위임을 관리합니다 |
| 도구 | [계산기](tools/calculator.md) | 유닉스 시간 변환과 가스 비용 계산입니다 |
| | [설정](setup/settings.md) | 언어, 키, 발사 엔진, 체인 설정입니다 |

## 내 지갑은 안전한가요

지갑 개인키는 이 PC에만 저장되고 Windows DPAPI로 암호화됩니다. 라이선스 서버와 마켓 서버는 개인키를 받지 않습니다. 서명은 언제나 이 PC에서 합니다. 자세한 내용은 [보안과 개인정보](reference/security.md)에 있습니다.

그래도 민팅에는 소액 지갑을 쓰고, 큰 자산은 앱에 넣지 않은 지갑에 두세요.

## 어디서부터 볼까요

처음이면 아래 순서대로 보면 됩니다.

1. [설치와 첫 실행](getting-started/install.md)
2. [라이선스](getting-started/license.md)
3. [처음 5분 세팅](getting-started/first-setup.md)
4. [스마트 민트](tasks/smart-mint.md)

막히면 [문제 해결](reference/troubleshooting.md)과 [자주 묻는 질문](reference/faq.md)을 보세요.
