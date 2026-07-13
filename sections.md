# GROWY Landing Page — Section Map

---

## 01 · Sticky Top Bar

A fixed announcement bar pinned to the top of the viewport (48px tall). Stays visible as the user scrolls.

- **Shimmer text** — "⚡ EDIÇÃO 3 · 09 DE MAIO · ITAJAÍ SC · VAGAS LIMITADAS" with a looping gold shimmer animation (`bar-shimmer`)
- **CTA link** — "GARANTIR VAGA →" in a small gold pill, links to Pickpass registration page

---

## 02 · Hero

Two-column grid (`55fr / 45fr`) occupying full viewport height minus the top bar.

### Left column
- **Badge** — "GROWY · Edição 3 · Evento de Carreira" in a small labeled chip
- **Headline** — Playfair Display 900, "Mais de 8 processos seletivos em um único dia. Saia com emprego na mão." Last line accented in gold
- **Sub-copy** — Short paragraph describing the direct connection with hiring companies
- **Bullet list** — 4 checkmark items covering: companies recruiting live, 200+ vacancies, on-site interviews, direct recruiter networking
- **Urgency block** — Date + location ("09 de Maio · Itajaí, SC") and a scarcity line
- **Primary CTA** — Gold pulsing button "GARANTIR MINHA VAGA AGORA →", full width, links to Pickpass

### Right column
- **Hero photo** — `evento-05.JPG` fills the column height with `object-fit: cover`
- **Floating stat card** — Positioned absolute at bottom-left of the photo, overlapping the left column. Displays "1 em 8" (large gold number) and "participantes são contratados"

### Animations
- Left column slides in from the left (`slideInLeft`, 0.8s, delay 0.2s)
- Right column slides in from the right (`slideInRight`, 0.8s, delay 0.3s)

---

## 03 · Companies Marquee

A full-width strip directly below the hero, acting as a trust signal.

- **Label** — "Empresas que confiam na 2A e podem te contratar no evento"
- **Scrolling logo track** — 8 logos duplicated (16 total) for a seamless infinite scroll at 28s loop speed. Logos use `mix-blend-mode: screen` to appear clean on the dark background. Animation pauses on hover.
- **Logos included** — EQI Investimentos, Outside, PIB Education, Sicredi, Kefraya, Harmonique, UMA, Uniavan

---

## 04 · Social Proof Numbers

A 4-column grid of key metrics, each animating up from zero when scrolled into view.

| Stat | Label |
|------|-------|
| +3.000 | jovens formados pela 2A Educação |
| 1 em 8 | participantes são contratados após o evento |
| +100 | jovens transformados pela GROWY |
| +400 | contratações pela EQI em um único ano |

Counter animation uses an `easeOut` cubic curve over 2 seconds. Numbers with thousands use `toLocaleString('pt-BR')` for dot formatting.

---

## 05 · Para Quem É

Dark alt-background section targeting three distinct audience profiles.

- **Label** — "Para quem é"
- **Headline** — "A GROWY é para você que..." with "você que..." in gold underline
- **3 cards** — Each has a large gold number (01/02/03), a bold title, and a descriptive paragraph:
  1. *Quer o primeiro emprego* — for those the market hasn't seen yet
  2. *Quer uma oportunidade melhor* — for those employed but ready to level up
  3. *Quer se preparar de verdade* — for those who want real feedback, not job boards
- **Pull quote** — "Se você se identificou, seu lugar é na GROWY."
- **CTA** — "QUERO PARTICIPAR →" gold button

---

## 06 · Como Participar

Light background section explaining the 3-step process with a side photo.

- **Label** — "Como participar"
- **Headline** — "3 passos para mudar sua trajetória"
- **Timeline** — Vertical list of 3 steps connected visually:
  1. *Garanta sua vaga* — R$45 inscription, link to Pickpass
  2. *Preparação guiada* — profile evaluation and briefing by the 2A team before the event
  3. *Dia do evento · 09 de Maio* — live selection processes, panels, and connections
- **Side photo** — `evento-02.jpg` displayed alongside the timeline

---

## 07 · Programação / Agenda

Alt-background section with a 2-column layout (agenda items + photo).

- **Label** — "Programação"
- **Headline** — "O que acontece no dia?"
- **5 agenda items** — On desktop, all items are fully expanded (no interaction needed). On mobile, each item is a collapsible accordion triggered by tapping the header:
  1. *Abertura* — Talk with 2A founders and a C-Level guest about what companies look for in young talent
  2. *Palestras e Workshops* — AI in the workplace, communication, strategic thinking, pitch workshop
  3. *Stands de Relacionamento* — Direct face-to-face time with recruiters from participating companies
  4. *Salas de Entrevista* — Individual live interviews with hiring managers
  5. *Encerramento e Happy Hour* — Free networking, peer exchanges, awards for most engaged participants
- **Side photo** — `evento-03.JPG`

---

## 08 · Vídeo da Edição Anterior

Centered section with a vertical video player.

- **Label** — "Veja como foi a última edição"
- **Headline** — "A GROWY em imagens"
- **Vertical video** — `growy-edicao-2.mp4` displayed in a `9:16` aspect-ratio container (max-width 320px), with native browser controls. No poster attribute.
- **Caption** — "Edição 2 · 2A Educação · Itajaí, SC"

---

## 09 · Galeria de Fotos

Alt-background photo grid in two distinct rows.

- **Label** — "Galeria"
- **Headline** — "Veja a GROWY na prática"
- **Row 1** — 3 equal columns, each image at `4:3` aspect ratio:
  - `evento-01.JPG`, `evento-02.jpg`, `evento-03.JPG`
- **Row 2** — 2 columns at `60fr / 40fr` split, each image at `16:9` aspect ratio:
  - `evento-04.JPG`, `evento-05.JPG`

