# DS&JC 디자인 가이드

## 1. 컬러 시스템

### 배경 (Background)
| 용도 | 컬러명 | HEX | 사용처 |
|------|--------|-----|--------|
| 메인 배경 | Slate-900 | `#0F172A` | 페이지 전체 배경 |
| 카드/섹션 배경 | Slate-800 | `#1E293B` | 카드, 모달, 섹션 |
| 보더 | Slate-700 | `#334155` | 구분선, 테두리 |

### 텍스트 (Foreground)
| 용도 | 컬러명 | HEX | 사용처 |
|------|--------|-----|--------|
| 메인 텍스트 | Slate-50 | `#F8FAFC` | 제목, 중요 텍스트 |
| 서브 텍스트 | Slate-400 | `#94A3B8` | 본문, 설명 |
| 비활성 텍스트 | Slate-500 | `#64748B` | 캡션, 라벨 |

### 브랜드 컬러 (Brand)
| 용도 | 컬러명 | HEX | 사용처 |
|------|--------|-----|--------|
| Primary | Teal | `#00DC82` | 메인 CTA, 강조, 성공 |
| Secondary | Dark Teal | `#0F766E` | 보조 버튼, 배경 |
| Accent | Orange | `#F97316` | 긴급 CTA, 알림 |
| Highlight | Light Teal | `#2DD4BF` | 그라데이션, 호버 |

### 차트/데이터 시각화
| 용도 | HEX |
|------|-----|
| 상승/긍정 | `#00DC82` (Green) |
| 정보 | `#3B82F6` (Blue) |
| 주의/강조 | `#F97316` (Orange) |
| 하락/경고 | `#EF4444` (Red) |

---

## 2. 그라데이션

### 브랜드 그라데이션
```css
/* Teal → Blue (제목, 강조 텍스트) */
background: linear-gradient(135deg, #00DC82 0%, #3B82F6 100%);

/* Primary 버튼 */
background: linear-gradient(135deg, #00DC82 0%, #10B981 100%);

/* 배경 Blob */
radial-gradient(circle at 30% 20%, rgba(0, 220, 130, 0.08) 0%, transparent 40%),
radial-gradient(circle at 80% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 40%);
```

---

## 3. 타이포그래피

### 폰트
| 용도 | 폰트 | 비고 |
|------|------|------|
| 본문/제목 | Pretendard | 한글/영문 |
| 숫자/데이터 | Inter | 통계, 차트 |

### 사이즈 (Desktop 기준)
| 스타일 | 사이즈 | Line Height | Letter Spacing |
|--------|--------|-------------|----------------|
| Display XL | 72px (4.5rem) | 1.1 | -0.02em |
| Display LG | 56px (3.5rem) | 1.15 | -0.02em |
| Display MD | 40px (2.5rem) | 1.2 | -0.01em |
| Heading | 24-32px | 1.3 | 기본 |
| Body | 16-18px | 1.6 | 기본 |
| Caption | 12-14px | 1.4 | 기본 |

---

## 4. 컴포넌트 스타일

### Glass (글래스모피즘)
```css
/* 기본 Glass */
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.08);

/* Glass Card */
background: linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(30, 41, 59, 0.4) 100%);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

/* Glass Glow (강조) */
background: rgba(30, 41, 59, 0.6);
border: 1px solid rgba(0, 220, 130, 0.3);
box-shadow: 0 0 30px rgba(0, 220, 130, 0.1);
```

### 버튼
| 타입 | 배경 | 텍스트 | 그림자 |
|------|------|--------|--------|
| Primary | `#00DC82` 그라데이션 | `#0F172A` | teal glow |
| Secondary | Glass | `#F8FAFC` | 없음 |
| Accent | `#F97316` | `#FFFFFF` | orange glow |

### Border Radius
| 용도 | 값 |
|------|-----|
| 버튼 | 12px (rounded-xl) |
| 카드 | 16px (rounded-2xl) |
| 배지/태그 | 9999px (rounded-full) |
| 아이콘 박스 | 12-16px |

---

## 5. 그림자 & 효과

### Box Shadow
```css
/* Glass */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

/* Glow (Teal) */
box-shadow: 0 0 40px rgba(0, 220, 130, 0.15);

/* Glow LG */
box-shadow: 0 0 60px rgba(0, 220, 130, 0.25);

/* Button Hover */
box-shadow: 0 6px 25px rgba(0, 220, 130, 0.4);
```

---

## 6. 간격 (Spacing)

### Section
- 상하 패딩: 96px (py-24)
- 컨테이너 최대 너비: 1280px (max-w-7xl)
- 좌우 패딩: 16px (모바일) / 24px (태블릿) / 32px (데스크탑)

### 카드 내부
- 패딩: 24px ~ 32px
- 요소 간격: 16px ~ 24px

### 그리드 Gap
- 카드 그리드: 24px ~ 32px
- 아이템 리스트: 12px ~ 16px

---

## 7. 애니메이션

### Easing
```css
/* 기본 (Smooth) */
cubic-bezier(0.16, 1, 0.3, 1)

/* 빠른 반응 */
ease-out (0.25s ~ 0.3s)
```

### 트랜지션
| 용도 | Duration |
|------|----------|
| 호버 효과 | 0.3s |
| 페이드 인 | 0.6s ~ 0.8s |
| 슬라이드 업 | 0.6s |
| 플로팅 | 6s (infinite) |

---

## 8. 반응형 Breakpoints

| 이름 | 너비 |
|------|------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

---

## 9. 케이스 스터디 이미지 스펙

| 파일명 | 권장 사이즈 | 비율 | 포맷 |
|--------|------------|------|------|
| case_1.png | 800 x 450px | 16:9 | PNG/WebP |
| case_2.png | 800 x 450px | 16:9 | PNG/WebP |

---

*문서 작성일: 2025년 1월*
