export const characters = [
  {
    char: '苹果',
    pinyin: 'píngguǒ',
    meaning_tg: 'себ',
    meaning_ru: 'яблоко',
    short_definition_tg: 'Меваи ширин ва серғизо.',
    examples: [
      {
        sentence: '我喜欢吃苹果。',
        pinyin: 'Wǒ xǐhuan chī píngguǒ.',
        meaning_tg: 'Ман дӯст медорам себ бихӯрам.',
        meaning_ru: 'Я люблю есть яблоки.'
      }
    ],
    stroke_count: 8
  },
  {
    char: '狗',
    pinyin: 'gǒu',
    meaning_tg: 'саг',
    meaning_ru: 'собака',
    short_definition_tg: 'Ҳайвони хонавуи вафодор.',
    examples: [
      {
        sentence: '那是一只大狗。',
        pinyin: 'Nà shì yì zhī dà gǒu.',
        meaning_tg: 'Он як саги калон аст.',
        meaning_ru: 'Это большая собака.'
      }
    ],
    stroke_count: 8
  },
  {
    char: '水',
    pinyin: 'shuǐ',
    meaning_tg: 'об',
    meaning_ru: 'вода',
    short_definition_tg: 'Моеъи зарур барои ҳаёт.',
    examples: [
      {
        sentence: '请给我一些水。',
        pinyin: 'Qǐng gěi wǒ yì xiē shuǐ.',
        meaning_tg: 'Лутфан ба ман каме об диҳед.',
        meaning_ru: 'Пожалуйста, дайте мне воды.'
      }
    ],
    stroke_count: 4
  },
  {
    char: '学校',
    pinyin: 'xuéxiào',
    meaning_tg: 'мактаб',
    meaning_ru: 'школа',
    short_definition_tg: 'Ҷой барои таҳсил.',
    examples: [
      {
        sentence: '他每天去学校。',
        pinyin: 'Tā měi tiān qù xuéxiào.',
        meaning_tg: 'Ӯ ҳар рӯз ба мактаб меравад.',
        meaning_ru: 'Он ходит в школу каждый день.'
      }
    ],
    stroke_count: 10
  }
]

export function getCharacters() {
  return characters
}

export function getCharacter(char: string) {
  return characters.find((c) => c.char === char)
}
