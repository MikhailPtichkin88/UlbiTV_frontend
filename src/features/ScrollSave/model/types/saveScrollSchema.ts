//адрес страницы, позиция скролла
export type ScrollSchema = Record<string, number>

export interface SaveScrollSchema {
  scroll: ScrollSchema
}
