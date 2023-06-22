export function measureTime<T>(func: () => T): [T, number] {
    const startTime = Game.cpu.getUsed();
    const result = func();
    const endTime = Game.cpu.getUsed();
    const executionTime = endTime - startTime;

    return [result, executionTime];
}
