export function SplitString(str: string): string[] {
    return str
        .split(',')
        .map(word => word.trim()) // Remove padding.
        .filter(word => word);
}
