const LOTTO_ERROR = Object.freeze({
  LEGNTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  SPLIT: '[ERROR] 로또 번호는 쉼표로 구분된 숫자여야 합니다.',
  REPEAT: '[ERROR] 로또 번호는 중복되어서는 안 됩니다.',
  NUMBER: '[ERROR] 로또 번호는 양의 정수여야 합니다.',
  RANGE: '[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.',
});

const BONUS_LOTTO_ERROR = Object.freeze({
  RANGE: '[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.',
  BONUSLENGTH: '[ERROR] 보너스 로또 번호는 1개여야 합니다.',
  INCLUDES: '[ERROR] 보너스 번호와 일치하는 당첨 번호가 있습니다.',
});

const AMOUNt_ERROR = Object.freeze({
  AMOUNT: '[ERROR] 로또는 돈으로 구입 가능합니다',
  UNIT: '[ERROR] 로또 구입은 1000원 단위로 가능합니다',
});

const BONUS_NUMBER = 5;

const RANKING = Object.freeze({
  FIVE: {
    MATCH: 3,
    BONUS: false,
    PRICE: '5,000',
    MESSAGE: '3개 일치 (5,000원) - ',
    COUNTUNIT: '개',
  },
  FOURTH: {
    MATCH: 4,
    BONUS: false,
    PRICE: '50,000',
    MESSAGE: '4개 일치 (50,000원) -  ',
    COUNTUNIT: '개',
  },
  THREE: {
    MATCH: 5,
    BONUS: false,
    PRICE: '1,500,000',
    MESSAGE: '5개 일치 (1,500,000원) - ',
    COUNTUNIT: '개',
  },
  TWO: {
    MATCH: 5,
    BONUS: true,
    PRICE: '30,000,000',
    MESSAGE: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    COUNTUNIT: '개',
  },
  ONE: {
    MATCH: 6,
    BONUS: false,
    PRICE: '2,000,000,000',
    MESSAGE: '6개 일치 (2,000,000,000원) - ',
    COUNTUNIT: '개',
  },
});

module.exports = { LOTTO_ERROR, BONUS_LOTTO_ERROR, AMOUNt_ERROR, BONUS_NUMBER, RANKING };