---

## 10 · Cases de Sucesso

Two featured success stories from past GROWY participants, plus a LinkedIn proof card.

- **Label** — "Cases"
- **Headline** — "Quem participou já colheu resultados"
- **Card: Bernardo Ormeneze**
  - Photo: `case-bernardo.jpg`
  - Badge: "SDR TOP 1 BRASIL · EQI"
  - Quote: hired in under 30 days, became #1 SDR in Brazil at EQI
  - Result line with gold checkmark
- **Card: Matheus Marques**
  - Photo: `case-matheus.jpg` (with contrast/brightness/saturation CSS filter applied)
  - Badge: "TOP 6 BRASIL · EQI"
  - Quote: highest-captation advisor in the Praia Brava office, #6 nationwide ranking
  - Result line with gold checkmark
- **LinkedIn Proof Card** — Full-width card styled to resemble a LinkedIn post:
  - EQI logo + name "Matheus Alves Marques" + role "Especialista em Investimentos · EQI"
  - Screenshot image: `depoimentomatheus.jpg`
  - Caption: "Post original publicado no LinkedIn"

---

## 11 · Depoimentos

Alt-background section with two written testimonials and one video testimonial.

- **Label** — "Depoimentos"
- **Headline** — "O que dizem os participantes"
- **Card: Gabriela Nunes**
  - Photo: `depoimento-gabriela.jpg`
  - 5-star rating (gold SVG stars)
  - Quote about the quality of professionals and insights from the immersion day
- **Card: Arthur Fischer**
  - Photo: `depoimento-arthur.jpg`
  - 5-star rating
  - Quote about excellent mentors and lasting learnings
- **Video testimonial card**
  - Label: "Depoimento em vídeo"
  - Vertical 9:16 video player: `depoimento-01.mp4`, no poster, native controls

---

## 12 · Empresa Parceira — EQI

Centered section spotlighting EQI Investimentos as the anchor partner.

- **Label** — "Empresa parceira"
- **Headline** — "Quem confia na GROWY"
- **EQI card** — Dark card with gold border containing:
  - EQI logo (large, centered)
  - "+400" in large Playfair Display
  - "contratações em um único ano"
  - Gold divider line
  - Descriptive paragraph about EQI's participation since edition 1
  - Fine print disclaimer clarifying the +400 figure reflects total company hiring

---

## 13 · O Que Você Recebe

Offer section with pricing, feature checklist, and a guarantee box.

- **Label** — "O que você recebe"
- **Price display** — "Por apenas" + "R$ 45" (large, gold glow) + "e uma decisão."
- **Checklist** — 8 gold-checkmark items:
  1. Acesso completo ao evento presencial
  2. Avaliação de perfil pela equipe 2A antes do evento
  3. Painéis com lideranças do mercado
  4. Rounds de networking com recrutadores
  5. Participação em processos seletivos ao vivo
  6. Workshop de pitch com feedback de gestores
  7. Certificado de participação GROWY
  8. Acesso à comunidade pós-evento
- **Guarantee box** — Dark card with shield icon, title "Garantia de Experiência", text promising a full refund if the participant doesn't feel it was worth R$45. Includes a CTA button.

---

## 14 · Contagem Regressiva

High-contrast countdown section with scarcity messaging.

- **Headline** — "Vagas limitadas."
- **Body copy** — Explains that venue capacity is restricted to ensure quality connections with companies
- **Countdown timer** — 4 boxes (Dias / Horas / Min / Seg), updating every second via `setInterval`. Target date: `2026-05-09T08:00:00`
- **CTA** — "QUERO GARANTIR MINHA VAGA AGORA →" gold pulsing button

---

## 15 · FAQ

Accordion FAQ list — only one item open at a time.

- **Label** — "Dúvidas"
- **Headline** — "Dúvidas frequentes"
- **6 questions:**
  1. *Quanto custa a inscrição?* — R$45, symbolic commitment value
  2. *O evento é presencial?* — Yes, PIB Education, Av. Osvaldo Reis 3334, Praia Brava, Itajaí-SC
  3. *Preciso ter experiência profissional?* — No, open to all stages
  4. *Como funciona a preparação antes do evento?* — Team contacts participant for profile tests and orientation
  5. *E se eu não for contratado no dia?* — Contacts, feedback, and visibility gained regardless
  6. *Posso pedir reembolso?* — Yes, no questions asked

Each item has a chevron icon that rotates 180° when open.

---

## 16 · Final CTA

Full-bleed closing section with a dark overlay and a two-button layout.

- **Headline** — "Sua carreira começa com uma decisão." ("com uma decisão." in gold)
- **Event info line** — "09 de Maio · PIB Education · Praia Brava, Itajaí SC"
- **Primary button** — "GARANTIR MINHA VAGA AGORA →" gold pulsing, links to Pickpass
- **Secondary button** — "Falar com a equipe no WhatsApp" with WhatsApp icon, links to WA direct message

---

## Persistent Elements

### Floating WhatsApp Button
- Fixed position, bottom-right corner
- Green pulsing animation (`whatsapp-pulse`)
- WhatsApp SVG icon + tooltip "Falar com a equipe"
- On mobile, lifted to 84px from bottom to clear the sticky bar

### Mobile Sticky Bottom Bar
- Visible only on screens ≤ 768px
- Fixed at bottom, full width, 68px tall
- Gold gradient background
- Left: "09/05 · ITAJAÍ/SC" in small text
- Right: "INSCREVER AGORA" button, links to Pickpass

### Footer
- "GROWY · 2A EDUCAÇÃO" brand name
- Copyright line: "© 2026 2A Educação · Todos os direitos reservados · Itajaí, SC"
