
// Ресурсы
export type IResourceType = 'bricks' | 'diamonds' | 'beasts'

// Источники ресурсов
export type ISourceType = 'bricks' | 'diamonds' | 'beasts'

// Стена / башня
export type IBuildingsType = 'wall' | 'tower'


// Стоимость хода для карты
export type ICardCost = {
  [key in IResourceType]: number
}

// Экшн карты может влиять на
//  – источники ресурсов
//  – ресурсы
//  – здания
export type ICardAction = {
  sources: {
    [key in ISourceType]: number
  }
  resources: {
    [key in IResourceType]: number
  }
  buildings: {
    [key in IBuildingsType]: number
  }
}

export type ICard = {
  // ID карты
  cardId: string
  // Сейчас не реализовываем, но на будущее
  // У карты на доске должен быть уникальный локальный (в рамках хода) айди
  localCardId ?: string
  // Название карты
  name: string
  // Стоимость ресурсов
  cost: ICardCost
  // Экшн для игрока, разыгравшего карту
  self: ICardAction
  // Экшн против остальных игроков
  opponent: ICardAction
  // Карта может давать возможность повторного хода
  doNotSwitchTurn: boolean
}

// Ход
// – пропуск
// – карта
export type ITurn = {
  type: 'skip' | 'card'
  timestamp: number
  cardId ?: string
}


// Игра
// Это начальный стейт игры + сумма всех ходов
export type IGame = {
  gameId: string
  players: string[]
  waitForPlayer: number
  cardsOnDesk: string[]
  playersData: {
    [key: string]: ICardAction
  }
  moves: ITurn[]
}