const acknowledgement: Record<string, Record<string, string | JSX.Element>> = {
  th: {
    title: "คำขอบคุณ",
    detail: (
      <>
        🌟 ขอใช้พื้นที่นี้แสดงความขอบคุณจากใจจริงถึงทุกคนที่คอยซัพพอร์ต ไม่ว่าจะเป็นเพื่อน ๆ รุ่นพี่ที่สร้างแรงบันดาลใจให้
        อาจารย์กับเพื่อนในทึ่ทำงานที่คอยให้คำแนะนำดี ๆ และสุดท้ายก็ขอบคุณครอบครัวที่เชื่อมั่นในตัวผมมาโดยตลอด
        แม้ในวันที่จะรู้สึกสงสัยตัวเองว่าดีพอหรือยัง 😊
      </>
    ),
    sincely: "ขอบคุณจากใจจริง ๆ ครับ",
  },
  en: {
    title: "Acknowledgement",
    detail: (
      <>
        🌟 I would like to take a moment to express my heartfelt gratitude to
        all those who have supported me, including my friends and seniors who have inspired me,
        teachers and colleagues who have taught me. Lastly, thank you to my family for believing in me, even when I doubted myself. 😊
      </>
    ),

    sincely: "Best sincerely",
  },
};

export default acknowledgement;
