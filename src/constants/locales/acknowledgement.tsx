const acknowledgement: Record<string, Record<string, string | JSX.Element>> = {
  th: {
    title: "คำขอบคุณ",
    detail: (
      <>
        🌟 ขอแสดงความขอบคุณจากใจจริงถึงทุกคนที่คอยซัพพอร์ต ไม่ว่าจะเป็นเพื่อน ๆ
        รุ่นพี่ อาจารย์ที่น่าเคารพ
        สุดท้ายนี้ก็ขอบคุณครอบครัวที่เชื่อมั่นในตัวผมมาโดยตลอด
        แม้ในวันที่ฉันเองยังสงสัยตัวเอง 😊
      </>
    ),
    sincely: "ขอบคุณจากใจจริง ๆ ครับ",
  },
  en: {
    title: "Acknowledgement",
    detail: (
      <>
        🌟 I would like to take a moment to express my heartfelt gratitude to
        all those who have contributed, inspired, or supported me. Lastly,
        thank you to my family for believing in me, even when I doubted myself. 😊
        {/* `Special Thanks - I would like to take a moment to express my heartfelt
        gratitude to all those who have contributed, inspired, or supported me
        along the journey. Your encouragement, feedback, and shared enthusiasm
        have been invaluable. Many thanks to my mentor for their invaluable
        guidance and feedback throughout this journey. Lastly, thank you to my
        family for believing in me, even when I doubted myself.` */}
      </>
    ),

    sincely: "Best sincerely",
  },
};

export default acknowledgement;
