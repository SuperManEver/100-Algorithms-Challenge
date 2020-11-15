export function avoidObstacles(obstacles: number[]): number {
    const items = [...obstacles].sort()
    const largest = items[items.length - 1]

    let result = -1

    for (let jump = 0; jump < largest + 1; jump++) {
        for (let j = 0; j < items.length; j++) {
            if (items[jump * j] && jump > items[jump * j]) {
                result = jump
            }
        }

        if (result > 0) {
            break
        }
    }

    return result
}
