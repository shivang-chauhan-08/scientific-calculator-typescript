interface HistoryItem {
    input: string;
    output: string;
}
export declare function createHistory(): {
    add(input: string, output: string): void;
    getAll(): HistoryItem[];
    clear(): void;
};
export {};
//# sourceMappingURL=history.d.ts.map