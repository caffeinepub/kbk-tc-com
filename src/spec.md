# Specification

## Summary
**Goal:** Build a romantic, warm-themed, multi-step single-page website flow (KBK&TC.com) featuring a landing screen with the couple photo, a 6–7 question Yes/No quiz, a 15-second tapping mini-game with cute effects, and a final heart button that reveals the full anniversary message.

**Planned changes:**
- Create a single-page, forward-only multi-step flow: Landing → Quiz → Game Intro → Tapping Game → Final Message, resetting to Landing on refresh.
- Implement the Landing page with the exact heading text, the uploaded image (IMG-20250222-WA0001.jpg), the exact intro sentence, and a heart-shaped button to start the quiz.
- Implement a 6–7 question Yes/No quiz shown one question at a time, including the first two questions and their exact response texts; show response after each answer and provide a continue button after the last question.
- Add a post-quiz “Game” button that reveals an animated cute chibi dino holding a heart and shows the exact Luna dialogue, plus a Start button.
- Implement the tapping mini-game: 50 taps in 15 seconds with multi-touch support, visible countdown + tap counter, immediate success when reaching 50, failure at 0 seconds, and a proceed button afterward.
- During active gameplay, show floating feedback messages (including the required exact strings), add cute tap effects, and animate cherry-blossom petals across the screen; stop effects when the game ends.
- After the game, show a heart button that reveals the full anniversary message text exactly as provided (scrollable for readability).
- Apply a cohesive romantic warm palette (not blue/purple), consistent typography, and heart-themed primary buttons across all steps.
- Update any credit text to read exactly “created by Luna” and set browser/UI branding to “KBK&TC.com”.

**User-visible outcome:** Visitors can open KBK&TC.com, view the couple photo landing page, answer a romantic Yes/No quiz, play a 15-second multi-tap mini-game with cute effects and petals, and then press a heart button to reveal the full anniversary message.
