---
description: Nogada, EVM NFT 민팅 봇. 빠르고, 안전하고, 쓰기 쉬운 데스크톱 앱.
---

# Nogada 소개

**Nogada**는 이더리움과 주요 L2 체인에서 NFT를 빠르게 민팅하기 위한 **Windows 데스크톱 앱**과 독립 실행형 **Telegram 봇**을 제공합니다. 앱과 봇은 각각 자기 지갑·작업·RPC·프록시로 실행되며 서로 제어하거나 동기화하지 않습니다.

> 💡 처음이신가요? 아래 3단계만 따라 하면 바로 시작할 수 있습니다 → [설치하기](getting-started/installation.md) → [라이선스 활성화](getting-started/license.md) → [초기 세팅](getting-started/first-setup.md)

## 무엇을 할 수 있나요?

* **멀티 지갑 민팅**: 지갑 수십~수백 개로 한 번에 민팅
* **가스 정밀 제어**: 자동(Auto) 또는 직접(Custom) 가스 설정 + 실시간 가스 계산기
* **마켓플레이스 연동**: OpenSea / Seaport / Transient(런치패드) 민팅 지원
* **자금 관리**: 한 지갑에서 여러 지갑으로 분배(Disperse), 다시 모으기(Consolidate)
* **손익(PnL) 추적**: 민팅 비용·수익을 카드 이미지로 깔끔하게
* **텔레그램 봇**: 앱 설치나 연결 없이 봇 전용 지갑·작업으로 24시간 민팅
* **자동 업데이트**: 새 버전이 나오면 앱이 알아서 갱신

## 지원 체인

이더리움 메인넷(L1)과 주요 L2/EVM 체인을 지원합니다:

> **Ethereum · Arbitrum · Optimism · Base · Polygon · BNB Chain · Avalanche · Linea · Abstract · Zora · Blast · Scroll** 등 (+ 테스트넷 Sepolia)

원하는 체인이 목록에 없어도 **커스텀 EVM 체인**으로 추가할 수 있습니다.

## 🔐 내 지갑은 안전한가요?

**데스크톱 앱 지갑의 개인키는 당신의 PC를 벗어나지 않습니다.**

* 데스크톱 앱 지갑의 개인키는 **Windows DPAPI로 암호화되어 당신의 PC에만** 저장됩니다.
* 라이선스·업데이트 서버는 데스크톱 앱 지갑 키를 받거나 저장하지 않습니다. 오직 당신 PC의 Nogada 앱만 키를 복호화해 민팅 트랜잭션에 서명합니다.
* 독립 Telegram 봇은 별도의 봇 지갑을 사용합니다. 봇 지갑 키는 24시간 서명을 위해 서버에서 암호화 보관되며 앱 지갑과 동기화되지 않습니다.
* 민팅·지갑 같은 데스크톱 앱의 핵심 기능은 **전부 당신의 PC에서** 실행됩니다.

> ⚠️ **다만 web3에 100% 안전은 없습니다.** 큰 자산은 어떤 dApp과도 연결한 적 없는 **금고(vault) 지갑**에 보관하고, 민팅·이벤트용으로는 항상 **버너(소액) 지갑**을 쓰세요. 그게 가장 좋은 습관입니다.

자세한 내용 → [보안 & 안전 수칙](help/security.md)

## 도움이 필요하면

* ❓ [자주 묻는 질문(FAQ)](help/faq.md)
* 🔧 [문제 해결](help/troubleshooting.md)
* 🤖 [텔레그램 봇](telegram/telegram-bot.md)
