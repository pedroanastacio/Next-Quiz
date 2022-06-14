export const shuffle = <Type>(elements: Type[]): Type[] => {
    return elements.sort(() => Math.random() - 0.5)
}